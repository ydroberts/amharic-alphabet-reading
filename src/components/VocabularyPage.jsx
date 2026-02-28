import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Volume2 } from 'lucide-react';
import { characters, vocabulary, getTranscription, playAudioTTS } from '../data/alphabetData';
import WebcamBox from './WebcamBox';

const GOLD_BORDER = '#8B6914';
const GOLD_BG = '#C8A20E';

const VocabularyPage = ({
  language,
  volume,
  isCycling = false,
  isCyclePaused = false,
  cycleCharIndex = 0,
  cycleSpeed = 1000,
  onCycleComplete = () => {},
}) => {
  // All words flattened
  const allWords = useMemo(() => {
    const list = [];
    Object.entries(vocabulary).forEach(([char, entries]) => {
      entries.forEach((word) => {
        list.push({ ...word, sourceChar: char });
      });
    });
    return list;
  }, []);

  // During cycle, filter words for the current consonant family
  const cycleWords = useMemo(() => {
    if (!isCycling) return [];
    const cycleChar = characters[cycleCharIndex];
    if (!cycleChar) return [];
    const charKeys = cycleChar.vowelForms.map(f => f.geez);
    return allWords.filter(w => charKeys.includes(w.sourceChar));
  }, [isCycling, cycleCharIndex, allWords]);

  const words = isCycling ? cycleWords : allWords;

  const [wordIndex, setWordIndex] = useState(0);
  const cycleTimerRef = useRef(null);
  const completionTimerRef = useRef(null);
  const cycleStepRef = useRef(0);
  const wasResuming = useRef(false);

  // Reset word index when word list changes
  useEffect(() => {
    setWordIndex(0);
    cycleStepRef.current = 0;
  }, [isCycling, cycleCharIndex]);

  // Auto-cycle animation with pause/resume support
  useEffect(() => {
    if (!isCycling) {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
      cycleStepRef.current = 0;
      return;
    }

    if (isCyclePaused) {
      // Pause: clear timer but keep step
      wasResuming.current = true;
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
      return;
    }

    if (cycleWords.length === 0) {
      const t = setTimeout(() => onCycleComplete(), 0);
      return () => clearTimeout(t);
    }

    // Determine start step
    const isResume = wasResuming.current;
    wasResuming.current = false;
    const startStep = isResume ? cycleStepRef.current : 0;

    setWordIndex(startStep);
    if (!isResume) {
      playAudioTTS(cycleWords[startStep].roman);
    }

    let step = startStep;
    cycleTimerRef.current = setInterval(() => {
      step++;
      cycleStepRef.current = step;
      if (step >= cycleWords.length) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
        cycleStepRef.current = 0;
        // Wait for the last word's audio to finish before completing
        completionTimerRef.current = setTimeout(() => {
          onCycleComplete();
        }, cycleSpeed);
      } else {
        setWordIndex(step);
        playAudioTTS(cycleWords[step].roman);
      }
    }, cycleSpeed);

    return () => {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
      if (completionTimerRef.current) {
        clearTimeout(completionTimerRef.current);
        completionTimerRef.current = null;
      }
      // Cancel any ongoing speech synthesis when leaving
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isCycling, cycleCharIndex, isCyclePaused]);

  // All hooks are above — safe to do early return now
  const currentWord = words[wordIndex] || words[0];
  if (!currentWord) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center page-fade-in" style={{ backgroundColor: '#D4A017' }}>
        <div className="text-gray-700 text-lg italic">No vocabulary words available</div>
        <div className="h-10 w-full mt-auto" style={{ background: 'linear-gradient(to top, #166534, #22c55e, #4ade80)' }} />
      </div>
    );
  }

  const goNext = () => setWordIndex((prev) => (prev + 1) % words.length);
  const goPrev = () => setWordIndex((prev) => (prev - 1 + words.length) % words.length);

  const handlePlayWord = () => {
    playAudioTTS(currentWord.roman);
  };

  return (
    <div className="flex-1 flex flex-col items-center overflow-hidden page-fade-in" style={{ backgroundColor: '#D4A017' }}>
      {/* Spacer to push content toward center */}
      <div className="flex-1" />

      {/* Two large gold-bordered boxes side by side */}
      <div className="flex justify-center items-center gap-4 px-4">
        {/* Left: Webcam / Speaker box */}
        <WebcamBox
          className="w-[280px] h-[240px] rounded-md overflow-hidden"
          style={{
            border: `6px solid ${GOLD_BORDER}`,
            backgroundColor: '#1a1a2e',
            boxShadow: `0 4px 12px rgba(0,0,0,0.4), inset 0 2px 6px rgba(0,0,0,0.3), 0 0 0 3px ${GOLD_BG}`,
          }}
        />

        {/* Right: Illustration box */}
        <div
          className="w-[280px] h-[240px] rounded-md flex flex-col items-center justify-center"
          style={{
            border: `6px solid ${GOLD_BORDER}`,
            backgroundColor: '#FFFFF0',
            boxShadow: `0 4px 12px rgba(0,0,0,0.4), inset 0 2px 6px rgba(255,255,255,0.3), 0 0 0 3px ${GOLD_BG}`,
          }}
        >
          <div className="text-9xl">{currentWord.emoji}</div>
          <div className="text-sm text-gray-600 mt-2 font-medium">{currentWord.meaning}</div>
        </div>
      </div>

      {/* Navigation arrows + counter — tight below boxes */}
      <div className="flex items-center justify-center gap-3 px-4 py-1">
        <button
          onClick={goPrev}
          className="text-white font-bold p-1.5 rounded-lg transition hover:scale-110"
          style={{ backgroundColor: '#8B6914' }}
          title="Previous word"
          disabled={isCycling}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-center px-1">
          <div className="text-xs text-gray-800 font-bold">
            {wordIndex + 1} / {words.length}
          </div>
        </div>

        <button
          onClick={goNext}
          className="text-white font-bold p-1.5 rounded-lg transition hover:scale-110"
          style={{ backgroundColor: '#8B6914' }}
          title="Next word"
          disabled={isCycling}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Vocabulary word — tight below nav */}
      <div className="flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {/* Ge'ez word box */}
          <button
            onClick={handlePlayWord}
            className="w-[80px] h-[80px] rounded-md flex flex-col items-center justify-center transition-all duration-200 hover:scale-110 relative group cursor-pointer"
            title="Click to hear"
            style={{
              border: `4px solid ${GOLD_BORDER}`,
              backgroundColor: '#FFFFF0',
              boxShadow: `0 3px 6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)`,
            }}
          >
            <span className="text-4xl font-bold text-blue-600 leading-tight">
              {currentWord.geez}
            </span>
            <span className="text-sm text-gray-700 font-medium leading-tight">
              {getTranscription(currentWord.roman, language) || currentWord.roman}
            </span>
            <div className="absolute bottom-0.5 right-0.5 rounded-full p-0.5 opacity-70 group-hover:opacity-100 transition bg-blue-500">
              <Volume2 size={10} className="text-white" />
            </div>
          </button>

          {/* Meaning box */}
          <div
            className="w-[80px] h-[80px] rounded-md flex flex-col items-center justify-center"
            style={{
              border: `4px solid ${GOLD_BORDER}`,
              backgroundColor: '#FFFFF0',
              boxShadow: `0 3px 6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)`,
            }}
          >
            <span className="text-3xl">{currentWord.emoji}</span>
            <span className="text-xs text-gray-700 font-medium text-center px-0.5 leading-tight">
              {currentWord.meaning}
            </span>
          </div>
        </div>
      </div>

      {/* Spacer to push content toward center */}
      <div className="flex-1" />

      {/* Green grass band */}
      <div
        className="h-10 w-full"
        style={{
          background: 'linear-gradient(to top, #166534, #22c55e, #4ade80)',
        }}
      />
    </div>
  );
};

export default VocabularyPage;
