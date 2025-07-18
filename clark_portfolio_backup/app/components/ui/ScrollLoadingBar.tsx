"use client";
import { useState, useEffect } from "react";

export default function ScrollLoadingBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      {/* Loading Bar Container */}
      <div className="relative h-1 bg-black/20 backdrop-blur-sm">
        {/* Progress Fill */}
        <div 
          className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        {/* Progress indicator with percentage */}
        <div className="absolute right-4 top-2 text-xs text-green-400 font-mono">
          {Math.round(scrollProgress)}%
        </div>
      </div>
      
      {/* Terminal-style loading text */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-green-600/30 px-4 py-1">
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="text-green-500">👤</span>
          <span className="text-white">user@portfolio:~$</span>
          <span className="text-gray-400">reading case-study...</span>
        </div>
      </div>
    </div>
  );
}
