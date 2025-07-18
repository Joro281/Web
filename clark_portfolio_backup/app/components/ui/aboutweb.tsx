import React, { useState, useEffect, useRef } from "react";

const commands: Record<string, string> = {
  help: `Available commands:
  - projects: List projects
  - hobbies: Show hobbies
  - clear: Clear the terminal
  - help: Show this help message`,
  projects: `1. Click2Permit - Permit management system
2. Bird Detection System - Real-time detection & repelling
3. RoboCar - RC surveillance with live cam and sensors
4. Fuel Request System - Fuel monitoring for government
5. Supply Slip Request - Inventory request system
6. Aquaculture System - Smart pH monitoring and control
7. Portfolio - This interactive personal website`,
  hobbies: `Drawing, Tinkering with electronics, Playing games, Coding`,
};

const AboutPage = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialMessage = "Type 'help' to get started.";

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "clear") {
      setLogs([]);
    } else if (commands[trimmed]) {
      setLogs((prev) => [...prev, `$ ${cmd}`, commands[trimmed]]);
    } else {
      setLogs((prev) => [...prev, `$ ${cmd}`, `Command not found: ${trimmed}`]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - About Me */}
        <div className="space-y-8 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-400 text-glow leading-tight">About Me</h1>
          <img
            src="/images/clark.jpg"
            alt="Clark Joross Lim"
            className="w-80 h-80 rounded-lg border-2 border-green-400 object-cover hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all duration-300"
          />
          <div className="text-center lg:text-left text-green-300 max-w-md">
            <div className="text-green-400 mb-4 font-medium text-lg">👤user@portfolio:~$cat profile.txt</div>
            <div className="text-green-400 space-y-2 font-light">
              <p><span className="text-green-400">Name:</span> Clark Joross Lim</p>
              <p><span className="text-green-400">Role:</span> UI/UX Developer & Computer Engineer</p>
              <p><span className="text-green-400">Experience:</span> Fresh Graduate</p>
              <p><span className="text-green-400">Location:</span> Philippines</p>
            </div>
          </div>
        </div>

        {/* Right - Terminal */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 text-center lg:text-left text-glow">Interactive Terminal</h2>
          <div className="bg-black border border-green-400 rounded-lg p-4 sm:p-6 flex flex-col h-[32rem] shadow-[0_0_20px_rgba(74,222,128,0.1)]">
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto whitespace-pre-wrap text-sm sm:text-base mb-4 scrollbar-thin scrollbar-track-black scrollbar-thumb-green-400 scrollbar-thumb-rounded"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4ade80 #000000'
              }}
            >
              <div className="text-green-400 mb-3 font-light">{initialMessage}</div>
              {logs.map((log, index) => (
                <div key={index} className="text-green-400 mb-1 leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
            <div className="flex items-center border-t border-green-400 pt-3">
              <span className="text-green-400 mr-3 font-medium">$</span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  className="bg-transparent border-none outline-none text-green-400 w-full pr-3 font-light"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <span 
                  className={`absolute top-0 h-5 w-1 bg-green-400 transition-opacity duration-100 cursor-blink ${showCursor ? "opacity-100" : "opacity-0"}`}
                  style={{
                    left: `${input.length * 0.6}em`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-400 text-center mb-12 text-glow">Tech Stack</h2>
        
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-6 text-center">Frontend</h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center bg-black border border-green-400 rounded-lg px-6 py-4 text-green-300 whitespace-nowrap hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-6 text-center">Backend</h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
              {['PHP', 'Laravel', 'Node.js', 'Python', 'MySQL'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center bg-black border border-green-400 rounded-lg px-6 py-4 text-green-300 whitespace-nowrap hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-6 text-center">Tools & Hardware</h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
              {['Figma', 'Canva', 'AutoCAD', 'Git', 'Arduino', 'ESP32', 'Raspberry Pi'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center bg-black border border-green-400 rounded-lg px-6 py-4 text-green-300 whitespace-nowrap hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mt-20 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-400 text-center mb-12 text-glow">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="relative group">
            <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/images/certificate1.jpg"
                alt="Certificate 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-green-400 mb-2 font-semibold text-lg">🏆 React Development Certificate</div>
                  <div className="text-green-300 text-sm mb-2">Issued by: Meta</div>
                  <div className="text-green-300 text-sm mb-3">Date: December 2024</div>
                  <div className="text-gray-200 text-xs font-light leading-relaxed">
                    Advanced React concepts including hooks, context, and performance optimization techniques.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/images/certificate2.jpg"
                alt="Certificate 2"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-green-400 mb-2 font-semibold text-lg">🏆 UI/UX Design Certificate</div>
                  <div className="text-green-300 text-sm mb-2">Issued by: Google</div>
                  <div className="text-green-300 text-sm mb-3">Date: November 2024</div>
                  <div className="text-gray-200 text-xs font-light leading-relaxed">
                    Comprehensive UI/UX design principles, user research, and prototyping methodologies.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/images/certificate3.jpg"
                alt="Certificate 3"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-green-400 mb-2 font-semibold text-lg">🏆 Full Stack Development</div>
                  <div className="text-green-300 text-sm mb-2">Issued by: FreeCodeCamp</div>
                  <div className="text-green-300 text-sm mb-3">Date: October 2024</div>
                  <div className="text-gray-200 text-xs font-light leading-relaxed">
                    Complete full-stack development covering frontend, backend, and database technologies.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/images/certificate4.jpg"
                alt="Certificate 4"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-green-400 mb-2 font-semibold text-lg">🏆 Arduino Programming</div>
                  <div className="text-green-300 text-sm mb-2">Issued by: Arduino Foundation</div>
                  <div className="text-green-300 text-sm mb-3">Date: September 2024</div>
                  <div className="text-gray-200 text-xs font-light leading-relaxed">
                    IoT development and embedded systems programming with Arduino and ESP32 platforms.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/images/certificate5.jpg"
                alt="Certificate 5"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-green-400 mb-2 font-semibold text-lg">🏆 Database Management</div>
                  <div className="text-green-300 text-sm mb-2">Issued by: Oracle</div>
                  <div className="text-green-300 text-sm mb-3">Date: August 2024</div>
                  <div className="text-gray-200 text-xs font-light leading-relaxed">
                    Advanced database design, optimization, and management techniques for modern applications.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-black border border-green-400 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 hover:scale-105">
              <img
                src="/images/certificate6.jpg"
                alt="Certificate 6"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-green-400 mb-2 font-semibold text-lg">🏆 Computer Engineering</div>
                  <div className="text-green-300 text-sm mb-2">Issued by: University</div>
                  <div className="text-green-300 text-sm mb-3">Date: July 2024</div>
                  <div className="text-gray-200 text-xs font-light leading-relaxed">
                    Bachelor's degree in Computer Engineering with focus on hardware-software integration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;