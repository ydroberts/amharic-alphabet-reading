# Amharic Learning App - Component Specification

## Overview

A multi-page educational app for learning the Amharic (Ge'ez) alphabet with audio, voice practice, vocabulary, and cultural content.

**Pages:**
1. **Consonants Page** (done) - Main consonant grid with lesson filtering
2. **Vowels Page** (planned) - Horizontal vowel forms display, triggered by clicking a consonant
3. **Words Page** (planned) - Vocabulary with images
4. **Cultural Page** (planned) - YouTube cultural music/videos

**Navigation:** Clicking a consonant on Page 1 transitions to Page 2 (vowels). Pages 3 and 4 accessible via top nav tabs.

---

## Shared Data & State (App-level)

### Data Sources
- `romanizationMap` - Multi-language transcription lookup (en, ar, he, om) from `GeezAlphabetsDB.xml`
- `romanAliases` - Maps roman values to alphakeys for transcription lookup
- `characters[]` - 34+ consonants, each with `{ id, geez, baseRoman, colorGroup, vowelForms[] }`
- `lessons[]` - 9 lesson groups from `Alphabet-Lessons.xml` (By Shape, Two Legs, One Leg, etc.)
- `vocabulary{}` - Words keyed by Ge'ez character, each with `{ geez, roman, meaning, emoji }`
- `uiTranslations` - UI labels in 4 languages
- `colorMap` - Color groups: green, purple, blue, red, brown, teal

### Shared Settings (persist across pages)
| State | Type | Default | Description |
|-------|------|---------|-------------|
| `language` | `'en'\|'ar'\|'he'\|'om'` | `'en'` | Display language |
| `readingSpeed` | number (ms) | 600 | Auto-read interval |
| `volume` | 0.0-1.0 | 1.0 | Audio volume |
| `highlightColor` | string | `'blue'` | Selection highlight color |
| `showTranscription` | boolean | true | Show romanization below characters |

### Shared Functions
- `getTranscription(roman, lang)` - Looks up romanizationMap, returns target language transcription
- `t(key, lang)` - UI translation helper
- `playCharacterAudio(character, vowelIndex)` - Plays MP3 from `public/sounds/{geez}.mp3`, falls back to TTS
- `playAudioTTS(text)` - Speech synthesis fallback

### Audio System
- **Primary:** 324 MP3 files in `public/sounds/` named by Ge'ez character (e.g., `sounds/በ.mp3`)
- **Fallback:** Browser SpeechSynthesis API with `lang: 'am-ET'`
- Audio indicators: Blue dot = real audio, Green dot = TTS

---

## Page 1: Consonants Page (DONE)

### Layout
```
+------------------------------------------------------------------+
| HEADER: "Amharic Learning App"  [Real Audio] [TTS] indicators    |
+------------------------------------------------------------------+
| CONTROLS BAR: [Language ▼] [▶ Read] [☑ Cycle] [⚙ Settings]      |
+------------------------------------------------------------------+
|          |                              |                         |
| LESSONS  |     CONSONANTS GRID          |    VOWELS PANEL         |
| SIDEBAR  |                              |    (vertical list)      |
| (w-48)   |  [◀ Consonants ▶] [▶ Read]  |                         |
|          |                              |  [▲] [▼] [🎤 Practice]  |
| By Shape |  በ  ሰ  ሸ  ለ  አ  ከ  ኸ      |  [▶ Review] (after      |
| Two Legs |  ቨ  ዘ  ዠ  ነ  ኘ  ኀ  ገ      |   practice)             |
| One Leg  |  ፐ  ተ  ቸ  የ  ቀ  ቐ  ጠ      |                         |
| Three L. |  ሐ  ጨ  ደ  ጀ  ጸ  ጰ  ሀ      |  [በ  be]                |
| Rounded  |  ሠ  ረ  ፈ                     |  [ቡ  bu]                |
| Facing.. |                              |  [ቢ  bi]                |
| Wa Sound |                              |  [ባ  ba]  ...           |
| W Sounds |                              |                         |
| Explosive|                              |                         |
+------------------------------------------------------------------+
| VOCABULARY: Words using "በ" (be)                                 |
| [🚪 በር ber door] [☕ ቡና buna coffee] [🐂 በሬ bere ox]           |
+------------------------------------------------------------------+
```

### Component: `AmharicLearningApp`
**File:** `src/App.jsx` (currently monolithic - will be split into components)

### State
| State | Type | Description |
|-------|------|-------------|
| `screen` | string | Current screen (currently unused, will become page nav) |
| `selectedLesson` | string | Active lesson ID (e.g., 'by shape') |
| `selectedCharacter` | object | Currently selected consonant from characters[] |
| `selectedVowel` | string | Current vowel type ('e','u','i','a','ie','base','o','ua') |
| `selectedVowelIndex` | number | Index into selectedCharacter.vowelForms[] |
| `showMobileMenu` | boolean | Mobile hamburger menu toggle |
| `isPlaying` | boolean | Audio currently playing |
| `isAutoReading` | boolean | Auto-reading vowels |
| `isAutoReadingConsonants` | boolean | Auto-reading through consonant grid |
| `isCycleMode` | boolean | Repeat same consonant's vowels in auto-read |
| `isReading` | boolean | Enhanced auto-reading active |
| `readingState` | `{consonantIndex, vowelIndex}` | Position in auto-read sequence |
| `showSettings` | boolean | Settings modal visible |

### Practice Mode State
| State | Type | Description |
|-------|------|-------------|
| `isPracticing` | boolean | Practice mode active |
| `practiceStep` | number | Current vowel index in practice cycle |
| `practicePhase` | `'listen'\|'record'\|'idle'` | Current phase of practice |
| `recordings` | `{[index]: blobURL}` | Recorded audio blobs per vowel |
| `playingRecording` | number\|null | Index of recording currently playing |
| `isReviewing` | boolean | Review mode (playback of recordings) |
| `reviewStep` | number | Current vowel in review cycle |
| `reviewPhase` | `'user'\|'ref'` | Playing user recording or reference |

### Functions
| Function | Description |
|----------|-------------|
| `startAutoReading()` | Begin auto-reading vowels for selected consonant |
| `stopAutoReading()` | Stop vowel auto-reading |
| `startAutoReadingConsonants()` | Auto-read through consonant grid |
| `stopAutoReadingConsonants()` | Stop consonant auto-reading |
| `startPractice()` | Begin practice mode: listen then record each vowel |
| `stopPractice()` | Cancel practice, stop recording |
| `startReview()` | Replay recordings vs reference audio |
| `stopReview()` | Cancel review playback |
| `playRecording(index)` | Play user's recorded audio for vowel at index |
| `playReference(index)` | Play reference audio for vowel at index |
| `getVocabularyForCharacter()` | Get vocabulary words for selected character |
| `playVocabAudio(word)` | Play TTS for vocabulary word |

### Interactions
1. **Lesson selection** (left sidebar) filters consonant grid
2. **Click consonant** -> selects it, shows its vowels in right panel, plays first vowel audio
3. **Click vowel** (right panel) -> highlights it, plays audio
4. **[◀ ▶] consonant nav** -> prev/next consonant with audio
5. **[▲ ▼] vowel nav** -> prev/next vowel with audio
6. **[▶ Read]** -> auto-reads all consonants with their vowels sequentially
7. **[☑ Cycle]** -> when reading, loops the same consonant's vowels
8. **[▶ Read] consonants** -> reads through consonant grid (first vowel only)
9. **[🎤 Practice]** -> listen-then-record cycle for each vowel
10. **[▶ Review]** -> replays user recordings vs reference (appears after practice)

### Settings Modal
- Language selector (EN/AR/HE/OM)
- Reading speed slider (300-1500ms)
- Volume slider (0-100%)
- Highlight color picker (blue/green/red/purple/orange/pink)
- Show transcription toggle

---

## Page 2: Vowels Page (PLANNED)

> **Waiting for user mockup.** Key difference: horizontal layout instead of vertical.

### What to include in the spec:
- [ ] Layout mockup (horizontal vowel card arrangement)
- [ ] How user arrives here (click consonant on Page 1)
- [ ] Back navigation to consonants
- [ ] Which controls carry over (Practice, Review, Read, audio)
- [ ] Large character display area
- [ ] Transcription display position
- [ ] Animation/highlight behavior during auto-read
- [ ] Mobile responsive behavior

---

## Page 3: Words Page (PLANNED)

> **Waiting for user mockup.**

### What to include in the spec:
- [ ] Layout mockup (word cards with images)
- [ ] Image source and format (local files? URLs?)
- [ ] Word data structure: `{ geez, roman, meaning, image, audio? }`
- [ ] Filtering: by consonant? by lesson? by difficulty?
- [ ] How to navigate here (from vowel page? from top nav?)
- [ ] Interactive elements (click to hear word, see translation)
- [ ] Mobile responsive behavior

---

## Page 4: Cultural Page (PLANNED)

> **Waiting for user mockup.**

### What to include in the spec:
- [ ] Layout mockup (video grid? single player?)
- [ ] YouTube video IDs or channel/playlist URLs
- [ ] Video categories (music, children's songs, cultural, educational?)
- [ ] Embed method (iframe? react-youtube?)
- [ ] Playback controls needed
- [ ] How to navigate here (top nav tab)
- [ ] Mobile responsive behavior

---

## Navigation Between Pages

> **To be defined.** Options:
> - Tab bar at top (Consonants | Vowels | Words | Cultural)
> - Consonants -> click -> Vowels (automatic transition)
> - React Router vs simple state-based page switching

---

## File Structure (Current -> Planned)

```
src/
├── App.jsx              # Currently monolithic (~1600 lines)
│                        # PLANNED: Split into:
├── App.jsx              # Router/navigation shell
├── data/
│   ├── characters.js    # characters[], lessons[], vocabulary{}
│   ├── romanization.js  # romanizationMap, romanAliases, getTranscription()
│   └── translations.js  # uiTranslations, t()
├── components/
│   ├── ConsonantsPage.jsx
│   ├── VowelsPage.jsx
│   ├── WordsPage.jsx
│   ├── CulturalPage.jsx
│   ├── SettingsModal.jsx
│   └── shared/
│       ├── Header.jsx
│       ├── ControlsBar.jsx
│       └── AudioPlayer.jsx  # playCharacterAudio, playAudioTTS
```
