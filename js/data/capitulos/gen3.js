var chapterContent = {
    id: 3,
    title: { 
        la: "Lapsus hominis", 
        es: "La Caída del hombre", 
        en: "The Fall of man", 
        "zh-TW": "人的墮落" 
    },
    introduction: {
        la: "Caput tertium Genesis est narratio cardo, quae lapsus humanitatis in peccatum describit. Introducta est figura serpentis, tentatoris callidi, qui fiduciam mulieris in Dei verbo subvertit. Actus désobédientiae — esus fructus vetiti — non est simplex delictum, sed superbiae et infidelitatis manifestatio. Consecutiones sunt immediatae et profundae: amissio innocentiae (nuditatis conscientia), alienatio a Deo (timor et occultatio), et disruptio relationum humanarum (accusatio mutua). Iudicium divinum, per maledictiones expressum, novam condicionem humanam doloris, laboris, et mortalitatis statuit. Nihilominus, in versu XV (noto sicut 'Protoevangelium'), primum promissum redemptionis futuramque de malo victoriam theologi vident.",
        es: "El capítulo 3 del Génesis es una narración fundamental que describe la caída de la humanidad en el pecado. Introduce la figura de la serpiente, el tentador astuto que subvierte la confianza de la mujer en la palabra de Dios. El acto de desobediencia —comer del fruto prohibido— no es una simple falta, sino una manifestación de orgullo e incredulidad. Las consecuencias son inmediatas y profundas: la pérdida de la inocencia (conciencia de la desnudez), la alienación de Dios (miedo y ocultamiento) y la ruptura de las relaciones humanas (culpa mutua). El juicio divino, expresado a través de las maldiciones, establece una nueva condición humana de dolor, trabajo y mortalidad. Sin embargo, en el versículo 15 (conocido como el 'Protoevangelio'), los teólogos ven la primera promesa de redención y la futura victoria sobre el mal.",
        en: "Chapter 3 of Genesis is a pivotal narrative describing humanity's fall into sin. It introduces the figure of the serpent, the cunning tempter who subverts the woman's trust in God's word. The act of disobedience—eating the forbidden fruit—is not a simple offense but a manifestation of pride and unbelief. The consequences are immediate and profound: the loss of innocence (awareness of nakedness), alienation from God (fear and hiding), and the disruption of human relationships (mutual blame). The divine judgment, expressed through curses, establishes a new human condition of pain, toil, and mortality. Nevertheless, in verse 15 (known as the 'Protoevangelium'), theologians see the first promise of redemption and future victory over evil.",
        "zh-TW": "創世紀第三章是描述人類墮入罪惡的關鍵敘事。它引入了蛇這一狡猾的試探者形象，牠顛覆了女人對上帝話語的信任。違背命令的行為——吃下禁果——不僅僅是一個簡單的過錯，而是驕傲和不信的體現。其後果是立即而深遠的：純真的喪失（意識到赤身露體）、與上帝的疏遠（恐懼和躲藏），以及人際關係的破裂（互相指責）。透過詛咒表達的神聖審判，確立了人類痛苦、勞碌和死亡的新境況。儘管如此，在第15節（被稱為「原始福音」）中，神學家們看到了救贖的第一個應許以及未來對邪惡的勝利。"
    },
    verses: [
        {
            id: 1,
            words: {
                la: ["Sed", "et", "serpens", "erat", "callidior", "cunctis", "animantibus", "terrae", "quae", "fecerat", "Dominus", "Deus.", "Qui", "dixit", "ad", "mulierem:", "Cur", "praecepit", "vobis", "Deus", "ut", "non", "comederetis", "de", "omni", "ligno", "paradisi?"],
                es: ["Pero la serpiente era astuta, más que todos los animales del campo que Jehová Dios había hecho; la cual dijo a la mujer: ¿Conque Dios os ha dicho: No comáis de todo árbol del huerto?"],
                en: ["Now the serpent was more crafty than any of the wild animals the Lord God had made. He said to the woman, “Did God really say, ‘You must not eat from any tree in the garden’?”"],
                "zh-TW": ["耶和華神所造的，惟有蛇比田野一切的活物更狡猾。蛇對女人說：「神豈是真說不許你們吃園中所有樹上的果子嗎？」"]
            },
            analysis: [
                { term: "Sed", lemma: "sed", details: { morphology: "Conjunctio", meaning: "pero" } },
                { term: "et", lemma: "et", details: { morphology: "Adverbium", meaning: "también, incluso" } },
                { term: "serpens", lemma: "serpens", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "la serpiente" } },
                { term: "erat", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Indicativus", voice: "Activus", meaning: "era" } },
                { term: "callidior", lemma: "callidus", details: { morphology: "Adjectivum (Comparativus)", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "más astuta" } },
                { term: "cunctis", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "todos" } },
                { term: "animantibus", lemma: "animans", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Neutrum", meaning: "los seres vivientes" } },
                { term: "terrae", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "que" } },
                { term: "fecerat", lemma: "facio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Plusquamperfectum", mood: "Indicativus", voice: "Activus", meaning: "había hecho" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Deus.", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual" } },
                { term: "dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "mulierem:", lemma: "mulier", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "Cur", lemma: "cur", details: { morphology: "Adverbium interrogativum", meaning: "¿Por qué?" } },
                { term: "praecepit", lemma: "praecipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "mandó" } },
                { term: "vobis", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", number: "Pluralis", meaning: "os" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "non", lemma: "non", details: { morphology: "Adverbium", meaning: "no" } },
                { term: "comederetis", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "comierais" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "omni", lemma: "omnis", details: { morphology: "Adjectivum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "todo" } },
                { term: "ligno", lemma: "lignum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "árbol" } },
                { term: "paradisi?", lemma: "paradisus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del paraíso" } }
            ]
        },
        {
            id: 2,
            words: {
                la: ["Cui", "respondit", "mulier:", "De", "fructu", "lignorum,", "quae", "sunt", "in", "paradiso,", "vescimur:"],
                es: ["Y la mujer respondió a la serpiente: Del fruto de los árboles del huerto podemos comer;"],
                en: ["The woman said to the serpent, “We may eat fruit from the trees in the garden,"],
                "zh-TW": ["女人對蛇說：「園中樹上的果子，我們可以吃，"]
            },
            analysis: [
                { term: "Cui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "al cual, a él" } },
                { term: "respondit", lemma: "respondeo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "respondió" } },
                { term: "mulier:", lemma: "mulier", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "De", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "fructu", lemma: "fructus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "fruto" } },
                { term: "lignorum,", lemma: "lignum", details: { morphology: "Nomen", case: "Genetivus", number: "Pluralis", gender: "Neutrum", meaning: "de los árboles" } },
                { term: "quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Pluralis", gender: "Neutrum", meaning: "que" } },
                { term: "sunt", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "están" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "paradiso,", lemma: "paradisus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el paraíso" } },
                { term: "vescimur:", lemma: "vescor", details: { morphology: "Verbum", person: "1st", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Deponens", meaning: "comemos" } }
            ]
        },
        {
            id: 3,
            words: {
                la: ["de", "fructu", "vero", "ligni,", "quod", "est", "in", "medio", "paradisi,", "praecepit", "nobis", "Deus", "ne", "comederemus", "et", "ne", "tangeremus", "illud,", "ne", "forte", "moriamur."],
                es: ["pero del fruto del árbol que está en medio del huerto dijo Dios: No comeréis de él, ni le tocaréis, para que no muráis."],
                en: ["but God did say, ‘You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.’”"],
                "zh-TW": ["惟有園當中那棵樹上的果子，神曾說：『你們不可吃，也不可摸，免得你們死。』」"]
            },
            analysis: [
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "fructu", lemma: "fructus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "fruto" } },
                { term: "vero", lemma: "vero", details: { morphology: "Adverbium", meaning: "pero" } },
                { term: "ligni,", lemma: "lignum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del árbol" } },
                { term: "quod", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "que" } },
                { term: "est", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "está" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "medio", lemma: "medium", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "el medio" } },
                { term: "paradisi,", lemma: "paradisus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del paraíso" } },
                { term: "praecepit", lemma: "praecipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "mandó" } },
                { term: "nobis", lemma: "nos", details: { morphology: "Pronomen", case: "Dativus", number: "Pluralis", meaning: "nos" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "ne", lemma: "ne", details: { morphology: "Conjunctio", meaning: "que no" } },
                { term: "comederemus", lemma: "comedo", details: { morphology: "Verbum", person: "1st", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "comiéramos" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ne", lemma: "ne", details: { morphology: "Conjunctio", meaning: "que no" } },
                { term: "tangeremus", lemma: "tango", details: { morphology: "Verbum", person: "1st", number: "Pluralis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "tocáramos" } },
                { term: "illud,", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "lo" } },
                { term: "ne", lemma: "ne", details: { morphology: "Conjunctio", meaning: "para que no" } },
                { term: "forte", lemma: "forte", details: { morphology: "Adverbium", meaning: "acaso" } },
                { term: "moriamur.", lemma: "morior", details: { morphology: "Verbum", person: "1st", number: "Pluralis", tense: "Praesens", mood: "Subiunctivus", voice: "Deponens", meaning: "muramos" } }
            ]
        },
        {
            id: 4,
            words: {
                la: ["Dixit", "autem", "serpens", "ad", "mulierem:", "Nequaquam", "morte", "moriemini."],
                es: ["Entonces la serpiente dijo a la mujer: No moriréis;"],
                en: ["“You will not certainly die,” the serpent said to the woman."],
                "zh-TW": ["蛇對女人說：「你們不一定死；"]
            },
            analysis: [
                { term: "Dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "autem", lemma: "autem", details: { morphology: "Conjunctio", meaning: "pero" } },
                { term: "serpens", lemma: "serpens", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "la serpiente" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "mulierem:", lemma: "mulier", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "Nequaquam", lemma: "nequaquam", details: { morphology: "Adverbium", meaning: "de ninguna manera" } },
                { term: "morte", lemma: "mors", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "de muerte" } },
                { term: "moriemini.", lemma: "morior", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "moriréis" } }
            ]
        },
        {
            id: 5,
            words: {
                la: ["Scit", "enim", "Deus", "quod", "in", "quocumque", "die", "comederitis", "ex", "eo,", "aperientur", "oculi", "vestri,", "et", "eritis", "sicut", "dii,", "scientes", "bonum", "et", "malum."],
                es: ["sino que sabe Dios que el día que comáis de él, serán abiertos vuestros ojos, y seréis como Dios, sabiendo el bien y el mal."],
                en: ["“For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil.”"],
                "zh-TW": ["因為神知道，你們吃的日子眼睛就明亮了，你們便如神能知道善惡。」"]
            },
            analysis: [
                { term: "Scit", lemma: "scio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "sabe" } },
                { term: "enim", lemma: "enim", details: { morphology: "Conjunctio", meaning: "pues" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "quocumque", lemma: "quicumque", details: { morphology: "Pronomen indefinitum", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "cualquier" } },
                { term: "die", lemma: "dies", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "día" } },
                { term: "comederitis", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Futurum perfectum", mood: "Indicativus", voice: "Activus", meaning: "comiereis" } },
                { term: "ex", lemma: "ex/e", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "eo,", lemma: "is", details: { morphology: "Pronomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "él (fruto)" } },
                { term: "aperientur", lemma: "aperio", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Futurum", mood: "Indicativus", voice: "Passivus", meaning: "serán abiertos" } },
                { term: "oculi", lemma: "oculus", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Masculinum", meaning: "los ojos" } },
                { term: "vestri,", lemma: "vester", details: { morphology: "Adjectivum possessivum", case: "Nominativus", number: "Pluralis", gender: "Masculinum", meaning: "vuestros" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "eritis", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Pluralis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "seréis" } },
                { term: "sicut", lemma: "sicut", details: { morphology: "Adverbium", meaning: "como" } },
                { term: "dii,", lemma: "deus", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Masculinum", meaning: "dioses" } },
                { term: "scientes", lemma: "scio", details: { morphology: "Participium", case: "Nominativus", number: "Pluralis", gender: "Masculinum", tense: "Praesens", voice: "Activus", meaning: "sabiendo" } },
                { term: "bonum", lemma: "bonum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el bien" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "malum.", lemma: "malum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el mal" } }
            ]
        },
        {
            id: 6,
            words: {
                la: ["Vidit", "igitur", "mulier", "quod", "bonum", "esset", "lignum", "ad", "vescendum,", "et", "pulchrum", "oculis,", "aspectuque", "delectabile:", "et", "tulit", "de", "fructu", "illius,", "et", "comedit,", "deditque", "viro", "suo,", "qui", "comedit."],
                es: ["Y vio la mujer que el árbol era bueno para comer, y que era agradable a los ojos, y árbol codiciable para alcanzar la sabiduría; y tomó de su fruto, y comió; y dio también a su marido, el cual comió así como ella."],
                en: ["When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it."],
                "zh-TW": ["於是女人見那棵樹的果子好作食物，也悅人的眼目，且是可喜愛的，能使人有智慧，就摘下果子來吃了，又給她丈夫，她丈夫也吃了。"]
            },
            analysis: [
                { term: "Vidit", lemma: "video", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vio" } },
                { term: "igitur", lemma: "igitur", details: { morphology: "Conjunctio", meaning: "entonces" } },
                { term: "mulier", lemma: "mulier", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "bonum", lemma: "bonus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "bueno" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "lignum", lemma: "lignum", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "el árbol" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "para" } },
                { term: "vescendum,", lemma: "vescor", details: { morphology: "Gerundium", case: "Accusativus", meaning: "comer" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "pulchrum", lemma: "pulcher", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "hermoso" } },
                { term: "oculis,", lemma: "oculus", details: { morphology: "Nomen", case: "Dativus", number: "Pluralis", gender: "Masculinum", meaning: "a los ojos" } },
                { term: "aspectuque", lemma: "aspectus", details: { morphology: "Nomen + Conjunctio", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "y en su aspecto" } },
                { term: "delectabile:", lemma: "delectabilis", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Neutrum", meaning: "deleitable" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tulit", lemma: "fero", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "tomó" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "fructu", lemma: "fructus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el fruto" } },
                { term: "illius,", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "de aquel" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "comedit,", lemma: "comedo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comió" } },
                { term: "deditque", lemma: "do", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dio" } },
                { term: "viro", lemma: "vir", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "a su marido" } },
                { term: "suo,", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "su" } },
                { term: "qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual" } },
                { term: "comedit.", lemma: "comedo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comió" } }
            ]
        },
        {
            id: 7,
            words: {
                la: ["Et", "aperti", "sunt", "oculi", "amborum;", "cumque", "cognovissent", "se", "esse", "nudos,", "consuerunt", "folia", "fici", "et", "fecerunt", "sibi", "perizomata."],
                es: ["Entonces fueron abiertos los ojos de ambos, y conocieron que estaban desnudos; entonces cosieron hojas de higuera, y se hicieron delantales."],
                en: ["Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves."],
                "zh-TW": ["他們二人的眼睛就明亮了，才知道自己是赤身露體，便拿無花果樹的葉子為自己編做裙子。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "aperti", lemma: "aperio", details: { morphology: "Participium", case: "Nominativus", number: "Pluralis", gender: "Masculinum", tense: "Perfectum", voice: "Passivus", meaning: "abiertos" } },
                { term: "sunt", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fueron" } },
                { term: "oculi", lemma: "oculus", details: { morphology: "Nomen", case: "Nominativus", number: "Pluralis", gender: "Masculinum", meaning: "los ojos" } },
                { term: "amborum;", lemma: "ambo", details: { morphology: "Adjectivum numerale", case: "Genetivus", number: "Pluralis", gender: "Masculinum", meaning: "de ambos" } },
                { term: "cumque", lemma: "cum", details: { morphology: "Conjunctio + Enclitic", meaning: "y como" } },
                { term: "cognovissent", lemma: "cognosco", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Plusquamperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "hubieron conocido" } },
                { term: "se", lemma: "sui", details: { morphology: "Pronomen reflexivum", case: "Accusativus", meaning: "que ellos" } },
                { term: "esse", lemma: "sum", details: { morphology: "Verbum", tense: "Praesens", mood: "Infinitivus", voice: "Activus", meaning: "estaban" } },
                { term: "nudos,", lemma: "nudus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "desnudos" } },
                { term: "consuerunt", lemma: "consuo", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "cosieron" } },
                { term: "folia", lemma: "folium", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "hojas" } },
                { term: "fici", lemma: "ficus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de higuera" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "fecerunt", lemma: "facio", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "hicieron" } },
                { term: "sibi", lemma: "sui", details: { morphology: "Pronomen reflexivum", case: "Dativus", meaning: "para sí" } },
                { term: "perizomata.", lemma: "perizoma", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "delantales" } }
            ]
        },
        {
            id: 8,
            words: {
                la: ["Et", "cum", "audissent", "vocem", "Domini", "Dei", "deambulantis", "in", "paradiso", "ad", "auram", "post", "meridiem,", "abscondit", "se", "Adam", "et", "uxor", "eius", "a", "facie", "Domini", "Dei", "in", "medio", "ligni", "paradisi."],
                es: ["Y oyeron la voz de Jehová Dios que se paseaba en el huerto, al aire del día; y el hombre y su mujer se escondieron de la presencia de Jehová Dios entre los árboles del huerto."],
                en: ["Then the man and his wife heard the sound of the Lord God as he was walking in the garden in the cool of the day, and they hid from the Lord God among the trees of the garden."],
                "zh-TW": ["天起了涼風，耶和華神在園中行走。那人和他妻子聽見神的聲音，就藏在園裏的樹木中，躲避耶和華神的面。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "cum", lemma: "cum", details: { morphology: "Conjunctio", meaning: "cuando" } },
                { term: "audissent", lemma: "audio", details: { morphology: "Verbum", person: "3rd", number: "Pluralis", tense: "Plusquamperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "oyeron" } },
                { term: "vocem", lemma: "vox", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la voz" } },
                { term: "Domini", lemma: "Dominus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del Señor" } },
                { term: "Dei", lemma: "Deus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "deambulantis", lemma: "deambulo", details: { morphology: "Participium", case: "Genetivus", number: "Singularis", gender: "Masculinum", tense: "Praesens", voice: "Activus", meaning: "que se paseaba" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "paradiso", lemma: "paradisus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el paraíso" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a, con" } },
                { term: "auram", lemma: "aura", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la brisa" } },
                { term: "post", lemma: "post", details: { morphology: "Praepositio", case: "Accusativus", meaning: "después de" } },
                { term: "meridiem,", lemma: "meridies", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "mediodía" } },
                { term: "abscondit", lemma: "abscondo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "escondió" } },
                { term: "se", lemma: "sui", details: { morphology: "Pronomen reflexivum", case: "Accusativus", meaning: "se" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", meaning: "Adán" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "uxor", lemma: "uxor", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "esposa" } },
                { term: "eius", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "su" } },
                { term: "a", lemma: "a/ab", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "facie", lemma: "facies", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la presencia, el rostro" } },
                { term: "Domini", lemma: "Dominus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del Señor" } },
                { term: "Dei", lemma: "Deus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "medio", lemma: "medium", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "medio" } },
                { term: "ligni", lemma: "lignum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del arbolado" } },
                { term: "paradisi.", lemma: "paradisus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del paraíso" } }
            ]
        },
        {
            id: 9,
            words: {
                la: ["Vocavitque", "Dominus", "Deus", "Adam", "et", "dixit", "ei:", "Ubi", "es?"],
                es: ["Mas Jehová Dios llamó al hombre, y le dijo: ¿Dónde estás tú?"],
                en: ["But the Lord God called to the man, “Where are you?”"],
                "zh-TW": ["耶和華神呼喚那人，對他說：「你在哪裏？」"]
            },
            analysis: [
                { term: "Vocavitque", lemma: "voco", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y llamó" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", case: "Accusativus", meaning: "a Adán" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "ei:", lemma: "is", details: { morphology: "Pronomen", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "le" } },
                { term: "Ubi", lemma: "ubi", details: { morphology: "Adverbium interrogativum", meaning: "¿Dónde?" } },
                { term: "es?", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "estás" } }
            ]
        },
        {
            id: 10,
            words: {
                la: ["Qui", "ait:", "Vocem", "tuam", "audivi", "in", "paradiso", "et", "timui,", "eo", "quod", "nudus", "essem,", "et", "abscondi", "me."],
                es: ["Y él respondió: Oí tu voz en el huerto, y tuve miedo, porque estaba desnudo; y me escondí."],
                en: ["He answered, “I heard you in the garden, and I was afraid because I was naked; so I hid.”"],
                "zh-TW": ["他說：「我在園中聽見你的聲音，我就害怕；因為我赤身露體，我便藏了。」"]
            },
            analysis: [
                { term: "Qui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "el cual, él" } },
                { term: "ait:", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Vocem", lemma: "vox", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "voz" } },
                { term: "tuam", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "tu" } },
                { term: "audivi", lemma: "audio", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "oí" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "paradiso", lemma: "paradisus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el paraíso" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "timui,", lemma: "timeo", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "tuve miedo" } },
                { term: "eo", lemma: "eo", details: { morphology: "Adverbium", meaning: "por esto" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "porque" } },
                { term: "nudus", lemma: "nudus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "desnudo" } },
                { term: "essem,", lemma: "sum", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "estaba" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "abscondi", lemma: "abscondo", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "escondí" } },
                { term: "me.", lemma: "ego", details: { morphology: "Pronomen", case: "Accusativus", meaning: "me" } }
            ]
        },
        {
            id: 11,
            words: {
                la: ["Cui", "dixit:", "Quis", "enim", "indicavit", "tibi", "quod", "nudus", "esses,", "nisi", "quod", "ex", "ligno,", "de", "quo", "praeceperam", "tibi", "ne", "comederes,", "comedisti?"],
                es: ["Y Dios le dijo: ¿Quién te enseñó que estabas desnudo? ¿Has comido del árbol de que yo te mandé no comieses?"],
                en: ["And he said, “Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?”"],
                "zh-TW": ["耶和華說：「誰告訴你赤身露體呢？莫非你吃了我吩咐你不可吃的那樹上的果子嗎？」"]
            },
            analysis: [
                { term: "Cui", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Dativus", number: "Singularis", gender: "Masculinum", meaning: "al cual, a él" } },
                { term: "dixit:", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Quis", lemma: "quis", details: { morphology: "Pronomen interrogativum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "¿Quién?" } },
                { term: "enim", lemma: "enim", details: { morphology: "Conjunctio", meaning: "pues" } },
                { term: "indicavit", lemma: "indico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "indicó, dijo" } },
                { term: "tibi", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", number: "Singularis", meaning: "te" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "que" } },
                { term: "nudus", lemma: "nudus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "desnudo" } },
                { term: "esses,", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "estabas" } },
                { term: "nisi", lemma: "nisi", details: { morphology: "Conjunctio", meaning: "sino" } },
                { term: "quod", lemma: "quod", details: { morphology: "Adverbium", meaning: "que" } },
                { term: "ex", lemma: "ex/e", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "ligno,", lemma: "lignum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "árbol" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "quo", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "cual" } },
                { term: "praeceperam", lemma: "praecipio", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Plusquamperfectum", mood: "Indicativus", voice: "Activus", meaning: "había mandado" } },
                { term: "tibi", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", number: "Singularis", meaning: "te" } },
                { term: "ne", lemma: "ne", details: { morphology: "Conjunctio", meaning: "que no" } },
                { term: "comederes,", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "comieras" } },
                { term: "comedisti?", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comiste" } }
            ]
        },
        {
            id: 12,
            words: {
                la: ["Dixitque", "Adam:", "Mulier,", "quam", "dedisti", "mihi", "sociam,", "dedit", "mihi", "de", "ligno,", "et", "comedi."],
                es: ["Y el hombre respondió: La mujer que me diste por compañera me dio del árbol, y yo comí."],
                en: ["The man said, “The woman you put here with me—she gave me some fruit from the tree, and I ate it.”"],
                "zh-TW": ["那人說：「你所賜給我、與我同居的女人，她把那樹上的果子給我，我就吃了。」"]
            },
            analysis: [
                { term: "Dixitque", lemma: "dico", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y dijo" } },
                { term: "Adam:", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", meaning: "Adán" } },
                { term: "Mulier,", lemma: "mulier", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "quam", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "que" } },
                { term: "dedisti", lemma: "do", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "diste" } },
                { term: "mihi", lemma: "ego", details: { morphology: "Pronomen", case: "Dativus", meaning: "me" } },
                { term: "sociam,", lemma: "socius", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "compañera" } },
                { term: "dedit", lemma: "do", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dio" } },
                { term: "mihi", lemma: "ego", details: { morphology: "Pronomen", case: "Dativus", meaning: "me" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "ligno,", lemma: "lignum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "árbol" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "comedi.", lemma: "comedo", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comí" } }
            ]
        },
        {
            id: 13,
            words: {
                la: ["Et", "dixit", "Dominus", "Deus", "ad", "mulierem:", "Quare", "hoc", "fecisti?", "Quae", "respondit:", "Serpens", "decepit", "me", "et", "comedi."],
                es: ["Entonces Jehová Dios dijo a la mujer: ¿Qué es lo que has hecho? Y dijo la mujer: La serpiente me engañó, y comí."],
                en: ["Then the Lord God said to the woman, “What is this you have done?” The woman said, “The serpent deceived me, and I ate.”"],
                "zh-TW": ["耶和華神對女人說：「你做的是甚麼事呢？」女人說：「那蛇引誘我，我就吃了。」"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "dixit", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "mulierem:", lemma: "mulier", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "Quare", lemma: "quare", details: { morphology: "Adverbium interrogativum", meaning: "¿Por qué?" } },
                { term: "hoc", lemma: "hic", details: { morphology: "Pronomen demonstrativum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "esto" } },
                { term: "fecisti?", lemma: "facio", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "hiciste" } },
                { term: "Quae", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la cual, ella" } },
                { term: "respondit:", lemma: "respondeo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "respondió" } },
                { term: "Serpens", lemma: "serpens", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "la serpiente" } },
                { term: "decepit", lemma: "decipio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "engañó" } },
                { term: "me", lemma: "ego", details: { morphology: "Pronomen", case: "Accusativus", meaning: "me" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "comedi.", lemma: "comedo", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comí" } }
            ]
        },
        {
            id: 14,
            words: {
                la: ["Et", "ait", "Dominus", "Deus", "ad", "serpentem:", "Quia", "fecisti", "hoc,", "maledictus", "es", "inter", "omnia", "animantia", "et", "bestias", "terrae;", "super", "pectus", "tuum", "gradieris", "et", "terram", "comedes", "cunctis", "diebus", "vitae", "tuae."],
                es: ["Y Jehová Dios dijo a la serpiente: Por cuanto esto hiciste, maldita serás entre todas las bestias y entre todos los animales del campo; sobre tu pecho andarás, y polvo comerás todos los días de tu vida."],
                en: ["So the Lord God said to the serpent, “Because you have done this, “Cursed are you above all livestock and all wild animals! You will crawl on your belly and you will eat dust all the days of your life."],
                "zh-TW": ["耶和華神對蛇說：你既做了這事，就必受咒詛，比一切的牲畜野獸更甚；你必用肚子行走，終身吃土。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ait", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "serpentem:", lemma: "serpens", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "la serpiente" } },
                { term: "Quia", lemma: "quia", details: { morphology: "Conjunctio", meaning: "porque" } },
                { term: "fecisti", lemma: "facio", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "hiciste" } },
                { term: "hoc,", lemma: "hic", details: { morphology: "Pronomen demonstrativum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "esto" } },
                { term: "maledictus", lemma: "maledico", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Passivus", meaning: "maldito" } },
                { term: "es", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "eres" } },
                { term: "inter", lemma: "inter", details: { morphology: "Praepositio", case: "Accusativus", meaning: "entre" } },
                { term: "omnia", lemma: "omnis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "todos" } },
                { term: "animantia", lemma: "animans", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Neutrum", meaning: "los seres" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "bestias", lemma: "bestia", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "las bestias" } },
                { term: "terrae;", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } },
                { term: "super", lemma: "super", details: { morphology: "Praepositio", case: "Accusativus", meaning: "sobre" } },
                { term: "pectus", lemma: "pectus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "pecho" } },
                { term: "tuum", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "tu" } },
                { term: "gradieris", lemma: "gradior", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "andarás" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "terram", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "tierra, polvo" } },
                { term: "comedes", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "comerás" } },
                { term: "cunctis", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "todos" } },
                { term: "diebus", lemma: "dies", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "los días" } },
                { term: "vitae", lemma: "vita", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la vida" } },
                { term: "tuae.", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "tuya" } }
            ]
        },
        {
            id: 15,
            words: {
                la: ["Inimicitias", "ponam", "inter", "te", "et", "mulierem,", "et", "semen", "tuum", "et", "semen", "illius:", "ipsa", "conteret", "caput", "tuum,", "et", "tu", "insidiaberis", "calcaneo", "eius."],
                es: ["Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar."],
                en: ["And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.”"],
                "zh-TW": ["我又要叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。女人的後裔要傷你的頭；你要傷他的腳跟。」"]
            },
            analysis: [
                { term: "Inimicitias", lemma: "inimicitia", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "enemistad" } },
                { term: "ponam", lemma: "pono", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "pondré" } },
                { term: "inter", lemma: "inter", details: { morphology: "Praepositio", case: "Accusativus", meaning: "entre" } },
                { term: "te", lemma: "tu", details: { morphology: "Pronomen", case: "Accusativus", meaning: "ti" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "mulierem,", lemma: "mulier", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la mujer" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "semen", lemma: "semen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "simiente, descendencia" } },
                { term: "tuum", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "tu" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "semen", lemma: "semen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "simiente" } },
                { term: "illius:", lemma: "ille", details: { morphology: "Pronomen demonstrativum", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de ella" } },
                { term: "ipsa", lemma: "ipse", details: { morphology: "Pronomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "ella, ésta" } },
                { term: "conteret", lemma: "contero", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "aplastará" } },
                { term: "caput", lemma: "caput", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "cabeza" } },
                { term: "tuum,", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "tu" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tu", lemma: "tu", details: { morphology: "Pronomen", case: "Nominativus", meaning: "tú" } },
                { term: "insidiaberis", lemma: "insidior", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "acecharás, herirás" } },
                { term: "calcaneo", lemma: "calcaneum", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Neutrum", meaning: "al talón" } },
                { term: "eius.", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de ella" } }
            ]
        },
        {
            id: 16,
            words: {
                la: ["Mulieri", "quoque", "dixit:", "Multiplicabo", "aerumnas", "tuas", "et", "conceptus", "tuos:", "in", "dolore", "paries", "filios,", "et", "sub", "viri", "potestate", "eris,", "et", "ipse", "dominabitur", "tui."],
                es: ["A la mujer dijo: Multiplicaré en gran manera los dolores en tus preñeces; con dolor darás a luz los hijos; y tu deseo será para tu marido, y él se enseñoreará de ti."],
                en: ["To the woman he said, “I will make your pains in childbearing very severe; with painful labor you will give birth to children. Your desire will be for your husband, and he will rule over you.”"],
                "zh-TW": ["又對女人說：我必多多加增你懷胎的苦楚；你生產兒女必多受苦楚。你必戀慕你丈夫；你丈夫必管轄你。"]
            },
            analysis: [
                { term: "Mulieri", lemma: "mulier", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "a la mujer" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "dixit:", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Multiplicabo", lemma: "multiplico", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "multiplicaré" } },
                { term: "aerumnas", lemma: "aerumna", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "dolores, sufrimientos" } },
                { term: "tuas", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "tus" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "conceptus", lemma: "conceptus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "concepciones" } },
                { term: "tuos:", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "tus" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "con" } },
                { term: "dolore", lemma: "dolor", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "dolor" } },
                { term: "paries", lemma: "pario", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "darás a luz" } },
                { term: "filios,", lemma: "filius", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "hijos" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "sub", lemma: "sub", details: { morphology: "Praepositio", case: "Ablativus", meaning: "bajo" } },
                { term: "viri", lemma: "vir", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del varón" } },
                { term: "potestate", lemma: "potestas", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "potestad" } },
                { term: "eris,", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "estarás" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ipse", lemma: "ipse", details: { morphology: "Pronomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "él mismo" } },
                { term: "dominabitur", lemma: "dominor", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "dominará" } },
                { term: "tui.", lemma: "tu", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", meaning: "de ti" } }
            ]
        },
        {
            id: 17,
            words: {
                la: ["Ad", "Adam", "vero", "dixit:", "Quia", "audisti", "vocem", "uxoris", "tuae", "et", "comedisti", "de", "ligno,", "ex", "quo", "praeceperam", "tibi", "ne", "comederes,", "maledicta", "terra", "in", "opere", "tuo;", "in", "laboribus", "comedes", "ex", "ea", "cunctis", "diebus", "vitae", "tuae."],
                es: ["Y al hombre dijo: Por cuanto obedeciste a la voz de tu mujer, y comiste del árbol de que te mandé diciendo: No comerás de él; maldita será la tierra por tu causa; con dolor comerás de ella todos los días de tu vida."],
                en: ["To Adam he said, “Because you listened to your wife and ate fruit from the tree about which I commanded you, ‘You must not eat from it,’ “Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life."],
                "zh-TW": ["又對亞當說：你既聽從妻子的話，吃了我所吩咐你不可吃的那樹上的果子，地必為你的緣故受咒詛；你必終身勞苦才能從地裏得吃的。"]
            },
            analysis: [
                { term: "Ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", meaning: "Adán" } },
                { term: "vero", lemma: "vero", details: { morphology: "Adverbium", meaning: "en verdad, pero" } },
                { term: "dixit:", lemma: "dico", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Quia", lemma: "quia", details: { morphology: "Conjunctio", meaning: "porque" } },
                { term: "audisti", lemma: "audio", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "escuchaste" } },
                { term: "vocem", lemma: "vox", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la voz" } },
                { term: "uxoris", lemma: "uxor", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de tu esposa" } },
                { term: "tuae", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "tuya" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "comedisti", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "comiste" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "ligno,", lemma: "lignum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "árbol" } },
                { term: "ex", lemma: "ex/e", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "quo", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "cual" } },
                { term: "praeceperam", lemma: "praecipio", details: { morphology: "Verbum", person: "1st", number: "Singularis", tense: "Plusquamperfectum", mood: "Indicativus", voice: "Activus", meaning: "había mandado" } },
                { term: "tibi", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", meaning: "te" } },
                { term: "ne", lemma: "ne", details: { morphology: "Conjunctio", meaning: "que no" } },
                { term: "comederes,", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "comieras" } },
                { term: "maledicta", lemma: "maledico", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Femininum", tense: "Perfectum", voice: "Passivus", meaning: "maldita" } },
                { term: "terra", lemma: "terra", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "en" } },
                { term: "opere", lemma: "opus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "tu obra, tu causa" } },
                { term: "tuo;", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "tuya" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "con" } },
                { term: "laboribus", lemma: "labor", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "fatigas" } },
                { term: "comedes", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "comerás" } },
                { term: "ex", lemma: "ex/e", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "ea", lemma: "is", details: { morphology: "Pronomen", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "ella" } },
                { term: "cunctis", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "todos" } },
                { term: "diebus", lemma: "dies", details: { morphology: "Nomen", case: "Ablativus", number: "Pluralis", gender: "Masculinum", meaning: "los días" } },
                { term: "vitae", lemma: "vita", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la vida" } },
                { term: "tuae.", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "tuya" } }
            ]
        },
        {
            id: 18,
            words: {
                la: ["Spinas", "et", "tribulos", "germinabit", "tibi,", "et", "comedes", "herbas", "terrae."],
                es: ["Espinos y cardos te producirá, y comerás plantas del campo."],
                en: ["It will produce thorns and thistles for you, and you will eat the plants of the field."],
                "zh-TW": ["地必給你長出荊棘和蒺藜來；你也要吃田間的菜蔬。"]
            },
            analysis: [
                { term: "Spinas", lemma: "spina", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "espinas" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "tribulos", lemma: "tribulus", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "cardos" } },
                { term: "germinabit", lemma: "germino", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "producirá" } },
                { term: "tibi,", lemma: "tu", details: { morphology: "Pronomen", case: "Dativus", meaning: "para ti" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "comedes", lemma: "comedo", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Activus", meaning: "comerás" } },
                { term: "herbas", lemma: "herba", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "plantas" } },
                { term: "terrae.", lemma: "terra", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la tierra" } }
            ]
        },
        {
            id: 19,
            words: {
                la: ["In", "sudore", "vultus", "tui", "vesceris", "pane,", "donec", "revertaris", "in", "terram", "de", "qua", "sumptus", "es:", "quia", "pulvis", "es", "et", "in", "pulverem", "reverteris."],
                es: ["Con el sudor de tu rostro comerás el pan hasta que vuelvas a la tierra, porque de ella fuiste tomado; pues polvo eres, y al polvo volverás."],
                en: ["By the sweat of your brow you will eat your food until you return to the ground, since from it you were taken; for dust you are and to dust you will return.”"],
                "zh-TW": ["你必汗流滿面才得糊口，直到你歸了土，因為你是從土而出的。你本是塵土，仍要歸於塵土。」"]
            },
            analysis: [
                { term: "In", lemma: "in", details: { morphology: "Praepositio", case: "Ablativus", meaning: "con" } },
                { term: "sudore", lemma: "sudor", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el sudor" } },
                { term: "vultus", lemma: "vultus", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "del rostro" } },
                { term: "tui", lemma: "tuus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "tuyo" } },
                { term: "vesceris", lemma: "vescor", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "comerás" } },
                { term: "pane,", lemma: "panis", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "pan" } },
                { term: "donec", lemma: "donec", details: { morphology: "Conjunctio", meaning: "hasta que" } },
                { term: "revertaris", lemma: "revertor", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Deponens", meaning: "vuelvas" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "terram", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "qua", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la cual" } },
                { term: "sumptus", lemma: "sumo", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Passivus", meaning: "tomado" } },
                { term: "es:", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fuiste" } },
                { term: "quia", lemma: "quia", details: { morphology: "Conjunctio", meaning: "pues" } },
                { term: "pulvis", lemma: "pulvis", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "polvo" } },
                { term: "es", lemma: "sum", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "eres" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "a" } },
                { term: "pulverem", lemma: "pulvis", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "polvo" } },
                { term: "reverteris.", lemma: "revertor", details: { morphology: "Verbum", person: "2nd", number: "Singularis", tense: "Futurum", mood: "Indicativus", voice: "Deponens", meaning: "volverás" } }
            ]
        },
        {
            id: 20,
            words: {
                la: ["Et", "vocavit", "Adam", "nomen", "uxoris", "suae", "Heva,", "eo", "quod", "mater", "esset", "cunctorum", "viventium."],
                es: ["Y llamó Adán el nombre de su mujer, Eva, por cuanto ella era madre de todos los vivientes."],
                en: ["Adam named his wife Eve, because she would become the mother of all the living."],
                "zh-TW": ["亞當給他妻子起名叫夏娃，因為她是眾生之母。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vocavit", lemma: "voco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "llamó" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", meaning: "Adán" } },
                { term: "nomen", lemma: "nomen", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el nombre" } },
                { term: "uxoris", lemma: "uxor", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de su esposa" } },
                { term: "suae", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "Heva,", lemma: "Heva", details: { morphology: "Nomen proprium", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "Eva" } },
                { term: "eo", lemma: "eo", details: { morphology: "Adverbium", meaning: "por esto" } },
                { term: "quod", lemma: "quod", details: { morphology: "Conjunctio", meaning: "porque" } },
                { term: "mater", lemma: "mater", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Femininum", meaning: "madre" } },
                { term: "esset", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Activus", meaning: "era" } },
                { term: "cunctorum", lemma: "cunctus", details: { morphology: "Adjectivum", case: "Genetivus", number: "Pluralis", gender: "Masculinum", meaning: "de todos" } },
                { term: "viventium.", lemma: "vivo", details: { morphology: "Participium", case: "Genetivus", number: "Pluralis", gender: "Masculinum", meaning: "los vivientes" } }
            ]
        },
        {
            id: 21,
            words: {
                la: ["Fecit", "quoque", "Dominus", "Deus", "Adae", "et", "uxori", "eius", "tunicas", "pelliceas", "et", "induit", "eos."],
                es: ["Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió."],
                en: ["The Lord God made garments of skin for Adam and his wife and clothed them."],
                "zh-TW": ["耶和華神為亞當和他妻子用皮子做衣服給他們穿。"]
            },
            analysis: [
                { term: "Fecit", lemma: "facio", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "hizo" } },
                { term: "quoque", lemma: "quoque", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "Adae", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", case: "Dativus", meaning: "para Adán" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "uxori", lemma: "uxor", details: { morphology: "Nomen", case: "Dativus", number: "Singularis", gender: "Femininum", meaning: "para su esposa" } },
                { term: "eius", lemma: "is", details: { morphology: "Pronomen", case: "Genetivus", number: "Singularis", gender: "Masculinum", meaning: "su" } },
                { term: "tunicas", lemma: "tunica", details: { morphology: "Nomen", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "túnicas" } },
                { term: "pelliceas", lemma: "pelliceus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Pluralis", gender: "Femininum", meaning: "de piel" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "induit", lemma: "induo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "vistió" } },
                { term: "eos.", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Pluralis", gender: "Masculinum", meaning: "los" } }
            ]
        },
        {
            id: 22,
            words: {
                la: ["Et", "ait:", "Ecce", "Adam", "quasi", "unus", "ex", "nobis", "factus", "est,", "sciens", "bonum", "et", "malum;", "nunc", "ergo,", "ne", "forte", "mittat", "manum", "suam", "et", "sumat", "etiam", "de", "ligno", "vitae", "et", "comedat", "et", "vivat", "in", "aeternum."],
                es: ["Y dijo Jehová Dios: He aquí el hombre es como uno de nosotros, sabiendo el bien y el mal; ahora, pues, que no alargue su mano, y tome también del árbol de la vida, y coma, y viva para siempre."],
                en: ["And the Lord God said, “The man has now become like one of us, knowing good and evil. He must not be allowed to reach out his hand and take also from the tree of life and eat, and live forever.”"],
                "zh-TW": ["耶和華神說：「那人已經與我們相似，能知道善惡；現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。」"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "ait:", lemma: "aio", details: { morphology: "Verbum defectivum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "dijo" } },
                { term: "Ecce", lemma: "ecce", details: { morphology: "Interiectio", meaning: "he aquí" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", meaning: "Adán" } },
                { term: "quasi", lemma: "quasi", details: { morphology: "Adverbium", meaning: "como" } },
                { term: "unus", lemma: "unus", details: { morphology: "Adjectivum", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "uno" } },
                { term: "ex", lemma: "ex/e", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "nobis", lemma: "nos", details: { morphology: "Pronomen", case: "Ablativus", meaning: "nosotros" } },
                { term: "factus", lemma: "facio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Passivus", meaning: "se ha hecho" } },
                { term: "est,", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "ha sido" } },
                { term: "sciens", lemma: "scio", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Praesens", voice: "Activus", meaning: "sabiendo" } },
                { term: "bonum", lemma: "bonum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el bien" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "malum;", lemma: "malum", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Neutrum", meaning: "el mal" } },
                { term: "nunc", lemma: "nunc", details: { morphology: "Adverbium", meaning: "ahora" } },
                { term: "ergo,", lemma: "ergo", details: { morphology: "Conjunctio", meaning: "pues" } },
                { term: "ne", lemma: "ne", details: { morphology: "Conjunctio", meaning: "para que no" } },
                { term: "forte", lemma: "forte", details: { morphology: "Adverbium", meaning: "acaso" } },
                { term: "mittat", lemma: "mitto", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "extienda" } },
                { term: "manum", lemma: "manus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la mano" } },
                { term: "suam", lemma: "suus", details: { morphology: "Adjectivum possessivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "su" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "sumat", lemma: "sumo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "tome" } },
                { term: "etiam", lemma: "etiam", details: { morphology: "Adverbium", meaning: "también" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "del" } },
                { term: "ligno", lemma: "lignum", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Neutrum", meaning: "árbol" } },
                { term: "vitae", lemma: "vita", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la vida" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "comedat", lemma: "comedo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "coma" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "vivat", lemma: "vivo", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Subiunctivus", voice: "Activus", meaning: "viva" } },
                { term: "in", lemma: "in", details: { morphology: "Praepositio", case: "Accusativus", meaning: "para" } },
                { term: "aeternum.", lemma: "aeternum", details: { morphology: "Adverbium", meaning: "siempre" } }
            ]
        },
        {
            id: 23,
            words: {
                la: ["Et", "emisit", "eum", "Dominus", "Deus", "de", "paradiso", "voluptatis,", "ut", "operaretur", "terram", "de", "qua", "sumptus", "est."],
                es: ["Y lo sacó Jehová del huerto del Edén, para que labrase la tierra de que fue tomado."],
                en: ["So the Lord God banished him from the Garden of Eden to work the ground from which he had been taken."],
                "zh-TW": ["耶和華神便打發他出伊甸園去，耕種他所自出之土。"]
            },
            analysis: [
                { term: "Et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "emisit", lemma: "emitto", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "expulsó" } },
                { term: "eum", lemma: "is", details: { morphology: "Pronomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "lo" } },
                { term: "Dominus", lemma: "Dominus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Señor" } },
                { term: "Deus", lemma: "Deus", details: { morphology: "Nomen", case: "Nominativus", number: "Singularis", gender: "Masculinum", meaning: "Dios" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "paradiso", lemma: "paradisus", details: { morphology: "Nomen", case: "Ablativus", number: "Singularis", gender: "Masculinum", meaning: "el paraíso" } },
                { term: "voluptatis,", lemma: "voluptas", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de delicia" } },
                { term: "ut", lemma: "ut", details: { morphology: "Conjunctio", meaning: "para que" } },
                { term: "operaretur", lemma: "operor", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Imperfectum", mood: "Subiunctivus", voice: "Deponens", meaning: "labrara" } },
                { term: "terram", lemma: "terra", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "la tierra" } },
                { term: "de", lemma: "de", details: { morphology: "Praepositio", case: "Ablativus", meaning: "de" } },
                { term: "qua", lemma: "qui", details: { morphology: "Pronomen relativum", case: "Ablativus", number: "Singularis", gender: "Femininum", meaning: "la cual" } },
                { term: "sumptus", lemma: "sumo", details: { morphology: "Participium", case: "Nominativus", number: "Singularis", gender: "Masculinum", tense: "Perfectum", voice: "Passivus", meaning: "tomado" } },
                { term: "est.", lemma: "sum", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Praesens", mood: "Indicativus", voice: "Activus", meaning: "fue" } }
            ]
        },
        {
            id: 24,
            words: {
                la: ["Eiecitque", "Adam", "et", "collocavit", "ante", "paradisum", "voluptatis", "cherubim", "et", "flammeum", "gladium", "atque", "versatilem", "ad", "custodiendam", "viam", "ligni", "vitae."],
                es: ["Echó, pues, fuera al hombre, y puso al oriente del huerto de Edén querubines, y una espada encendida que se revolvía por todos lados, para guardar el camino del árbol de la vida."],
                en: ["After he drove the man out, he placed on the east side of the Garden of Eden cherubim and a flaming sword flashing back and forth to guard the way to the tree of life."],
                "zh-TW": ["於是把他趕出去了；又在伊甸園的東邊安設基路伯和四面轉動發火焰的劍，要把守生命樹的道路。"]
            },
            analysis: [
                { term: "Eiecitque", lemma: "eicio", details: { morphology: "Verbum + Conjunctio", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "y echó fuera" } },
                { term: "Adam", lemma: "Adam", details: { morphology: "Nomen proprium indeclinabile", case: "Accusativus", meaning: "a Adán" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "collocavit", lemma: "colloco", details: { morphology: "Verbum", person: "3rd", number: "Singularis", tense: "Perfectum", mood: "Indicativus", voice: "Activus", meaning: "colocó" } },
                { term: "ante", lemma: "ante", details: { morphology: "Praepositio", case: "Accusativus", meaning: "delante de" } },
                { term: "paradisum", lemma: "paradisus", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "el paraíso" } },
                { term: "voluptatis", lemma: "voluptas", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de delicia" } },
                { term: "cherubim", lemma: "cherubim", details: { morphology: "Nomen indeclinabile", meaning: "querubines" } },
                { term: "et", lemma: "et", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "flammeum", lemma: "flammeus", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "flamígera" } },
                { term: "gladium", lemma: "gladius", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "una espada" } },
                { term: "atque", lemma: "atque", details: { morphology: "Conjunctio", meaning: "y" } },
                { term: "versatilem", lemma: "versatilis", details: { morphology: "Adjectivum", case: "Accusativus", number: "Singularis", gender: "Masculinum", meaning: "giratoria" } },
                { term: "ad", lemma: "ad", details: { morphology: "Praepositio", case: "Accusativus", meaning: "para" } },
                { term: "custodiendam", lemma: "custodio", details: { morphology: "Gerundivum", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "guardar" } },
                { term: "viam", lemma: "via", details: { morphology: "Nomen", case: "Accusativus", number: "Singularis", gender: "Femininum", meaning: "el camino" } },
                { term: "ligni", lemma: "lignum", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Neutrum", meaning: "del árbol" } },
                { term: "vitae.", lemma: "vita", details: { morphology: "Nomen", case: "Genetivus", number: "Singularis", gender: "Femininum", meaning: "de la vida" } }
            ]
        }
    ]
};
