import React, { useState, useEffect, useRef } from "react";

const commands: Record<string, string> = {
  help: `Available commands:\n  - projects: List projects\n  - hobbies: Show hobbies\n  - education: Show education history\n  - courses: Show courses taken\n  - certificates: Show certificates\n  - number: Show contact number\n  - quote: Show favorite quote\n  - clear: Clear the terminal\n  - help: Show this help message`,
  projects: `1. Click2Permit - Permit management system\n2. Bird Detection System - Real-time detection & repelling\n3. RoboCar - RC surveillance with live cam and sensors\n4. Fuel Request System - Fuel monitoring for government\n5. Supply Slip Request - Inventory request system\n6. Aquaculture System - Smart pH monitoring and control\n7. Portfolio - This interactive personal website`,
  hobbies: `Making Songs, Playing games, Bedrot`,
  education: `College: Bachelor of Science in Computer Engineering\nUniversity of Science and Technology of Southern Philippines\nCagayan de Oro [2021 - 2025]\n\nSenior High School (STEM): University of the Immaculate Conception - Bajada Campus\nDavao City [2019 - 2021]\n\nHigh School: Merry Child School\nCagayan de Oro [2016 - 2019]\n\nElementary: Iponan Elementary School\nCagayan de Oro [2010 - 2016]`,
  courses: `Courses:\n- Computer Architecture\n- Embedded Systems\n- Software Engineering\n- Data Structures and Algorithms\n- Robotics\n- Computer Networks\n- UI/UX Design\n- Internet of Things (IoT)`,
  certificates: `Certificates:\n- Cisco: Introduction to Cybersecurity\n- Cisco: Enterprise Networking, Security, and Automation\n- Cisco: Switching, Routing and Wireless Essentials\n- Cisco: Networking Essentials\n- Freecodecamp: Responsive Web Design\n- Freecodecamp: Front End Development Libraries Projects`,
  number: `Contact Number: 63+ 9936509109`,
  quote: `"Nothing changes, if nothing changes"`,
}

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
        <div className="space-y-8 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-400 text-glow leading-tight">About Me</h1>
          <img
            src="/images/about/Clark.jpg"
            alt="Clark Joross Lim"
            className="w-80 h-80 rounded-lg border-2 border-green-400 object-cover hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all duration-300"
          />
          <div className="text-center lg:text-left text-green-300 max-w-md">
            <div className="text-green-400 mb-4 font-medium text-lg">👤user@portfolio:~$cat profile.txt</div>
            <div className="text-green-400 space-y-2 font-light">
              <p><span className="text-green-400">Name:</span> Clark Joross Lim</p>
              <p><span className="text-green-400">Role:</span> Computer Engineer & Web Developer </p>
              <p><span className="text-green-400">Experience:</span> Fresh Graduate</p>
              <p><span className="text-green-400">Location:</span> Philippines</p>
            </div>
          </div>
        </div>

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
          <div className="flex flex-col items-center">
            {[
              { name: 'React', percent: 80 },
              { name: 'Next.js', percent: 90 },
              { name: 'TypeScript', percent: 85 },
              { name: 'JavaScript', percent: 80 },
              { name: 'HTML5', percent: 90 },
              { name: 'CSS3', percent: 90 },
              { name: 'Tailwind', percent: 90 },
            ].map(({ name, percent }) => {
              const filled = Math.round(percent / 5);
              const empty = 20 - filled;
              return (
                <div key={name} className="w-full max-w-lg flex items-center mb-2 font-mono">
                  <span className="w-32 text-green-300">{name}</span>
                  <span className="flex-1 mx-2">
                    <span className="inline-block align-middle text-green-400">[
                      <span className="text-green-400">{'█'.repeat(filled)}</span>
                      <span className="text-green-900">{'░'.repeat(empty)}</span>
                    ]</span>
                  </span>
                  <span className="w-12 text-green-300">{percent}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-6 text-center">Backend</h3>
          <div className="flex flex-col items-center">
            {[
              { name: 'PHP', percent: 90 },
              { name: 'Laravel', percent: 90 },
              { name: 'Node.js', percent: 80 },
              { name: 'Python', percent: 70 },
              { name: 'MySQL', percent: 90 },
            ].map(({ name, percent }) => {
              const filled = Math.round(percent / 5);
              const empty = 20 - filled;
              return (
                <div key={name} className="w-full max-w-lg flex items-center mb-2 font-mono">
                  <span className="w-32 text-green-300">{name}</span>
                  <span className="flex-1 mx-2">
                    <span className="inline-block align-middle text-green-400">[
                      <span className="text-green-400">{'█'.repeat(filled)}</span>
                      <span className="text-green-900">{'░'.repeat(empty)}</span>
                    ]</span>
                  </span>
                  <span className="w-12 text-green-300">{percent}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-300 mb-6 text-center">Tools & Hardware</h3>
          <div className="flex flex-col items-center">
            {[
              { name: 'Figma', percent: 90 },
              { name: 'Canva', percent: 90 },
              { name: 'AutoCAD', percent: 70 },
              { name: 'Arduino', percent: 90 },
              { name: 'ESP32', percent: 90 },
              { name: 'Raspberry Pi', percent: 80 },
            ].map(({ name, percent }) => {
              const filled = Math.round(percent / 5);
              const empty = 20 - filled;
              return (
                <div key={name} className="w-full max-w-lg flex items-center mb-2 font-mono">
                  <span className="w-32 text-green-300">{name}</span>
                  <span className="flex-1 mx-2">
                    <span className="inline-block align-middle text-green-400">[
                      <span className="text-green-400">{'█'.repeat(filled)}</span>
                      <span className="text-green-900">{'░'.repeat(empty)}</span>
                    ]</span>
                  </span>
                  <span className="w-12 text-green-300">{percent}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;