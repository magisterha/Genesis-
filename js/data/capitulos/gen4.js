const chapterContent = {
    id: 4,
    title: { 
        la: "Cain et Abel", 
        es: "Caín y Abel", 
        en: "Cain and Abel", 
        "zh-TW": "該隱與亞伯" 
    },
    introduction: {
        la: "Caput quartum primum drama humanum extra Paradisum narrat: fabulam Cain et Abel. Hoc caput profundas quaestiones de invidia, ira, peccato, et iustitia divina explorat. Sacrificia fratrum diversa — unum acceptum, alterum reiectum — prooemium sunt tragoediae. Dialogus Dei cum Cain ante et post crimen non solum divinam praescientiam sed etiam patientiam ostendit, homini occasionem paenitentiae offerens. Homicidium Abel peccati progressionem ab désobédientia ad violentiam fratricidam demonstrat. Maledictio Cain, signum protectionis divinae paradoxice comitata, tensionem inter iudicium Dei et eius misericordiam inexplicabilem illustrat.",
        es: "El capítulo 4 narra el primer drama humano fuera del Paraíso: la historia de Caín y Abel. Este capítulo explora profundas cuestiones sobre la envidia, la ira, el pecado y la justicia divina. Los sacrificios divergentes de los hermanos —uno aceptado y otro rechazado— sirven de catalizador para la tragedia. El diálogo de Dios con Caín antes y después del crimen revela no solo la presciencia divina sino también su paciencia, ofreciendo al hombre la oportunidad de arrepentirse. El asesinato de Abel demuestra la progresión del pecado desde la desobediencia hasta la violencia fratricida. La maldición de Caín, acompañada paradójicamente por una señal de protección divina, ilustra la tensión entre el juicio de Dios y su inescrutable misericordia.",
        en: "Chapter 4 narrates the first human drama outside of Paradise: the story of Cain and Abel. This chapter explores profound questions of envy, anger, sin, and divine justice. The divergent sacrifices of the brothers—one accepted, the other rejected—serve as the catalyst for the tragedy. God's dialogue with Cain before and after the crime reveals not only divine foreknowledge but also patience, offering man the opportunity for repentance. Abel's murder demonstrates the progression of sin from disobedience to fratricidal violence. Cain's curse, paradoxically accompanied by a mark of divine protection, illustrates the tension between God's judgment and His inscrutable mercy.",
        "zh-TW": "第四章敘述了在伊甸園之外的第一個人類悲劇：該隱與亞伯的故事。本章探討了關於嫉妒、憤怒、罪惡和神聖正義的深刻問題。兄弟二人不同的獻祭——一個被接納，另一個被拒絕——成為悲劇的催化劑。在罪行發生前後，上帝與該隱的對話不僅揭示了神聖的預知，也顯示了祂的耐心，為人提供了悔改的機會。亞伯的被殺顯示了罪從不順從發展到兄弟相殘的暴力。該隱所受的詛咒，矛盾地伴隨著一個神聖保護的記號，說明了上帝的審判與其深不可測的憐憫之間的張力。"
    },
    verses: [
        {
            id: 1,
            words: {
                la: ["Adam", "vero", "cognovit", "uxorem", "suam", "Hevam,", "quae", "concepit", "et", "peperit", "Cain", "dicens:", "Possedi", "hominem", "per", "Deum."],
                es: ["Conoció Adán a su mujer Eva, la cual concibió y dio a luz a Caín, y dijo: Por voluntad de Jehová he adquirido varón."],
                en: ["Adam made love to his wife Eve, and she became pregnant and gave birth to Cain. She said, “With the help of the Lord I have brought forth a man.”"],
                "zh-TW": ["有一日，那人和他妻子夏娃同房，夏娃就懷孕，生了該隱，便說：「耶和華使我得了一個男子。」"]
            },
            analysis: [
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Adán" } },
                { term: "vero", lemma: "vero", details: { morphology: "Adverbium", meaning: "en verdad, pero" } },
                { term: "cognovit", lemma: "cognosco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "conoció" } },
                { term: "uxorem", lemma: "uxor", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "esposa" } },
                { term: "suam", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "Hevam,", lemma: "Heva", details: { morphology: "Nomen proprium", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "a Eva" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la cual" } },
                { term: "concepit", lemma: "concipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "concibió" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "peperit", lemma: "pario", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dio a luz" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Caín" } },
                { term: "dicens:", lemma: "dico", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "diciendo" } },
                { term: "Possedi", lemma: "possideo", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "he adquirido" } },
                { term: "hominem", lemma: "homo", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "un hombre" } },
                { term: "per", lemma: "per", details: { morphology: "Praepositio", case: "Accusativus", meaning: "por, con la ayuda de" } },
                { term: "Deum.", lemma: "Deus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } }
            ]
        },
        {
            id: 2,
            words: {
                la: ["Rursusque", "peperit", "fratrem", "eius", "Abel.", "Fuit", "autem", "Abel", "pastor", "ovium", "et", "Cain", "agricola."],
                es: ["Después dio a luz a su hermano Abel. Y Abel fue pastor de ovejas, y Caín fue labrador de la tierra."],
                en: ["Later she gave birth to his brother Abel. Now Abel kept flocks, and Cain worked the soil."],
                "zh-TW": ["又生了該隱的兄弟亞伯。亞伯是牧羊的；該隱是種地的。"]
            },
            analysis: [
                { term: "Rursusque", lemma: "rursus", details: { morphology: "Adverbium + Conjunctio", meaning: "y de nuevo" } },
                { term: "peperit", lemma: "pario", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dio a luz" } },
                { term: "fratrem", lemma: "frater", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "hermano" } },
                { term: "eius", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de él" } },
                { term: "Abel.", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Abel" } },
                { term: "Fuit", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "además" } },
                { term: "Abel", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Abel" } },
                { term: "pastor", lemma: "pastor", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "pastor" } },
                { term: "ovium", lemma: "ovis", details: { morphology: "Nomen", case: "Genetivus", number: "Pluralis", gender: "Femininum", meaning: "de ovejas" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "agricola.", lemma: "agricola", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "agricultor" } }
            ]
        },
        {
            id: 3,
            words: {
                la: ["Factum", "est", "autem", "post", "multos", "dies", "ut", "offerret", "Cain", "de", "fructibus", "terrae", "munera", "Domino."],
                es: ["Y aconteció andando el tiempo, que Caín trajo del fruto de la tierra una ofrenda a Jehová."],
                en: ["In the course of time Cain brought some of the fruits of the soil as an offering to the Lord."],
                "zh-TW": ["有一日，該隱拿地裏的出產為供物獻給耶和華；"]
            },
            analysis: [
                { term: "Factum", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Neutrum", tense: "Perfectum", voice: "Passivus", meaning: "sucedió" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "es" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "además" } },
                { term: "post", lemma: "post", details: { morphology: "Praepositio", case: "Accusativus", meaning: "después de" } },
                { term: "multos", lemma: "multus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "muchos" } },
                { term: "dies", lemma: "dies", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "días" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "offerret", lemma: "offero", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "ofreciera" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "fructibus", lemma: "fructus", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "los frutos" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "munera", lemma: "munus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "ofrendas" } },
                { term: "Domino.", lemma: "Dominus", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "al Señor" } }
            ]
        },
        {
            id: 4,
            words: {
                la: ["Abel", "quoque", "obtulit", "de", "primogenitis", "gregis", "sui", "et", "de", "adibibus", "eorum;", "et", "respexit", "Dominus", "ad", "Abel", "et", "ad", "munera", "eius."],
                es: ["Y Abel trajo también de los primogénitos de sus ovejas, de lo más gordo de ellas. Y miró Jehová con agrado a Abel y a su ofrenda;"],
                en: ["And Abel also brought an offering—fat portions from some of the firstborn of his flock. The Lord looked with favor on Abel and his offering,"],
                "zh-TW": ["亞伯也將他羊群中頭生的和羊的脂油獻上。耶和華看中了亞伯和他的供物，"]
            },
            analysis: [
                { term: "Abel", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Abel" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "obtulit", lemma: "offero", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "ofreció" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "primogenitis", lemma: "primogenitus", details: { morphology: "Adjectivum", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "los primogénitos" } },
                { term: "gregis", lemma: "grex", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de su rebaño" } },
                { term: "sui", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "suyo" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "adibibus", lemma: "adeps", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "la grosura" } },
                { term: "eorum;", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Pluralis", gender: "Masculinum", meaning: "de ellos" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "respexit", lemma: "respicio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "miró con agrado" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el Señor" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "Abel", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "Abel" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "munera", lemma: "munus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "las ofrendas" } },
                { term: "eius.", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de él" } }
            ]
        },
        {
            id: 5,
            words: {
                la: ["ad", "Cain", "autem", "et", "ad", "munera", "illius", "non", "respexit;", "iratusque", "est", "Cain", "vehementer", "et", "concidit", "vultus", "eius."],
                es: ["pero no miró con agrado a Caín y a la ofrenda suya. Y se ensañó Caín en gran manera, y decayó su semblante."],
                en: ["but on Cain and his offering he did not look with favor. So Cain was very angry, and his face was downcast."],
                "zh-TW": ["只是看不中該隱和他的供物。該隱就大大地發怒，變了臉色。"]
            },
            analysis: [
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "Caín" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "pero" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "munera", lemma: "munus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "las ofrendas" } },
                { term: "illius", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de aquél" } },
                { term: "non", lemma: "non", details: { morphology: "Adverbium", meaning: "no" } },
                { term: "respexit;", lemma: "respicio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "miró con agrado" } },
                { term: "iratusque", lemma: "iratus", details: { morphology: "Adjectivum + Conjunctio", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "y se enojó" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "estuvo" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "vehementer", lemma: "vehementer", details: { morphology: "Adverbium", meaning: "vehementemente" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "concidit", lemma: "concido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "decayó" } },
                { term: "vultus", lemma: "vultus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el rostro" } },
                { term: "eius.", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de él" } }
            ]
        },
        {
            id: 6,
            words: {
                la: ["Dixitque", "Dominus", "ad", "eum:", "Quare", "iratus", "es", "et", "cur", "concidit", "facies", "tua?"],
                es: ["Entonces Jehová dijo a Caín: ¿Por qué te has ensañado, y por qué ha decaído tu semblante?"],
                en: ["Then the Lord said to Cain, “Why are you angry? Why is your face downcast?"],
                "zh-TW": ["耶和華對該隱說：「你為甚麼發怒呢？你為甚麼變了臉色呢？"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el Señor" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "eum:", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "él" } },
                { term: "Quare", lemma: "quare", details: { morphology: "Adverbium interrogativum", meaning: "¿Por qué?" } },
                { term: "iratus", lemma: "iratus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "enojado" } },
                { term: "es", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "estás" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "cur", lemma: "cur", details: { morphology: "Adverbium interrogativum", meaning: "¿por qué?" } },
                { term: "concidit", lemma: "concido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "ha decaído" } },
                { term: "facies", lemma: "facies", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "rostro" } },
                { term: "tua?", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "tu" } }
            ]
        },
        {
            id: 7,
            words: {
                la: ["Nonne", "si", "bene", "egeris,", "recipies;", "sin", "autem", "male,", "statim", "in", "foribus", "peccatum", "aderit?", "Sed", "sub", "te", "erit", "appetitus", "eius,", "et", "tu", "dominaberis", "illius."],
                es: ["Si bien hicieres, ¿no serás enaltecido? y si no hicieres bien, el pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él."],
                en: ["If you do what is right, will you not be accepted? But if you do not do what is right, sin is crouching at your door; it desires to have you, but you must rule over it.”"],
                "zh-TW": ["你若行得好，豈不蒙悅納？你若行得不好，罪就伏在門前。它必戀慕你，你卻要制伏它。」"]
            },
            analysis: [
                { term: "Nonne", lemma: "nonne", details: { morphology: "Adverbium interrogativum", meaning: "¿Acaso no?" } },
                { term: "si", lemma: "si", details: { morphology: "Conjunctio", meaning: "si" } },
                { term: "bene", lemma: "bene", details: { morphology: "Adverbium", meaning: "bien" } },
                { term: "egeris,", lemma: "ago", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum perfectum", mood: "Indicativus", voice: "Activus", meaning: "hicieres" } },
                { term: "recipies;", lemma: "recipio", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "recibirás" } },
                { term: "sin", lemma: "sin", details: { morphology: "Conjunctio", meaning: "pero si" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "en cambio" } },
                { term: "male,", lemma: "male", details: { morphology: "Adverbium", meaning: "mal" } },
                { term: "statim", lemma: "statim", details: { morphology: "Adverbium", meaning: "inmediatamente" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "foribus", lemma: "foris", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Femininum", meaning: "las puertas" } },
                { term: "peccatum", lemma: "peccatum", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "el pecado" } },
                { term: "aderit?", lemma: "adsum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "estará presente" } },
                { term: "Sed", lemma: "sed", details: { morphology: "Conjunctio", meaning: "pero" } },
                { term: "sub", lemma: "sub", details: { morphology: "Praepositio", case: "Accusativus", meaning: "bajo" } },
                { term: "te", lemma: "tu", details: { morphology: "Pronomen", case: "Accusativus", meaning: "ti" } },
                { term: "erit", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "estará" } },
                { term: "appetitus", lemma: "appetitus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el deseo" } },
                { term: "eius,", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "de él" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tu", lemma: "tu", details: { morphology: "Pronomen", case: "Nominativus", meaning: "tú" } },
                { term: "dominaberis", lemma: "dominor", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "dominarás" } },
                { term: "illius.", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "a él" } }
            ]
        },
        {
            id: 8,
            words: {
                la: ["Dixitque", "Cain", "ad", "Abel", "fratrem", "suum:", "Egrediamur", "foras.", "Cumque", "essent", "in", "agro,", "consurrexit", "Cain", "adversus", "fratrem", "suum", "Abel", "et", "interfecit", "eum."],
                es: ["Y dijo Caín a su hermano Abel: Salgamos al campo. Y aconteció que estando ellos en el campo, Caín se levantó contra su hermano Abel, y lo mató."],
                en: ["Now Cain said to his brother Abel, “Let’s go out to the field.” While they were in the field, Cain attacked his brother Abel and killed him."],
                "zh-TW": ["該隱與他兄弟亞伯說話；二人正在田間。該隱起來打他兄弟亞伯，把他殺了。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "Abel", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "Abel" } },
                { term: "fratrem", lemma: "frater", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "hermano" } },
                { term: "suum:", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "su" } },
                { term: "Egrediamur", lemma: "egredior", details: { morphology: "Verbum", person: "1st", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Deponens", meaning: "Salgamos" } },
                { term: "foras.", lemma: "foras", details: { morphology: "Adverbium", meaning: "afuera" } },
                { term: "Cumque", lemma: "cum", details: { morphology: "Conjunctio + Enclitic", meaning: "y cuando" } },
                { term: "essent", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "estaban" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "agro,", lemma: "ager", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el campo" } },
                { term: "consurrexit", lemma: "consurgo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "se levantó" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "adversus", lemma: "adversus", details: { morphology: "Praepositio", case: "Accusativus", meaning: "contra" } },
                { term: "fratrem", lemma: "frater", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "hermano" } },
                { term: "suum", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "su" } },
                { term: "Abel", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "Abel" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "interfecit", lemma: "interficio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "mató" } },
                { term: "eum.", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "lo" } }
            ]
        },
        {
            id: 9,
            words: {
                la: ["Et", "ait", "Dominus", "ad", "Cain:", "Ubi", "est", "Abel", "frater", "tuus?", "Qui", "respondit:", "Nescio.", "Num", "custos", "fratris", "mei", "ego", "sum?"],
                es: ["Y Jehová dijo a Caín: ¿Dónde está Abel tu hermano? Y él respondió: No sé. ¿Soy yo acaso guarda de mi hermano?"],
                en: ["Then the Lord said to Cain, “Where is your brother Abel?” “I don’t know,” he replied. “Am I my brother’s keeper?”"],
                "zh-TW": ["耶和華對該隱說：「你兄弟亞伯在哪裏？」他說：「我不知道！我豈是看守我兄弟的嗎？」"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ait", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el Señor" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "Cain:", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "Caín" } },
                { term: "Ubi", lemma: "ubi", details: { morphology: "Adverbium interrogativum", meaning: "¿Dónde?" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "está" } },
                { term: "Abel", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Abel" } },
                { term: "frater", lemma: "frater", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "hermano" } },
                { term: "tuus?", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "tu" } },
                { term: "Qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual, él" } },
                { term: "respondit:", lemma: "respondeo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "respondió" } },
                { term: "Nescio.", lemma: "nescio", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "no sé" } },
                { term: "Num", lemma: "num", details: { morphology: "Particula interrogativa", meaning: "¿Acaso?" } },
                { term: "custos", lemma: "custos", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "guardián" } },
                { term: "fratris", lemma: "frater", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de mi hermano" } },
                { term: "mei", lemma: "meus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "mío" } },
                { term: "ego", lemma: "ego", details: { morphology: "Pronomen", case: "Nominativus", meaning: "yo" } },
                { term: "sum?", lemma: "sum", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "soy" } }
            ]
        },
        {
            id: 10,
            words: {
                la: ["Dixitque", "ad", "eum:", "Quid", "fecisti?", "Vox", "sanguinis", "fratris", "tui", "clamat", "ad", "me", "de", "terra."],
                es: ["Y él le dijo: ¿Qué has hecho? La voz de la sangre de tu hermano clama a mí desde la tierra."],
                en: ["The Lord said, “What have you done? Listen! Your brother’s blood cries out to me from the ground."],
                "zh-TW": ["耶和華說：「你做了甚麼事呢？你兄弟的血有聲音從地裏向我哀告。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "eum:", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "él" } },
                { term: "Quid", lemma: "quis", details: { morphology: "Pronomen interrogativum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "¿Qué?" } },
                { term: "fecisti?", lemma: "facio", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "has hecho" } },
                { term: "Vox", lemma: "vox", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la voz" } },
                { term: "sanguinis", lemma: "sanguis", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de la sangre" } },
                { term: "fratris", lemma: "frater", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de tu hermano" } },
                { term: "tui", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "tuyo" } },
                { term: "clamat", lemma: "clamo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "clama" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "me", lemma: "ego", details: { morphology: "Pronomen", case: "Accusativus", meaning: "mí" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "desde" } },
                { term: "terra.", lemma: "terra", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } }
            ]
        },
        {
            id: 11,
            words: {
                la: ["Nunc", "igitur", "maledictus", "eris", "super", "terram,", "quae", "aperuit", "os", "suum", "et", "suscepit", "sanguinem", "fratris", "tui", "de", "manu", "tua."],
                es: ["Ahora, pues, maldito seas tú de la tierra, que abrió su boca para recibir de tu mano la sangre de tu hermano."],
                en: ["Now you are under a curse and driven from the ground, which opened its mouth to receive your brother’s blood from your hand."],
                "zh-TW": ["地開了口，從你手裏接受你兄弟的血。現在你必從這地受咒詛。"]
            },
            analysis: [
                { term: "Nunc", lemma: "nunc", details: { morphology: "Adverbium", meaning: "ahora" } },
                { term: "igitur", lemma: "igitur", details: { morphology: "Conjunctio", meaning: "pues" } },
                { term: "maledictus", lemma: "maledico", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Passivus", meaning: "maldito" } },
                { term: "eris", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "serás" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram,", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la cual" } },
                { term: "aperuit", lemma: "aperio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "abrió" } },
                { term: "os", lemma: "os", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "boca" } },
                { term: "suum", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "su" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "suscepit", lemma: "suscipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "recibió" } },
                { term: "sanguinem", lemma: "sanguis", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "la sangre" } },
                { term: "fratris", lemma: "frater", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de tu hermano" } },
                { term: "tui", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "tuyo" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "manu", lemma: "manus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "mano" } },
                { term: "tua.", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "tu" } }
            ]
        },
        {
            id: 12,
            words: {
                la: ["Cum", "operatus", "fueris", "eam,", "non", "dabit", "tibi", "fructus", "suos;", "vagus", "et", "profugus", "eris", "super", "terram."],
                es: ["Cuando labres la tierra, no te volverá a dar su fuerza; errante y extranjero serás en la tierra."],
                en: ["When you work the ground, it will no longer yield its crops for you. You will be a restless wanderer on the earth.”"],
                "zh-TW": ["你種地，地不再給你效力；你必流離飄蕩在地上。」"]
            },
            analysis: [
                { term: "Cum", lemma: "cum", details: { morphology: "Conjunctio", meaning: "cuando" } },
                { term: "operatus", lemma: "operor", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Deponens", meaning: "labres" } },
                { term: "fueris", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum perfectum", mood: "Indicativus", voice: "Activus", meaning: "hubieres" } },
                { term: "eam,", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la" } },
                { term: "non", lemma: "non", details: { morphology: "Adverbium", meaning: "no" } },
                { term: "dabit", lemma: "do", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "dará" } },
                { term: "tibi", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", meaning: "te" } },
                { term: "fructus", lemma: "fructus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "frutos" } },
                { term: "suos;", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "sus" } },
                { term: "vagus", lemma: "vagus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "errante" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "profugus", lemma: "profugus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "fugitivo" } },
                { term: "eris", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "serás" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "terram.", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } }
            ]
        },
        {
            id: 13,
            words: {
                la: ["Dixitque", "Cain", "ad", "Dominum:", "Maior", "est", "iniquitas", "mea", "quam", "ut", "veniam", "merear."],
                es: ["Y dijo Caín a Jehová: Grande es mi castigo para ser soportado."],
                en: ["Cain said to the Lord, “My punishment is more than I can bear."],
                "zh-TW": ["該隱對耶和華說：「我的刑罰太重，過於我所能當的。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "al" } },
                { term: "Dominum:", lemma: "Dominus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Maior", lemma: "magnus", details: { morphology: "Adjectivum (Comparativus)", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "mayor" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "es" } },
                { term: "iniquitas", lemma: "iniquitas", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "mi iniquidad" } },
                { term: "mea", lemma: "meus", details: { morphology: "Adjectivum possessivum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "mía" } },
                { term: "quam", lemma: "quam", details: { morphology: "Adverbium", meaning: "que" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "veniam", lemma: "venia", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "perdón" } },
                { term: "merear.", lemma: "mereor", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Deponens", meaning: "merezca" } }
            ]
        },
        {
            id: 14,
            words: {
                la: ["Ecce", "eicis", "me", "hodie", "a", "facie", "terrae,", "et", "a", "facie", "tua", "abscondar,", "et", "ero", "vagus", "et", "profugus", "in", "terra;", "omnis", "igitur", "qui", "invenerit", "me", "occidet", "me."],
                es: ["He aquí me echas hoy de la tierra, y de tu presencia me esconderé, y seré errante y extranjero en la tierra; y sucederá que cualquiera que me hallare, me matará."],
                en: ["Today you are driving me from the land, and I will be hidden from your presence; I will be a restless wanderer on the earth, and whoever finds me will kill me.”"],
                "zh-TW": ["你如今趕逐我離開這地，以致不見你面；我必流離飄蕩在地上，凡遇見我的必殺我。」"]
            },
            analysis: [
                { term: "Ecce", lemma: "ecce", details: { morphology: "Interiectio", meaning: "he aquí" } },
                { term: "eicis", lemma: "eicio", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "echas" } },
                { term: "me", lemma: "ego", details: { morphology: "Pronomen", case: "Accusativus", meaning: "me" } },
                { term: "hodie", lemma: "hodie", details: { morphology: "Adverbium", meaning: "hoy" } },
                { term: "a", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "facie", lemma: "facies", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la faz" } },
                { term: "terrae,", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "a", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "facie", lemma: "facies", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "tu presencia" } },
                { term: "tua", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "tuya" } },
                { term: "abscondar,", lemma: "abscondo", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Passivus", meaning: "me esconderé" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ero", lemma: "sum", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "seré" } },
                { term: "vagus", lemma: "vagus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "errante" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "profugus", lemma: "profugus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "fugitivo" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "terra;", lemma: "terra", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "omnis", lemma: "omnis", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "todo el que" } },
                { term: "igitur", lemma: "igitur", details: { morphology: "Conjunctio", meaning: "por lo tanto" } },
                { term: "qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "que" } },
                { term: "invenerit", lemma: "invenio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum perfectum", mood: "Indicativus", voice: "Activus", meaning: "me encuentre" } },
                { term: "me", lemma: "ego", details: { morphology: "Pronomen", case: "Accusativus", meaning: "me" } },
                { term: "occidet", lemma: "occido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "matará" } },
                { term: "me.", lemma: "ego", details: { morphology: "Pronomen", case: "Accusativus", meaning: "me" } }
            ]
        },
        {
            id: 15,
            words: {
                la: ["Dixitque", "ei", "Dominus:", "Nequaquam", "ita", "fiet,", "sed", "omnis", "qui", "occiderit", "Cain", "septuplum", "punietur.", "Posuitque", "Dominus", "Cain", "signum,", "ut", "non", "interficeret", "eum", "omnis", "qui", "invenisset", "eum."],
                es: ["Y le respondió Jehová: Ciertamente cualquiera que matare a Caín, siete veces será castigado. Entonces Jehová puso señal en Caín, para que no lo matase cualquiera que le hallara."],
                en: ["But the Lord said to him, “Not so; anyone who kills Cain will suffer vengeance seven times over.” Then the Lord set a mark on Cain so that no one who found him would kill him."],
                "zh-TW": ["耶和華對他說：「凡殺該隱的，必遭報七倍。」耶和華就給該隱立一個記號，免得人遇見他就殺他。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "ei", lemma: "is", details: { morphology: "Pronomen", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "le" } },
                { term: "Dominus:", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el Señor" } },
                { term: "Nequaquam", lemma: "nequaquam", details: { morphology: "Adverbium", meaning: "de ninguna manera" } },
                { term: "ita", lemma: "ita", details: { morphology: "Adverbium", meaning: "así" } },
                { term: "fiet,", lemma: "fio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "sucederá" } },
                { term: "sed", lemma: "sed", details: { morphology: "Conjunctio", meaning: "sino" } },
                { term: "omnis", lemma: "omnis", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "todo el que" } },
                { term: "qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "que" } },
                { term: "occiderit", lemma: "occido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum perfectum", mood: "Indicativus", voice: "Activus", meaning: "mate" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Caín" } },
                { term: "septuplum", lemma: "septuplum", details: { morphology: "Adverbium", meaning: "siete veces" } },
                { term: "punietur.", lemma: "punio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Passivus", meaning: "será castigado" } },
                { term: "Posuitque", lemma: "pono", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y puso" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el Señor" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Dativus", meaning: "a Caín" } },
                { term: "signum,", lemma: "signum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "una señal" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "non", lemma: "non", details: { morphology: "Adverbium", meaning: "no" } },
                { term: "interficeret", lemma: "interficio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "matara" } },
                { term: "eum", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "lo" } },
                { term: "omnis", lemma: "omnis", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "todo el que" } },
                { term: "qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "que" } },
                { term: "invenisset", lemma: "invenio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Plusquamperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "lo encontrara" } },
                { term: "eum.", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "lo" } }
            ]
        },
        {
            id: 16,
            words: {
                la: ["Egressusque", "Cain", "a", "facie", "Domini,", "habitavit", "profugus", "in", "terra", "ad", "orientalem", "plagam", "Eden."],
                es: ["Salió, pues, Caín de delante de Jehová, y habitó en tierra de Nod, al oriente de Edén."],
                en: ["So Cain went out from the Lord’s presence and lived in the land of Nod, east of Eden."],
                "zh-TW": ["於是該隱離開耶和華的面，去住在伊甸東邊挪得之地。"]
            },
            analysis: [
                { term: "Egressusque", lemma: "egredior", details: { morphology: "Participium + Conjunctio", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Deponens", meaning: "y habiendo salido" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "a", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "facie", lemma: "facies", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la presencia" } },
                { term: "Domini,", lemma: "Dominus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del Señor" } },
                { term: "habitavit", lemma: "habito", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "habitó" } },
                { term: "profugus", lemma: "profugus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "como fugitivo" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "terra", lemma: "terra", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "hacia" } },
                { term: "orientalem", lemma: "orientalis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "oriental" } },
                { term: "plagam", lemma: "plaga", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "región" } },
                { term: "Eden.", lemma: "Eden", details: { morphology: "Nomen proprium indeclinabile", meaning: "de Edén" } }
            ]
        },
        {
            id: 17,
            words: {
                la: ["Cognovit", "autem", "Cain", "uxorem", "suam,", "quae", "concepit", "et", "peperit", "Henoch;", "et", "aedificavit", "civitatem", "vocavitque", "nomen", "eius", "ex", "nomine", "filii", "sui,", "Henoch."],
                es: ["Y conoció Caín a su mujer, la cual concibió y dio a luz a Enoc; y edificó una ciudad, y llamó el nombre de la ciudad del nombre de su hijo, Enoc."],
                en: ["Cain made love to his wife, and she became pregnant and gave birth to Enoch. Cain was then building a city, and he named it after his son Enoch."],
                "zh-TW": ["該隱與妻子同房，他妻子就懷孕，生了以諾。該隱建造了一座城，就按著他兒子的名叫那城為以諾。"]
            },
            analysis: [
                { term: "Cognovit", lemma: "cognosco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "conoció" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "además" } },
                { term: "Cain", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } },
                { term: "uxorem", lemma: "uxor", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "esposa" } },
                { term: "suam,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la cual" } },
                { term: "concepit", lemma: "concipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "concibió" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "peperit", lemma: "pario", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dio a luz" } },
                { term: "Henoch;", lemma: "Henoch", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Enoc" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "aedificavit", lemma: "aedifico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "edificó" } },
                { term: "civitatem", lemma: "civitas", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "una ciudad" } },
                { term: "vocavitque", lemma: "voco", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y llamó" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "eius", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de ella (la ciudad)" } },
                { term: "ex", lemma: "ex/e", details: { morphology: "Praepositio", case: "Ablativus", meaning: "según" } },
                { term: "nomine", lemma: "nomen", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "filii", lemma: "filius", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de su hijo" } },
                { term: "sui,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "suyo" } },
                { term: "Henoch.", lemma: "Henoch", details: { morphology: "Nomen proprium indeclinabile", meaning: "Enoc" } }
            ]
        },
        {
            id: 18,
            words: {
                la: ["Porro", "Henoch", "genuit", "Irad,", "et", "Irad", "genuit", "Maviahel,", "et", "Maviahel", "genuit", "Mathusahel,", "et", "Mathusahel", "genuit", "Lamech."],
                es: ["Y a Enoc le nació Irad, e Irad engendró a Mehujael, y Mehujael engendró a Metusael, y Metusael engendró a Lamec."],
                en: ["To Enoch was born Irad, and Irad was the father of Mehujael, and Mehujael was the father of Methushael, and Methushael was the father of Lamech."],
                "zh-TW": ["以諾生以拿；以拿生米戶雅利；米戶雅利生瑪土撒利；瑪土撒利生拉麥。"]
            },
            analysis: [
                { term: "Porro", lemma: "porro", details: { morphology: "Adverbium", meaning: "además" } },
                { term: "Henoch", lemma: "Henoch", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Enoc" } },
                { term: "genuit", lemma: "gigno", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "engendró" } },
                { term: "Irad,", lemma: "Irad", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Irad" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "Irad", lemma: "Irad", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Irad" } },
                { term: "genuit", lemma: "gigno", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "engendró" } },
                { term: "Maviahel,", lemma: "Maviahel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Mehujael" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "Maviahel", lemma: "Maviahel", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Mehujael" } },
                { term: "genuit", lemma: "gigno", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "engendró" } },
                { term: "Mathusahel,", lemma: "Mathusahel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Metusael" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "Mathusahel", lemma: "Mathusahel", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Metusael" } },
                { term: "genuit", lemma: "gigno", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "engendró" } },
                { term: "Lamech.", lemma: "Lamech", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Lamec" } }
            ]
        },
        {
            id: 19,
            words: {
                la: ["Qui", "accepit", "uxores", "duas:", "nomen", "uni", "Ada", "et", "nomen", "alteri", "Sella."],
                es: ["Y Lamec tomó para sí dos mujeres; el nombre de la una fue Ada, y el nombre de la otra, Zila."],
                en: ["Lamech married two women, one named Adah and the other Zillah."],
                "zh-TW": ["拉麥娶了兩個妻：一個名叫亞大，一個名叫洗拉。"]
            },
            analysis: [
                { term: "Qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual" } },
                { term: "accepit", lemma: "accipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "tomó" } },
                { term: "uxores", lemma: "uxor", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "esposas" } },
                { term: "duas:", lemma: "duo", details: { morphology: "Adjectivum numerale", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "dos" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "uni", lemma: "unus", details: { morphology: "Adjectivum", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "para una" } },
                { term: "Ada", lemma: "Ada", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Ada" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "alteri", lemma: "alter", details: { morphology: "Adjectivum", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "para la otra" } },
                { term: "Sella.", lemma: "Sella", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Zila" } }
            ]
        },
        {
            id: 20,
            words: {
                la: ["Genuitque", "Ada", "Iabel,", "qui", "fuit", "pater", "habitantium", "in", "tentoriis", "atque", "pastorum."],
                es: ["Y Ada dio a luz a Jabal, el cual fue padre de los que habitan en tiendas y crían ganados."],
                en: ["Adah gave birth to Jabal; he was the father of those who live in tents and raise livestock."],
                "zh-TW": ["亞大生雅八；雅八就是住帳棚、牧養牲畜之人的祖師。"]
            },
            analysis: [
                { term: "Genuitque", lemma: "gigno", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y engendró" } },
                { term: "Ada", lemma: "Ada", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Ada" } },
                { term: "Iabel,", lemma: "Iabel", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Jabal" } },
                { term: "qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual" } },
                { term: "fuit", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "pater", lemma: "pater", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "padre" } },
                { term: "habitantium", lemma: "habito", details: { morphology: "Participium", case: "Genetivus", number: "Pluralis", gender: "Masculinum", tense: "Praesens", voice: "Activus", meaning: "de los que habitan" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "tentoriis", lemma: "tentorium", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "tiendas" } },
                { term: "atque", lemma: "atque", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "pastorum.", lemma: "pastor", details: { morphology: "Nomen", case: "Genetivus", number: "Pluralis", gender: "Masculinum", meaning: "de los pastores" } }
            ]
        },
        {
            id: 21,
            words: {
                la: ["Et", "nomen", "fratris", "eius", "Iubal;", "ipse", "fuit", "pater", "canentium", "cithara", "et", "organo."],
                es: ["Y el nombre de su hermano fue Jubal, el cual fue padre de todos los que tocan arpa y flauta."],
                en: ["His brother’s name was Jubal; he was the father of all who play stringed instruments and pipes."],
                "zh-TW": ["雅八的兄弟名叫猶八；他是一切彈琴吹簫之人的祖師。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "fratris", lemma: "frater", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de su hermano" } },
                { term: "eius", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de él" } },
                { term: "Iubal;", lemma: "Iubal", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Jubal" } },
                { term: "ipse", lemma: "ipse", details: { morphology: "Pronomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "él" } },
                { term: "fuit", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "pater", lemma: "pater", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "padre" } },
                { term: "canentium", lemma: "cano", details: { morphology: "Participium", case: "Genetivus", number: "Pluralis", gender: "Masculinum", tense: "Praesens", voice: "Activus", meaning: "de los que tocan" } },
                { term: "cithara", lemma: "cithara", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la cítara" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "organo.", lemma: "organum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "el órgano (flauta)" } }
            ]
        },
        {
            id: 22,
            words: {
                la: ["Sella", "quoque", "genuit", "Tubalcain,", "qui", "fuit", "malleator", "et", "faber", "in", "cuncta", "opera", "aeris", "et", "ferri.", "Soror", "autem", "Tubalcain,", "Noema."],
                es: ["Y Zila también dio a luz a Tubal-caín, artífice de toda obra de bronce y de hierro; y la hermana de Tubal-caín fue Naama."],
                en: ["Zillah also had a son, Tubal-Cain, who forged all kinds of tools out of bronze and iron. Tubal-Cain’s sister was Naamah."],
                "zh-TW": ["洗拉又生了土八該隱；他是打造各樣銅鐵利器的。土八該隱的妹子是拿瑪。"]
            },
            analysis: [
                { term: "Sella", lemma: "Sella", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Zila" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "genuit", lemma: "gigno", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "engendró" } },
                { term: "Tubalcain,", lemma: "Tubalcain", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "a Tubal-caín" } },
                { term: "qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual" } },
                { term: "fuit", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "malleator", lemma: "malleator", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "forjador" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "faber", lemma: "faber", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "artífice" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "cuncta", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "toda" } },
                { term: "opera", lemma: "opus", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "obra" } },
                { term: "aeris", lemma: "aes", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "de bronce" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ferri.", lemma: "ferrum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "de hierro" } },
                { term: "Soror", lemma: "soror", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la hermana" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "además" } },
                { term: "Tubalcain,", lemma: "Tubalcain", details: { morphology: "Nomen proprium", case: "Genetivus", meaning: "de Tubal-caín" } },
                { term: "Noema.", lemma: "Noema", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Naama" } }
            ]
        },
        {
            id: 23,
            words: {
                la: ["Dixitque", "Lamech", "uxoribus", "suis", "Adae", "et", "Sellae:", "Audite", "vocem", "meam,", "uxores", "Lamech;", "auscultate", "sermonem", "meum:", "quoniam", "occidi", "virum", "in", "vulnus", "meum", "et", "adulescentulum", "in", "livorem", "meum."],
                es: ["Y dijo Lamec a sus mujeres: Ada y Zila, oíd mi voz; Mujeres de Lamec, escuchad mi dicho: Que un varón mataré por mi herida, Y un joven por mi golpe."],
                en: ["Lamech said to his wives, “Adah and Zillah, listen to me; wives of Lamech, hear my words. I have killed a man for wounding me, a young man for injuring me."],
                "zh-TW": ["拉麥對他兩個妻子說：亞大、洗拉，聽我的聲音；拉麥的妻子，細聽我的話語：壯年人傷我，我把他殺了；少年人損我，我把他害了。"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "Lamech", lemma: "Lamech", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Lamec" } },
                { term: "uxoribus", lemma: "uxor", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Femininum", meaning: "a sus esposas" } },
                { term: "suis", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Dativus", number: "Pluralis", gender: "Femininum", meaning: "suyas" } },
                { term: "Adae", lemma: "Ada", details: { morphology: "Nomen proprium", case: "Dativus", meaning: "a Ada" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "Sellae:", lemma: "Sella", details: { morphology: "Nomen proprium", case: "Dativus", meaning: "a Zila" } },
                { term: "Audite", lemma: "audio", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "oíd" } },
                { term: "vocem", lemma: "vox", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "mi voz" } },
                { term: "meam,", lemma: "meus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "mía" } },
                { term: "uxores", lemma: "uxor", details: { morphology: "Nomen", case: "Vocativus", number: "Pluralis", gender: "Femininum", meaning: "esposas" } },
                { term: "Lamech;", lemma: "Lamech", details: { morphology: "Nomen proprium", case: "Genetivus", meaning: "de Lamec" } },
                { term: "auscultate", lemma: "ausculto", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Praesens", mood: "Imperativus", voice: "Activus", meaning: "escuchad" } },
                { term: "sermonem", lemma: "sermo", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "mi dicho" } },
                { term: "meum:", lemma: "meus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "mío" } },
                { term: "quoniam", lemma: "quoniam", details: { morphology: "Conjunctio", meaning: "porque" } },
                { term: "occidi", lemma: "occido", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "he matado" } },
                { term: "virum", lemma: "vir", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "un varón" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "por" } },
                { term: "vulnus", lemma: "vulnus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "mi herida" } },
                { term: "meum", lemma: "meus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "mía" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "adulescentulum", lemma: "adulescentulus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "un joven" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "por" } },
                { term: "livorem", lemma: "livor", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "mi golpe" } },
                { term: "meum.", lemma: "meus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "mío" } }
            ]
        },
        {
            id: 24,
            words: {
                la: ["Septuplum", "dabit vindicta", "de", "Cain,", "de", "Lamech", "vero", "septuagies", "septies."],
                es: ["Si siete veces será vengado Caín, Lamec en verdad setenta veces siete lo será."],
                en: ["If Cain is avenged seven times, then Lamech seventy-seven times.”"],
                "zh-TW": ["若殺該隱，遭報七倍，殺拉麥，必遭報七十七倍。"]
            },
            analysis: [
                { term: "Septuplum", lemma: "septuplum", details: { morphology: "Adverbium", meaning: "siete veces" } },
                { term: "dabit", lemma: "do", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "dará" } },
                { term: "vindicta", lemma: "vindicta", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la venganza" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "por" } },
                { term: "Cain,", lemma: "Cain", details: { morphology: "Nomen proprium indeclinabile", meaning: "Caín" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "por" } },
                { term: "Lamech", lemma: "Lamech", details: { morphology: "Nomen proprium indeclinabile", meaning: "Lamec" } },
                { term: "vero", lemma: "vero", details: { morphology: "Adverbium", meaning: "en verdad" } },
                { term: "septuagies", lemma: "septuagies", details: { morphology: "Adverbium numerale", meaning: "setenta veces" } },
                { term: "septies.", lemma: "septies", details: { morphology: "Adverbium numerale", meaning: "siete" } }
            ]
        },
        {
            id: 25,
            words: {
                la: ["Cognovit", "quoque", "adhuc", "Adam", "uxorem", "suam,", "et", "peperit", "filium", "vocavitque", "nomen", "eius", "Seth", "dicens:", "Posuit", "mihi", "Deus", "semen", "aliud", "pro", "Abel,", "quem", "occidit", "Cain."],
                es: ["Y conoció de nuevo Adán a su mujer, la cual dio a luz un hijo, y llamó su nombre Set: Porque Dios (dijo ella) me ha sustituido otro hijo en lugar de Abel, a quien mató Caín."],
                en: ["Adam made love to his wife again, and she gave birth to a son and named him Seth, saying, “God has granted me another child in place of Abel, since Cain killed him.”"],
                "zh-TW": ["亞當又與妻子同房，她就生了一個兒子，起名叫塞特，意思說：「神另給我立了一個兒子代替亞伯，因為該隱殺了他。」"]
            },
            analysis: [
                { term: "Cognovit", lemma: "cognosco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "conoció" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también, de nuevo" } },
                { term: "adhuc", lemma: "adhuc", details: { morphology: "Adverbium", meaning: "aún" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Adán" } },
                { term: "uxorem", lemma: "uxor", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "esposa" } },
                { term: "suam,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "peperit", lemma: "pario", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dio a luz" } },
                { term: "filium", lemma: "filius", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "un hijo" } },
                { term: "vocavitque", lemma: "voco", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y llamó" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "eius", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "de él" } },
                { term: "Seth", lemma: "Seth", details: { morphology: "Nomen proprium indeclinabile", meaning: "Set" } },
                { term: "dicens:", lemma: "dico", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Femininum", tense: "Praesens", voice: "Activus", meaning: "diciendo" } },
                { term: "Posuit", lemma: "pono", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "ha puesto" } },
                { term: "mihi", lemma: "ego", details: { morphology: "Pronomen", case: "Dativus", meaning: "para mí" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "semen", lemma: "semen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "descendencia" } },
                { term: "aliud", lemma: "alius", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "otra" } },
                { term: "pro", lemma: "pro", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en lugar de" } },
                { term: "Abel,", lemma: "Abel", details: { morphology: "Nomen proprium", case: "Ablativus", meaning: "Abel" } },
                { term: "quem", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "a quien" } },
                { term: "occidit", lemma: "occido", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "mató" } },
                { term: "Cain.", lemma: "Cain", details: { morphology: "Nomen proprium", case: "Nominativus", meaning: "Caín" } }
            ]
        },
        {
            id: 26,
            words: {
                la: ["Sed", "et", "Seth", "natus", "est", "filius,", "quem", "vocavit", "Enos;", "iste", "coepit", "invocare", "nomen", "Domini."],
                es: ["Y a Set también le nació un hijo, y llamó su nombre Enós. Entonces los hombres comenzaron a invocar el nombre de Jehová."],
                en: ["Seth also had a son, and he named him Enosh. At that time people began to call on the name of the Lord."],
                "zh-TW": ["塞特也生了一個兒子，起名叫以挪士。那時候，人才求告耶和華的名。"]
            },
            analysis: [
                { term: "Sed", lemma: "sed", details: { morphology: "Conjunctio", meaning: "pero" } },
                { term: "et", lemma: "et", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "Seth", lemma: "Seth", details: { morphology: "Nomen proprium", case: "Dativus", meaning: "a Set" } },
                { term: "natus", lemma: "nascor", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Deponens", meaning: "nacido" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } },
                { term: "filius,", lemma: "filius", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "un hijo" } },
                { term: "quem", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "a quien" } },
                { term: "vocavit", lemma: "voco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "llamó" } },
                { term: "Enos;", lemma: "Enos", details: { morphology: "Nomen proprium", case: "Accusativus", meaning: "Enós" } },
                { term: "iste", lemma: "iste", details: { morphology: "Pronomen demonstrativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "éste" } },
                { term: "coepit", lemma: "coepi", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comenzó" } },
                { term: "invocare", lemma: "invoco", details: { morphology: "Verbum", tense: "Praesens", mood: "Infinitivus", voice: "Activus", meaning: "a invocar" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "Domini.", lemma: "Dominus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del Señor" } }
            ]
        }
    ]
};
