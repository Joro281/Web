"use client";
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const bootSequence = [
    "Initializing portfolio system...",
    "Loading Clark Lim's profile...",
    "Connecting to servers...",
    "Setting up terminal interface...",
    "Ready to launch portfolio!",
    "Press ENTER to continue..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < bootSequence.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && currentStep === bootSequence.length - 1) {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStep, onComplete]);

  const handleClick = () => {
    if (currentStep === bootSequence.length - 1) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col justify-center p-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-bold">Portfolio System Boot</h1>
        </div>
        
        <div className="space-y-2">
          {bootSequence.slice(0, currentStep + 1).map((step, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-2 ${index === currentStep ? 'animate-fade-in' : ''}`}
            >
              <span className="text-green-500">$</span>
              <span>{step}</span>
              {index === currentStep && (
                <span className={`bg-green-400 text-black px-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                  _
                </span>
              )}
              {index < currentStep && (
                <span className="text-green-300 ml-2">✓</span>
              )}
            </div>
          ))}
        </div>

        {currentStep === bootSequence.length - 1 && (
          <div className="mt-8 text-center">
            <button
              onClick={handleClick}
              className="bg-green-400 text-black px-6 py-2 font-mono hover:bg-green-300 transition-all duration-300 hover:scale-105 animate-pulse"
            >
              ENTER PORTFOLIO
            </button>
            <p className="text-gray-400 text-sm mt-2">Or press ENTER key</p>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-4 left-4 text-gray-600 text-xs">
        System Status: Online | Version 2.0.1
      </div>
    </div>
  );
};

export default LoadingScreen;