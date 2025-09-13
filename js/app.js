let chapterContent; // Declara la variable globalmente UNA SOLA VEZ.

document.addEventListener('DOMContentLoaded', () => {

    const appState = {
        currentLanguage: 'la',
        currentChapterId: null,
        currentChapterData: null,
    };

    const DOM = {
        indexView: document.getElementById('index-view'),
        analysisView: document.getElementById('analysis-view'),
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
        },
        navigation: {
            btnBackToIndex: document.getElementById('btn-back-to-index'),
            btnPrevChapter: document.getElementById('btn-prev-chapter'),
            btnNextChapter: document.getElementById('btn-next-chapter'),
        }
    };

    function init() {
        if (typeof libroData === 'undefined') {
            console.error("Los datos del libro (libroData) no se han cargado.");
            document.body.innerHTML = `<div style="padding: 2rem; color: red; background: white;">Error Crítico: El archivo <strong>js/data/genesis_data.js</strong> no se pudo cargar. Revisa que el archivo exista y que la ruta en index.html sea correcta.</div>`;
            return;
        }
        setupEventListeners();
        setLanguage(appState.currentLanguage);
        renderIndexView();
        showView('index');
    }

    function setupEventListeners() {
        DOM.index.chapterGrid.addEventListener('click', (e) => {
            const chapterLink = e.target.closest('a');
            if (chapterLink && chapterLink.dataset.chapterId) {
                e.preventDefault();
                renderAnalysisView(chapterLink.dataset.chapterId);
            }
        });

        DOM.navigation.btnBackToIndex.addEventListener('click', () => {
            history.pushState({ view: 'index' }, '', '#');
            renderIndexView();
            showView('index');
        });

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
        
        DOM.analysis.textContent.addEventListener('click', handleWordClick);
    }

    function showView(viewName) {
        DOM.indexView.classList.toggle('hidden', viewName !== 'index');
        DOM.analysisView.classList.toggle('hidden', viewName !== 'analysis');
    }

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

    function renderAnalysisView(chapterId) {
        appState.currentChapterId = parseInt(chapterId);
        
        const chapterInfo = libroData.chapters.find(c => c.id === appState.currentChapterId);
        
        if (!chapterInfo || !chapterInfo.file) {
            console.error(`No se encontraron datos o el nombre del archivo para el capítulo ${chapterId}`);
            DOM.analysis.textContent.innerHTML = `<p style="color: red; font-weight: bold;">Error: No se encontraron los datos para el capítulo ${chapterId} en genesis_data.js.</p>`;
            showView('analysis');
            return;
        }

        const scriptPath = `js/data/capitulos/${chapterInfo.file}`;
        
        loadScript(scriptPath, () => {
            if (typeof chapterContent === 'undefined' || chapterContent.id !== appState.currentChapterId) {
                console.error(`La variable 'chapterContent' no se encontró o es incorrecta en ${scriptPath}`);
                DOM.analysis.textContent.innerHTML = `<p style="color: red; font-weight: bold;">Error: El archivo ${chapterInfo.file} no contiene los datos correctos (variable global 'chapterContent') para el capítulo ${appState.currentChapterId}. Revisa si hay errores de sintaxis en ese archivo.</p>`;
                showView('analysis');
                return;
            }
            
            appState.currentChapterData = chapterContent;
            populateAnalysisContent(appState.currentChapterData);
            showView('analysis');
            window.scrollTo(0, 0);
            history.pushState({ view: 'analysis', chapterId: appState.currentChapterId }, '', `#capitulo-${appState.currentChapterId}`);
        });
    }

    function populateAnalysisContent(content) {
        const lang = appState.currentLanguage;
        DOM.analysis.author.textContent = libroData.author;
        DOM.analysis.mainTitle.textContent = libroData.title[lang] || libroData.title.la;
        DOM.analysis.subtitle.textContent = `${libroData.ui.chapter[lang] || 'Caput'} ${content.id}: ${content.title[lang] || content.title.la}`;
        DOM.analysis.contextTitle.textContent = libroData.ui.introduction[lang] || 'Introductio';
        DOM.analysis.contextContent.innerHTML = content.introduction[lang] || content.introduction.la;
        DOM.analysis.textTitle.textContent = libroData.ui.text[lang] || 'Textus';
        populateTextContent(content);
        DOM.analysis.analysisTitle.textContent = libroData.ui.analysis[lang] || 'Analysis';
        resetAnalysisPanel();
        updateChapterNavigation();
        setupLanguageSwitcher(DOM.analysis.langSwitcher, () => populateAnalysisContent(content));
    }
    
    function populateTextContent(content) {
        DOM.analysis.textContent.innerHTML = '';
        content.verses.forEach(verse => {
            const verseContainer = document.createElement('div');
            verseContainer.className = 'verse-block mb-4';
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
            libroData.languages.filter(l => l.id !== 'la').forEach(lang => {
                const pTranslation = document.createElement('p');
                pTranslation.dataset.lang = lang.id;
                pTranslation.className = 'translation-text';
                const translationText = Array.isArray(verse.words[lang.id]) 
                    ? verse.words[lang.id].join(' ') 
                    : verse.words[lang.id];
                pTranslation.innerHTML = `<span class="verse-number text-transparent">${verse.id}&nbsp;</span>${translationText || ''}`;
                verseContainer.appendChild(pTranslation);
            });
            DOM.analysis.textContent.appendChild(verseContainer);
        });
        updateVisibleLanguage();
    }
    
    function handleWordClick(e) {
        if (e.target.classList.contains('verbum')) {
            const verseId = parseInt(e.target.dataset.verseId);
            const wordIndex = parseInt(e.target.dataset.wordIndex);
            if (!appState.currentChapterData) return;
            const verseData = appState.currentChapterData.verses.find(v => v.id === verseId);
            if (verseData && verseData.analysis[wordIndex]) {
                displayAnalysis(verseData.analysis[wordIndex], e.target);
            }
        }
    }

    function displayAnalysis(analysisData, targetElement) {
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
                    </div>`;
            }
        });
        html += `</div>`;
        DOM.analysis.analysisContent.innerHTML = html;
    }
    
    function resetAnalysisPanel() {
        const lang = appState.currentLanguage;
        DOM.analysis.analysisContent.innerHTML = `<p class="text-[#6d4c35] font-['IM_Fell_English']">${libroData.ui.analysisPrompt[lang]}</p>`;
        document.querySelectorAll('.verbum.activus').forEach(el => el.classList.remove('activus'));
    }

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

    function setLanguage(langId) {
        appState.currentLanguage = langId;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active-lang', btn.dataset.langId === langId);
        });
        updateVisibleLanguage();
    }
    
    function updateVisibleLanguage() {
        const lang = appState.currentLanguage;
        document.querySelectorAll('[data-lang]').forEach(el => {
             el.style.display = (el.dataset.lang === 'la' || el.dataset.lang === lang) ? '' : 'none';
        });
    }

    function updateChapterNavigation() {
        const currentId = appState.currentChapterId;
        const prevBtn = DOM.navigation.btnPrevChapter;
        const nextBtn = DOM.navigation.btnNextChapter;
        prevBtn.style.visibility = (currentId > 1) ? 'visible' : 'hidden';
        prevBtn.dataset.chapterId = currentId - 1;
        nextBtn.style.visibility = (currentId < libroData.chapters.length) ? 'visible' : 'hidden';
        nextBtn.dataset.chapterId = currentId + 1;
    }

    function loadScript(src, callback) {
        const oldScript = document.querySelector(`script[data-chapter-script]`);
        if (oldScript) {
            oldScript.remove();
        }
        const script = document.createElement('script');
        script.src = src;
        script.dataset.chapterScript = 'true';
        script.onload = () => {
            callback();
        };
        script.onerror = () => {
            console.error(`Error al cargar el script: ${src}`);
            DOM.analysis.textContent.innerHTML = `<p style="color: red; font-weight: bold;">Error: No se pudo cargar el archivo del capítulo desde la ruta: <strong>${src}</strong>. Revisa que el archivo exista y que el nombre sea correcto.</p>`;
            showView('analysis');
        };
        document.body.appendChild(script);
    }

    init();
});

