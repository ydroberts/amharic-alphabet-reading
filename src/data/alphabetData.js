// Multi-language transcription mappings from GeezAlphabetsDB.xml
export const romanizationMap = {
  '.': { en: '.', ar: '.', he: '.', om: '.' },
  ':': { en: ':', ar: ':', he: ':', om: ':' },
  ';': { en: ';', ar: ';', he: ';', om: ';' },
  '?': { en: '?', ar: '?', he: '?', om: '?' },
  // ሠ series (alphakeys: [, [a, [e, [i, [ie, [o, [u)
  '[': { en: 'si', ar: 'سْ', he: 'סְ', om: '[' },
  '[a': { en: 'sa', ar: 'سَ', he: 'סַ', om: '[a' },
  '[e': { en: 'se', ar: 'سي', he: 'סֵ', om: '[e' },
  '[i': { en: 'see', ar: 'سِ', he: 'סִ', om: '[i' },
  '[ie': { en: 'sie', ar: 'سيي', he: 'סֶ', om: '[ie' },
  '[o': { en: 'so', ar: 'سو', he: 'סֹ', om: '[o' },
  '[u': { en: 'soo', ar: 'سُ', he: 'סֻ', om: '[u' },
  // ኀ series (alphakeys: ], ]a, ]e, ]i, ]ie, ]o, ]u, ]W...)
  ']': { en: 'hi', ar: 'ه', he: 'הְ', om: ']' },
  ']a': { en: 'ha', ar: 'هَ', he: 'הַ', om: ']a' },
  ']e': { en: 'he', ar: 'هَي', he: 'הֵ', om: ']e' },
  ']i': { en: 'hee', ar: 'هِ', he: 'הִ', om: ']i' },
  ']ie': { en: 'hie', ar: 'هِيِ', he: 'ה', om: ']ie' },
  ']o': { en: 'ho', ar: 'هَوْ', he: 'הֹ', om: ']o' },
  ']u': { en: 'hoo', ar: 'هُ', he: 'הֻ', om: ']u' },
  ']w': { en: 'hwi', ar: 'hw', he: 'הְוו', om: ']w' },
  ']wa': { en: 'hwa', ar: 'hwa', he: 'הְוו', om: ']wa' },
  ']we': { en: 'hwe', ar: 'hwe', he: 'הְוו', om: ']we' },
  ']wi': { en: 'hwee', ar: 'hwee', he: 'הְוו', om: ']wi' },
  ']wie': { en: 'hwie', ar: 'hwie', he: 'הְוו', om: ']wie' },
  // Pure vowels
  'a': { en: 'a', ar: 'a', he: 'אַ', om: 'a' },
  'e': { en: 'e', ar: 'e', he: 'אְ', om: 'e' },
  'i': { en: 'ee', ar: 'ee', he: 'אִ', om: 'i' },
  'ie': { en: 'ie', ar: 'ie', he: 'אֶ', om: 'ie' },
  'o': { en: 'o', ar: 'o', he: 'אֹ', om: 'o' },
  'u': { en: 'oo', ar: 'oo', he: 'אֻ', om: 'u' },
  // ሀ series
  'h': { en: 'hi', ar: 'ه', he: 'הְ', om: 'h' },
  'ha': { en: 'ha', ar: 'هَ', he: 'הַ', om: 'ha' },
  'he': { en: 'he', ar: 'هَي', he: 'הֵ', om: 'he' },
  'hi': { en: 'hee', ar: 'هِ', he: 'הִ', om: 'hi' },
  'hie': { en: 'hie', ar: 'هِيِ', he: 'הֶ', om: 'hie' },
  'ho': { en: 'ho', ar: 'هَوْ', he: 'הֹ', om: 'ho' },
  'hu': { en: 'hoo', ar: 'هُ', he: 'הֻ', om: 'hu' },
  // ሐ series
  'H': { en: "H'i", ar: 'ح', he: 'הְ', om: "h'" },
  'Ha': { en: "H'a", ar: 'حَ', he: 'הַ', om: "h'a" },
  'He': { en: "H'e", ar: 'حّيْ', he: 'הֵ', om: "h'e" },
  'Hi': { en: "H'ee", ar: 'حِ', he: 'הִ', om: "h'i" },
  'Hie': { en: "H'ie", ar: 'حيي', he: 'הֶ', om: "h'ie" },
  'Ho': { en: "H'o", ar: 'حو', he: 'הֹ', om: "h'o" },
  'Hu': { en: "H'oo", ar: 'حُ', he: 'מֻ', om: "h'u" },
  // ለ series
  'l': { en: 'li', ar: 'لْ', he: 'לְ', om: 'l' },
  'la': { en: 'la', ar: 'لَا', he: 'לַ', om: 'la' },
  'le': { en: 'le', ar: 'لَيْ', he: 'לֵ', om: 'le' },
  'li': { en: 'lee', ar: 'لِ', he: 'לִ', om: 'li' },
  'lie': { en: 'lie', ar: 'لْيِ', he: 'לֶ', om: 'lie' },
  'lo': { en: 'lo', ar: 'لو', he: 'לֹ', om: 'lo' },
  'lu': { en: 'loo', ar: 'لُ', he: 'לֻ', om: 'lu' },
  'lua': { en: 'lwa', ar: 'لوا', he: 'לוו', om: 'lua' },
  // መ series
  'm': { en: 'mi', ar: 'مْ', he: 'מְ', om: 'm' },
  'ma': { en: 'ma', ar: 'مَ', he: 'מַ', om: 'ma' },
  'me': { en: 'me', ar: 'مي', he: 'מֵ', om: 'me' },
  'mi': { en: 'mee', ar: 'مِ', he: 'מִ', om: 'mi' },
  'mie': { en: 'mie', ar: 'مْيي', he: 'מֶ', om: 'mie' },
  'mo': { en: 'mo', ar: 'مو', he: 'מֹ', om: 'mo' },
  'mu': { en: 'moo', ar: 'مُ', he: 'מֻ', om: 'mu' },
  'mua': { en: 'mwa', ar: 'mwa', he: 'מוו', om: 'mua' },
  // ሰ series
  's': { en: 'si', ar: 'سْ', he: 'שְ', om: 's' },
  'sa': { en: 'sa', ar: 'سَ', he: 'שַ', om: 'sa' },
  'se': { en: 'se', ar: 'سي', he: 'שֵ', om: 'se' },
  'si': { en: 'see', ar: 'سِ', he: 'שִ', om: 'si' },
  'sie': { en: 'sie', ar: 'سيي', he: 'שֶ', om: 'sie' },
  'so': { en: 'so', ar: 'سو', he: 'שֹ', om: 'so' },
  'su': { en: 'soo', ar: 'سُ', he: 'שֻ', om: 'su' },
  'sua': { en: 'swa', ar: 'سوا', he: 'שוו', om: 'sua' },
  // ሸ series
  'S': { en: 'shi', ar: 'شْ', he: 'שְ', om: 'sh' },
  'Sa': { en: 'sha', ar: 'شَ', he: 'שַׁ', om: 'sha' },
  'Se': { en: 'she', ar: 'شي', he: 'שֵׁ', om: 'she' },
  'Si': { en: 'shee', ar: 'شِ', he: 'שִ', om: 'shi' },
  'Sie': { en: 'shie', ar: 'شيي', he: 'שֶׁ', om: 'shie' },
  'So': { en: 'sho', ar: 'شو', he: 'שֹ', om: 'sho' },
  'Su': { en: 'shoo', ar: 'شُ', he: 'שֻּׁ', om: 'shu' },
  'Sua': { en: 'shwa', ar: 'شوا', he: 'שׁוו', om: 'shua' },
  // ረ series
  'r': { en: 'ri', ar: 'رْ', he: 'רְ', om: 'r' },
  'ra': { en: 'ra', ar: 'رَ', he: 'רַ', om: 'ra' },
  're': { en: 're', ar: 'ري', he: 'רֵ', om: 're' },
  'ri': { en: 'ree', ar: 'رِ', he: 'רִ', om: 'ri' },
  'rie': { en: 'rie', ar: 'رْيي', he: 'רֶ', om: 'rie' },
  'ro': { en: 'ro', ar: 'رو', he: 'רֹ', om: 'ro' },
  'ru': { en: 'roo', ar: 'رُ', he: 'רֻ', om: 'ru' },
  'rua': { en: 'rwa', ar: 'روا', he: 'רוו', om: 'rua' },
  // ቀ series
  'q': { en: 'qi', ar: 'قْ', he: 'קְ', om: 'q' },
  'qa': { en: 'qa', ar: 'قَ', he: 'קַ', om: 'qa' },
  'qe': { en: 'qe', ar: 'قي', he: 'קֵ', om: 'qe' },
  'qi': { en: 'qee', ar: 'قِ', he: 'קִ', om: 'qi' },
  'qie': { en: 'qie', ar: 'قيي', he: 'קֶ', om: 'qie' },
  'qo': { en: 'qo', ar: 'قو', he: 'קֹ', om: 'qo' },
  'qu': { en: 'qoo', ar: 'قُ', he: 'קֻ', om: 'qu' },
  // ቐ series
  'Q': { en: 'qhi', ar: 'غْ', he: 'קְ', om: "q'" },
  'Qa': { en: 'qha', ar: 'غَ', he: 'קַ', om: "q'a" },
  'Qe': { en: 'qhe', ar: 'غي', he: 'קֵ', om: "q'e" },
  'Qi': { en: 'qhee', ar: 'غِ', he: 'קִ', om: "q'i" },
  'Qie': { en: 'qhie', ar: 'غيي', he: 'קֶ', om: "q'ie" },
  'Qo': { en: 'qho', ar: 'غو', he: 'ק', om: "q'o" },
  'Qu': { en: 'qhoo', ar: 'غُ', he: 'קֻ', om: "q'u" },
  // በ series
  'b': { en: 'bi', ar: 'بْ', he: 'בְּ', om: 'b' },
  'ba': { en: 'ba', ar: 'بَا', he: 'בַּ', om: 'ba' },
  'be': { en: 'be', ar: 'بي', he: 'בֵּ', om: 'be' },
  'bi': { en: 'bee', ar: 'بِ', he: 'בִּ', om: 'bi' },
  'bie': { en: 'bie', ar: 'بِيي', he: 'בֶּ', om: 'bie' },
  'bo': { en: 'bo', ar: 'بو', he: 'בֹ', om: 'bo' },
  'bu': { en: 'boo', ar: 'بُ', he: 'בֻ', om: 'boo' },
  'bua': { en: 'bua', ar: 'بوا', he: 'בוו', om: 'bua' },
  // ተ series
  't': { en: 'ti', ar: 'تْ', he: 'תְ', om: 't' },
  'ta': { en: 'ta', ar: 'تَ', he: 'תַ', om: 'ta' },
  'te': { en: 'te', ar: 'تي', he: 'תֵ', om: 'te' },
  'ti': { en: 'tee', ar: 'تِ', he: 'תִ', om: 'ti' },
  'tie': { en: 'tie', ar: 'تِيي', he: 'תֶ', om: 'tie' },
  'to': { en: 'to', ar: 'تو', he: 'תֹ', om: 'to' },
  'tu': { en: 'too', ar: 'تُ', he: 'תֻ', om: 'tu' },
  'tua': { en: 'twa', ar: 'توا', he: 'תוו', om: 'tua' },
  // ቸ series
  'c': { en: 'chi', ar: 'تش', he: 'צְ׳', om: 'ch' },
  'ca': { en: 'cha', ar: 'تشا', he: 'צַ׳', om: 'cha' },
  'ce': { en: 'che', ar: 'تشي', he: '׳צֵ', om: 'che' },
  'ci': { en: 'chee', ar: 'تشي', he: 'צִ׳', om: 'chi' },
  'cie': { en: 'chie', ar: 'تشيي', he: 'צֶ׳', om: 'chie' },
  'co': { en: 'cho', ar: 'تشو', he: 'צֹ׳', om: 'cho' },
  'cu': { en: 'choo', ar: 'تشو', he: 'צֻ׳', om: 'chu' },
  'cua': { en: 'chwa', ar: 'chwa', he: "'צוו", om: 'chua' },
  // ጠ series
  'T': { en: "T'i", ar: 'طْ', he: 'טְ', om: "t'" },
  'Ta': { en: "T'a", ar: 'طَ', he: 'טַ', om: "t'a" },
  'Te': { en: "T'e", ar: 'طي', he: 'טֵ', om: "t'e" },
  'Ti': { en: "T'ee", ar: 'طِ', he: 'טִ', om: "t'i" },
  'Tie': { en: "T'ie", ar: 'طِيِيْ', he: 'טֶ', om: "t'ie" },
  'To': { en: "T'o", ar: 'طو', he: 'טְ', om: "t'o" },
  'Tu': { en: "T'oo", ar: 'طُ', he: 'טֻ', om: "t'u" },
  'Tua': { en: "T'wa", ar: 'طوا', he: 'טוו', om: "t'ua" },
  // ጨ series
  'C': { en: "C'hi", ar: 'جْ', he: 'צְ׳', om: "chh" },
  'Ca': { en: "C'ha", ar: 'جَ', he: 'צַ׳', om: "chha" },
  'Ce': { en: "C'he", ar: 'جي', he: '׳צֵ', om: "chhe" },
  'Ci': { en: "C'hee", ar: 'جِ', he: 'צִ׳', om: "chhi" },
  'Cie': { en: "Chie", ar: 'جِيِ', he: 'צֶ׳', om: "chhie" },
  'Co': { en: "C'ho", ar: 'جو', he: 'צְ׳', om: "chho" },
  'Cu': { en: "C'hoo", ar: 'جُ', he: 'צֻ׳', om: "chhu" },
  'Cua': { en: "C'hwa", ar: 'جوا', he: "וו'צ", om: "chhua" },
  // አ series
  'E': { en: 'ei', ar: 'e', he: 'אְ', om: 'e' },
  'Ea': { en: 'aa', ar: 'a', he: 'אַ', om: 'ea' },
  'Ee': { en: 'a', ar: 'e', he: 'אֵָ', om: 'ee' },
  'Ei': { en: 'ee', ar: 'ee', he: 'אִ', om: 'ei' },
  'Eie': { en: 'ie', ar: 'ie', he: 'אֶ', om: 'eie' },
  'Eo': { en: 'oi', ar: 'o', he: 'אֹ', om: 'eo' },
  'Eu': { en: 'oo', ar: 'oo', he: 'אֻ', om: 'eu' },
  'Eue': { en: 'ae', ar: 'e', he: 'אֵ', om: 'eue' },
  // ከ series
  'k': { en: 'ki', ar: 'كْ', he: 'כְ', om: 'k' },
  'ka': { en: 'ka', ar: 'كَ', he: 'כַ', om: 'ka' },
  'ke': { en: 'ke', ar: 'كـى', he: 'כֵ', om: 'ke' },
  'ki': { en: 'kee', ar: 'كِ', he: 'כִ', om: 'ki' },
  'kie': { en: 'kie', ar: 'كييه', he: 'כֶ', om: 'kie' },
  'ko': { en: 'ko', ar: 'كـو', he: 'כֹ', om: 'ko' },
  'ku': { en: 'koo', ar: 'كُ', he: 'כֻ', om: 'ku' },
  // ኸ series
  'K': { en: 'khi', ar: 'خْ', he: 'חְ', om: 'kh' },
  'Ka': { en: 'kha', ar: 'خَ', he: 'חַּ', om: 'kha' },
  'Ke': { en: 'khe', ar: 'خـي', he: 'חֵ', om: 'khe' },
  'Ki': { en: 'khee', ar: 'خِ', he: 'חִּ', om: 'khi' },
  'Kie': { en: 'khie', ar: 'خيه', he: 'חֶּ', om: 'khie' },
  'Ko': { en: 'kho', ar: 'خو', he: 'חֹ', om: 'kho' },
  'Ku': { en: 'khoo', ar: 'خُ', he: 'חֻּ', om: 'khu' },
  // ወ series
  'w': { en: 'wi', ar: 'وْ', he: 'ווְ', om: 'w' },
  'wa': { en: 'wa', ar: 'وَ', he: 'ווַ', om: 'wa' },
  'we': { en: 'we', ar: 'وى', he: 'וו', om: 'we' },
  'wi': { en: 'wee', ar: 'وِ', he: 'ווִ', om: 'wi' },
  'wie': { en: 'wie', ar: 'ويه', he: 'ווֶ', om: 'wie' },
  'wo': { en: 'wo', ar: 'وو', he: 'ווֹ', om: 'wo' },
  'wu': { en: 'woo', ar: 'وُ', he: 'ווֻ', om: 'wu' },
  // ዐ series
  'O': { en: "'i", ar: 'عْ', he: 'עְ', om: "'" },
  'Oa': { en: "'a", ar: 'عَ', he: 'עַ', om: "'a" },
  'Oe': { en: "'e", ar: 'عى', he: 'עֵ', om: "'e" },
  'Oi': { en: "'ee", ar: 'عِ', he: 'עִ', om: "'i" },
  'Oie': { en: "'ie", ar: 'عييه', he: 'עֶ', om: "'ie" },
  'Oo': { en: "'o", ar: 'عو', he: 'עְ', om: "'o" },
  'Ou': { en: "'oo", ar: 'عُ', he: 'עֻ', om: "'u" },
  // ዘ series
  'z': { en: 'zi', ar: 'زْ', he: 'זְ', om: 'z' },
  'za': { en: 'za', ar: 'زَ', he: 'זַ', om: 'za' },
  'ze': { en: 'ze', ar: 'زى', he: 'זֵ', om: 'ze' },
  'zi': { en: 'zee', ar: 'زِ', he: 'זִ', om: 'zi' },
  'zie': { en: 'zie', ar: 'زييه', he: 'זֶ', om: 'zie' },
  'zo': { en: 'zo', ar: 'زو', he: 'זְ', om: 'zo' },
  'zu': { en: 'zoo', ar: 'زُ', he: 'זֻ', om: 'zu' },
  'zua': { en: 'zwa', ar: 'زوا', he: 'זוו', om: 'zua' },
  // ዠ series
  'Z': { en: 'zhi', ar: 'تش', he: "'זְ", om: 'zh' },
  'Za': { en: 'zha', ar: 'تشا', he: "'זַ", om: 'zha' },
  'Ze': { en: 'zhe', ar: 'شي', he: "'זֵ", om: 'zhe' },
  'Zi': { en: 'zhee', ar: 'تشي', he: "'זִ", om: 'zhi' },
  'Zie': { en: 'zhie', ar: 'تشيه', he: "'זֶ", om: 'zhie' },
  'Zo': { en: 'zho', ar: 'تشو', he: "'זְ", om: 'zho' },
  'Zu': { en: 'zhoo', ar: 'تشو', he: "'זֻ", om: 'zhu' },
  'Zua': { en: 'zhwa', ar: 'تشوا', he: "'זוו", om: 'zhua' },
  // የ series
  'y': { en: 'yi', ar: 'يْ', he: 'יְ', om: 'y' },
  'ya': { en: 'ya', ar: 'يَا', he: 'יַ', om: 'ya' },
  'ye': { en: 'ye', ar: 'يي', he: 'יֵ', om: 'ye' },
  'yi': { en: 'yee', ar: 'يِ', he: 'יִ', om: 'yi' },
  'yie': { en: 'yie', ar: 'ييه', he: 'יֶ', om: 'yie' },
  'yo': { en: 'yo', ar: 'يو', he: 'יְ', om: 'yo' },
  'yu': { en: 'yoo', ar: 'يُ', he: 'יֻ', om: 'yu' },
  // ደ series
  'd': { en: 'di', ar: 'دْ', he: 'דְ', om: 'd' },
  'da': { en: 'da', ar: 'دَ', he: 'דַ', om: 'da' },
  'de': { en: 'de', ar: 'دي', he: 'דֵ', om: 'de' },
  'di': { en: 'dee', ar: 'دِ', he: 'דִ', om: 'di' },
  'die': { en: 'die', ar: 'دييه', he: 'דֶ', om: 'die' },
  'do': { en: 'do', ar: 'دو', he: 'דְ', om: 'do' },
  'du': { en: 'doo', ar: 'دُ', he: 'דֻ', om: 'du' },
  'dua': { en: 'dwa', ar: 'دوا', he: 'דוו', om: 'dua' },
  // ጀ series
  'j': { en: 'ji', ar: 'جْ', he: 'גְ׳', om: 'j' },
  'ja': { en: 'ja', ar: 'جَا', he: 'גַ׳', om: 'ja' },
  'je': { en: 'je', ar: 'جي', he: '׳גֵ', om: 'je' },
  'ji': { en: 'jee', ar: 'جُ', he: 'גִ׳', om: 'ji' },
  'jie': { en: 'jie', ar: 'جييه', he: 'גֶ׳', om: 'jie' },
  'jo': { en: 'jo', ar: 'جو', he: 'גְ׳', om: 'jo' },
  'ju': { en: 'joo', ar: 'جُ', he: 'גֻ׳', om: 'ju' },
  'jua': { en: 'jwa', ar: 'جوا', he: "'גוו", om: 'jua' },
  // ገ series
  'g': { en: 'gi', ar: 'جْ', he: 'גְ', om: 'g' },
  'ga': { en: 'ga', ar: 'جَا', he: 'גַ', om: 'ga' },
  'ge': { en: 'ge', ar: 'جى', he: 'גֵ', om: 'ge' },
  'gi': { en: 'gee', ar: 'جِ', he: 'גִ', om: 'gi' },
  'gie': { en: 'gie', ar: 'جييه', he: 'גֶ', om: 'gie' },
  'go': { en: 'go', ar: 'جو', he: 'גְ', om: 'go' },
  'gu': { en: 'goo', ar: 'جُ', he: 'גֻ', om: 'gu' },
  // ነ series
  'n': { en: 'ni', ar: 'نْ', he: 'נְ', om: 'n' },
  'na': { en: 'na', ar: 'نَ', he: 'נַ', om: 'na' },
  'ne': { en: 'ne', ar: 'ني', he: 'נֵ', om: 'ne' },
  'ni': { en: 'nee', ar: 'نِ', he: 'נִ', om: 'ni' },
  'nie': { en: 'nie', ar: 'نيي', he: 'נֶ', om: 'nie' },
  'no': { en: 'no', ar: 'نو', he: 'נֹ', om: 'no' },
  'nu': { en: 'noo', ar: 'نُ', he: 'נֻ', om: 'nu' },
  'nua': { en: 'nwa', ar: 'نوا', he: 'נוו', om: 'nua' },
  // ኘ series
  'N': { en: 'gni', ar: 'ن', he: '׳נְ', om: 'ny' },
  'Na': { en: 'gna', ar: 'نيا', he: '׳נַ', om: 'nya' },
  'Ne': { en: 'gne', ar: 'نيي', he: '׳נֵ', om: 'nye' },
  'Ni': { en: 'gnee', ar: 'نيي', he: '׳נִ', om: 'nyi' },
  'Nie': { en: 'gnie', ar: 'نييه', he: '׳נֶ', om: 'nyie' },
  'No': { en: 'gno', ar: 'نو', he: '׳נֹ', om: 'nyo' },
  'Nu': { en: 'gnoo', ar: 'نيو', he: '׳נֻ', om: 'nyu' },
  'Nua': { en: 'gnwa', ar: 'نوا', he: 'נוו', om: 'nyua' },
  // ጸ series
  'x': { en: 'tsi', ar: 'طْ', he: 'צְ', om: 'ts' },
  'xa': { en: 'tsa', ar: 'طَ', he: 'צַ', om: 'tsa' },
  'xe': { en: 'tse', ar: 'طي', he: 'צֵּ', om: 'tse' },
  'xi': { en: 'tsee', ar: 'طِ', he: 'צִ', om: 'tsi' },
  'xie': { en: 'tsie', ar: 'طيي', he: 'צֶ', om: 'tsie' },
  'xo': { en: 'tso', ar: 'طو', he: 'צְ', om: 'tso' },
  'xu': { en: 'tsoo', ar: 'طُ', he: 'צֻ', om: 'tsu' },
  'xua': { en: 'tswa', ar: 'طوا', he: 'צוו', om: 'tsua' },
  // ፈ series
  'f': { en: 'fi', ar: 'فْ', he: 'פְ', om: 'f' },
  'fa': { en: 'fa', ar: 'فَ', he: 'פַ', om: 'fa' },
  'fe': { en: 'fe', ar: 'في', he: 'פֵ', om: 'fe' },
  'fi': { en: 'fee', ar: 'فِ', he: 'פִ', om: 'fi' },
  'fie': { en: 'fie', ar: 'فيي', he: 'פֶ', om: 'fie' },
  'fo': { en: 'fo', ar: 'فو', he: 'פְ', om: 'fo' },
  'fu': { en: 'foo', ar: 'فُ', he: 'פֻ', om: 'fu' },
  'fua': { en: 'fwa', ar: 'فوا', he: 'פוו', om: 'fua' },
  // ጰ series
  'P': { en: "P'i", ar: 'بْ', he: 'פְ', om: "p'" },
  'Pa': { en: "P'a", ar: 'بَ', he: 'פַ', om: "p'a" },
  'Pe': { en: "P'e", ar: 'بي', he: 'פֵ', om: "p'e" },
  'Pi': { en: "P'ee", ar: 'بِ', he: 'פִ', om: "p'i" },
  'Pie': { en: "P'ie", ar: 'بِيِ', he: 'פֶ', om: "p'ie" },
  'Po': { en: "P'o", ar: 'بو', he: 'פְ', om: "p'o" },
  'Pu': { en: "P'oo", ar: 'بُ', he: 'פֻ', om: "p'u" },
  'Pua': { en: "P'wa", ar: 'Pwa', he: 'פוו', om: "p'ua" },
  // ፐ series
  'p': { en: 'pi', ar: 'بْ', he: 'פְּ', om: 'p' },
  'pa': { en: 'pa', ar: 'بَ', he: 'פַּ', om: 'pa' },
  'pe': { en: 'pe', ar: 'بي', he: 'פֵּ', om: 'pe' },
  'pi': { en: 'pee', ar: 'بِ', he: 'פִ', om: 'pi' },
  'pie': { en: 'pie', ar: 'بيي', he: 'פֶ', om: 'pie' },
  'po': { en: 'po', ar: 'بو', he: 'פְּ', om: 'po' },
  'pu': { en: 'poo', ar: 'بُ', he: 'פֻּ', om: 'pu' },
  'pua': { en: 'pwa', ar: 'بوا', he: 'פּוו', om: 'pua' },
  // ቨ series
  'v': { en: 'vi', ar: 'فْ', he: 'וְ', om: 'v' },
  'va': { en: 'va', ar: 'فَ', he: 'וַ', om: 'va' },
  've': { en: 've', ar: 'ف', he: 'וֵ', om: 've' },
  'vi': { en: 'vee', ar: 'فِ', he: 'וִ', om: 'vi' },
  'vie': { en: 'vie', ar: 'فيي', he: 'וֶ', om: 'vie' },
  'vo': { en: 'vo', ar: 'فو', he: 'וְ', om: 'vo' },
  'vu': { en: 'voo', ar: 'فُ', he: 'וֻ', om: 'vu' },
  'vua': { en: 'vwa', ar: 'فوا', he: 'ו', om: 'vua' },
  // W-labialized series
  'qw': { en: 'Qwi', ar: 'Qw', he: 'קֶוו', om: 'qw' },
  'qwa': { en: 'Qwa', ar: 'Qwa', he: 'קֶוו', om: 'qwa' },
  'qwe': { en: 'Qwe', ar: 'Qwe', he: 'קֶוו', om: 'qwe' },
  'qwi': { en: 'Qwee', ar: 'Qwee', he: 'קֶוו', om: 'qwi' },
  'qwie': { en: 'Qwie', ar: 'Qwie', he: 'קֶוו', om: 'qwie' },
  'kw': { en: 'kwi', ar: 'kw', he: 'כְוו', om: 'kw' },
  'kwa': { en: 'kwa', ar: 'kwa', he: 'כְוו', om: 'kwa' },
  'kwe': { en: 'kwe', ar: 'kwe', he: 'כְוו', om: 'kwe' },
  'kwi': { en: 'kwee', ar: 'kwee', he: 'כְוו', om: 'kwi' },
  'kwie': { en: 'kwie', ar: 'kwie', he: 'כְוו', om: 'kwie' },
  'gw': { en: 'gwi', ar: 'gw', he: 'גְוו', om: 'gw' },
  'gwa': { en: 'gwa', ar: 'gwa', he: 'גְוו', om: 'gwa' },
  'gwe': { en: 'gwe', ar: 'gwe', he: 'גְוו', om: 'gwe' },
  'gwi': { en: 'gwee', ar: 'gwee', he: 'גְוו', om: 'gwi' },
  'gwie': { en: 'gwie', ar: 'gwie', he: 'גְוו', om: 'gwie' },
};

// Alias map: roman values used in characters array → alphakeys used in romanizationMap
const romanAliases = {
  // ሸ (sh) series → S keys
  'sh': 'S', 'she': 'Se', 'shu': 'Su', 'shi': 'Si', 'sha': 'Sa', 'shie': 'Sie', 'sho': 'So', 'shua': 'Sua',
  // ኸ (kh) series → K keys
  'kh': 'K', 'khe': 'Ke', 'khu': 'Ku', 'khi': 'Ki', 'kha': 'Ka', 'khie': 'Kie', 'kho': 'Ko',
  // ኘ (ny) series → N keys
  'ny': 'N', 'nye': 'Ne', 'nyu': 'Nu', 'nyi': 'Ni', 'nya': 'Na', 'nyie': 'Nie', 'nyo': 'No', 'nyua': 'Nua',
  // ዠ (zh) series → Z keys
  'zh': 'Z', 'zhe': 'Ze', 'zhu': 'Zu', 'zhi': 'Zi', 'zha': 'Za', 'zhie': 'Zie', 'zho': 'Zo', 'zhua': 'Zua',
  // ጨ (chh) series → C (uppercase) keys
  'chh': 'C', 'chhe': 'Ce', 'chhu': 'Cu', 'chhi': 'Ci', 'chha': 'Ca', 'chhie': 'Cie', 'chho': 'Co', 'chhua': 'Cua',
  // ቸ (ch) series → c (lowercase) keys
  'ch': 'c', 'che': 'ce', 'chu': 'cu', 'chi': 'ci', 'cha': 'ca', 'chie': 'cie', 'cho': 'co', 'chua': 'cua',
  // ሐ (h') series → H keys
  "h'": 'H', "h'e": 'He', "h'u": 'Hu', "h'i": 'Hi', "h'a": 'Ha', "h'ie": 'Hie', "h'o": 'Ho',
  // ጠ (t') series → T keys
  "t'": 'T', "t'e": 'Te', "t'u": 'Tu', "t'i": 'Ti', "t'a": 'Ta', "t'ie": 'Tie', "t'o": 'To', "t'ua": 'Tua',
  // ቐ (q') series → Q keys
  "q'": 'Q', "q'e": 'Qe', "q'u": 'Qu', "q'i": 'Qi', "q'a": 'Qa', "q'ie": 'Qie', "q'o": 'Qo',
  // ጰ (p') series → P keys
  "p'": 'P', "p'e": 'Pe', "p'u": 'Pu', "p'i": 'Pi', "p'a": 'Pa', "p'ie": 'Pie', "p'o": 'Po',
  // አ series → E keys
  'ea': 'Ea', 'eu': 'Eu', 'ei': 'Ei', 'eie': 'Eie', 'eo': 'Eo',
  // ዐ series → O keys
  "'": 'O', "'e": 'Oe', "'u": 'Ou', "'i": 'Oi', "'a": 'Oa', "'ie": 'Oie', "'o": 'Oo',
  // ጸ (ts) series → x keys
  'ts': 'x', 'tse': 'xe', 'tsu': 'xu', 'tsi': 'xi', 'tsa': 'xa', 'tsie': 'xie', 'tso': 'xo', 'tsua': 'xua',
  // ኀ (hw) series → ] keys
  'hw': ']w', 'hwe': ']we', 'hwi': ']wi', 'hwa': ']wa', 'hwie': ']wie',
};
// Add aliases into romanizationMap so getTranscription finds them
Object.entries(romanAliases).forEach(([alias, key]) => {
  if (romanizationMap[key] && !romanizationMap[alias]) {
    romanizationMap[alias] = romanizationMap[key];
  }
});

// UI Translations
export const uiTranslations = {
  en: { read: 'Read', cycle: 'Cycle', settings: 'Settings', language: 'Language',
        speed: 'Reading Speed', volume: 'Volume', highlightColor: 'Highlight Color',
        showTranscription: 'Show Transcription', save: 'Save', cancel: 'Cancel', close: 'Close',
        practice: 'Practice', stop: 'Stop', listen: 'Listen', recording: 'Recording...', yourVoice: 'You', reference: 'Ref', review: 'Review',
        consonants: 'Consonants', vowels: 'Vowels', vocabulary: 'Vocabulary',
        feedback: 'Feedback', feedbackName: 'Name (optional)', feedbackEmail: 'Email (optional)',
        feedbackMessage: 'Your idea or feedback', feedbackSend: 'Send', feedbackThanks: 'Thanks for your feedback!',
        feedbackError: 'Could not send. Please try again.' },
  ar: { read: 'قراءة', cycle: 'تكرار', settings: 'إعدادات', language: 'اللغة',
        speed: 'سرعة القراءة', volume: 'مستوى الصوت', highlightColor: 'لون التمييز',
        showTranscription: 'إظهار النسخ', save: 'حفظ', cancel: 'إلغاء', close: 'إغلاق',
        practice: 'تمرين', stop: 'إيقاف', listen: 'استمع', recording: '...تسجيل', yourVoice: 'أنت', reference: 'مرجع', review: 'مراجعة',
        consonants: 'حروف ساكنة', vowels: 'حروف متحركة', vocabulary: 'مفردات',
        feedback: 'ملاحظات', feedbackName: 'الاسم (اختياري)', feedbackEmail: 'البريد (اختياري)',
        feedbackMessage: 'فكرتك أو ملاحظاتك', feedbackSend: 'إرسال', feedbackThanks: 'شكراً لملاحظاتك!',
        feedbackError: 'تعذر الإرسال. حاول مرة أخرى.' },
  he: { read: 'קרא', cycle: 'חזרה', settings: 'הגדרות', language: 'שפה',
        speed: 'מהירות קריאה', volume: 'עוצמת קול', highlightColor: 'צבע הדגשה',
        showTranscription: 'הצג תעתיק', save: 'שמור', cancel: 'בטל', close: 'סגור',
        practice: 'תרגול', stop: 'עצור', listen: 'האזן', recording: '...מקליט', yourVoice: 'אתה', reference: 'מקור', review: 'סקירה',
        consonants: 'עיצורים', vowels: 'תנועות', vocabulary: 'אוצר מילים',
        feedback: 'משוב', feedbackName: 'שם (אופציונלי)', feedbackEmail: 'אימייל (אופציונלי)',
        feedbackMessage: 'הרעיון או המשוב שלך', feedbackSend: 'שלח', feedbackThanks: 'תודה על המשוב!',
        feedbackError: 'לא ניתן לשלוח. נסה שוב.' },
  om: { read: 'Dubbisi', cycle: 'Irra deebi\'i', settings: 'Qindaa\'ina', language: 'Afaan',
        speed: 'Saffisa dubbisuu', volume: 'Sagalee', highlightColor: 'Halluu calaqqisuu',
        showTranscription: 'Agarsiisi barreeffama', save: 'Olkaa\'i', cancel: 'Dhiisi', close: 'Cufi',
        practice: 'Shaakali', stop: 'Dhaabi', listen: 'Dhaggeeffadhu', recording: 'Waraabaa...', yourVoice: 'Si', reference: 'Unka', review: 'Gamaaggama',
        consonants: 'Dubbiftoota', vowels: 'Dubbachiiftuu', vocabulary: 'Jechoota',
        feedback: 'Yaada', feedbackName: 'Maqaa (dirqala)', feedbackEmail: 'Imeelii (dirqala)',
        feedbackMessage: 'Yaada kee', feedbackSend: 'Ergi', feedbackThanks: 'Yaada keetiif galatoomaa!',
        feedbackError: 'Erguu hin dandeenye. Irra deebi\'i yaali.' }
};

// Helper functions
export const getTranscription = (roman, lang) => {
  if (!romanizationMap[roman]) return roman;

  // For English or Oromiffa, always use their script
  if (lang === 'en' || lang === 'om') {
    return romanizationMap[roman][lang] || roman;
  }

  // For Arabic and Hebrew
  const english = romanizationMap[roman].en;
  const targetLang = romanizationMap[roman][lang];

  if (!targetLang) return english;

  const hasConsonant = /[bcdfghjklmnpqrstvwxyz2]/i.test(english);

  if (!hasConsonant) {
    return english;
  }

  return targetLang;
};
export const t = (key, lang) => uiTranslations[lang]?.[key] || uiTranslations.en[key];

// Characters data
export const characters = [
  { id: 1, geez: 'ብ', baseRoman: 'b', colorGroup: 'green', vowelForms: [
    { geez: 'በ', roman: 'be', vowel: 'e' }, { geez: 'ቡ', roman: 'bu', vowel: 'u' },
    { geez: 'ቢ', roman: 'bi', vowel: 'i' }, { geez: 'ባ', roman: 'ba', vowel: 'a' },
    { geez: 'ቤ', roman: 'bie', vowel: 'ie' }, { geez: 'ብ', roman: 'b', vowel: 'base' },
    { geez: 'ቦ', roman: 'bo', vowel: 'o' }, { geez: 'ቧ', roman: 'bua', vowel: 'ua' }
  ]},
  { id: 2, geez: 'ቨ', baseRoman: 'v', colorGroup: 'green', vowelForms: [
    { geez: 'ቨ', roman: 've', vowel: 'e' }, { geez: 'ቩ', roman: 'vu', vowel: 'u' },
    { geez: 'ቪ', roman: 'vi', vowel: 'i' }, { geez: 'ቫ', roman: 'va', vowel: 'a' },
    { geez: 'ቬ', roman: 'vie', vowel: 'ie' }, { geez: 'ቭ', roman: 'v', vowel: 'base' },
    { geez: 'ቮ', roman: 'vo', vowel: 'o' }, { geez: 'ቯ', roman: 'vua', vowel: 'ua' }
  ]},
  { id: 3, geez: 'ስ', baseRoman: 's', colorGroup: 'green', vowelForms: [
    { geez: 'ሰ', roman: 'se', vowel: 'e' }, { geez: 'ሱ', roman: 'su', vowel: 'u' },
    { geez: 'ሲ', roman: 'si', vowel: 'i' }, { geez: 'ሳ', roman: 'sa', vowel: 'a' },
    { geez: 'ሴ', roman: 'sie', vowel: 'ie' }, { geez: 'ስ', roman: 's', vowel: 'base' },
    { geez: 'ሶ', roman: 'so', vowel: 'o' }, { geez: 'ሷ', roman: 'sua', vowel: 'ua' }
  ]},
  { id: 4, geez: 'ሽ', baseRoman: 'sh', colorGroup: 'green', vowelForms: [
    { geez: 'ሸ', roman: 'she', vowel: 'e' }, { geez: 'ሹ', roman: 'shu', vowel: 'u' },
    { geez: 'ሺ', roman: 'shi', vowel: 'i' }, { geez: 'ሻ', roman: 'sha', vowel: 'a' },
    { geez: 'ሼ', roman: 'shie', vowel: 'ie' }, { geez: 'ሽ', roman: 'sh', vowel: 'base' },
    { geez: 'ሾ', roman: 'sho', vowel: 'o' }, { geez: 'ሿ', roman: 'shua', vowel: 'ua' }
  ]},
  { id: 5, geez: 'ል', baseRoman: 'l', colorGroup: 'green', vowelForms: [
    { geez: 'ለ', roman: 'le', vowel: 'e' }, { geez: 'ሉ', roman: 'lu', vowel: 'u' },
    { geez: 'ሊ', roman: 'li', vowel: 'i' }, { geez: 'ላ', roman: 'la', vowel: 'a' },
    { geez: 'ሌ', roman: 'lie', vowel: 'ie' }, { geez: 'ል', roman: 'l', vowel: 'base' },
    { geez: 'ሎ', roman: 'lo', vowel: 'o' }, { geez: 'ሏ', roman: 'lua', vowel: 'ua' }
  ]},
  { id: 6, geez: 'ኝ', baseRoman: 'ny', colorGroup: 'green', vowelForms: [
    { geez: 'ኘ', roman: 'nye', vowel: 'e' }, { geez: 'ኙ', roman: 'nyu', vowel: 'u' },
    { geez: 'ኚ', roman: 'nyi', vowel: 'i' }, { geez: 'ኛ', roman: 'nya', vowel: 'a' },
    { geez: 'ኜ', roman: 'nyie', vowel: 'ie' }, { geez: 'ኝ', roman: 'ny', vowel: 'base' },
    { geez: 'ኞ', roman: 'nyo', vowel: 'o' }, { geez: 'ኟ', roman: 'nyua', vowel: 'ua' }
  ]},
  { id: 7, geez: 'ክ', baseRoman: 'k', colorGroup: 'green', vowelForms: [
    { geez: 'ከ', roman: 'ke', vowel: 'e' }, { geez: 'ኩ', roman: 'ku', vowel: 'u' },
    { geez: 'ኪ', roman: 'ki', vowel: 'i' }, { geez: 'ካ', roman: 'ka', vowel: 'a' },
    { geez: 'ኬ', roman: 'kie', vowel: 'ie' }, { geez: 'ክ', roman: 'k', vowel: 'base' },
    { geez: 'ኮ', roman: 'ko', vowel: 'o' }, { geez: 'ኳ', roman: 'kua', vowel: 'ua' }
  ]},
  { id: 8, geez: 'ኽ', baseRoman: 'kh', colorGroup: 'purple', vowelForms: [
    { geez: 'ኸ', roman: 'khe', vowel: 'e' }, { geez: 'ኹ', roman: 'khu', vowel: 'u' },
    { geez: 'ኺ', roman: 'khi', vowel: 'i' }, { geez: 'ኻ', roman: 'kha', vowel: 'a' },
    { geez: 'ኼ', roman: 'khie', vowel: 'ie' }, { geez: 'ኽ', roman: 'kh', vowel: 'base' },
    { geez: 'ኾ', roman: 'kho', vowel: 'o' }, { geez: 'ዃ', roman: 'khua', vowel: 'ua' }
  ]},
  { id: 9, geez: 'ዝ', baseRoman: 'z', colorGroup: 'purple', vowelForms: [
    { geez: 'ዘ', roman: 'ze', vowel: 'e' }, { geez: 'ዙ', roman: 'zu', vowel: 'u' },
    { geez: 'ዚ', roman: 'zi', vowel: 'i' }, { geez: 'ዛ', roman: 'za', vowel: 'a' },
    { geez: 'ዜ', roman: 'zie', vowel: 'ie' }, { geez: 'ዝ', roman: 'z', vowel: 'base' },
    { geez: 'ዞ', roman: 'zo', vowel: 'o' }, { geez: 'ዟ', roman: 'zua', vowel: 'ua' }
  ]},
  { id: 10, geez: 'ዥ', baseRoman: 'zh', colorGroup: 'purple', vowelForms: [
    { geez: 'ዠ', roman: 'zhe', vowel: 'e' }, { geez: 'ዡ', roman: 'zhu', vowel: 'u' },
    { geez: 'ዢ', roman: 'zhi', vowel: 'i' }, { geez: 'ዣ', roman: 'zha', vowel: 'a' },
    { geez: 'ዤ', roman: 'zhie', vowel: 'ie' }, { geez: 'ዥ', roman: 'zh', vowel: 'base' },
    { geez: 'ዦ', roman: 'zho', vowel: 'o' }, { geez: 'ዧ', roman: 'zhua', vowel: 'ua' }
  ]},
  { id: 11, geez: 'ድ', baseRoman: 'd', colorGroup: 'purple', vowelForms: [
    { geez: 'ደ', roman: 'de', vowel: 'e' }, { geez: 'ዱ', roman: 'du', vowel: 'u' },
    { geez: 'ዲ', roman: 'di', vowel: 'i' }, { geez: 'ዳ', roman: 'da', vowel: 'a' },
    { geez: 'ዴ', roman: 'die', vowel: 'ie' }, { geez: 'ድ', roman: 'd', vowel: 'base' },
    { geez: 'ዶ', roman: 'do', vowel: 'o' }, { geez: 'ዷ', roman: 'dua', vowel: 'ua' }
  ]},
  { id: 12, geez: 'ጅ', baseRoman: 'j', colorGroup: 'purple', vowelForms: [
    { geez: 'ጀ', roman: 'je', vowel: 'e' }, { geez: 'ጁ', roman: 'ju', vowel: 'u' },
    { geez: 'ጂ', roman: 'ji', vowel: 'i' }, { geez: 'ጃ', roman: 'ja', vowel: 'a' },
    { geez: 'ጄ', roman: 'jie', vowel: 'ie' }, { geez: 'ጅ', roman: 'j', vowel: 'base' },
    { geez: 'ጆ', roman: 'jo', vowel: 'o' }, { geez: 'ጇ', roman: 'jua', vowel: 'ua' }
  ]},
  { id: 13, geez: 'ት', baseRoman: 't', colorGroup: 'red', vowelForms: [
    { geez: 'ተ', roman: 'te', vowel: 'e' }, { geez: 'ቱ', roman: 'tu', vowel: 'u' },
    { geez: 'ቲ', roman: 'ti', vowel: 'i' }, { geez: 'ታ', roman: 'ta', vowel: 'a' },
    { geez: 'ቴ', roman: 'tie', vowel: 'ie' }, { geez: 'ት', roman: 't', vowel: 'base' },
    { geez: 'ቶ', roman: 'to', vowel: 'o' }
  ]},
  { id: 14, geez: 'ች', baseRoman: 'ch', colorGroup: 'red', vowelForms: [
    { geez: 'ቸ', roman: 'che', vowel: 'e' }, { geez: 'ቹ', roman: 'chu', vowel: 'u' },
    { geez: 'ቺ', roman: 'chi', vowel: 'i' }, { geez: 'ቻ', roman: 'cha', vowel: 'a' },
    { geez: 'ቼ', roman: 'chie', vowel: 'ie' }, { geez: 'ች', roman: 'ch', vowel: 'base' },
    { geez: 'ቾ', roman: 'cho', vowel: 'o' }, { geez: 'ቿ', roman: 'chua', vowel: 'ua' }
  ]},
  { id: 141, geez: 'ጭ', baseRoman: 'chh', colorGroup: 'blue', vowelForms: [
    { geez: 'ጨ', roman: 'chhe', vowel: 'e' }, { geez: 'ጩ', roman: 'chhu', vowel: 'u' },
    { geez: 'ጪ', roman: 'chhi', vowel: 'i' }, { geez: 'ጫ', roman: 'chha', vowel: 'a' },
    { geez: 'ጬ', roman: 'chhie', vowel: 'ie' }, { geez: 'ጭ', roman: 'chh', vowel: 'base' },
    { geez: 'ጮ', roman: 'chho', vowel: 'o' }, { geez: 'ጯ', roman: 'chhua', vowel: 'ua' }
  ]},
  { id: 15, geez: 'ን', baseRoman: 'n', colorGroup: 'red', vowelForms: [
    { geez: 'ነ', roman: 'ne', vowel: 'e' }, { geez: 'ኑ', roman: 'nu', vowel: 'u' },
    { geez: 'ኒ', roman: 'ni', vowel: 'i' }, { geez: 'ና', roman: 'na', vowel: 'a' },
    { geez: 'ኔ', roman: 'nie', vowel: 'ie' }, { geez: 'ን', roman: 'n', vowel: 'base' },
    { geez: 'ኖ', roman: 'no', vowel: 'o' }, { geez: 'ኗ', roman: 'nua', vowel: 'ua' }
  ]},
  { id: 16, geez: 'ግ', baseRoman: 'g', colorGroup: 'red', vowelForms: [
    { geez: 'ገ', roman: 'ge', vowel: 'e' }, { geez: 'ጉ', roman: 'gu', vowel: 'u' },
    { geez: 'ጊ', roman: 'gi', vowel: 'i' }, { geez: 'ጋ', roman: 'ga', vowel: 'a' },
    { geez: 'ጌ', roman: 'gie', vowel: 'ie' }, { geez: 'ግ', roman: 'g', vowel: 'base' },
    { geez: 'ጎ', roman: 'go', vowel: 'o' }, { geez: 'ጓ', roman: 'gua', vowel: 'ua' }
  ]},
  { id: 17, geez: 'ፕ', baseRoman: 'p', colorGroup: 'red', vowelForms: [
    { geez: 'ፐ', roman: 'pe', vowel: 'e' }, { geez: 'ፑ', roman: 'pu', vowel: 'u' },
    { geez: 'ፒ', roman: 'pi', vowel: 'i' }, { geez: 'ፓ', roman: 'pa', vowel: 'a' },
    { geez: 'ፔ', roman: 'pie', vowel: 'ie' }, { geez: 'ፕ', roman: 'p', vowel: 'base' },
    { geez: 'ፖ', roman: 'po', vowel: 'o' }, { geez: 'ፗ', roman: 'pua', vowel: 'ua' }
  ]},
  { id: 18, geez: 'ይ', baseRoman: 'y', colorGroup: 'red', vowelForms: [
    { geez: 'የ', roman: 'ye', vowel: 'e' }, { geez: 'ዩ', roman: 'yu', vowel: 'u' },
    { geez: 'ዪ', roman: 'yi', vowel: 'i' }, { geez: 'ያ', roman: 'ya', vowel: 'a' },
    { geez: 'ዬ', roman: 'yie', vowel: 'ie' }, { geez: 'ይ', roman: 'y', vowel: 'base' },
    { geez: 'ዮ', roman: 'yo', vowel: 'o' }
  ]},
  { id: 19, geez: 'ው', baseRoman: 'w', colorGroup: 'brown', vowelForms: [
    { geez: 'ወ', roman: 'we', vowel: 'e' }, { geez: 'ዉ', roman: 'wu', vowel: 'u' },
    { geez: 'ዊ', roman: 'wi', vowel: 'i' }, { geez: 'ዋ', roman: 'wa', vowel: 'a' },
    { geez: 'ዌ', roman: 'wie', vowel: 'ie' }, { geez: 'ው', roman: 'w', vowel: 'base' },
    { geez: 'ዎ', roman: 'wo', vowel: 'o' }
  ]},
  { id: 20, geez: 'ም', baseRoman: 'm', colorGroup: 'brown', vowelForms: [
    { geez: 'መ', roman: 'me', vowel: 'e' }, { geez: 'ሙ', roman: 'mu', vowel: 'u' },
    { geez: 'ሚ', roman: 'mi', vowel: 'i' }, { geez: 'ማ', roman: 'ma', vowel: 'a' },
    { geez: 'ሜ', roman: 'mie', vowel: 'ie' }, { geez: 'ም', roman: 'm', vowel: 'base' },
    { geez: 'ሞ', roman: 'mo', vowel: 'o' }
  ]},
  { id: 21, geez: 'ህ', baseRoman: 'h', colorGroup: 'red', vowelForms: [
    { geez: 'ሀ', roman: 'he', vowel: 'e' }, { geez: 'ሁ', roman: 'hu', vowel: 'u' },
    { geez: 'ሂ', roman: 'hi', vowel: 'i' }, { geez: 'ሃ', roman: 'ha', vowel: 'a' },
    { geez: 'ሄ', roman: 'hie', vowel: 'ie' }, { geez: 'ህ', roman: 'h', vowel: 'base' },
    { geez: 'ሆ', roman: 'ho', vowel: 'o' }
  ]},
  { id: 25, geez: 'ቅ', baseRoman: 'q', colorGroup: 'red', vowelForms: [
    { geez: 'ቀ', roman: 'qe', vowel: 'e' }, { geez: 'ቁ', roman: 'qu', vowel: 'u' },
    { geez: 'ቂ', roman: 'qi', vowel: 'i' }, { geez: 'ቃ', roman: 'qa', vowel: 'a' },
    { geez: 'ቄ', roman: 'qie', vowel: 'ie' }, { geez: 'ቅ', roman: 'q', vowel: 'base' },
    { geez: 'ቆ', roman: 'qo', vowel: 'o' }, { geez: 'ቋ', roman: 'qua', vowel: 'ua' }
  ]},
  { id: 27, geez: 'ዕ', baseRoman: "'", colorGroup: 'brown', vowelForms: [
    { geez: 'ዐ', roman: "'e", vowel: 'e' }, { geez: 'ዑ', roman: "'u", vowel: 'u' },
    { geez: 'ዒ', roman: "'i", vowel: 'i' }, { geez: 'ዓ', roman: "'a", vowel: 'a' },
    { geez: 'ዔ', roman: "'ie", vowel: 'ie' }, { geez: 'ዕ', roman: "'", vowel: 'base' },
    { geez: 'ዖ', roman: "'o", vowel: 'o' }
  ]},
  { id: 28, geez: 'ጽ', baseRoman: 'ts', colorGroup: 'brown', vowelForms: [
    { geez: 'ጸ', roman: 'tse', vowel: 'e' }, { geez: 'ጹ', roman: 'tsu', vowel: 'u' },
    { geez: 'ጺ', roman: 'tsi', vowel: 'i' }, { geez: 'ጻ', roman: 'tsa', vowel: 'a' },
    { geez: 'ጼ', roman: 'tsie', vowel: 'ie' }, { geez: 'ጽ', roman: 'ts', vowel: 'base' },
    { geez: 'ጾ', roman: 'tso', vowel: 'o' }, { geez: 'ጿ', roman: 'tsua', vowel: 'ua' }
  ]},
  { id: 29, geez: 'ሥ', baseRoman: 's', colorGroup: 'teal', vowelForms: [
    { geez: 'ሠ', roman: 'se', vowel: 'e' }, { geez: 'ሡ', roman: 'su', vowel: 'u' },
    { geez: 'ሢ', roman: 'si', vowel: 'i' }, { geez: 'ሣ', roman: 'sa', vowel: 'a' },
    { geez: 'ሤ', roman: 'sie', vowel: 'ie' }, { geez: 'ሥ', roman: 's', vowel: 'base' },
    { geez: 'ሦ', roman: 'so', vowel: 'o' }, { geez: 'ሧ', roman: 'sua', vowel: 'ua' }
  ]},
  { id: 30, geez: 'ኅ', baseRoman: 'h', colorGroup: 'teal', vowelForms: [
    { geez: 'ኀ', roman: 'he', vowel: 'e' }, { geez: 'ኁ', roman: 'hu', vowel: 'u' },
    { geez: 'ኂ', roman: 'hi', vowel: 'i' }, { geez: 'ኃ', roman: 'ha', vowel: 'a' },
    { geez: 'ኄ', roman: 'hie', vowel: 'ie' }, { geez: 'ኅ', roman: 'h', vowel: 'base' },
    { geez: 'ኆ', roman: 'ho', vowel: 'o' }
  ]},
  { id: 31, geez: 'ር', baseRoman: 'r', colorGroup: 'teal', vowelForms: [
    { geez: 'ረ', roman: 're', vowel: 'e' }, { geez: 'ሩ', roman: 'ru', vowel: 'u' },
    { geez: 'ሪ', roman: 'ri', vowel: 'i' }, { geez: 'ራ', roman: 'ra', vowel: 'a' },
    { geez: 'ሬ', roman: 'rie', vowel: 'ie' }, { geez: 'ር', roman: 'r', vowel: 'base' },
    { geez: 'ሮ', roman: 'ro', vowel: 'o' }, { geez: 'ሯ', roman: 'rua', vowel: 'ua' }
  ]},
  { id: 34, geez: 'ፍ', baseRoman: 'f', colorGroup: 'teal', vowelForms: [
    { geez: 'ፈ', roman: 'fe', vowel: 'e' }, { geez: 'ፉ', roman: 'fu', vowel: 'u' },
    { geez: 'ፊ', roman: 'fi', vowel: 'i' }, { geez: 'ፋ', roman: 'fa', vowel: 'a' },
    { geez: 'ፌ', roman: 'fie', vowel: 'ie' }, { geez: 'ፍ', roman: 'f', vowel: 'base' },
    { geez: 'ፎ', roman: 'fo', vowel: 'o' }, { geez: 'ፏ', roman: 'fua', vowel: 'ua' }
  ]},
  { id: 22, geez: 'እ', baseRoman: 'e', colorGroup: 'green', vowelForms: [
    { geez: 'አ', roman: 'ea', vowel: 'e' }, { geez: 'ኡ', roman: 'eu', vowel: 'u' },
    { geez: 'ኢ', roman: 'ei', vowel: 'i' }, { geez: 'ኣ', roman: 'ea', vowel: 'a' },
    { geez: 'ኤ', roman: 'eie', vowel: 'ie' }, { geez: 'እ', roman: 'e', vowel: 'base' },
    { geez: 'ኦ', roman: 'eo', vowel: 'o' }
  ]},
  { id: 23, geez: 'ቕ', baseRoman: "q'", colorGroup: 'blue', vowelForms: [
    { geez: 'ቐ', roman: "q'e", vowel: 'e' }, { geez: 'ቑ', roman: "q'u", vowel: 'u' },
    { geez: 'ቒ', roman: "q'i", vowel: 'i' }, { geez: 'ቓ', roman: "q'a", vowel: 'a' },
    { geez: 'ቔ', roman: "q'ie", vowel: 'ie' }, { geez: 'ቕ', roman: "q'", vowel: 'base' },
    { geez: 'ቖ', roman: "q'o", vowel: 'o' }
  ]},
  { id: 24, geez: 'ሕ', baseRoman: "h'", colorGroup: 'blue', vowelForms: [
    { geez: 'ሐ', roman: "h'e", vowel: 'e' }, { geez: 'ሑ', roman: "h'u", vowel: 'u' },
    { geez: 'ሒ', roman: "h'i", vowel: 'i' }, { geez: 'ሓ', roman: "h'a", vowel: 'a' },
    { geez: 'ሔ', roman: "h'ie", vowel: 'ie' }, { geez: 'ሕ', roman: "h'", vowel: 'base' },
    { geez: 'ሖ', roman: "h'o", vowel: 'o' }
  ]},
  { id: 26, geez: 'ጵ', baseRoman: "p'", colorGroup: 'blue', vowelForms: [
    { geez: 'ጰ', roman: "p'e", vowel: 'e' }, { geez: 'ጱ', roman: "p'u", vowel: 'u' },
    { geez: 'ጲ', roman: "p'i", vowel: 'i' }, { geez: 'ጳ', roman: "p'a", vowel: 'a' },
    { geez: 'ጴ', roman: "p'ie", vowel: 'ie' }, { geez: 'ጵ', roman: "p'", vowel: 'base' },
    { geez: 'ጶ', roman: "p'o", vowel: 'o' }
  ]},
  { id: 35, geez: 'ጥ', baseRoman: "t'", colorGroup: 'blue', vowelForms: [
    { geez: 'ጠ', roman: "t'e", vowel: 'e' }, { geez: 'ጡ', roman: "t'u", vowel: 'u' },
    { geez: 'ጢ', roman: "t'i", vowel: 'i' }, { geez: 'ጣ', roman: "t'a", vowel: 'a' },
    { geez: 'ጤ', roman: "t'ie", vowel: 'ie' }, { geez: 'ጥ', roman: "t'", vowel: 'base' },
    { geez: 'ጦ', roman: "t'o", vowel: 'o' }, { geez: 'ጧ', roman: "t'ua", vowel: 'ua' }
  ]},
  { id: 36, geez: 'ቍ', baseRoman: 'qw', colorGroup: 'red', vowelForms: [
    { geez: 'ቈ', roman: 'qwe', vowel: 'e' }, { geez: 'ቊ', roman: 'qwi', vowel: 'i' },
    { geez: 'ቋ', roman: 'qwa', vowel: 'a' }, { geez: 'ቌ', roman: 'qwie', vowel: 'ie' },
    { geez: 'ቍ', roman: 'qw', vowel: 'base' }
  ]},
  { id: 37, geez: 'ኵ', baseRoman: 'kw', colorGroup: 'green', vowelForms: [
    { geez: 'ኰ', roman: 'kwe', vowel: 'e' }, { geez: 'ኲ', roman: 'kwi', vowel: 'i' },
    { geez: 'ኳ', roman: 'kwa', vowel: 'a' }, { geez: 'ኴ', roman: 'kwie', vowel: 'ie' },
    { geez: 'ኵ', roman: 'kw', vowel: 'base' }
  ]},
  { id: 38, geez: 'ዅ', baseRoman: 'hw', colorGroup: 'purple', vowelForms: [
    { geez: 'ዀ', roman: 'hwe', vowel: 'e' }, { geez: 'ዂ', roman: 'hwi', vowel: 'i' },
    { geez: 'ዃ', roman: 'hwa', vowel: 'a' }, { geez: 'ዄ', roman: 'hwie', vowel: 'ie' },
    { geez: 'ዅ', roman: 'hw', vowel: 'base' }
  ]},
  { id: 39, geez: 'ጕ', baseRoman: 'gw', colorGroup: 'red', vowelForms: [
    { geez: 'ጐ', roman: 'gwe', vowel: 'e' }, { geez: 'ጒ', roman: 'gwi', vowel: 'i' },
    { geez: 'ጓ', roman: 'gwa', vowel: 'a' }, { geez: 'ጔ', roman: 'gwie', vowel: 'ie' },
    { geez: 'ጕ', roman: 'gw', vowel: 'base' }
  ]}
];

// Lessons derived from xml/Alphabet-Lessons.xml
export const lessons = [
  { id: 'by shape', name: 'By Shape', chars: ['በ','ሰ','ሸ','ለ','አ','ከ','ኸ','ቨ','ዘ','ዠ','ነ','ኘ','ኀ','ገ','ፐ','ተ','ቸ','የ','ቀ','ቐ','ጠ','ሐ','ጨ','ደ','ጀ','ጸ','ጰ','ሀ','ሠ','ረ','ፈ'] },
  { id: 'Two Legs', name: 'Two Legs', chars: ['በ','ሰ','ሸ','ለ','አ','ከ','ኸ','ቨ','ዘ','ዠ'] },
  { id: 'One Leg', name: 'One Leg', chars: ['ነ','ኘ','ኀ','ገ','ፐ','ተ','ቸ','የ','ቀ','ቐ'] },
  { id: 'Three Legs', name: 'Three Legs', chars: ['ጠ','ሐ','ጨ'] },
  { id: 'Rounded', name: 'Rounded', chars: ['ደ','ጀ','ጸ','ጰ','የ','ቀ','ቐ'] },
  { id: 'Facing Up-right', name: 'Facing Up-Right', chars: ['ሀ','ሠ','ረ','ፈ'] },
  { id: 'Wa Sound', name: 'Wa Sound', chars: ['ቧ','ሷ','ሿ','ሏ','ኳ','ዃ','ቯ','ዟ','ዧ','ኗ','ኟ','ኋ','ጓ','ፗ','ጧ','ቿ','ቋ','ጯ','ዷ','ጇ','ጿ','ጷ','ሧ','ሯ','ፏ'] },
  { id: 'W Sounds', name: 'W Sounds', chars: ['ኰ','ዀ','ቈ','ጐ'] },
  { id: 'Explosive Sounds', name: 'Explosive Sounds', chars: ['ቀ','ጸ','ጰ','ሐ','ጠ','ጨ'] },
];

export const colorMap = { green: '#4ade80', purple: '#c084fc', blue: '#60a5fa', red: '#f87171', brown: '#a0522d', teal: '#5eead4' };

// Vocabulary database - words grouped by the characters they contain
export const vocabulary = {
  'በ': [
    { geez: 'በር', roman: 'ber', meaning: 'door', emoji: '🚪' },
    { geez: 'በረከት', roman: 'bereket', meaning: 'blessing', emoji: '🙏' },
    { geez: 'በሬ', roman: 'bere', meaning: 'ox', emoji: '🐂' }
  ],
  'ቡ': [
    { geez: 'ቡና', roman: 'buna', meaning: 'coffee', emoji: '☕' },
    { geez: 'ቡኪያ', roman: 'bukiya', meaning: 'jar', emoji: '🏺' }
  ],
  'ቢ': [
    { geez: 'ቢራ', roman: 'bira', meaning: 'beer', emoji: '🍺' },
    { geez: 'ቢሮ', roman: 'biro', meaning: 'office', emoji: '🏢' }
  ],
  'ባ': [
    { geez: 'ባቡር', roman: 'babur', meaning: 'train', emoji: '🚂' },
    { geez: 'ባንክ', roman: 'bank', meaning: 'bank', emoji: '🏦' },
    { geez: 'ባህር', roman: 'bahir', meaning: 'sea', emoji: '🌊' }
  ],
  'ሰ': [
    { geez: 'ሰው', roman: 'sew', meaning: 'person', emoji: '👤' },
    { geez: 'ሰማይ', roman: 'semay', meaning: 'sky', emoji: '☁️' }
  ],
  'ሱ': [
    { geez: 'ሱቅ', roman: 'suq', meaning: 'shop', emoji: '🏪' }
  ],
  'ሳ': [
    { geez: 'ሳር', roman: 'sar', meaning: 'grass', emoji: '🌱' },
    { geez: 'ሳጥን', roman: 'satən', meaning: 'box', emoji: '📦' }
  ],
  'ተ': [
    { geez: 'ተራራ', roman: 'terara', meaning: 'mountain', emoji: '⛰️' }
  ],
  'ታ': [
    { geez: 'ታሪክ', roman: 'tarik', meaning: 'history', emoji: '📜' }
  ],
  'ወ': [
    { geez: 'ወር', roman: 'wer', meaning: 'month', emoji: '📅' },
    { geez: 'ወይን', roman: 'weyn', meaning: 'grape', emoji: '🍇' }
  ],
  'ዋ': [
    { geez: 'ዋና', roman: 'wana', meaning: 'main', emoji: '⭐' }
  ],
  'መ': [
    { geez: 'መሬት', roman: 'meret', meaning: 'land', emoji: '🌍' },
    { geez: 'መጽሐፍ', roman: 'mets\'haf', meaning: 'book', emoji: '📚' }
  ],
  'ማ': [
    { geez: 'ማለት', roman: 'malet', meaning: 'to mean', emoji: '💭' }
  ],
  'ነ': [
    { geez: 'ነገር', roman: 'neger', meaning: 'thing', emoji: '📦' }
  ],
  'ና': [
    { geez: 'ናት', roman: 'nat', meaning: 'she is', emoji: '👩' }
  ],
  'ለ': [
    { geez: 'ለም', roman: 'lem', meaning: 'fertile', emoji: '🌾' },
    { geez: 'ለጋስ', roman: 'legas', meaning: 'generous', emoji: '🎁' }
  ],
  'ላ': [
    { geez: 'ላይ', roman: 'lay', meaning: 'on/above', emoji: '⬆️' }
  ],
  'ከ': [
    { geez: 'ከተማ', roman: 'ketema', meaning: 'city', emoji: '🏙️' }
  ],
  'ገ': [
    { geez: 'ገበያ', roman: 'gebeya', meaning: 'market', emoji: '🏪' }
  ],
  'ደ': [
    { geez: 'ደብዳቤ', roman: 'debdabe', meaning: 'letter', emoji: '✉️' }
  ],
  'ጀ': [
    { geez: 'ጀግና', roman: 'jegna', meaning: 'hero', emoji: '🦸' }
  ],
  'የ': [
    { geez: 'የት', roman: 'yet', meaning: 'where', emoji: '❓' }
  ],
  'ፈ': [
    { geez: 'ፈረስ', roman: 'feres', meaning: 'horse', emoji: '🐴' }
  ],
  'ረ': [
    { geez: 'ረጅም', roman: 'rejim', meaning: 'long', emoji: '📏' }
  ],
  'ሀ': [
    { geez: 'ሀገር', roman: 'hager', meaning: 'country', emoji: '🏳️' }
  ],
  'ዘ': [
    { geez: 'ዘመን', roman: 'zemen', meaning: 'time/era', emoji: '⏰' }
  ]
};

// Audio playback helper
export const playAudioTTS = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'am-ET';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  }
};

export const playCharacterAudioByForm = (vowelForm, volume = 1.0) => {
  if (!vowelForm) return;
  const audio = new Audio(`sounds/${vowelForm.geez}.mp3`);
  audio.volume = volume;
  audio.play().catch(() => {
    playAudioTTS(vowelForm.roman);
  });
};
