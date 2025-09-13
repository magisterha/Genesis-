document.addEventListener('DOMContentLoaded', () => {
    // --- ESTADO DE LA APLICACIÓN ---
    // Almacena la vista actual, el capítulo y el idioma seleccionado.
    const appState = {
        currentView: 'index',
        currentChapterId: null,
        // Idioma por defecto. Puedes cambiarlo a 'es' (Español) o 'la' (Latín) si lo prefieres.
        currentLang: 'he', 
    };

    // --- SELECTORES DE ELEMENTOS DEL DOM ---
    // Guardamos referencias a los elementos HTML para no tener que buscarlos constantemente.
    const a = {
        views: {
            index: document.getElementById('index-view'),
            analysis: document.getElementById('analysis-view'),
        },
        index: {
            langSwitcher: document.getElementById('language-switcher-index'),
            mainTitle: document.getElementById('main-title-index'),
            subtitle: document.getElementById('subtitle-index'),
            chapterGrid: document.querySelector('#index-view .chapter-grid'),
        },
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
            btnPrev: document.getElementById('btn-prev-chapter'),
            btnNext: document.getElementById('btn-next-chapter'),
            btnBackToIndex: document.getElementById('btn-back-to-index'),
        }
    };

    // --- FUNCIONES AUXILIARES ---

    /**
     * Carga un archivo JavaScript de forma dinámica.
     * Esencial para cargar los archivos de cada capítulo solo cuando se necesitan.
     * @param {string} src - La ruta al archivo .js
     * @param {function} callback - Función a ejecutar cuando el script se haya cargado.
     */
    function loadScript(src, callback) {
        // Elimina cualquier script de capítulo anterior para evitar conflictos.
        const oldScript = document.getElementById('chapter-script');
        if (oldScript) {
            oldScript.remove();
        }

        const script = document.createElement('script');
        script.src = src;
        script.id = 'chapter-script';
        script.onload = () => {
            console.log(`Script cargado: ${src}`);
            if (callback) callback();
        };
        script.onerror = () => console.error(`Error al cargar el script: ${src}`);
        document.body.appendChild(script);
    }

    /**
     * Muestra una vista ('index' o 'analysis') y oculta las demás.
     * @param {string} viewName - El nombre de la vista a mostrar.
     */
    function showView(viewName) {
        appState.currentView = viewName;
        Object.values(a.views).forEach(view => view.classList.add('hidden'));
        if (a.views[viewName]) {
            a.views[viewName].classList.remove('hidden');
        }
    }
    
    // --- LÓGICA DE RENDERIZADO ---

    /**
     * Renderiza los botones del selector de idioma.
     * @param {HTMLElement} container - El elemento donde se insertarán los botones.
     */
    function renderLanguageSwitcher(container) {
        container.innerHTML = ''; // Limpia el contenido anterior
        libroData.languages.forEach(lang => {
            const btn = document.createElement('button');
            btn.className = `lang-btn ${appState.currentLang === lang.id ? 'active-lang' : ''}`;
            btn.textContent = lang.name;
            btn.dataset.lang = lang.id;
            container.appendChild(btn);
        });
    }

    /**
     * Muestra y configura la vista del índice de capítulos.
     */
    function renderIndexView() {
        const lang = appState.currentLang;
        
        // Rellena títulos e información del libro
        a.index.mainTitle.textContent = libroData.title[lang];
        a.index.subtitle.textContent = libroData.subtitle[lang];
        
        // Crea la rejilla de capítulos
        a.index.chapterGrid.innerHTML = ''; // Limpia antes de añadir
        libroData.chapters.forEach(chapter => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#chapter-${chapter.id}`;
            link.dataset.chapterId = chapter.id;
            
            const chapterNum = document.createElement('span');
            chapterNum.textContent = `${libroData.ui.chapter[lang]} ${chapter.id}`;
            
            const chapterTitle = document.createElement('span');
            chapterTitle.className = 'chapter-title';
            chapterTitle.textContent = chapter.title[lang];
            
            link.appendChild(chapterNum);
            link.appendChild(chapterTitle);
            li.appendChild(link);
            a.index.chapterGrid.appendChild(li);
        });
        
        // Renderiza el selector de idioma
        renderLanguageSwitcher(a.index.langSwitcher);
        showView('index');
    }

    /**
     * Carga los datos de un capítulo específico y muestra la vista de análisis.
     * @param {number | string} chapterId - El ID del capítulo a cargar.
     */
    function renderAnalysisView(chapterId) {
        appState.currentChapterId = parseInt(chapterId);
        
        // Construye la ruta al archivo JS del capítulo
        const scriptPath = `js/data/capitulos/gen${chapterId}.js`;
        
        loadScript(scriptPath, () => {
            // Una vez cargado el script, la variable 'chapterContent' estará disponible globalmente.
            if (typeof chapterContent === 'undefined') {
                console.error(`La variable 'chapterContent' no se encontró en ${scriptPath}`);
                return;
            }
            
            populateAnalysisContent(chapterContent);
            showView('analysis');
            window.scrollTo(0, 0); // Sube al inicio de la página
        });
    }

    /**
     * Rellena la vista de análisis con los datos del capítulo cargado.
     * @param {object} data - El objeto con los datos del capítulo (de la variable 'chapterContent').
     */
    function populateAnalysisContent(data) {
        const lang = appState.currentLang;
        const chapterNum = appState.currentChapterId;

        // Rellena la información del header
        renderLanguageSwitcher(a.analysis.langSwitcher);
        a.analysis.author.textContent = libroData.author;
        a.analysis.mainTitle.textContent = `${libroData.title[lang]} - ${libroData.ui.chapter[lang]} ${chapterNum}`;
        a.analysis.subtitle.textContent = data.title[lang];

        // Rellena la introducción
        a.analysis.contextTitle.textContent = libroData.ui.introduction[lang];
        a.analysis.contextContent.innerHTML = data.introduction[lang];

        // Rellena el título del texto principal
        a.analysis.textTitle.textContent = libroData.ui.text[lang];
        
        // Construye el texto principal, palabra por palabra
        a.analysis.textContent.innerHTML = '';
        data.verses.forEach(verse => {
            const p = document.createElement('p');
            p.className = 'mb-4';
            
            const verseNum = document.createElement('span');
            verseNum.className = 'verse-number';
            verseNum.textContent = `${verse.id} `;
            p.appendChild(verseNum);

            verse.words[lang].forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = `${word} `;
                wordSpan.className = 'verbum';
                wordSpan.dataset.verseId = verse.id;
                wordSpan.dataset.wordIndex = index;
                p.appendChild(wordSpan);
            });
            a.analysis.textContent.appendChild(p);
        });

        // Configura los botones de navegación (anterior/siguiente)
        const totalChapters = libroData.chapters.length;
        a.analysis.btnPrev.style.visibility = (chapterNum > 1) ? 'visible' : 'hidden';
        a.analysis.btnPrev.dataset.chapterId = chapterNum - 1;
        
        a.analysis.btnNext.style.visibility = (chapterNum < totalChapters) ? 'visible' : 'hidden';
        a.analysis.btnNext.dataset.chapterId = chapterNum + 1;
        
        // Limpia el panel de análisis
        a.analysis.analysisContent.innerHTML = `<p class="text-[#6d4c35] font-['IM_Fell_English']">${libroData.ui.analysisPrompt[lang]}</p>`;
    }

    /**
     * Muestra el análisis de una palabra en la barra lateral.
     * @param {HTMLElement} wordElement - El elemento <span> de la palabra que fue clickeada.
     */
    function showAnalysis(wordElement) {
        // Elimina el resaltado de la palabra anteriormente activa
        const currentActive = document.querySelector('.verbum.activus');
        if (currentActive) {
            currentActive.classList.remove('activus');
        }
        
        // Resalta la nueva palabra
        wordElement.classList.add('activus');

        const verseId = parseInt(wordElement.dataset.verseId);
        const wordIndex = parseInt(wordElement.dataset.wordIndex);

        // Busca el análisis correspondiente en los datos del capítulo
        const verseData = chapterContent.verses.find(v => v.id === verseId);
        const analysisData = verseData ? verseData.analysis[wordIndex] : null;

        // Muestra el análisis
        a.analysis.analysisTitle.textContent = libroData.ui.analysis[appState.currentLang];
        if (analysisData) {
            let html = `<h4 class="font-bold text-lg text-[#6d4c35] font-['IM_Fell_English']">${analysisData.term}</h4>`;
            html += `<p class="text-sm text-[#8c785c] italic mb-3">${analysisData.lemma}</p>`;
            
            Object.entries(analysisData.details).forEach(([key, value]) => {
                const label = libroData.ui.analysisTerms[key] ? libroData.ui.analysisTerms[key][appState.currentLang] : key;
                html += `
                    <details open class="mb-2">
                        <summary class="font-semibold text-base font-['IM_Fell_English'] text-[#4a3a2a]">${label}</summary>
                        <div class="details-content text-sm text-[#5c4d3c] mt-1">
                            ${value}
                        </div>
                    </details>
                `;
            });
            a.analysis.analysisContent.innerHTML = html;
        } else {
            a.analysis.analysisContent.textContent = 'Análisis no disponible.';
        }
    }


    // --- MANEJADORES DE EVENTOS ---

    /**
     * Cambia el idioma de la aplicación y vuelve a renderizar la vista actual.
     * @param {string} langId - El ID del nuevo idioma ('he', 'es', 'la').
     */
    function handleLanguageChange(langId) {
        appState.currentLang = langId;
        if (appState.currentView === 'index') {
            renderIndexView();
        } else {
            // Si estamos en la vista de análisis, simplemente volvemos a poblar con el nuevo idioma
            populateAnalysisContent(chapterContent);
        }
    }

    /**
     * Configura todos los listeners de eventos de la aplicación.
     */
    function setupEventListeners() {
        // Listener para los selectores de idioma (usando delegación de eventos)
        document.body.addEventListener('click', (e) => {
            const langBtn = e.target.closest('.lang-btn[data-lang]');
            if (langBtn) {
                const langId = langBtn.dataset.lang;
                if (langId !== appState.currentLang) {
                    handleLanguageChange(langId);
                }
            }
            
            // Listener para los links de los capítulos en el índice
            const chapterLink = e.target.closest('.chapter-grid a');
            if (chapterLink) {
                e.preventDefault();
                const chapterId = chapterLink.dataset.chapterId;
                renderAnalysisView(chapterId);
            }
            
            // Listener para las palabras en el texto principal
            const wordSpan = e.target.closest('.verbum');
            if (wordSpan) {
                showAnalysis(wordSpan);
            }
        });

        // Botón para volver al índice
        a.analysis.btnBackToIndex.addEventListener('click', () => {
            renderIndexView();
        });
        
        // Botón de capítulo anterior
        a.analysis.btnPrev.addEventListener('click', (e) => {
            e.preventDefault();
            const chapterId = e.currentTarget.dataset.chapterId;
            if(chapterId) renderAnalysisView(chapterId);
        });

        // Botón de capítulo siguiente
        a.analysis.btnNext.addEventListener('click', (e) => {
            e.preventDefault();
            const chapterId = e.currentTarget.dataset.chapterId;
            if(chapterId) renderAnalysisView(chapterId);
        });
    }

    // --- INICIALIZACIÓN ---
    // Función que arranca la aplicación.
    function init() {
        if (typeof libroData === 'undefined') {
            console.error("El objeto 'libroData' no está definido. Asegúrate de que 'genesis_data.js' se haya cargado correctamente.");
            document.body.innerHTML = '<p style="color:red; font-size: 24px; text-align:center; padding: 4rem;">Error: No se pudieron cargar los datos principales del libro.</p>';
            return;
        }
        setupEventListeners();
        renderIndexView();
    }

    init(); // Llama a la función inicial para empezar.
});
