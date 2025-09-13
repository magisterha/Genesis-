document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------
    // 1. ESTADO Y ELEMENTOS DEL DOM
    // --------------------------------------------------------------------

    /**
     * Almacena el estado actual de la aplicación.
     */
    const appState = {
        currentLanguage: 'la', // Idioma por defecto (Latín)
        currentChapterId: null,
        currentChapterData: null, // Almacenará los datos del capítulo actualmente cargado
    };

    /**
     * Referencias a los elementos del DOM para un acceso rápido y organizado.
     */
    const DOM = {
        indexView: document.getElementById('index-view'),
        analysisView: document.getElementById('analysis-view'),
        // Vista de Índice
        index: {
            langSwitcher: document.getElementById('language-switcher-index'),
            mainTitle: document.getElementById('main-title-index'),
            subtitle: document.getElementById('subtitle-index'),
            chapterGrid: document.querySelector('#index-view .chapter-grid'),
        },
        // Vista de Análisis
        analysis: {
            langSwitcher: document.getElementById('language-switcher-analysis'),
            author: document.getElementById('author'),
            mainTitle: document.getElementById('main-title-analysis'),
            subtitle: document.getElementById('subtitle-analysis'),
            contextTitle: document.getElementById('context-title'),
            contextContent: document.getElementById('context-content'),
            textTitle: document.getElementById('text-title'),
            textContent: document.getElementById('paragrafus-contentus'),
            analysisTitle: document.getElementById('analysis-title'),
            analysisContent: document.getElementById('marginalia-contentus'),
        },
        // Navegación
        navigation: {
            btnBackToIndex: document.getElementById('btn-back-to-index'),
            btnPrevChapter: document.getElementById('btn-prev-chapter'),
            btnNextChapter: document.getElementById('btn-next-chapter'),
        }
    };

    // --------------------------------------------------------------------
    // 2. LÓGICA PRINCIPAL DE INICIALIZACIÓN
    // --------------------------------------------------------------------

    /**
     * Inicializa la aplicación.
     */
    function init() {
        if (typeof libroData === 'undefined') {
            console.error("Los datos del libro (libroData) no se han cargado. Asegúrate de que el archivo genesis_data.js está incluido y se carga antes que app.js.");
            return;
        }
        setupEventListeners();
        setLanguage(appState.currentLanguage);
        renderIndexView();
        showView('index');
    }

    /**
     * Configura los listeners de eventos principales.
     */
    function setupEventListeners() {
        // Clic en la rejilla de capítulos (delegación de eventos)
        DOM.index.chapterGrid.addEventListener('click', (e) => {
            const chapterLink = e.target.closest('a');
            if (chapterLink && chapterLink.dataset.chapterId) {
                e.preventDefault();
                renderAnalysisView(chapterLink.dataset.chapterId);
            }
        });

        // Botón para volver al índice
        DOM.navigation.btnBackToIndex.addEventListener('click', () => {
            history.pushState({ view: 'index' }, '', '#');
            renderIndexView();
            showView('index');
        });

        // Navegación de capítulos
        DOM.navigation.btnPrevChapter.addEventListener('click', (e) => {
            e.preventDefault();
            if (appState.currentChapterId > 1) {
                renderAnalysisView(appState.currentChapterId - 1);
            }
        });

        DOM.navigation.btnNextChapter.addEventListener('click', (e) => {
            e.preventDefault();
            if (appState.currentChapterId < libroData.chapters.length) {
                renderAnalysisView(appState.currentChapterId + 1);
            }
        });
        
        // Listener para el análisis de palabras (delegación de eventos)
        // Se adjunta una sola vez al contenedor principal.
        DOM.analysis.textContent.addEventListener('click', handleWordClick);
    }

    // --------------------------------------------------------------------
    // 3. GESTIÓN DE VISTAS Y RENDERIZADO
    // --------------------------------------------------------------------

    /**
     * Muestra la vista especificada y oculta la otra.
     * @param {'index' | 'analysis'} viewName - El nombre de la vista a mostrar.
     */
    function showView(viewName) {
        DOM.indexView.classList.toggle('hidden', viewName !== 'index');
        DOM.analysisView.classList.toggle('hidden', viewName !== 'analysis');
    }

    /**
     * Renderiza la vista del índice con los datos del libro.
     */
    function renderIndexView() {
        const lang = appState.currentLanguage;
        DOM.index.mainTitle.textContent = libroData.title[lang] || libroData.title.la;
        DOM.index.subtitle.textContent = libroData.subtitle[lang] || libroData.subtitle.la;
        
        DOM.index.chapterGrid.innerHTML = libroData.chapters.map(chapter => `
            <li>
                <a href="#" data-chapter-id="${chapter.id}">
                    <span>${libroData.ui.chapter[lang] || 'Caput'} ${chapter.id}</span>
                    <span class="chapter-title">${chapter.title[lang] || chapter.title.la}</span>
                </a>
            </li>
        `).join('');

        setupLanguageSwitcher(DOM.index.langSwitcher, () => renderIndexView());
        history.replaceState({ view: 'index' }, '', '#');
    }

    /**
     * Carga dinámicamente el script de un capítulo y muestra la vista de análisis.
     * @param {number | string} chapterId - El ID del capítulo a cargar.
     */
    function renderAnalysisView(chapterId) {
        appState.currentChapterId = parseInt(chapterId);
        
        const chapterInfo = libroData.chapters.find(c => c.id === appState.currentChapterId);
        
        if (!chapterInfo || !chapterInfo.file) {
            console.error(`No se encontraron datos o el nombre del archivo para el capítulo ${chapterId}`);
            return;
        }

        const scriptPath = `js/data/capitulos/${chapterInfo.file}`;
        
        loadScript(scriptPath, () => {
            if (typeof chapterContent === 'undefined') {
                console.error(`La variable 'chapterContent' no se encontró en ${scriptPath}`);
                return;
            }
            
            appState.currentChapterData = chapterContent; // <-- Guardamos los datos del capítulo actual en el estado
            populateAnalysisContent(appState.currentChapterData);
            showView('analysis');
            window.scrollTo(0, 0);
            history.pushState({ view: 'analysis', chapterId: appState.currentChapterId }, '', `#capitulo-${appState.currentChapterId}`);
        });
    }

    /**
     * Rellena la vista de análisis con el contenido del capítulo cargado.
     * @param {object} content - El objeto chapterContent del archivo del capítulo.
     */
    function populateAnalysisContent(content) {
        const lang = appState.currentLanguage;
        
        // Cabecera
        DOM.analysis.author.textContent = libroData.author;
        DOM.analysis.mainTitle.textContent = libroData.title[lang] || libroData.title.la;
        DOM.analysis.subtitle.textContent = `${libroData.ui.chapter[lang] || 'Caput'} ${content.id}: ${content.title[lang] || content.title.la}`;
        
        // Introducción
        DOM.analysis.contextTitle.textContent = libroData.ui.introduction[lang] || 'Introductio';
        DOM.analysis.contextContent.innerHTML = content.introduction[lang] || content.introduction.la;
        
        // Texto principal
        DOM.analysis.textTitle.textContent = libroData.ui.text[lang] || 'Textus';
        populateTextContent(content);
        
        // Panel de análisis
        DOM.analysis.analysisTitle.textContent = libroData.ui.analysis[lang] || 'Analysis';
        resetAnalysisPanel();

        // Navegación
        updateChapterNavigation();

        // Selector de idioma
        setupLanguageSwitcher(DOM.analysis.langSwitcher, () => populateAnalysisContent(content));
    }
    
    // --------------------------------------------------------------------
    // 4. LÓGICA DE INTERACTIVIDAD DEL TEXTO
    // --------------------------------------------------------------------

    /**
     * Crea y muestra el contenido del texto principal, versículo por versículo.
     * @param {object} content - El objeto chapterContent.
     */
    function populateTextContent(content) {
        DOM.analysis.textContent.innerHTML = ''; // Limpiar contenido anterior
        
        content.verses.forEach(verse => {
            const verseContainer = document.createElement('div');
            verseContainer.className = 'verse-block mb-4';
            
            // Texto en Latín (interactivo)
            const pLatin = document.createElement('p');
            pLatin.dataset.lang = 'la';
            pLatin.innerHTML = `<span class="verse-number">${verse.id}&nbsp;</span>`;
            verse.words.la.forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word + ' ';
                wordSpan.className = 'verbum';
                wordSpan.dataset.verseId = verse.id;
                wordSpan.dataset.wordIndex = index;
                pLatin.appendChild(wordSpan);
            });
            verseContainer.appendChild(pLatin);

            // Textos de traducción (no interactivos)
            libroData.languages.filter(l => l.id !== 'la').forEach(lang => {
                const pTranslation = document.createElement('p');
                pTranslation.dataset.lang = lang.id;
                pTranslation.className = 'translation-text';
                const translationText = Array.isArray(verse.words[lang.id]) 
                    ? verse.words[lang.id].join(' ') 
                    : verse.words[lang.id];
                pTranslation.innerHTML = `<span class="verse-number text-transparent">${verse.id}&nbsp;</span>${translationText}`;
                verseContainer.appendChild(pTranslation);
            });
            
            DOM.analysis.textContent.appendChild(verseContainer);
        });

        // Asegurar que solo el idioma activo es visible
        updateVisibleLanguage();
    }
    
    /**
     * Maneja el clic en una palabra y busca su análisis.
     * Se define una sola vez y se reutiliza.
     */
    function handleWordClick(e) {
        if (e.target.classList.contains('verbum')) {
            const verseId = parseInt(e.target.dataset.verseId);
            const wordIndex = parseInt(e.target.dataset.wordIndex);
            
            // Asegurarse de que hay datos del capítulo cargados
            if (!appState.currentChapterData) return;
            
            // Usa los datos del capítulo actual almacenados en appState
            const verseData = appState.currentChapterData.verses.find(v => v.id === verseId);
            if (verseData && verseData.analysis[wordIndex]) {
                displayAnalysis(verseData.analysis[wordIndex], e.target);
            }
        }
    }

    /**
     * Muestra el análisis morfológico de una palabra en el panel lateral.
     * @param {object} analysisData - Los datos de análisis de la palabra.
     * @param {HTMLElement} targetElement - El elemento <span> de la palabra que fue clicada.
     */
    function displayAnalysis(analysisData, targetElement) {
        // Resaltar palabra activa
        document.querySelectorAll('.verbum.activus').forEach(el => el.classList.remove('activus'));
        targetElement.classList.add('activus');

        const lang = appState.currentLanguage;
        const terms = libroData.ui.analysisTerms;

        let html = `<div class="p-4 bg-white/40 rounded-md">`;
        html += `<h4 class="text-xl font-bold text-[#3d2c1d] mb-3">${analysisData.term}</h4>`;
        
        const details = analysisData.details;
        const analysisOrder = ['lemma', 'morphology', 'case', 'number', 'gender', 'person', 'tense', 'mood', 'voice', 'meaning', 'notes'];

        analysisOrder.forEach(key => {
            if (details[key]) {
                html += `
                    <div class="flex justify-between border-b border-[#d1c4b0]/50 py-1.5 text-sm">
                        <span class="font-semibold text-[#6d4c35]">${terms[key][lang] || terms[key].la}:</span>
                        <span class="text-right">${details[key]}</span>
                    </div>
                `;
            }
        });
        
        html += `</div>`;
        DOM.analysis.analysisContent.innerHTML = html;
    }
    
    /**
     * Restablece el panel de análisis a su estado inicial.
     */
    function resetAnalysisPanel() {
        const lang = appState.currentLanguage;
        DOM.analysis.analysisContent.innerHTML = `<p class="text-[#6d4c35] font-['IM_Fell_English']">${libroData.ui.analysisPrompt[lang]}</p>`;
        document.querySelectorAll('.verbum.activus').forEach(el => el.classList.remove('activus'));
    }

    // --------------------------------------------------------------------
    // 5. GESTIÓN DE IDIOMA Y NAVEGACIÓN
    // --------------------------------------------------------------------

    /**
     * Crea los botones del selector de idioma.
     * @param {HTMLElement} container - El elemento donde se insertarán los botones.
     * @param {function} onLanguageChange - Callback a ejecutar cuando el idioma cambia.
     */
    function setupLanguageSwitcher(container, onLanguageChange) {
        container.innerHTML = '';
        libroData.languages.forEach(lang => {
            const button = document.createElement('button');
            button.className = 'lang-btn';
            button.textContent = lang.name;
            button.dataset.langId = lang.id;
            if (lang.id === appState.currentLanguage) {
                button.classList.add('active-lang');
            }
            button.addEventListener('click', () => {
                setLanguage(lang.id);
                onLanguageChange();
            });
            container.appendChild(button);
        });
    }

    /**
     * Establece el idioma activo y actualiza la interfaz.
     * @param {string} langId - El ID del idioma (ej. 'la', 'es').
     */
    function setLanguage(langId) {
        appState.currentLanguage = langId;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active-lang', btn.dataset.langId === langId);
        });
        updateVisibleLanguage();
    }
    
    /**
     * Muestra/oculta los párrafos de texto según el idioma seleccionado.
     */
    function updateVisibleLanguage() {
        const lang = appState.currentLanguage;
        document.querySelectorAll('[data-lang]').forEach(el => {
             el.style.display = (el.dataset.lang === 'la' || el.dataset.lang === lang) ? '' : 'none';
        });
    }

    /**
     * Actualiza la visibilidad y los enlaces de los botones de navegación de capítulos.
     */
    function updateChapterNavigation() {
        const currentId = appState.currentChapterId;
        const prevBtn = DOM.navigation.btnPrevChapter;
        const nextBtn = DOM.navigation.btnNextChapter;

        // Botón Anterior
        if (currentId > 1) {
            prevBtn.style.visibility = 'visible';
            prevBtn.dataset.chapterId = currentId - 1;
        } else {
            prevBtn.style.visibility = 'hidden';
        }

        // Botón Siguiente
        if (currentId < libroData.chapters.length) {
            nextBtn.style.visibility = 'visible';
            nextBtn.dataset.chapterId = currentId + 1;
        } else {
            nextBtn.style.visibility = 'hidden';
        }
    }

    // --------------------------------------------------------------------
    // 6. UTILIDADES
    // --------------------------------------------------------------------

    /**
     * Carga un script dinámicamente y ejecuta un callback al finalizar.
     * @param {string} src - La ruta del script a cargar.
     * @param {function} callback - La función a ejecutar cuando el script se haya cargado.
     */
    function loadScript(src, callback) {
        // Eliminar script anterior del mismo capítulo si existe
        const oldScript = document.querySelector(`script[data-chapter-script]`);
        if (oldScript) {
            oldScript.remove();
        }

        const script = document.createElement('script');
        script.src = src;
        script.dataset.chapterScript = 'true'; // Marcar como script de capítulo
        script.onload = () => {
            callback();
        };
        script.onerror = () => {
            console.error(`Error al cargar el script: ${src}`);
        };
        document.body.appendChild(script);
    }

    // Arrancar la aplicación
    init();

});

