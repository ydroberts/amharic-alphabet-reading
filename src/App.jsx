import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Volume2, Menu, X } from 'lucide-react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import VowelsPage from './components/VowelsPage';
import VocabularyPage from './components/VocabularyPage';
import { romanizationMap, getTranscription, t, characters, lessons, vocabulary } from './data/alphabetData';

const AmharicLearningApp = () => {
  const [screen, setScreen] = useState('learning');
  const [selectedLesson, setSelectedLesson] = useState(lessons[0].id);
  const [selectedVowel, setSelectedVowel] = useState('e');
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [selectedVowelIndex, setSelectedVowelIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoReading, setIsAutoReading] = useState(false);
  const [isAutoReadingConsonants, setIsAutoReadingConsonants] = useState(false);
  // NEW: Enhanced features states
  const [language, setLanguage] = useState('en'); // en, ar, he, om
  const [isCycleMode, setIsCycleMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [readingSpeed, setReadingSpeed] = useState(1000); // milliseconds
  const [volume, setVolume] = useState(1.0); // 0.0 to 1.0
  const [highlightColor, setHighlightColor] = useState('blue');
  const [showTranscription, setShowTranscription] = useState(true);
  const [isReading, setIsReading] = useState(false);
  const [readingState, setReadingState] = useState({ consonantIndex: 0, vowelIndex: 0 });
  // Practice mode states
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceStep, setPracticeStep] = useState(0);
  const [practicePhase, setPracticePhase] = useState('idle'); // 'listen' | 'record' | 'idle'
  const [recordings, setRecordings] = useState({});
  const [playingRecording, setPlayingRecording] = useState(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewStep, setReviewStep] = useState(0);
  const [reviewPhase, setReviewPhase] = useState('user'); // 'user' | 'ref'
  const [vocabCollapsed, setVocabCollapsed] = useState(true);
  // Auto-cycle states (consonants → vowels → vocabulary → next consonant)
  const [isCycling, setIsCycling] = useState(false);
  const [isCyclePaused, setIsCyclePaused] = useState(false);
  const [cycleCharIndex, setCycleCharIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const cycleTimerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const practiceTimerRef = useRef(null);
  const reviewAudioRef = useRef(null);

  // Filter characters based on selected lesson
  const currentLesson = lessons.find(l => l.id === selectedLesson) || lessons[0];
  const filteredCharacters = (() => {
    // Check if any lesson chars match a first vowel form (e form) directly
    const directMatches = characters.filter(char =>
      currentLesson.chars.includes(char.vowelForms[0].geez)
    );
    if (directMatches.length > 0) {
      // Sort to match the lesson's char order from XML
      return directMatches.sort((a, b) =>
        currentLesson.chars.indexOf(a.vowelForms[0].geez) - currentLesson.chars.indexOf(b.vowelForms[0].geez)
      );
    }

    // Otherwise, chars are specific vowel forms (e.g. Wa Sound 'ua' forms)
    // Create standalone entries for each matching vowel form
    const results = [];
    for (const lessonChar of currentLesson.chars) {
      for (const char of characters) {
        const form = char.vowelForms.find(f => f.geez === lessonChar);
        if (form) {
          results.push({
            id: `${char.id}-${form.vowel}`,
            geez: form.geez,
            baseRoman: form.roman,
            colorGroup: char.colorGroup,
            vowelForms: [form],
          });
          break;
        }
      }
    }
    return results;
  })();

  // Get vocabulary words for the selected character
  const getVocabularyForCharacter = () => {
    if (!selectedCharacter || selectedVowelIndex === null) return [];
    const selectedChar = selectedCharacter.vowelForms[selectedVowelIndex].geez;
    return vocabulary[selectedChar] || [];
  };

  // Audio files from sounds/ directory (from GeezAlphabetsDB.xml sndurl)
  const nativeAudio = null; // Removed embedded audio - using file-based audio



  // Check if character has audio (all characters have potential audio files)
  const hasAudio = (geezChar) => {
    return true;
  };

  // Audio playback using real files
  const playAudio = (text, isWord = false) => {
    setIsPlaying(true);
    
    // For direct text, use TTS fallback
    if (isWord || typeof text === 'string') {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'am-ET';
        utterance.rate = 0.8;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const playCharacterAudio = (character, vowelIndex) => {
    if (!character || vowelIndex === null) return;
    const vowelForm = character.vowelForms[vowelIndex];
    const geezChar = vowelForm.geez;

    // Try native audio file first
    const audio = new Audio(`sounds/${geezChar}.mp3`);
    audio.volume = volume;
    audio.play().catch(() => {
      // Fall back to speech synthesis
      playAudioTTS(vowelForm.roman);
    });
  };

  const playAudioTTS = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'am-ET';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const playWordAudio = (example) => {
    if (!example) return;
    playAudioTTS(example.roman);
  };

  const playVocabAudio = (word) => {
    if (!word) return;
    playAudioTTS(word.roman);
  };

  // Auto-reading vowels feature
  const startAutoReading = () => {
    if (!selectedCharacter) return;
    setIsAutoReading(true);
  };

  const stopAutoReading = () => {
    setIsAutoReading(false);
  };

  // Auto-reading consonants feature
  const startAutoReadingConsonants = () => {
    setIsAutoReadingConsonants(true);
  };

  const stopAutoReadingConsonants = () => {
    setIsAutoReadingConsonants(false);
  };

  // Enhanced auto-reading with cycle feature
  useEffect(() => {
    if (!isReading) return;
    
    const timer = setInterval(() => {
      setReadingState(prevState => {
        const { consonantIndex, vowelIndex } = prevState;
        const currentChar = filteredCharacters[consonantIndex];

        if (!currentChar) {
          setIsReading(false);
          return { consonantIndex: 0, vowelIndex: 0 };
        }

        // Play current sound
        setSelectedCharacter(currentChar);
        setSelectedVowelIndex(vowelIndex);
        setSelectedVowel(currentChar.vowelForms[vowelIndex].vowel);
        playCharacterAudio(currentChar, vowelIndex);

        // Calculate next position
        const nextVowelIndex = vowelIndex + 1;

        if (nextVowelIndex >= currentChar.vowelForms.length) {
          // Finished vowel family
          if (isCycleMode) {
            // Cycle: restart same consonant
            return { consonantIndex, vowelIndex: 0 };
          } else {
            // Continue: move to next consonant
            const nextConsonantIndex = consonantIndex + 1;
            if (nextConsonantIndex >= filteredCharacters.length) {
              // Finished all consonants
              setIsReading(false);
              return { consonantIndex: 0, vowelIndex: 0 };
            }
            return { consonantIndex: nextConsonantIndex, vowelIndex: 0 };
          }
        } else {
          // Continue with next vowel in same family
          return { consonantIndex, vowelIndex: nextVowelIndex };
        }
      });
    }, readingSpeed);
    
    return () => clearInterval(timer);
  }, [isReading, readingSpeed, isCycleMode]);

  // Handle auto-reading progression for consonants
  useEffect(() => {
    if (!isAutoReadingConsonants) return;
    
    // Start from first consonant
    let currentIndex = 0;
    const firstChar = filteredCharacters[0];
    setSelectedCharacter(firstChar);
    setSelectedVowelIndex(0);
    setSelectedVowel('e');
    playCharacterAudio(firstChar, 0);

    const timer = setInterval(() => {
      currentIndex = currentIndex + 1;

      // Stop after completing one full cycle (all consonants)
      if (currentIndex >= filteredCharacters.length) {
        clearInterval(timer);
        setIsAutoReadingConsonants(false);
        // Reset to first consonant
        const resetChar = filteredCharacters[0];
        setSelectedCharacter(resetChar);
        setSelectedVowelIndex(0);
        setSelectedVowel('e');
        return;
      }

      const nextChar = filteredCharacters[currentIndex];
      setSelectedCharacter(nextChar);
      setSelectedVowelIndex(0);
      setSelectedVowel('e');
      playCharacterAudio(nextChar, 0);
    }, readingSpeed); // Use settings speed
    
    return () => clearInterval(timer);
  }, [isAutoReadingConsonants, readingSpeed]);

  // Stop vowel auto-reading when character changes (manual selection by user)
  useEffect(() => {
    if (isAutoReading && !isAutoReadingConsonants) {
      stopAutoReading();
    }
  }, [selectedCharacter?.id]);

  // === Practice Mode Functions ===
  const startPractice = async () => {
    if (!selectedCharacter) return;
    // Clean up old recording URLs
    Object.values(recordings).forEach(url => URL.revokeObjectURL(url));
    setRecordings({});
    setPracticeStep(0);
    setSelectedVowelIndex(0);
    setSelectedVowel(selectedCharacter.vowelForms[0].vowel);
    setIsPracticing(true);
    setPracticePhase('listen');
  };

  const stopPractice = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (practiceTimerRef.current) {
      clearTimeout(practiceTimerRef.current);
      practiceTimerRef.current = null;
    }
    setIsPracticing(false);
    setPracticePhase('idle');
    setPracticeStep(0);
  };

  // Practice cycle: listen phase plays reference, then record phase captures user voice
  useEffect(() => {
    if (!isPracticing || !selectedCharacter) return;

    if (practicePhase === 'listen') {
      // Highlight and play reference audio for current step
      setSelectedVowelIndex(practiceStep);
      setSelectedVowel(selectedCharacter.vowelForms[practiceStep].vowel);

      const geezChar = selectedCharacter.vowelForms[practiceStep].geez;
      const audio = new Audio(`sounds/${geezChar}.mp3`);
      audio.volume = volume;
      audio.play().catch(() => {
        playAudioTTS(selectedCharacter.vowelForms[practiceStep].roman);
      });

      // After reference plays, switch to record phase
      practiceTimerRef.current = setTimeout(() => {
        setPracticePhase('record');
      }, 1500);
    }

    if (practicePhase === 'record') {
      // Start recording user's voice
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          audioChunksRef.current = [];
          const recorder = new MediaRecorder(stream);
          mediaRecorderRef.current = recorder;

          recorder.ondataavailable = (e) => {
            if (e.data.size > 0) audioChunksRef.current.push(e.data);
          };

          recorder.onstop = () => {
            stream.getTracks().forEach(track => track.stop());
            const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const url = URL.createObjectURL(blob);
            setRecordings(prev => ({ ...prev, [practiceStep]: url }));

            // Move to next vowel or finish
            const nextStep = practiceStep + 1;
            if (nextStep < selectedCharacter.vowelForms.length) {
              setPracticeStep(nextStep);
              setPracticePhase('listen');
            } else {
              setPracticePhase('idle');
              // Keep isPracticing true so user can review recordings
            }
          };

          recorder.start();
          // Record for 2 seconds then stop
          practiceTimerRef.current = setTimeout(() => {
            if (recorder.state === 'recording') {
              recorder.stop();
            }
          }, 2000);
        })
        .catch(() => {
          // Microphone access denied - skip recording, move on
          const nextStep = practiceStep + 1;
          if (nextStep < selectedCharacter.vowelForms.length) {
            setPracticeStep(nextStep);
            setPracticePhase('listen');
          } else {
            setPracticePhase('idle');
          }
        });
    }

    return () => {
      if (practiceTimerRef.current) {
        clearTimeout(practiceTimerRef.current);
        practiceTimerRef.current = null;
      }
    };
  }, [isPracticing, practiceStep, practicePhase]);

  // Clean up recording URLs on unmount or character change
  useEffect(() => {
    if (isPracticing) {
      stopPractice();
    }
    return () => {
      Object.values(recordings).forEach(url => URL.revokeObjectURL(url));
    };
  }, [selectedCharacter?.id]);

  const playRecording = (index) => {
    if (!recordings[index]) return;
    setPlayingRecording(index);
    const audio = new Audio(recordings[index]);
    audio.volume = volume;
    audio.onended = () => setPlayingRecording(null);
    audio.play().catch(() => setPlayingRecording(null));
  };

  const playReference = (index) => {
    if (!selectedCharacter) return;
    const geezChar = selectedCharacter.vowelForms[index].geez;
    const audio = new Audio(`sounds/${geezChar}.mp3`);
    audio.volume = volume;
    audio.play().catch(() => {
      playAudioTTS(selectedCharacter.vowelForms[index].roman);
    });
  };

  // === Review Mode: plays user recording then reference for each vowel ===
  const startReview = () => {
    if (!selectedCharacter || Object.keys(recordings).length === 0) return;
    setIsReviewing(true);
    setReviewStep(0);
    setReviewPhase('user');
  };

  const stopReview = () => {
    if (reviewAudioRef.current) {
      reviewAudioRef.current.pause();
      reviewAudioRef.current = null;
    }
    setIsReviewing(false);
    setReviewStep(0);
    setReviewPhase('user');
    setPlayingRecording(null);
  };

  useEffect(() => {
    if (!isReviewing || !selectedCharacter) return;

    // Find next vowel index that has a recording
    let step = reviewStep;
    while (step < selectedCharacter.vowelForms.length && !recordings[step]) {
      step++;
    }
    if (step >= selectedCharacter.vowelForms.length) {
      // Finished reviewing all
      stopReview();
      return;
    }
    if (step !== reviewStep) {
      setReviewStep(step);
      return;
    }

    // Highlight current vowel
    setSelectedVowelIndex(step);
    setSelectedVowel(selectedCharacter.vowelForms[step].vowel);

    if (reviewPhase === 'user') {
      // Play user's recording
      setPlayingRecording(step);
      const audio = new Audio(recordings[step]);
      audio.volume = volume;
      reviewAudioRef.current = audio;
      audio.onended = () => {
        setPlayingRecording(null);
        reviewAudioRef.current = null;
        // Short pause then play reference
        setTimeout(() => setReviewPhase('ref'), 400);
      };
      audio.play().catch(() => {
        setPlayingRecording(null);
        setTimeout(() => setReviewPhase('ref'), 400);
      });
    } else if (reviewPhase === 'ref') {
      // Play reference audio
      const geezChar = selectedCharacter.vowelForms[step].geez;
      const audio = new Audio(`sounds/${geezChar}.mp3`);
      audio.volume = volume;
      reviewAudioRef.current = audio;
      audio.onended = () => {
        reviewAudioRef.current = null;
        // Move to next vowel
        const nextStep = step + 1;
        setTimeout(() => {
          setReviewStep(nextStep);
          setReviewPhase('user');
        }, 500);
      };
      audio.play().catch(() => {
        playAudioTTS(selectedCharacter.vowelForms[step].roman);
        const nextStep = step + 1;
        setTimeout(() => {
          setReviewStep(nextStep);
          setReviewPhase('user');
        }, 1500);
      });
    }

    return () => {
      if (reviewAudioRef.current) {
        reviewAudioRef.current.pause();
        reviewAudioRef.current = null;
      }
    };
  }, [isReviewing, reviewStep, reviewPhase]);

  // ===================================================================
  // Auto-Cycle Orchestration (consonants → vowels → vocabulary → next)
  // ===================================================================
  const TRANSITION_DELAY = 2000; // 2-second delay between page transitions

  const startCycle = () => {
    const idx = characters.findIndex(c => c.id === selectedCharacter?.id);
    setCycleCharIndex(idx >= 0 ? idx : 0);
    setIsCyclePaused(false);
    setIsCycling(true);
  };

  const stopCycle = () => {
    setIsCycling(false);
    setIsCyclePaused(false);
    if (cycleTimerRef.current) {
      clearTimeout(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }
    // Cancel any ongoing speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    navigate('/');
  };

  const handleVowelsCycleComplete = () => {
    // Vowels done → wait 2s then move to vocabulary
    cycleTimerRef.current = setTimeout(() => {
      navigate('/vocabulary');
    }, TRANSITION_DELAY);
  };

  const handleVocabCycleComplete = () => {
    // Vocabulary done → wait 2s then go back to consonant page, advance to next
    cycleTimerRef.current = setTimeout(() => {
      const nextIndex = cycleCharIndex + 1;
      if (nextIndex < characters.length) {
        setCycleCharIndex(nextIndex);
        setSelectedCharacter(characters[nextIndex]);
        setSelectedVowelIndex(0);
        setSelectedVowel('e');
        navigate('/');
      } else {
        setIsCycling(false);
        setIsCyclePaused(false);
        setCycleCharIndex(0);
        navigate('/');
      }
    }, TRANSITION_DELAY);
  };

  // Spacebar pause/resume handler — works globally on all pages during cycle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && isCycling && !e.target.closest('input, select, textarea')) {
        e.preventDefault();
        setIsCyclePaused(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCycling]);

  // Consonant display phase: when cycling and on consonant page,
  // highlight the current consonant, play its audio, then advance to vowels
  useEffect(() => {
    if (!isCycling || isCyclePaused || location.pathname !== '/') return;

    const char = characters[cycleCharIndex];
    if (!char) {
      setIsCycling(false);
      return;
    }

    // Highlight and play the consonant
    setSelectedCharacter(char);
    setSelectedVowelIndex(0);
    setSelectedVowel('e');
    playCharacterAudio(char, 0);

    // After a pause, transition to vowels page
    cycleTimerRef.current = setTimeout(() => {
      navigate('/vowels');
    }, TRANSITION_DELAY);

    return () => {
      if (cycleTimerRef.current) {
        clearTimeout(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
    };
  }, [isCycling, isCyclePaused, cycleCharIndex, location.pathname]);

  // ===================================================================
  // Settings Panel Modal Component
  // ===================================================================
  const SettingsPanel = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowSettings(false)}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{t('settings', language)}</h2>
          <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-600 transition">
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t('language', language)}</label>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="en">🇬🇧 English</option>
            <option value="ar">🇸🇦 العربية (Arabic)</option>
            <option value="he">🇮🇱 עברית (Hebrew)</option>
            <option value="om">🇪🇹 Afaan Oromoo</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t('speed', language)}: {readingSpeed}ms
          </label>
          <input 
            type="range" 
            min="300" 
            max="1500" 
            step="50"
            value={readingSpeed}
            onChange={(e) => setReadingSpeed(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Fast (300ms)</span>
            <span>Slow (1500ms)</span>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t('volume', language)}: {Math.round(volume * 100)}%
          </label>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">{t('highlightColor', language)}</label>
          <div className="flex gap-3 justify-center flex-wrap">
            {['blue', 'green', 'red', 'purple', 'orange', 'pink'].map(color => (
              <button
                key={color}
                onClick={() => setHighlightColor(color)}
                className={`w-10 h-10 rounded-full border-4 transition-all ${highlightColor === color ? 'border-gray-800 scale-110' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={showTranscription}
              onChange={(e) => setShowTranscription(e.target.checked)}
              className="w-5 h-5 mr-3 cursor-pointer"
            />
            <span className="text-sm font-semibold text-gray-700">{t('showTranscription', language)}</span>
          </label>
        </div>
        
        <button 
          onClick={() => setShowSettings(false)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {t('close', language)}
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: '#D4A017' }}>
      <NavBar language={language} />
      <Routes>
        <Route path="/vowels" element={
          <VowelsPage
            language={language} volume={volume}
            isCycling={isCycling} isCyclePaused={isCyclePaused}
            cycleCharIndex={cycleCharIndex}
            cycleSpeed={readingSpeed}
            onCycleComplete={handleVowelsCycleComplete}
          />
        } />
        <Route path="/vocabulary" element={
          <VocabularyPage
            language={language} volume={volume}
            isCycling={isCycling} isCyclePaused={isCyclePaused}
            cycleCharIndex={cycleCharIndex}
            cycleSpeed={readingSpeed}
            onCycleComplete={handleVocabCycleComplete}
          />
        } />
        <Route path="/" element={<>
      {/* Header */}
      <div className="text-white p-3 flex items-center justify-between shadow-md" style={{ backgroundColor: '#8B6914' }}>
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden">
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-lg font-bold flex-1 text-center lg:text-left">Amharic Learning App</h1>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1" title="Blue = Real audio from compressed MP3 files">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="hidden sm:inline">Real Audio</span>
          </div>
          <div className="flex items-center gap-1" title="Green = Computer voice (TTS)">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="hidden sm:inline">TTS</span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="border-b-2 p-2 shadow-sm flex flex-wrap items-center justify-center gap-3" style={{ backgroundColor: '#E8C840', borderColor: '#8B6914' }}>
        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-800">{t('language', language)}:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border-2 rounded px-3 py-1 text-sm bg-white focus:border-blue-500 focus:outline-none"
            style={{ borderColor: '#8B6914' }}
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="he">Hebrew</option>
            <option value="om">Afaan Oromoo</option>
          </select>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => {
              if (isReading) {
                setIsReading(false);
              } else {
                const currentIndex = filteredCharacters.findIndex(c => c.id === selectedCharacter?.id);
                setReadingState({ consonantIndex: Math.max(0, currentIndex), vowelIndex: 0 });
                setIsReading(true);
              }
            }}
            className="text-white px-4 py-2 rounded-lg transition flex items-center gap-2 font-medium shadow"
            style={{ backgroundColor: '#6B4E0A' }}
          >
            {isReading ? '⏸️' : '▶️'} {t('read', language)}
          </button>

          <label className="flex items-center gap-2 border-2 rounded-lg px-3 py-2 cursor-pointer transition" style={{ borderColor: '#8B6914', backgroundColor: '#F5DEB3' }}>
            <input
              type="checkbox"
              checked={isCycleMode}
              onChange={(e) => setIsCycleMode(e.target.checked)}
              className="cursor-pointer w-4 h-4"
            />
            <span className="text-sm font-medium text-gray-800">{t('cycle', language)}</span>
          </label>

          <button
            onClick={() => {
              if (isCycling) {
                stopCycle();
              } else {
                startCycle();
              }
            }}
            className={`text-white px-4 py-2 rounded-lg transition flex items-center gap-2 font-medium shadow ${
              isCycling ? 'bg-red-500 hover:bg-red-600' : ''
            }`}
            style={isCycling ? {} : { backgroundColor: '#6B4E0A' }}
            title={isCycling ? 'Stop cycle' : 'Play full cycle: consonants → vowels → vocabulary'}
          >
            {isCycling ? '⏹️ Stop Cycle' : '🔄 Play Cycle'}
          </button>

          {isCycling && (
            <span className={`text-xs font-bold px-2 py-1 rounded ${isCyclePaused ? 'bg-yellow-300 text-gray-800' : 'bg-green-600 text-white'}`}>
              {isCyclePaused ? '⏸ PAUSED (Space)' : '▶ PLAYING (Space to pause)'}
            </span>
          )}

          <button
            onClick={() => setShowSettings(true)}
            className="border-2 rounded-lg p-2 transition shadow"
            style={{ borderColor: '#8B6914', backgroundColor: '#F5DEB3' }}
            title={t('settings', language)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.8 5.2l-4.2-4.2m0-6l4.2-4.2"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Lessons Menu */}
        <div className={`${showMobileMenu ? 'block' : 'hidden'} lg:block w-48 border-r-2 overflow-y-auto`} style={{ backgroundColor: '#E8C840', borderColor: '#8B6914' }}>
          <div className="text-white text-center py-2 font-bold" style={{ backgroundColor: '#6B4E0A' }}>
            LESSONS
          </div>
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                setSelectedLesson(lesson.id);
                setShowMobileMenu(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm border-b transition font-medium ${
                selectedLesson === lesson.id ? 'font-bold text-gray-900' : 'text-gray-800'
              }`}
              style={{
                borderColor: '#8B6914',
                backgroundColor: selectedLesson === lesson.id ? '#F5DEB3' : 'transparent',
              }}
            >
              {lesson.name}
            </button>
          ))}
        </div>

        {/* Center - Character Grid */}
        <div className="flex-1 overflow-y-auto p-3">
          {/* CONSONANTS Header */}
          <div className="text-white text-center py-2 font-bold rounded-t-md" style={{ backgroundColor: '#6B4E0A' }}>
            CONSONANTS
          </div>

          {/* Navigation Button Panel */}
          <div className="flex justify-center items-center gap-2 py-3 max-w-md mx-auto">
            <div className="flex items-center gap-2 p-2 rounded-lg" style={{ backgroundColor: '#E8C840' }}>
              <button
                onClick={() => {
                  const currentIndex = filteredCharacters.findIndex(c => c.id === selectedCharacter?.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredCharacters.length - 1;
                  const prevChar = filteredCharacters[prevIndex];
                  setSelectedCharacter(prevChar);
                  setSelectedVowelIndex(0);
                  setSelectedVowel('e');
                  playCharacterAudio(prevChar, 0);
                }}
                className="text-white font-bold p-2 rounded-lg transition hover:scale-110"
                style={{ backgroundColor: '#8B6914' }}
                title="Previous consonant"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center px-2">
                <div className="text-xs text-gray-800 font-bold whitespace-nowrap">Consonants</div>
              </div>

              <button
                onClick={() => {
                  const currentIndex = filteredCharacters.findIndex(c => c.id === selectedCharacter?.id);
                  const nextIndex = currentIndex < filteredCharacters.length - 1 ? currentIndex + 1 : 0;
                  const nextChar = filteredCharacters[nextIndex];
                  setSelectedCharacter(nextChar);
                  setSelectedVowelIndex(0);
                  setSelectedVowel('e');
                  playCharacterAudio(nextChar, 0);
                }}
                className="text-white font-bold p-2 rounded-lg transition hover:scale-110"
                style={{ backgroundColor: '#8B6914' }}
                title="Next consonant"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Auto Read Consonants Button */}
              <button
                onClick={() => {
                  if (isAutoReadingConsonants) {
                    stopAutoReadingConsonants();
                  } else {
                    startAutoReadingConsonants();
                  }
                }}
                className={`font-bold py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 text-sm ${
                  isAutoReadingConsonants
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
                title={isAutoReadingConsonants ? "Stop reading consonants" : "Auto-read all consonants"}
              >
                {isAutoReadingConsonants ? (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                    Stop
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Read
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Consonant Grid — gold-bordered white cells, square like vowel boxes */}
          <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto">
            {filteredCharacters.map((character) => {
              const vowelForm = character.vowelForms[0];
              const isSelected = selectedCharacter?.id === character.id;
              return (
                <button
                  key={character.id}
                  onClick={() => {
                    setSelectedCharacter(character);
                    setSelectedVowelIndex(0);
                    setSelectedVowel('e');
                    playCharacterAudio(character, 0);
                  }}
                  className="w-[80px] h-[80px] rounded-md flex flex-col items-center justify-center transition-all duration-200 hover:scale-110 relative group cursor-pointer"
                  title="Click to select and hear"
                  style={{
                    border: `3px solid ${isSelected ? '#3b82f6' : '#8B6914'}`,
                    backgroundColor: isSelected ? '#eff6ff' : '#FFFFF0',
                    boxShadow: isSelected
                      ? '0 0 0 3px #3b82f6, 0 4px 8px rgba(0,0,0,0.2)'
                      : '0 2px 4px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#FFF8DC';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                      e.currentTarget.style.transform = 'scale(1.10)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#FFFFF0';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.5)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <span className="text-4xl font-bold text-blue-600 leading-tight">
                    {vowelForm.geez}
                  </span>
                  <span className="text-sm text-gray-700 font-medium leading-tight">
                    {showTranscription && getTranscription(vowelForm.roman, language)}
                  </span>
                  {/* Speaker icon */}
                  <div className={`absolute bottom-0.5 right-0.5 rounded-full p-0.5 opacity-70 group-hover:opacity-100 transition ${
                    hasAudio(vowelForm.geez) ? 'bg-blue-500' : 'bg-green-500'
                  }`} title={hasAudio(vowelForm.geez) ? 'Real audio available!' : 'Using TTS'}>
                    <Volume2 size={10} className="text-white" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom - Collapsible Vocabulary Section */}
      <div className="border-t-2" style={{ backgroundColor: '#E8C840', borderColor: '#8B6914' }}>
        {/* Clickable header bar */}
        <button
          onClick={() => setVocabCollapsed(!vocabCollapsed)}
          className="w-full flex items-center justify-between px-4 py-2 transition cursor-pointer"
          style={{ backgroundColor: '#6B4E0A' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-yellow-100 font-bold text-xl">VOCABULARY</span>
            {selectedCharacter && selectedVowelIndex !== null && (
              <span className="text-sm text-yellow-200 italic">
                Words using "{selectedCharacter.vowelForms[selectedVowelIndex].geez}" ({selectedCharacter.vowelForms[selectedVowelIndex].roman})
              </span>
            )}
          </div>
          <svg
            className={`w-5 h-5 text-yellow-200 transition-transform duration-200 ${vocabCollapsed ? '' : 'rotate-180'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Collapsible content */}
        {!vocabCollapsed && (
          <div className="px-4 pb-4 pt-2">
            <div className="max-w-5xl mx-auto">
              {selectedCharacter && selectedVowelIndex !== null ? (
                <div className="rounded-md p-4 shadow-md" style={{ backgroundColor: '#FFFFF0', border: '3px solid #8B6914' }}>
                  {(() => {
                    const words = getVocabularyForCharacter();

                    if (words.length === 0) {
                      return (
                        <div className="text-center py-8 text-gray-500 italic">
                          No vocabulary words available yet for this character.
                          <br />
                          <span className="text-sm">More words coming soon!</span>
                        </div>
                      );
                    }

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {words.map((word, index) => (
                          <div
                            key={index}
                            className="rounded-md p-4 transition-all hover:shadow-lg"
                            style={{ border: '2px solid #8B6914', backgroundColor: '#FFFFF0' }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-5xl">{word.emoji}</div>
                              <div className="flex-1">
                                <div className="text-3xl font-bold text-blue-600 mb-1">
                                  {word.geez}
                                </div>
                                <div className="text-lg text-gray-700 font-semibold">
                                  {word.roman}
                                </div>
                                <div className="text-md text-gray-600 italic mt-1">
                                  {word.meaning}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); playVocabAudio(word); }}
                              className="mt-3 w-full text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition hover:scale-105"
                              style={{ backgroundColor: '#6B4E0A' }}
                            >
                              <Volume2 size={18} />
                              <span className="text-sm">Play</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <div className="rounded-md p-8 text-center text-gray-500 italic" style={{ backgroundColor: '#FFFFF0', border: '3px solid #8B6914' }}>
                  Select a character to see vocabulary words
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Green grass band */}
      <div
        className="h-10 w-full"
        style={{
          background: 'linear-gradient(to top, #166534, #22c55e, #4ade80)',
        }}
      />
        </>} />
      </Routes>

      {/* Settings Panel */}
      {showSettings && <SettingsPanel />}
    </div>
  );
};

export default AmharicLearningApp;
