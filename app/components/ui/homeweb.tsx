import React, { useState, useEffect } from 'react';

const HomeWeb = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const steps = [
    { text: 'Welcome to My Portfolio', delay: 600 },
    { text: '', delay: 200 },
    { text: '👤 user@portfolio:~$ Hello, I am Clark Joross Lim. A UI/UX Developer.', delay: 400 },
    { text: '', delay: 200 },
    { text: '👤 user@portfolio:~$ whoami', delay: 300 },
    { text: '', delay: 200 },
    {
      text: 'Computer Engineering graduate with expertise in hardware design, web development, embedded systems, and IoT solutions.',
      delay: 400
    },
    {
      text: 'Driven by a passion for transforming complex technical challenges into innovative, user-centered applications that bridge the gap between engineering excellence and intuitive design.',
      delay: 400
    }
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const currentStepData = steps[currentStep];
      let index = 0;
      const typingSpeed = 20; // Faster typing

      const timer = setInterval(() => {
        if (index <= currentStepData.text.length) {
          setDisplayedText(prev => {
            const lines = prev.split('\n');
            lines[currentStep] = currentStepData.text.substring(0, index);
            return lines.join('\n');
          });
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, currentStepData.delay);
        }
      }, typingSpeed);

      return () => clearInterval(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const lines = displayedText.split('\n');

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 sm:space-y-6">
          {lines.map((line, index) => (
            <div key={index} className="animate-fadeIn">
              {index === 0 && line && (
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-green-400">
                  {line}
                </h1>
              )}

              {index === 2 && line && (
                <div className="flex items-start space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <span className="text-green-500 text-sm sm:text-base flex-shrink-0">👤</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-green-400 text-sm sm:text-base break-all">user@portfolio:~$</span>
                    <span className="text-gray-300 ml-2 text-sm sm:text-base">
                      Hello, I am Clark Joross Lim. A UI/UX Developer.
                    </span>
                  </div>
                </div>
              )}

              {index === 4 && line && (
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <span className="text-green-500 text-sm sm:text-base flex-shrink-0">👤</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-green-400 text-sm sm:text-base break-all">user@portfolio:~$</span>
                    <span className="text-white ml-2 text-sm sm:text-base">{line}</span>
                  </div>
                </div>
              )}

              {(index === 6 || index === 7) && line && (
                <div className="ml-4 sm:ml-6 md:ml-8 mb-2 sm:mb-3">
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {line}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Blinking cursor at the end */}
          {currentStep >= steps.length && (
            <div className="flex items-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
              <span className="text-green-500 text-sm sm:text-base">👤</span>
              <span className="text-green-400 text-sm sm:text-base">user@portfolio:~$</span>
              <span
                className={`inline-block w-2 h-4 sm:h-5 bg-green-400 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                } transition-opacity`}
              >
                
              </span>
            </div>
          )}
        </div>
      </div>

    <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      .cursor-blink {
        animation: blink 1s step-start infinite;
      }

      @media (max-width: 640px) {
        .break-all {
          word-break: break-all;
        }
      }
    `}</style>

    </div>
  );
};

export default HomeWeb;
