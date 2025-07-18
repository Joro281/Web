import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Folder, Github } from "lucide-react";

export default function BirdDetectionSystemCaseStudy() {
  return (
    <>
      <ScrollLoadingBar />
      <main className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 mb-8"
          >
            <span className="mr-2">←</span>
            <span className="text-sm font-mono">cd ../projects</span>
          </Link>
        </div>

        <header className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Automated Bird Detection and Repeller System Using ESP32</h1>
          <h2 className="text-xl text-green-400">Smart Crop Protection with IoT Automation</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/birddetection/birddetection_hero.jpg" alt="Bird Detection System Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://drive.google.com/drive/folders/1yRw3re5c1ggU9TWQXYy7pZrzfddCoPHo?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/Automated-Bird-Detection-and-Repeller-System.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h2>
          <h3 className="text-green-400 font-semibold mb-2">Background</h3>
          <p className="text-gray-300 mb-2">Bird damage is a significant problem in agriculture, particularly in rice fields, where birds like the Maya bird cause substantial crop losses. Traditional methods, such as manual shouting or using noisy objects, are labor-intensive and inefficient. To address this, an Automated Bird Detection and Repeller System was developed using the ESP32 microcontroller, PIR motion sensors, and predator sound emitters.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Objective</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Automatically detect birds using PIR sensors.</li>
            <li>Repel birds using predator sounds via an MP3 module and speaker.</li>
            <li>Reduce reliance on manual bird-scaring methods.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">System Design & Development</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 1: Conceptual Framework</h3>
          <p className="text-gray-300 mb-2">The system operates in three stages:</p>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li><b>Detection:</b> PIR sensor detects motion (birds).</li>
            <li><b>Processing:</b> ESP32 processes the signal and triggers the MP3 module.</li>
            <li><b>Repelling:</b> Predator sounds are amplified and emitted via a speaker.</li>
          </ul>
          <div className="flex justify-center my-4">
            <Image src="/images/birddetection/birddetection_conceptual.jpg" alt="Conceptual Framework Diagram" width={600} height={400} className="rounded shadow bg-black w-full h-auto max-w-[600px]" />
          </div>

          <h3 className="text-green-400 font-semibold mb-2">Step 2: Hardware Components</h3>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Component</th>
                <th className="py-2 px-4 border-b border-green-600">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">ESP32 Microcontroller</td><td className="py-2 px-4 border-b border-green-600">Processes sensor data and controls the system.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">PIR Motion Sensor</td><td className="py-2 px-4 border-b border-green-600">Detects bird movement (5m–12m range).</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">MP3 Module</td><td className="py-2 px-4 border-b border-green-600">Stores & plays predator sounds (e.g., eagle calls).</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Audio Amplifier</td><td className="py-2 px-4 border-b border-green-600">Boosts sound volume for wider coverage.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Speaker (15W+)</td><td className="py-2 px-4 border-b border-green-600">Emits deterrent sounds.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">12V Battery</td><td className="py-2 px-4 border-b border-green-600">Powers the system.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Firebase Database</td><td className="py-2 px-4 border-b border-green-600">Stores real-time detection logs and activation history for analysis.</td></tr>
            </tbody>
          </table>

          <h3 className="text-green-400 font-semibold mb-2">Step 3: Software Implementation</h3>
          <p className="text-gray-300 mb-2">Programming: Arduino IDE was used to code the ESP32.</p>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Continuously monitors PIR sensor.</li>
            <li>Triggers MP3 module upon detection.</li>
            <li>Randomizes sound patterns to prevent bird adaptation.</li>
            <li>Remote Monitoring: Blynk app integration for real-time logging.</li>
            <li>Database: Firebase used for real-time data storage and analysis.</li>
          </ul>
          <div className="flex justify-center my-4">
            <Image src="/images/birddetection/birddetection_wiring.jpg" alt="Wiring Diagram" width={600} height={400} className="rounded shadow bg-black w-full h-auto max-w-[600px]" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Prototype Assembly</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 4: Physical Setup</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Tripod Stand (6 ft tall): Elevated to maximize sensor coverage.</li>
            <li>Brainboard Enclosure: Housed ESP32, MP3 module, amplifier, and PIR sensor.</li>
            <li>Speaker Placement: Mounted at the top for optimal sound projection.</li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-4 my-4">
            <Image src="/images/birddetection/birddetection_prototype.jpg" alt="Prototype Setup 1" width={200} height={100} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/birddetection/birddetection_brainboard.jpg" alt="Prototype Setup 2" width={400} height={200} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>

          <h3 className="text-green-400 font-semibold mb-2">Step 5: Testing & Calibration</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Bench Testing: Verified PIR sensor range (5m–12m) and sound clarity.</li>
            <li>Field Trials: Conducted three 1-hour tests to evaluate detection accuracy and false triggers (e.g., leaves, wind).</li>
          </ul>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Trial</th>
                <th className="py-2 px-4 border-b border-green-600">Activations</th>
                <th className="py-2 px-4 border-b border-green-600">Birds Detected</th>
                <th className="py-2 px-4 border-b border-green-600">False Triggers</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">1</td><td className="py-2 px-4 border-b border-green-600">10</td><td className="py-2 px-4 border-b border-green-600">7</td><td className="py-2 px-4 border-b border-green-600">3 (leaves/wind)</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">2</td><td className="py-2 px-4 border-b border-green-600">5</td><td className="py-2 px-4 border-b border-green-600">4</td><td className="py-2 px-4 border-b border-green-600">1</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">3</td><td className="py-2 px-4 border-b border-green-600">9</td><td className="py-2 px-4 border-b border-green-600">9</td><td className="py-2 px-4 border-b border-green-600">0</td></tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Results & Discussion</h2>
          <h3 className="text-green-400 font-semibold mb-2">Key Findings</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Effectiveness: 80–90% accuracy in bird detection.</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Challenges</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>False triggers due to environmental factors.</li>
            <li>Limited PIR sensor range (adjustments improved performance).</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Improvements</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Solar panel integration for sustainability.</li>
            <li>Multiple repellers for larger fields.</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Remote Monitoring</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Blynk App: Logged real-time detections.</li>
            <li>Database: Stored activation history for analysis.</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/birddetection/birddetection_blynk.png" alt="Realtime Database 1" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/birddetection/birddetection_firebase.jpg" alt="Realtime Database 2" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Conclusion & Recommendations</h2>
          <h3 className="text-green-400 font-semibold mb-2">Conclusion</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>The system successfully reduced bird-related crop damage.</li>
            <li>Automated a traditionally manual process.</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Expand Sensor Range: Use multiple PIR sensors or cameras.</li>
            <li>Solar Power: Enhance sustainability.</li>
            <li>Farmer Training: Ensure proper adoption.</li>
            <li>Long-Term Studies: Assess impact over multiple seasons.</li>
          </ul>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 