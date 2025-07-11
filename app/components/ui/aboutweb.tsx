import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-12">
            {/* Left Column */}
            <div className="flex-shrink-0 mb-8 lg:mb-0 flex flex-col items-center lg:items-start space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400">
                About Me
              </h1>
              <img
                src="/images/clark.jpg"
                alt="Clark Joross Lim"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-lg border-2 border-green-400 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#22c55e66]"
              />
            </div>

            {/* Right Column */}
            <div className="flex-1 min-w-0 animate-fade-in-up">
              {/* Profile Command */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 hover:text-white transition-colors">
                <span className="text-green-500 text-sm sm:text-base flex-shrink-0">👤</span>
                <div className="flex-1 min-w-0">
                  <span className="text-green-400 text-sm sm:text-base break-all">user@portfolio:~$</span>
                  <span className="text-white ml-2 text-sm sm:text-base">cat profile.txt</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="ml-4 sm:ml-6 md:ml-8 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <p><span className="text-green-300">Name:</span><span className="text-white ml-2">Clark Joross Lim</span></p>
                <p><span className="text-green-300">Role:</span><span className="text-white ml-2">UI/UX Developer & Computer Engineer</span></p>
                <p><span className="text-green-300">Experience:</span><span className="text-white ml-2">Fresh Graduate</span></p>
                <p><span className="text-green-300">Location:</span><span className="text-white ml-2">Philippines</span></p>
              </div>

              {/* Education Command */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 hover:text-white transition-colors">
                <span className="text-green-500 text-sm sm:text-base flex-shrink-0">👤</span>
                <div className="flex-1 min-w-0">
                  <span className="text-green-400 text-sm sm:text-base break-all">user@portfolio:~$</span>
                  <span className="text-white ml-2 text-sm sm:text-base">cat education.txt</span>
                </div>
              </div>

              {/* Education Info */}
              <div className="ml-4 sm:ml-6 md:ml-8 space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {/* College */}
                <div>
                  <p className="text-green-300 font-semibold mb-2">🎓 College</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-white font-medium">BACHELOR OF SCIENCE IN COMPUTER ENGINEERING</p>
                    <p className="text-gray-300">University of Science in Technology of Southern Philippines</p>
                    <p className="text-gray-400">2021 - Present</p>
                    <p className="text-green-300 font-medium mt-2">• Relevant Coursework:</p>
                    <p className="text-gray-300 ml-2">
                      Software Engineering, Data Structures, Embedded Systems, UI/UX Design
                    </p>
                    <p className="text-green-300 font-medium mt-2">• Certificates:</p>
                    <p className="text-gray-300 ml-2">
                      CNA: Switching, Routing & Wireless Essentials
                    </p>
                  </div>
                </div>

                {/* Senior High */}
                <div>
                  <p className="text-green-300 font-semibold mb-2">🎓 Senior High School</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-gray-300">
                      University of the Immaculate Conception - Bajada Campus
                    </p>
                    <p className="text-gray-400">2019 - 2021</p>
                    <p className="text-green-300 font-medium mt-2">• Relevant Coursework:</p>
                    <p className="text-gray-300 ml-2">Robotics</p>
                  </div>
                </div>

                {/* High School */}
                <div>
                  <p className="text-green-300 font-semibold mb-2">🎓 High School</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-gray-300">Merry Child School</p>
                    <p className="text-gray-400">2016 - 2019</p>
                  </div>
                </div>

                {/* Elementary */}
                <div>
                  <p className="text-green-300 font-semibold mb-2">🎓 Elementary</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-gray-300">Iponan Elementary School</p>
                    <p className="text-gray-400">2010 - 2016</p>
                  </div>
                </div>
              </div>

              {/* Skills Command */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 hover:text-white transition-colors">
                <span className="text-green-500 text-sm sm:text-base flex-shrink-0">👤</span>
                <div className="flex-1 min-w-0">
                  <span className="text-green-400 text-sm sm:text-base break-all">user@portfolio:~$</span>
                  <span className="text-white ml-2 text-sm sm:text-base">echo $SKILLS</span>
                </div>
              </div>

              {/* Skills */}
              <div className="ml-4 sm:ml-6 md:ml-8 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3",
                  "Backend: PHP, Laravel",
                  "Database: MySQL",
                  "Tools: Figma, Canva, AutoCAD",
                  "Hardware: Arduino, ESP32, Raspberry Pi, IoT Systems",
                ].map((skill, i) => (
                  <p key={i} className="text-gray-300 flex items-start">
                    <span className="text-green-300 mr-2">•</span>
                    <span className="text-white">{skill}</span>
                  </p>
                ))}
              </div>

              {/* Blinking Cursor */}
              <div className="flex items-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
                <span className="text-green-500 text-sm sm:text-base">👤</span>
                <span className="text-green-400 text-sm sm:text-base">user@portfolio:~$</span>
                <span
                  className={`inline-block w-2 h-5 bg-green-400 transition-opacity ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                >
                  |
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation for fade-in */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
