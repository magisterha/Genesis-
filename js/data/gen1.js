const chapterContent = {
    id: 1,
    title: { 
        la: "De creatione mundi", 
        es: "La Creación del mundo", 
        en: "The Creation of the world", 
        "zh-TW": "世界的創造" 
    },
    introduction: {
        la: "Caput primum libri Genesis narrationem creationis in septem dierum spatio liturgico exhibet. Hoc carmen solemne et structum absolutam Dei souveranitatem statuit, qui mundum per verbi sui potentiam creat ('dixitque Deus...'). Dissimilis fabulis creationis Orientis Proximi antiqui, quae cosmica inter deos certamina describunt, Genesis unum Deum transcendentem effingit, qui chao pacifice et consulto ordinem imponit. Repetitio phrasium sicut 'et vidit Deus quod esset bonum' bonitatem intrinsecam mundi creati extollit, creatione hominis ad imaginem et similitudinem Dei culminans.",
        es: "El primer capítulo del Génesis presenta el relato de la creación en un marco litúrgico de siete días. Este poema solemne y estructurado establece la soberanía absoluta de Dios, quien crea el cosmos mediante el poder de su palabra ('dixitque Deus...'). A diferencia de los mitos de creación del antiguo Cercano Oriente, que describen conflictos cósmicos entre deidades, el Génesis retrata a un único Dios trascendente que ordena el caos de forma pacífica y deliberada. La repetición de frases como 'y vio Dios que era bueno' subraya la bondad inherente del mundo creado, culminando en la creación de la humanidad a imagen y semejanza de Dios.",
        en: "The first chapter of Genesis presents the creation account within a liturgical framework of seven days. This solemn and structured poem establishes the absolute sovereignty of God, who creates the cosmos through the power of His word ('and God said...'). Unlike the creation myths of the ancient Near East, which describe cosmic conflicts between deities, Genesis portrays a single transcendent God who peacefully and deliberately brings order from chaos. The repetition of phrases like 'and God saw that it was good' underscores the inherent goodness of the created world, culminating in the creation of humanity in the image and likeness of God.",
        "zh-TW": "創世紀第一章在一個為期七天的禮儀框架內呈現了創世的記述。這首莊嚴而結構化的詩篇確立了上帝的絕對主權，祂透過其話語的力量創造了宇宙（「神說...」）。與描述眾神之間宇宙衝突的古代近東創世神話不同，創世紀描繪了一位獨一的超然上帝，祂平靜而審慎地從混沌中帶來秩序。諸如「神看著是好的」這樣詞句的重複，強調了所造世界內在的良善，並在創造出具有上帝形象和樣式的人類時達到頂峰。"
    },
    verses: [
        {
            id: 1,
            words: {
                la: ["In", "principio", "creavit", "Deus", "caelum", "et", "terram."],
                es: ["En el principio creó Dios el cielo y la tierra."],
                en: ["In the beginning God created the heavens and the earth."],
                "zh-TW": ["起初，神創造天地。"]
            },
            analysis: [
                { term: "In", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en, sobre" } },
                { term: "principio", lemma: "principium", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "principio, comienzo" } },
                { term: "creavit", lemma: "creo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "crear" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "caelum", lemma: "caelum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "cielo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "terram.", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "tierra" } }
            ]
        },
        {
            id: 2,
            words: {
                la: ["Terra", "autem", "erat", "inanis", "et", "vacua,", "et", "tenebrae", "erant", "super", "faciem", "abyssi:", "et", "spiritus", "Dei", "ferebatur", "super", "aquas."],
                es: ["Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas."],
                en: ["Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters."],
                "zh-TW": ["地是空虛混沌，淵面黑暗；神的靈運行在水面上。"]
            },
            analysis: [
                { term: "Terra", lemma: "terra", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "tierra" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "pero, y, ahora bien" } },
                { term: "erat", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Indicativus", voice: "Activus", meaning: "ser, estar" } },
                { term: "inanis", lemma: "inanis", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "vacío, sin forma" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vacua,", lemma: "vacuus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "vacío, desocupado" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tenebrae", lemma: "tenebrae", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "tinieblas, oscuridad" } },
                { term: "erant", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Indicativus", voice: "Activus", meaning: "ser, estar" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre, encima de" } },
                { term: "faciem", lemma: "facies", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "faz, superficie" } },
                { term: "abyssi:", lemma: "abyssus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "abismo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "spiritus", lemma: "spiritus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "espíritu, aliento" } },
                { term: "Dei", lemma: "Deus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de Dios" } },
                { term: "ferebatur", lemma: "fero", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Indicativus", voice: "Passivus", meaning: "era llevado, se movía" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre, encima de" } },
                { term: "aquas.", lemma: "aqua", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "aguas" } }
            ]
        },
        {
            id: 3,
            words: {
                la: ["Dixitque", "Deus:", "Fiat", "lux.", "Et", "facta", "est", "lux."],
                es: ["Y dijo Dios: Sea la luz; y fue la luz."],
                en: ["And God said, “Let there be light,” and there was light."],
                "zh-TW": ["神說：「要有光」，就有了光。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo", notes: "El '-que' es una conjunción enclítica." } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Fiat", lemma: "fio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "hágase, sea", notes: "Subjuntivo yusivo, expresa una orden." } },
                { term: "lux.", lemma: "lux", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "luz" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "facta", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Femininum", tense: "Perfectum", voice: "Passivus", meaning: "hecha" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "es, fue", notes: "Forma el perfecto pasivo con 'facta'." } },
                { term: "lux.", lemma: "lux", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "luz" } }
            ]
        },
        {
            id: 4,
            words: {
                la: ["Et", "vidit", "Deus", "lucem", "quod", "esset", "bona:", "et", "divisit", "lucem", "a", "tenebris."],
                es: ["Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas."],
                en: ["God saw that the light was good, and he separated the light from the darkness."],
                "zh-TW": ["神看光是好的，就把光暗分開了。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "lucem", lemma: "lux", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "luz" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que, porque" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era, fuese" } },
                { term: "bona:", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "buena" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "divisit", lemma: "divido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dividió, separó" } },
                { term: "lucem", lemma: "lux", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "luz" } },
                { term: "a", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de, desde" } },
                { term: "tenebris.", lemma: "tenebrae", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Femininum", meaning: "tinieblas" } }
            ]
        },
        {
            id: 5,
            words: {
                la: ["Appellavitque", "lucem", "Diem,", "et", "tenebras", "Noctem:", "factumque", "est", "vespere", "et", "mane,", "dies", "unus."],
                es: ["Y llamó Dios a la luz Día, y a las tinieblas llamó Noche; y fue la tarde y la mañana un día."],
                en: ["God called the light “day,” and the darkness he called “night.” And there was evening, and there was morning—the first day."],
                "zh-TW": ["神稱光為「晝」，稱暗為「夜」。有晚上，有早晨，這是頭一日。"]
            },
            analysis: [
                { term: "Appellavitque", lemma: "appello", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y llamó" } },
                { term: "lucem", lemma: "lux", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "luz" } },
                { term: "Diem,", lemma: "dies", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "Día" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tenebras", lemma: "tenebrae", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "tinieblas" } },
                { term: "Noctem:", lemma: "nox", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "Noche" } },
                { term: "factumque", lemma: "facio", details: { morphology: "Participium + Conjunctio", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "y fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "es, fue" } },
                { term: "vespere", lemma: "vesper", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "tarde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mane,", lemma: "mane", details: { morphology: "Nomen indeclinabile", meaning: "mañana" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "unus.", lemma: "unus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "uno, primer" } }
            ]
        },
        {
            id: 6,
            words: {
                la: ["Dixit", "quoque", "Deus:", "Fiat", "firmamentum", "in", "medio", "aquarum,", "et", "dividat", "aquas", "ab", "aquis."],
                es: ["Luego dijo Dios: Haya expansión en medio de las aguas, y separe las aguas de las aguas."],
                en: ["And God said, “Let there be a vault between the waters to separate water from water.”"],
                "zh-TW": ["神說：「諸水之間要有空氣，將水分為上下。」"]
            },
            analysis: [
                { term: "Dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Fiat", lemma: "fio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "hágase, haya" } },
                { term: "firmamentum", lemma: "firmamentum", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "expansión, firmamento" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "medio", lemma: "medium", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "medio" } },
                { term: "aquarum,", lemma: "aqua", details: { morphology: "Nomen", case: "Genetivus", number: "Pluralis", gender: "Femininum", meaning: "de las aguas" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "dividat", lemma: "divido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "separe" } },
                { term: "aquas", lemma: "aqua", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } },
                { term: "ab", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "aquis.", lemma: "aqua", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } }
            ]
        },
        {
            id: 7,
            words: {
                la: ["Et", "fecit", "Deus", "firmamentum,", "divisitque", "aquas", "quae", "erant", "sub", "firmamento,", "ab", "his", "quae", "erant", "super", "firmamentum.", "Et", "factum", "est", "ita."],
                es: ["E hizo Dios la expansión, y separó las aguas que estaban debajo de la expansión, de las que estaban sobre la expansión. Y fue así."],
                en: ["So God made the vault and separated the water under the vault from the water above it. And it was so."],
                "zh-TW": ["神就造出空氣，將空氣以下的水、空氣以上的水分開了。事就這樣成了。"]
            },
            analysis: [
                 { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                 { term: "fecit", lemma: "facio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "hizo" } },
                 { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                 { term: "firmamentum,", lemma: "firmamentum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                 { term: "divisitque", lemma: "divido", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y separó" } },
                 { term: "aquas", lemma: "aqua", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } },
                 { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "que" } },
                 { term: "erant", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Indicativus", voice: "Activus", meaning: "estaban" } },
                 { term: "sub", lemma: "sub", details: { morphology: "Praepositio", case: "Ablativus", meaning: "debajo de" } },
                 { term: "firmamento,", lemma: "firmamentum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                 { term: "ab", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                 { term: "his", lemma: "hic", details: { morphology: "Pronomen demonstrativum", case: "Ablativus", number: "Pluralis", gender: "Femininum", meaning: "estas (aguas)" } },
                 { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "que" } },
                 { term: "erant", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Indicativus", voice: "Activus", meaning: "estaban" } },
                 { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                 { term: "firmamentum.", lemma: "firmamentum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                 { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                 { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                 { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                 { term: "ita.", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } }
            ]
        },
        {
            id: 8,
            words: {
                la: ["Vocavitque", "Deus", "firmamentum,", "Caelum.", "Et", "factum", "est", "vespere", "et", "mane,", "dies", "secundus."],
                es: ["Y llamó Dios a la expansión Cielos. Y fue la tarde y la mañana el día segundo."],
                en: ["God called the vault “sky.” And there was evening, and there was morning—the second day."],
                "zh-TW": ["神稱空氣為「天」。有晚上，有早晨，是第二日。"]
            },
            analysis: [
                { term: "Vocavitque", lemma: "voco", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y llamó" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "firmamentum,", lemma: "firmamentum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                { term: "Caelum.", lemma: "caelum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "Cielo" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "vespere", lemma: "vesper", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "tarde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mane,", lemma: "mane", details: { morphology: "Nomen indeclinabile", meaning: "mañana" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "secundus.", lemma: "secundus", details: { morphology: "Adjectivum numerale", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "segundo" } }
            ]
        },
        {
            id: 9,
            words: {
                la: ["Dixit", "vero", "Deus:", "Congregentur", "aquae,", "quae", "sub", "caelo", "sunt,", "in", "locum", "unum,", "et", "appareat", "arida.", "Et", "factum", "est", "ita."],
                es: ["Dijo también Dios: Júntense las aguas que están debajo de los cielos en un lugar, y descúbrase lo seco. Y fue así."],
                en: ["And God said, “Let the water under the sky be gathered to one place, and let dry ground appear.” And it was so."],
                "zh-TW": ["神說：「天下的水要聚在一處，使旱地露出來。」事就這樣成了。"]
            },
            analysis: [
                { term: "Dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "vero", lemma: "vero", details: { morphology: "Adverbium", meaning: "en verdad, pero" } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Congregentur", lemma: "congrego", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Passivus", meaning: "júntense" } },
                { term: "aquae,", lemma: "aqua", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "que" } },
                { term: "sub", lemma: "sub", details: { morphology: "Praepositio", case: "Ablativus", meaning: "debajo de" } },
                { term: "caelo", lemma: "caelum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "cielo" } },
                { term: "sunt,", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "están" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "en, a" } },
                { term: "locum", lemma: "locus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "lugar" } },
                { term: "unum,", lemma: "unus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "uno, un solo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "appareat", lemma: "appareo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "aparezca" } },
                { term: "arida.", lemma: "aridus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "lo seco", notes: "Uso sustantivado." } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "ita.", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } }
            ]
        },
        {
            id: 10,
            words: {
                la: ["Et", "vocavit", "Deus", "aridam", "Terram,", "congregationesque", "aquarum", "appellavit", "Maria.", "Et", "vidit", "Deus", "quod", "esset", "bonum."],
                es: ["Y llamó Dios a lo seco Tierra, y a la reunión de las aguas llamó Mares. Y vio Dios que era bueno."],
                en: ["God called the dry ground “land,” and the gathered waters he called “seas.” And God saw that it was good."],
                "zh-TW": ["神稱旱地為「地」，稱水的聚集處為「海」。神看著是好的。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vocavit", lemma: "voco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "llamó" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "aridam", lemma: "aridus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "lo seco" } },
                { term: "Terram,", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "Tierra" } },
                { term: "congregationesque", lemma: "congregatio", details: { morphology: "Nomen + Conjunctio", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "y a las reuniones" } },
                { term: "aquarum", lemma: "aqua", details: { morphology: "Nomen", case: "Genetivus", number: "Pluralis", gender: "Femininum", meaning: "de las aguas" } },
                { term: "appellavit", lemma: "appello", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "llamó" } },
                { term: "Maria.", lemma: "mare", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "Mares" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "bonum.", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "bueno" } }
            ]
        },
        {
            id: 11,
            words: {
                la: ["Et", "ait:", "Germinet", "terra", "herbam", "virentem", "et", "facientem", "semen,", "et", "lignum", "pomeriferum", "faciens", "fructum", "iuxta", "genus", "suum,", "cuius", "semen", "in", "semetipso", "sit", "super", "terram.", "Et", "factum", "est", "ita."],
                es: ["Después dijo Dios: Produzca la tierra hierba verde, hierba que dé semilla; árbol de fruto que dé fruto según su género, que su semilla esté en él, sobre la tierra. Y fue así."],
                en: ["Then God said, “Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.” And it was so."],
                "zh-TW": ["神說：「地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類，果子都包著核。」事就這樣成了。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ait:", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Germinet", lemma: "germino", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "germine, produzca" } },
                { term: "terra", lemma: "terra", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "herbam", lemma: "herba", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "hierba" } },
                { term: "virentem", lemma: "vireo", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "verde, que verdea" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "facientem", lemma: "facio", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "que hace, que da" } },
                { term: "semen,", lemma: "semen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "semilla" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "lignum", lemma: "lignum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "árbol" } },
                { term: "pomeriferum", lemma: "pomerifer", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "fructífero" } },
                { term: "faciens", lemma: "facio", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Neutrum", tense: "Praesens", voice: "Activus", meaning: "que hace, que da" } },
                { term: "fructum", lemma: "fructus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "fruto" } },
                { term: "iuxta", lemma: "iuxta", details: { morphology: "Praepositio", case: "Accusativus", meaning: "según" } },
                { term: "genus", lemma: "genus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "género, especie" } },
                { term: "suum,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "cuius", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "cuya, cuyo" } },
                { term: "semen", lemma: "semen", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "semilla" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "semetipso", lemma: "semetipse", details: { morphology: "Pronomen roborativum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "en sí mismo" } },
                { term: "sit", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "esté" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram.", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "ita.", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } }
            ]
        },
        {
            id: 12,
            words: {
                la: ["Et", "protulit", "terra", "herbam", "virentem", "et", "afferentem", "semen", "iuxta", "genus", "suum,", "lignumque", "faciens", "fructum,", "et", "habens", "unumquodque", "sementem", "secundum", "speciem", "suam.", "Et", "vidit", "Deus", "quod", "esset", "bonum."],
                es: ["Produjo, pues, la tierra hierba verde, hierba que da semilla según su naturaleza, y árbol que da fruto, cuya semilla está en él, según su género. Y vio Dios que era bueno."],
                en: ["The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good."],
                "zh-TW": ["於是地發生了青草和結種子的菜蔬，各從其類；並結果子的樹木，各從其類，果子都包著核。神看著是好的。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "protulit", lemma: "profero", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "produjo" } },
                { term: "terra", lemma: "terra", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "herbam", lemma: "herba", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "hierba" } },
                { term: "virentem", lemma: "vireo", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "verde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "afferentem", lemma: "affero", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "que trae, que da" } },
                { term: "semen", lemma: "semen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "semilla" } },
                { term: "iuxta", lemma: "iuxta", details: { morphology: "Praepositio", case: "Accusativus", meaning: "según" } },
                { term: "genus", lemma: "genus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "género" } },
                { term: "suum,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "lignumque", lemma: "lignum", details: { morphology: "Nomen + Conjunctio", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "y árbol" } },
                { term: "faciens", lemma: "facio", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Neutrum", tense: "Praesens", voice: "Activus", meaning: "que hace, que da" } },
                { term: "fructum,", lemma: "fructus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "fruto" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "habens", lemma: "habeo", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Neutrum", tense: "Praesens", voice: "Activus", meaning: "que tiene" } },
                { term: "unumquodque", lemma: "unusquisque", details: { morphology: "Pronomen indefinitum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "cada uno" } },
                { term: "sementem", lemma: "sementis", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "semilla, siembra" } },
                { term: "secundum", lemma: "secundum", details: { morphology: "Praepositio", case: "Accusativus", meaning: "según" } },
                { term: "speciem", lemma: "species", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "especie" } },
                { term: "suam.", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "bonum.", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "bueno" } }
            ]
        },
        {
            id: 13,
            words: {
                la: ["Et", "factum", "est", "vespere", "et", "mane,", "dies", "tertius."],
                es: ["Y fue la tarde y la mañana el día tercero."],
                en: ["And there was evening, and there was morning—the third day."],
                "zh-TW": ["有晚上，有早晨，是第三日。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "vespere", lemma: "vesper", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "tarde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mane,", lemma: "mane", details: { morphology: "Nomen indeclinabile", meaning: "mañana" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "tertius.", lemma: "tertius", details: { morphology: "Adjectivum numerale", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "tercero" } }
            ]
        },
        {
            id: 14,
            words: {
                la: ["Dixit", "autem", "Deus:", "Fiant", "luminaria", "in", "firmamento", "caeli,", "ut", "dividant", "diem", "ac", "noctem,", "et", "sint", "in", "signa", "et", "tempora", "et", "dies", "et", "annos:"],
                es: ["Dijo luego Dios: Haya lumbreras en la expansión de los cielos para separar el día de la noche; y sirvan de señales para las estaciones, para días y años,"],
                en: ["And God said, “Let there be lights in the vault of the sky to separate the day from the night, and let them serve as signs to mark sacred times, and days and years,"],
                "zh-TW": ["神說：「天上要有光體，可以分晝夜，作記號，定節令、日子、年歲，"]
            },
            analysis: [
                { term: "Dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "además, pero" } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Fiant", lemma: "fio", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "háganse, haya" } },
                { term: "luminaria", lemma: "luminare", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Neutrum", meaning: "lumbreras" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "firmamento", lemma: "firmamentum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                { term: "caeli,", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "dividant", lemma: "divido", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "separen" } },
                { term: "diem", lemma: "dies", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "el día" } },
                { term: "ac", lemma: "ac", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "noctem,", lemma: "nox", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la noche" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "sint", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "sean, sirvan" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "para, como" } },
                { term: "signa", lemma: "signum", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "señales" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tempora", lemma: "tempus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "estaciones, tiempos" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "días" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "annos:", lemma: "annus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "años" } }
            ]
        },
        {
            id: 15,
            words: {
                la: ["et", "luceant", "in", "firmamento", "caeli,", "ut", "illuminent", "terram.", "Et", "factum", "est", "ita."],
                es: ["y alumbren en la expansión de los cielos para alumbrar sobre la tierra. Y fue así."],
                en: ["and let them be lights in the vault of the sky to give light on the earth.” And it was so."],
                "zh-TW": ["並要發光在天空，普照在地上。」事就這樣成了。"]
            },
            analysis: [
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "luceant", lemma: "luceo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "alumbren" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "firmamento", lemma: "firmamentum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                { term: "caeli,", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "illuminent", lemma: "illumino", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "iluminen" } },
                { term: "terram.", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "ita.", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } }
            ]
        },
        {
            id: 16,
            words: {
                la: ["Fecitque", "Deus", "duo", "luminaria", "magna:", "luminare", "maius,", "ut", "praeesset", "diei,", "et", "luminare", "minus,", "ut", "praeesset", "nocti,", "et", "stellas."],
                es: ["E hizo Dios las dos grandes lumbreras; la lumbrera mayor para que señorease en el día, y la lumbrera menor para que señorease en la noche; hizo también las estrellas."],
                en: ["God made two great lights—the greater light to govern the day and the lesser light to govern the night. He also made the stars."],
                "zh-TW": ["於是神造了兩個大光，大的管晝，小的管夜，又造眾星，"]
            },
            analysis: [
                { term: "Fecitque", lemma: "facio", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "e hizo" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "duo", lemma: "duo", details: { morphology: "Adjectivum numerale", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "dos" } },
                { term: "luminaria", lemma: "luminare", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "lumbreras" } },
                { term: "magna:", lemma: "magnus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "grandes" } },
                { term: "luminare", lemma: "luminare", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "la lumbrera" } },
                { term: "maius,", lemma: "magnus", details: { morphology: "Adjectivum (Comparativus)", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "mayor" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "praeesset", lemma: "praesum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "gobernase" } },
                { term: "diei,", lemma: "dies", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "el día" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "luminare", lemma: "luminare", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "la lumbrera" } },
                { term: "minus,", lemma: "parvus", details: { morphology: "Adjectivum (Comparativus)", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "menor" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "praeesset", lemma: "praesum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "gobernase" } },
                { term: "nocti,", lemma: "nox", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "la noche" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "stellas.", lemma: "stella", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las estrellas" } }
            ]
        },
        {
            id: 17,
            words: {
                la: ["Et", "posuit", "eas", "in", "firmamento", "caeli,", "ut", "lucerent", "super", "terram,"],
                es: ["Y las puso Dios en la expansión de los cielos para alumbrar sobre la tierra,"],
                en: ["God set them in the vault of the sky to give light on the earth,"],
                "zh-TW": ["就把這些光擺列在天空，普照在地上，"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "posuit", lemma: "pono", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "puso" } },
                { term: "eas", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "firmamento", lemma: "firmamentum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "expansión" } },
                { term: "caeli,", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "lucerent", lemma: "luceo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "alumbraran" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram,", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } }
            ]
        },
        {
            id: 18,
            words: {
                la: ["et", "praeessent", "diei", "ac", "nocti,", "et", "dividerent", "lucem", "ac", "tenebras.", "Et", "vidit", "Deus", "quod", "esset", "bonum."],
                es: ["y para señorear en el día y en la noche, y para separar la luz de las tinieblas. Y vio Dios que era bueno."],
                en: ["to govern the day and the night, and to separate light from darkness. And God saw that it was good."],
                "zh-TW": ["管理晝夜，分別明暗。神看著是好的。"]
            },
            analysis: [
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "praeessent", lemma: "praesum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "gobernasen" } },
                { term: "diei", lemma: "dies", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "el día" } },
                { term: "ac", lemma: "ac", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "nocti,", lemma: "nox", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "la noche" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "dividerent", lemma: "divido", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "separasen" } },
                { term: "lucem", lemma: "lux", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la luz" } },
                { term: "ac", lemma: "ac", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tenebras.", lemma: "tenebrae", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las tinieblas" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "bonum.", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "bueno" } }
            ]
        },
        {
            id: 19,
            words: {
                la: ["Et", "factum", "est", "vespere", "et", "mane,", "dies", "quartus."],
                es: ["Y fue la tarde y la mañana el día cuarto."],
                en: ["And there was evening, and there was morning—the fourth day."],
                "zh-TW": ["有晚上，有早晨，是第四日。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "vespere", lemma: "vesper", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "tarde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mane,", lemma: "mane", details: { morphology: "Nomen indeclinabile", meaning: "mañana" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "quartus.", lemma: "quartus", details: { morphology: "Adjectivum numerale", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "cuarto" } }
            ]
        },
        {
            id: 20,
            words: {
                la: ["Dixit", "etiam", "Deus:", "Producant", "aquae", "reptile", "animae", "viventis,", "et", "volatile", "super", "terram", "sub", "firmamento", "caeli."],
                es: ["Dijo Dios: Produzcan las aguas seres vivientes, y aves que vuelen sobre la tierra, en la abierta expansión de los cielos."],
                en: ["And God said, “Let the water teem with living creatures, and let birds fly above the earth across the vault of the sky.”"],
                "zh-TW": ["神說：「水要多多滋生有生命的物；要有雀鳥飛在地面以上，天空之中。」"]
            },
            analysis: [
                { term: "Dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "etiam", lemma: "etiam", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Producant", lemma: "produco", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "produzcan" } },
                { term: "aquae", lemma: "aqua", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } },
                { term: "reptile", lemma: "reptile", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "reptil, ser que se arrastra" } },
                { term: "animae", lemma: "anima", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de alma, de vida" } },
                { term: "viventis,", lemma: "vivo", details: { morphology: "Participium", case: "Genetivus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "viviente" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "volatile", lemma: "volatile", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "ser volador, ave" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "sub", lemma: "sub", details: { morphology: "Praepositio", case: "Ablativus", meaning: "bajo" } },
                { term: "firmamento", lemma: "firmamentum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "la expansión" } },
                { term: "caeli.", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } }
            ]
        },
        {
            id: 21,
            words: {
                la: ["Creavitque", "Deus", "cete", "granda,", "et", "omnem", "animam", "viventem", "atque", "motabilem,", "quam", "produxerant", "aquae", "in", "species", "suas,", "et", "omne", "volatile", "secundum", "genus", "suum.", "Et", "vidit", "Deus", "quod", "esset", "bonum."],
                es: ["Y creó Dios los grandes monstruos marinos, y todo ser viviente que se mueve, que las aguas produjeron según su género, y toda ave alada según su especie. Y vio Dios que era bueno."],
                en: ["So God created the great creatures of the sea and every living thing with which the water teems and that moves about in it, according to their kinds, and every winged bird according to its kind. And God saw that it was good."],
                "zh-TW": ["神就造出大魚和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類。神看著是好的。"]
            },
            analysis: [
                { term: "Creavitque", lemma: "creo", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y creó" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "cete", lemma: "cetus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "monstruos marinos" } },
                { term: "granda,", lemma: "grandis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "grandes" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "omnem", lemma: "omnis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "toda" } },
                { term: "animam", lemma: "anima", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "alma, ser" } },
                { term: "viventem", lemma: "vivo", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "viviente" } },
                { term: "atque", lemma: "atque", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "motabilem,", lemma: "motabilis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "que se mueve" } },
                { term: "quam", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "que" } },
                { term: "produxerant", lemma: "produco", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Plusquamperfectum", mood: "Indicativus", voice: "Activus", meaning: "habían producido" } },
                { term: "aquae", lemma: "aqua", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "en, según" } },
                { term: "species", lemma: "species", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "especies" } },
                { term: "suas,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "sus" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "omne", lemma: "omnis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "todo" } },
                { term: "volatile", lemma: "volatile", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "ser volador" } },
                { term: "secundum", lemma: "secundum", details: { morphology: "Praepositio", case: "Accusativus", meaning: "según" } },
                { term: "genus", lemma: "genus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "género" } },
                { term: "suum.", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "bonum.", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "bueno" } }
            ]
        },
        {
            id: 22,
            words: {
                la: ["Benedixitque", "eis", "Deus,", "dicens:", "Crescite", "et", "multiplicamini,", "et", "replete", "aquas", "maris:", "avesque", "multiplicentur", "super", "terram."],
                es: ["Y Dios los bendijo, diciendo: Fructificad y multiplicaos, y llenad las aguas en los mares, y multiplíquense las aves en la tierra."],
                en: ["God blessed them and said, “Be fruitful and increase in number and fill the water in the seas, and let the birds increase on the earth.”"],
                "zh-TW": ["神就賜福給這一切，說：「滋生繁多，充滿海中的水；雀鳥也要多生在地上。」"]
            },
            analysis: [
                { term: "Benedixitque", lemma: "benedico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y bendijo" } },
                { term: "eis", lemma: "is", details: { morphology: "Pronomen", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "a ellos" } },
                { term: "Deus,", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "dicens:", lemma: "dico", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Praesens", voice: "Activus", meaning: "diciendo" } },
                { term: "Crescite", lemma: "cresco", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "creced" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "multiplicamini,", lemma: "multiplico", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Passivus", meaning: "multiplicaos" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "replete", lemma: "repleo", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "llenad" } },
                { term: "aquas", lemma: "aqua", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las aguas" } },
                { term: "maris:", lemma: "mare", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del mar" } },
                { term: "avesque", lemma: "avis", details: { morphology: "Nomen + Conjunctio", case: "Nominativus", number: "Pluralis", gender: "Femininum", meaning: "y las aves" } },
                { term: "multiplicentur", lemma: "multiplico", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Passivus", meaning: "se multipliquen" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram.", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } }
            ]
        },
        {
            id: 23,
            words: {
                la: ["Et", "factum", "est", "vespere", "et", "mane,", "dies", "quintus."],
                es: ["Y fue la tarde y la mañana el día quinto."],
                en: ["And there was evening, and there was morning—the fifth day."],
                "zh-TW": ["有晚上，有早晨，是第五日。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "vespere", lemma: "vesper", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "tarde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mane,", lemma: "mane", details: { morphology: "Nomen indeclinabile", meaning: "mañana" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "quintus.", lemma: "quintus", details: { morphology: "Adjectivum numerale", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "quinto" } }
            ]
        },
        {
            id: 24,
            words: {
                la: ["Dixit", "quoque", "Deus:", "Producat", "terra", "animam", "viventem", "in", "genere", "suo,", "iumenta", "et", "reptilia", "et", "bestias", "terrae", "secundum", "species", "suas.", "Factumque", "est", "ita."],
                es: ["Luego dijo Dios: Produzca la tierra seres vivientes según su género, bestias y serpientes y animales de la tierra según su especie. Y fue así."],
                en: ["And God said, “Let the land produce living creatures according to their kinds: the livestock, the creatures that move along the ground, and the wild animals, each according to its kind.” And it was so."],
                "zh-TW": ["神說：「地要生出活物來，各從其類；牲畜、昆蟲、野獸，各從其類。」事就這樣成了。"]
            },
            analysis: [
                { term: "Dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Producat", lemma: "produco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "produzca" } },
                { term: "terra", lemma: "terra", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "animam", lemma: "anima", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "ser" } },
                { term: "viventem", lemma: "vivo", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "viviente" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "genere", lemma: "genus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "género" } },
                { term: "suo,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "iumenta", lemma: "iumentum", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "ganado" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "reptilia", lemma: "reptile", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "reptiles" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "bestias", lemma: "bestia", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "bestias" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "secundum", lemma: "secundum", details: { morphology: "Praepositio", case: "Accusativus", meaning: "según" } },
                { term: "species", lemma: "species", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "especies" } },
                { term: "suas.", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "sus" } },
                { term: "Factumque", lemma: "facio", details: { morphology: "Participium + Conjunctio", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "y fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "ita.", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } }
            ]
        },
        {
            id: 25,
            words: {
                la: ["Et", "fecit", "Deus", "bestias", "terrae", "iuxta", "species", "suas,", "et", "iumenta", "et", "omne", "reptile", "terrae", "in", "genere", "suo.", "Et", "vidit", "Deus", "quod", "esset", "bonum."],
                es: ["E hizo Dios animales de la tierra según su género, y ganado según su género, y todo animal que se arrastra sobre la tierra según su especie. Y vio Dios que era bueno."],
                en: ["God made the wild animals according to their kinds, the livestock according to their kinds, and all the creatures that move along the ground according to their kinds. And God saw that it was good."],
                "zh-TW": ["於是神造出野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類。神看著是好的。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "fecit", lemma: "facio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "hizo" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "bestias", lemma: "bestia", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "bestias" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "iuxta", lemma: "iuxta", details: { morphology: "Praepositio", case: "Accusativus", meaning: "según" } },
                { term: "species", lemma: "species", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "especies" } },
                { term: "suas,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "sus" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "iumenta", lemma: "iumentum", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "ganado" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "omne", lemma: "omnis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "todo" } },
                { term: "reptile", lemma: "reptile", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "reptil" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "genere", lemma: "genus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "género" } },
                { term: "suo.", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "bonum.", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "bueno" } }
            ]
        },
        {
            id: 26,
            words: {
                la: ["Et", "ait:", "Faciamus", "hominem", "ad", "imaginem", "et", "similitudinem", "nostram:", "et", "praesit", "piscibus", "maris", "et", "volatilibus", "caeli", "et", "bestiis", "universaeque", "terrae", "omnique", "reptili", "quod", "movetur", "in", "terra."],
                es: ["Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra."],
                en: ["Then God said, “Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground.”"],
                "zh-TW": ["神說：「我們要照著我們的形像、按著我們的樣式造人，使他們管理海裏的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。」"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ait:", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Faciamus", lemma: "facio", details: { morphology: "Verbum", person: "1st", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "hagamos" } },
                { term: "hominem", lemma: "homo", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "al hombre" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a, según" } },
                { term: "imaginem", lemma: "imago", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "imagen" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "similitudinem", lemma: "similitudo", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "semejanza" } },
                { term: "nostram:", lemma: "noster", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "nuestra" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "praesit", lemma: "praesum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "gobierne, señoree" } },
                { term: "piscibus", lemma: "piscis", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Masculinum", meaning: "a los peces" } },
                { term: "maris", lemma: "mare", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del mar" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "volatilibus", lemma: "volatilis", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "a las aves" } },
                { term: "caeli", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "bestiis", lemma: "bestia", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Femininum", meaning: "a las bestias" } },
                { term: "universaeque", lemma: "universus", details: { morphology: "Adjectivum + Conjunctio", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "y a toda" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "omnique", lemma: "omnis", details: { morphology: "Adjectivum + Conjunctio", case: "Dativus", number: "Singularis", gender: "Neutrum", meaning: "y a todo" } },
                { term: "reptili", lemma: "reptile", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Neutrum", meaning: "reptil" } },
                { term: "quod", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "que" } },
                { term: "movetur", lemma: "moveo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Passivus", meaning: "se mueve" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "terra.", lemma: "terra", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } }
            ]
        },
        {
            id: 27,
            words: {
                la: ["Et", "creavit", "Deus", "hominem", "ad", "imaginem", "suam,", "ad", "imaginem", "Dei", "creavit", "illum,", "masculum", "et", "feminam", "creavit", "eos."],
                es: ["Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó."],
                en: ["So God created mankind in his own image, in the image of God he created them; male and female he created them."],
                "zh-TW": ["神就照著自己的形像造人，乃是照著他的形像造男造女。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "creavit", lemma: "creo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "creó" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "hominem", lemma: "homo", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "al hombre" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "imaginem", lemma: "imago", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "imagen" } },
                { term: "suam,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "imaginem", lemma: "imago", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "imagen" } },
                { term: "Dei", lemma: "Deus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de Dios" } },
                { term: "creavit", lemma: "creo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "creó" } },
                { term: "illum,", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "a él, lo" } },
                { term: "masculum", lemma: "masculus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "varón" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "feminam", lemma: "femina", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "hembra" } },
                { term: "creavit", lemma: "creo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "creó" } },
                { term: "eos.", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "los" } }
            ]
        },
        {
            id: 28,
            words: {
                la: ["Benedixitque", "illis", "Deus,", "et", "ait:", "Crescite", "et", "multiplicamini,", "et", "replete", "terram", "et", "subicite", "eam,", "et", "dominamini", "piscibus", "maris", "et", "volatilibus", "caeli", "et", "universis", "animantibus,", "quae", "moventur", "super", "terram."],
                es: ["Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra, y sojuzgadla, y señoread en los peces del mar, en las aves de los cielos, y en todas las bestias que se mueven sobre la tierra."],
                en: ["God blessed them and said to them, “Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground.”"],
                "zh-TW": ["神就賜福給他們，又對他們說：「要生養眾多，遍滿地面，治理這地，也要管理海裏的魚、空中的鳥，和地上各樣行動的活物。」"]
            },
            analysis: [
                { term: "Benedixitque", lemma: "benedico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y bendijo" } },
                { term: "illis", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Dativus", number: "Pluralis", gender: "Masculinum", meaning: "a ellos, les" } },
                { term: "Deus,", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ait:", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Crescite", lemma: "cresco", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "creced" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "multiplicamini,", lemma: "multiplico", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Passivus", meaning: "multiplicaos" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "replete", lemma: "repleo", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "llenad" } },
                { term: "terram", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "subicite", lemma: "subicio", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "someted" } },
                { term: "eam,", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "dominamini", lemma: "dominor", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Deponens", meaning: "dominad, señoread" } },
                { term: "piscibus", lemma: "piscis", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Masculinum", meaning: "a los peces" } },
                { term: "maris", lemma: "mare", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del mar" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "volatilibus", lemma: "volatilis", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "a las aves" } },
                { term: "caeli", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "universis", lemma: "universus", details: { morphology: "Adjectivum", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "a todos" } },
                { term: "animantibus,", lemma: "animans", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "los seres vivientes" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Neutrum", meaning: "que" } },
                { term: "moventur", lemma: "moveo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Passivus", meaning: "se mueven" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram.", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } }
            ]
        },
        {
            id: 29,
            words: {
                la: ["Dixitque", "Deus:", "Ecce", "dedi", "vobis", "omnem", "herbam", "afferentem", "semen", "super", "terram", "et", "universa", "ligna,", "quae", "habent", "in", "semetipsis", "sementem", "generis", "sui,", "ut", "sint", "vobis", "in", "escam:"],
                es: ["Y dijo Dios: He aquí que os he dado toda planta que da semilla, que está sobre toda la tierra, y todo árbol en que hay fruto y que da semilla; os serán para comer."],
                en: ["Then God said, “I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food."],
                "zh-TW": ["神說：「看哪，我將遍地上一切結種子的菜蔬和一切樹上所結有核的果子，全賜給你們作食物。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "Deus:", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Ecce", lemma: "ecce", details: { morphology: "Interiectio", meaning: "he aquí" } },
                { term: "dedi", lemma: "do", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "he dado" } },
                { term: "vobis", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", number: "Pluralis", meaning: "a vosotros, os" } },
                { term: "omnem", lemma: "omnis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "toda" } },
                { term: "herbam", lemma: "herba", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "planta" } },
                { term: "afferentem", lemma: "affero", details: { morphology: "Participium", case: "Accusativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "que da" } },
                { term: "semen", lemma: "semen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "semilla" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "universa", lemma: "universus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "todos" } },
                { term: "ligna,", lemma: "lignum", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "los árboles" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Neutrum", meaning: "que" } },
                { term: "habent", lemma: "habeo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "tienen" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "semetipsis", lemma: "semetipse", details: { morphology: "Pronomen roborativum", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "en sí mismos" } },
                { term: "sementem", lemma: "sementis", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "semilla" } },
                { term: "generis", lemma: "genus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "de género" } },
                { term: "sui,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "sint", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "sean" } },
                { term: "vobis", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", number: "Pluralis", meaning: "para vosotros" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "para" } },
                { term: "escam:", lemma: "esca", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "alimento" } }
            ]
        },
        {
            id: 30,
            words: {
                la: ["et", "cunctis", "animantibus", "terrae", "omnique", "volucri", "caeli", "et", "universis,", "quae", "moventur", "in", "terra", "et", "in", "quibus", "est", "anima", "vivens,", "ut", "habeant", "ad", "vescendum.", "Et", "factum", "est", "ita."],
                es: ["Y a toda bestia de la tierra, y a todas las aves de los cielos, y a todo lo que se arrastra sobre la tierra, en que hay vida, toda planta verde les será para comer. Y fue así."],
                en: ["And to all the beasts of the earth and all the birds in the sky and all the creatures that move along the ground—everything that has the breath of life in it—I give every green plant for food.” And it was so."],
                "zh-TW": ["至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給他們作食物。」事就這樣成了。"]
            },
            analysis: [
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "cunctis", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "a todos" } },
                { term: "animantibus", lemma: "animans", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "los seres vivientes" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "omnique", lemma: "omnis", details: { morphology: "Adjectivum + Conjunctio", case: "Dativus", number: "Singularis", gender: "Neutrum", meaning: "y a toda" } },
                { term: "volucri", lemma: "volucris", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "ave" } },
                { term: "caeli", lemma: "caelum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del cielo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "universis,", lemma: "universus", details: { morphology: "Adjectivum", case: "Dativus", number: "Pluralis", gender: "Neutrum", meaning: "a todos" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Neutrum", meaning: "que" } },
                { term: "moventur", lemma: "moveo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Passivus", meaning: "se mueven" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "terra", lemma: "terra", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "quibus", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "los cuales" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "hay" } },
                { term: "anima", lemma: "anima", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "alma, vida" } },
                { term: "vivens,", lemma: "vivo", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "viviente" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "habeant", lemma: "habeo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "tengan" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "para" } },
                { term: "vescendum.", lemma: "vescor", details: { morphology: "Gerundium", case: "Accusativus", meaning: "comer" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "ita.", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } }
            ]
        },
        {
            id: 31,
            words: {
                la: ["Viditque", "Deus", "cuncta", "quae", "fecerat:", "et", "erant", "valde", "bona.", "Et", "factum", "est", "vespere", "et", "mane,", "dies", "sextus."],
                es: ["Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto."],
                en: ["God saw all that he had made, and it was very good. And there was evening, and there was morning—the sixth day."],
                "zh-TW": ["神看著一切所造的都甚好。有晚上，有早晨，是第六日。"]
            },
            analysis: [
                { term: "Viditque", lemma: "video", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y vio" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "cuncta", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "todo, todas las cosas" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "que, las cuales" } },
                { term: "fecerat:", lemma: "facio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Plusquamperfectum", mood: "Indicativus", voice: "Activus", meaning: "había hecho" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "erant", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Indicativus", voice: "Activus", meaning: "eran" } },
                { term: "valde", lemma: "valde", details: { morphology: "Adverbium", meaning: "muy, en gran manera" } },
                { term: "bona.", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Pluralis", gender: "Neutrum", meaning: "buenas (cosas)" } },
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "fue hecho" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "vespere", lemma: "vesper", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "tarde" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mane,", lemma: "mane", details: { morphology: "Nomen indeclinabile", meaning: "mañana" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "sextus.", lemma: "sextus", details: { morphology: "Adjectivum numerale", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "sexto" } }
            ]
        }
    ]
};
