import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Folder, Github } from "lucide-react";

export default function RoboCarSurveillanceCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: RoboCar – Real-time RC Surveillance Vehicle for Hazardous Gas Detection Using Raspberry Pi</h1>
          <h2 className="text-xl text-green-400">Mobile Gas Detection & Remote Monitoring</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/robocar/Robocar.jpg" alt="RoboCar Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://drive.google.com/drive/folders/1qXWy2OVxVGTRCMXttlytIf6LakqRMVLH?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/jorodotexe/robocar-surveillance" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Backend Developer
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h2>
          <h3 className="text-green-400 font-semibold mb-2">Background</h3>
          <p className="text-gray-300 mb-2">Air pollution poses severe health risks, especially in hazardous environments like industrial sites and mines. Traditional air quality monitoring systems are often static, expensive, and lack real-time data. To address this, the RoboCar was developed—a mobile, Raspberry Pi-powered surveillance vehicle equipped with gas sensors for real-time hazardous gas detection.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Objective</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Detect hazardous gases (LPG, methane, alcohol, smoke) using MQ-series sensors.</li>
            <li>Provide real-time air quality data via a web interface.</li>
            <li>Enable remote control for safe environmental inspection.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">System Design & Development</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 1: Conceptual Framework</h3>
          <p className="text-gray-300 mb-2">The RoboCar operates in three stages:</p>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li><b>Detection:</b> MQ2, MQ3, and MQ6 sensors detect gas concentrations.</li>
            <li><b>Processing:</b> Raspberry Pi processes sensor data and streams live video.</li>
            <li><b>Output:</b> Real-time data is displayed on a web dashboard, with alerts for unsafe levels.</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/robocar/robocar_IPO1.jpg" alt="IPO Model Diagram 1" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/robocar/robocar_IPO2.jpg" alt="IPO Model Diagram 2" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
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
              <tr><td className="py-2 px-4 border-b border-green-600">Raspberry Pi 4B</td><td className="py-2 px-4 border-b border-green-600">Central controller for data processing and motor control.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">MQ2/MQ3/MQ6 Sensors</td><td className="py-2 px-4 border-b border-green-600">Detect LPG, alcohol, methane, and smoke.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">ESP32</td><td className="py-2 px-4 border-b border-green-600">Converts analog sensor signals to digital (via ADC).</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">L293D Motor Driver</td><td className="py-2 px-4 border-b border-green-600">Controls DC motors for movement.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Web Camera</td><td className="py-2 px-4 border-b border-green-600">Live video streaming for surveillance.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">12V Battery + BMS</td><td className="py-2 px-4 border-b border-green-600">Powers the system with safety management.</td></tr>
            </tbody>
          </table>

          <h3 className="text-green-400 font-semibold mb-2">Step 3: Software Implementation</h3>
          <p className="text-gray-300 mb-2">Programming: Python scripts on Raspberry Pi for sensor data processing.</p>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Web Interface: HTML/JavaScript dashboard for real-time monitoring.</li>
            <li>Control Modes:
              <ul className="list-disc ml-6">
                <li>Web Server: Remote control via browser.</li>
                <li>Bluedot App: Bluetooth-based offline control.</li>
              </ul>
            </li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/robocar/robocar_bluedot.jpg" alt="System Flowchart 1" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/robocar/robocar_web.jpg" alt="System Flowchart 2" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Prototype Assembly</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 4: Physical Setup</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Chassis: Acrylic layers for mounting components.</li>
            <li>Sensor Placement: MQ-series sensors positioned for optimal gas detection.</li>
            <li>Motor Assembly: Four DC motors with wheels for mobility.</li>
            <li>Power System: 12V battery with BMS and buck converter for stable voltage.</li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-4 my-4">
            <Image src="/images/robocar/robocar_prototype.jpg" alt="RoboCar Prototype 1" width={400} height={200} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/robocar/robocar_actual.jpg" alt="RoboCar Prototype 2" width={400} height={200} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>

          <h3 className="text-green-400 font-semibold mb-2">Step 5: Testing & Calibration</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Sensor Calibration: Adjusted thresholds for gas detection (e.g., 100 ppm for MQ2).</li>
            <li>Field Trials: Tested in controlled environments with smoke and alcohol vapors.</li>
          </ul>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Test Scenario</th>
                <th className="py-2 px-4 border-b border-green-600">Sensor Response</th>
                <th className="py-2 px-4 border-b border-green-600">Web Interface Alert</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">Smoke Detection</td><td className="py-2 px-4 border-b border-green-600">MQ2 Activated</td><td className="py-2 px-4 border-b border-green-600">"Smoke Detected"</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Alcohol Vapor</td><td className="py-2 px-4 border-b border-green-600">MQ3 Activated</td><td className="py-2 px-4 border-b border-green-600">"Alcohol Detected"</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">LPG Leak</td><td className="py-2 px-4 border-b border-green-600">MQ6 Activated</td><td className="py-2 px-4 border-b border-green-600">"Flammable Area"</td></tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Results & Discussion</h2>
          <h3 className="text-green-400 font-semibold mb-2">Key Findings</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Accuracy: Sensors reliably detected target gases with 90% precision.</li>
            <li>Latency: Real-time data updates with &lt;2-second delay.</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Limitations</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Limited to small areas due to battery life (2–3 hours).</li>
            <li>Wi-Fi range constraints (~50 meters).</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Web Interface</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Dashboard: Displayed live sensor data, video feed, and RC controls.</li>
            <li>Alerts: Color-coded warnings for hazardous gas levels.</li>
          </ul>
          <div className="flex justify-center my-4">
            <Image src="/images/robocar/robocar_interface.jpg" alt="Web Dashboard" width={1000} height={600} className="rounded shadow bg-black w-full h-auto max-w-[1000px]" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Conclusion & Recommendations</h2>
          <h3 className="text-green-400 font-semibold mb-2">Conclusion</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>The RoboCar successfully automated hazardous gas detection in real time.</li>
            <li>Reduced human exposure to polluted environments.</li>
          </ul>
          <h3 className="text-green-400 font-semibold mb-2">Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Extend Battery Life: Integrate solar panels for sustainable power.</li>
            <li>Enhance Mobility: Add obstacle avoidance for rugged terrains.</li>
            <li>Scale Up: Deploy multiple units for large-area monitoring.</li>
          </ul>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 