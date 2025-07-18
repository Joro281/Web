import React, { useState, useEffect } from 'react';

// Move steps outside the component
const steps = [
  { text: 'Welcome to My Portfolio', delay: 600 },
  { text: '', delay: 200 },
  { text: '\ud83d\udc64 user@portfolio:~$ Hello, I am Clark Joross Lim. A Web Developer.', delay: 400 },
  { text: '', delay: 200 },
  { text: '\ud83d\udc64 user@portfolio:~$ whoami', delay: 300 },
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

const HomeWeb = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentStep < steps.length) {
      const currentStepData = steps[currentStep];
      let index = 0;
      const typingSpeed = 30; 

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
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  const lines = displayedText.split('\n');

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {lines.map((line, index) => (
            <div key={index} className="animate-fadeIn">
              {index === 0 && line && (
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 text-green-400 text-glow leading-tight">
                  {line}
                </h1>
              )}

              {index === 2 && line && (
                <div className="flex items-start space-x-3 sm:space-x-4 mb-6 sm:mb-8 pl-2">
                  <span className="text-green-400 text-base sm:text-lg flex-shrink-0">👤</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-green-400 text-base sm:text-lg font-medium">user@portfolio:~$</span>
                    <span className="text-gray-200 ml-3 text-base sm:text-lg font-light">
                      Hello, I am Clark Joross Lim. A Web Developer.
                    </span>
                  </div>
                </div>
              )}

              {index === 4 && line && (
                <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 pl-2">
                  <span className="text-green-400 text-base sm:text-lg flex-shrink-0">👤</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-green-400 text-base sm:text-lg font-medium">user@portfolio:~$</span>
                    <span className="text-white ml-3 text-base sm:text-lg font-medium">{line}</span>
                  </div>
                </div>
              )}

              {(index === 6 || index === 7) && line && (
                <div className="ml-8 sm:ml-10 md:ml-12 mb-4 sm:mb-6 pl-2">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-4xl">
                    {line}
                  </p>
                </div>
              )}
            </div>
          ))}

          {currentStep >= steps.length && (
            <div className="flex items-center space-x-3 sm:space-x-4 mt-8 sm:mt-10 pl-2">
              <span className="text-green-400 text-base sm:text-lg">👤</span>
              <span className="text-green-400 text-base sm:text-lg font-medium">user@portfolio:~$</span>
              <span
                className={`inline-block w-3 h-5 sm:h-6 bg-green-400 ml-1 cursor-blink`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeWeb;