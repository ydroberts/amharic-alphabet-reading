import React from 'react';

const WelcomeScreen = ({ onEnter }) => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Ethiopian flag-inspired background */}
      <div className="absolute inset-0">
        {/* Green band */}
        <div className="absolute top-0 left-0 right-0 h-1/3" style={{ backgroundColor: '#078930' }} />
        {/* Yellow band */}
        <div className="absolute top-1/3 left-0 right-0 h-1/3" style={{ backgroundColor: '#FCDD09' }} />
        {/* Red band */}
        <div className="absolute top-2/3 left-0 right-0 h-1/3" style={{ backgroundColor: '#DA121A' }} />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 100%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        {/* Card */}
        <div
          className="welcome-fade-in max-w-lg w-full rounded-xl p-8 shadow-2xl"
          style={{
            border: '5px solid #8B6914',
            backgroundColor: '#FFFFF0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 3px #C8A20E',
          }}
        >
          {/* Title */}
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-1" style={{ color: '#8B6914' }}>
              የአማርኛ ፊደል
            </div>
            <div className="text-xl font-bold text-gray-800">
              Amharic Alphabet Learning
            </div>
            <div className="mt-2 h-1 w-24 mx-auto rounded" style={{ backgroundColor: '#C8A20E' }} />
          </div>

          {/* Who it's for */}
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-1" style={{ color: '#6B4E0A' }}>
              Who is it for?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              For children, students, and anyone learning the Amharic (Ge'ez) script — whether at home, in school, or as a heritage language learner.
            </p>
          </div>

          {/* What it teaches */}
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-1" style={{ color: '#6B4E0A' }}>
              What you'll learn
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Master 34 consonants with 7 vowel forms each, practice vocabulary words with emojis and meanings, and hear real audio pronunciation for every character.
            </p>
          </div>

          {/* Feedback */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-1" style={{ color: '#6B4E0A' }}>
              Help us improve
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your feedback makes this app better!{' '}
              <a
                href="mailto:ydroberts@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Email us
              </a>
              {' '}or{' '}
              <a
                href="https://github.com/ydroberts/amharic-alphabet-reading/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                report an issue on GitHub
              </a>.
            </p>
          </div>

          {/* Enter Button */}
          <button
            onClick={onEnter}
            className="w-full text-white text-lg font-bold py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#6B4E0A',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            Enter App
          </button>
        </div>
      </div>

      {/* Green grass band */}
      <div
        className="relative z-10 h-10 w-full"
        style={{
          background: 'linear-gradient(to top, #166534, #22c55e, #4ade80)',
        }}
      />
    </div>
  );
};

export default WelcomeScreen;
