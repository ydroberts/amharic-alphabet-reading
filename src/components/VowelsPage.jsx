import React, { useState, useEffect, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { characters, getTranscription, playCharacterAudioByForm } from '../data/alphabetData';
import WebcamBox from './WebcamBox';

const GOLD_BORDER = '#8B6914';
const GOLD_BG = '#C8A20E';

const VowelsPage = ({
  language,
  volume,
  isCycling = false,
  isCyclePaused = false,
  cycleCharIndex = 0,
  cycleSpeed = 1000,
  onCycleComplete = () => {},
}) => {
  const mainCharacters = characters.filter(c => c.vowelForms.length >= 7);
  const [charIndex, setCharIndex] = useState(0);
  const [selectedVowelIdx, setSelectedVowelIdx] = useState(0);
  const cycleTimerRef = useRef(null);
  const cycleStepRef = useRef(0);
  const wasResuming = useRef(false);

  const currentChar = mainCharacters[charIndex];
  // Show only first 7 vowel forms (exclude 8th 'ua' labialized form)
  const vowelForms = currentChar.vowelForms.slice(0, 7);

  const goNext = () => {
    setCharIndex((prev) => (prev + 1) % mainCharacters.length);
    setSelectedVowelIdx(0);
  };

  const goPrev = () => {
    setCharIndex((prev) => (prev - 1 + mainCharacters.length) % mainCharacters.length);
    setSelectedVowelIdx(0);
  };

  const handleVowelClick = (idx) => {
    setSelectedVowelIdx(idx);
    playCharacterAudioByForm(vowelForms[idx], volume);
  };

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
      // Pause: clear timer but keep the current step
      wasResuming.current = true;
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
      return;
    }

    // Find the matching index in mainCharacters
    const targetChar = characters[cycleCharIndex];
    if (!targetChar) {
      onCycleComplete();
      return;
    }
    const mainIdx = mainCharacters.findIndex(c => c.id === targetChar.id);
    if (mainIdx < 0) {
      onCycleComplete();
      return;
    }

    setCharIndex(mainIdx);
    const forms = mainCharacters[mainIdx].vowelForms.slice(0, 7);

    // Determine start step: resume from saved position or start fresh
    const isResume = wasResuming.current;
    wasResuming.current = false;
    const startStep = isResume ? cycleStepRef.current : 0;

    setSelectedVowelIdx(startStep);
    if (!isResume) {
      playCharacterAudioByForm(forms[startStep], volume);
    }

    let vowelStep = startStep;
    cycleTimerRef.current = setInterval(() => {
      vowelStep++;
      cycleStepRef.current = vowelStep;
      if (vowelStep >= forms.length) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
        cycleStepRef.current = 0;
        onCycleComplete();
      } else {
        setSelectedVowelIdx(vowelStep);
        playCharacterAudioByForm(forms[vowelStep], volume);
      }
    }, cycleSpeed);

    return () => {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
    };
  }, [isCycling, cycleCharIndex, isCyclePaused]);

  return (
    <div className="flex-1 flex flex-col items-center overflow-hidden page-fade-in" style={{ backgroundColor: '#D4A017' }}>
      {/* Spacer to push content toward center */}
      <div className="flex-1" />

      {/* Webcam / Speaker Frame */}
      <WebcamBox
        className="w-[420px] h-[280px] rounded-md overflow-hidden"
        style={{
          border: `6px solid ${GOLD_BORDER}`,
          backgroundColor: '#1a1a2e',
          boxShadow: `0 4px 12px rgba(0,0,0,0.4), inset 0 2px 6px rgba(0,0,0,0.3), 0 0 0 3px ${GOLD_BG}`,
        }}
      />

      {/* Navigation arrows + counter — tight below speaker */}
      <div className="flex items-center justify-center gap-3 px-4 py-1">
        <button
          onClick={goPrev}
          className="text-white font-bold p-1.5 rounded-lg transition hover:scale-110"
          style={{ backgroundColor: '#8B6914' }}
          title="Previous consonant"
          disabled={isCycling}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-center px-1">
          <div className="text-xs text-gray-800 font-bold">
            {charIndex + 1} / {mainCharacters.length}
          </div>
        </div>

        <button
          onClick={goNext}
          className="text-white font-bold p-1.5 rounded-lg transition hover:scale-110"
          style={{ backgroundColor: '#8B6914' }}
          title="Next consonant"
          disabled={isCycling}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Vowel Forms — tight below nav */}
      <div className="flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {vowelForms.map((form, idx) => (
            <button
              key={idx}
              onClick={() => handleVowelClick(idx)}
              className="w-[80px] h-[80px] rounded-md flex flex-col items-center justify-center transition-all duration-200 hover:scale-110 relative group cursor-pointer"
              title="Click to hear"
              style={{
                border: `4px solid ${selectedVowelIdx === idx ? '#3b82f6' : GOLD_BORDER}`,
                backgroundColor: selectedVowelIdx === idx ? '#eff6ff' : '#FFFFF0',
                boxShadow: selectedVowelIdx === idx
                  ? '0 0 0 3px #3b82f6, 0 4px 8px rgba(0,0,0,0.2)'
                  : `0 3px 6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)`,
              }}
            >
              <span className="text-4xl font-bold text-blue-600 leading-tight">
                {form.geez}
              </span>
              <span className="text-sm text-gray-700 font-medium leading-tight">
                {getTranscription(form.roman, language)}
              </span>
              {/* Speaker icon */}
              <div className="absolute bottom-0.5 right-0.5 rounded-full p-0.5 opacity-70 group-hover:opacity-100 transition bg-blue-500">
                <Volume2 size={10} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Spacebar instruction */}
      {isCycling && (
        <div className="flex justify-center px-4 py-1">
          <span className={`text-xs font-bold px-3 py-1 rounded ${isCyclePaused ? 'bg-yellow-300 text-gray-800' : 'bg-green-600 text-white'}`}>
            {isCyclePaused ? '⏸ PAUSED' : '▶ PLAYING'} — Press Space to {isCyclePaused ? 'resume' : 'pause'}
          </span>
        </div>
      )}

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

export default VowelsPage;
