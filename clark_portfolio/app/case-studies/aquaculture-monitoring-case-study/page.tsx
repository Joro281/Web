import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Folder, Github } from "lucide-react";

export default function AquacultureMonitoringCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Chlorella Algae (Chlorella vulgaris) Chamber – Monitoring and Filtration System for Indoor Aquaculture</h1>
          <h2 className="text-xl text-green-400">Automated Water Quality Management with Algae Biofiltration</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/aquaculture/Thesis.jpg" alt="Aquaculture System Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://drive.google.com/drive/folders/1k9P1Q20JSa-ulaAmW_tcc6AbThz18JkD?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/Aquaculture-System.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h2>
          <h3 className="text-green-400 font-semibold mb-2">Background</h3>
          <p className="text-gray-300 mb-2">Maintaining optimal water quality in indoor aquaculture systems is challenging, particularly in regulating pH and ammonia levels. Uncontrolled algae growth often exacerbates these issues, but Chlorella vulgaris, a microalga, can serve as a natural biofilter by absorbing excess ammonia and stabilizing pH. This study developed an automated system integrating Chlorella vulgaris with real-time monitoring to improve water quality for small-scale aquaculture.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Objective</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Monitor pH and water levels in real time using sensors.</li>
            <li>Filter water using Chlorella vulgaris in a two-stage chamber (biological + mechanical).</li>
            <li>Automate adjustments via an ESP32 microcontroller and web interface.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">System Design & Development</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 1: Conceptual Framework</h3>
          <p className="text-gray-300 mb-2">The system operates in three stages:</p>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li><b>Detection:</b> pH and water level sensors collect data.</li>
            <li><b>Processing:</b> ESP32 microcontroller analyzes data and triggers actuators (pumps, LEDs, CO₂ reactor).</li>
            <li><b>Output:</b> Real-time data is displayed on a web dashboard; algae chambers filter water.</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/aquaculture/aquaclear_IPO.jpg" alt="System Architecture 1" width={600} height={300} className="rounded shadow bg-black w-full h-auto max-w-[600px]" />
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
              <tr><td className="py-2 px-4 border-b border-green-600">ESP32 Microcontroller</td><td className="py-2 px-4 border-b border-green-600">Processes sensor data and controls actuators.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">pH Sensor (PH-4502C)</td><td className="py-2 px-4 border-b border-green-600">Measures water acidity/alkalinity (range: 2.0–9.18 pH).</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Float Switch Sensors</td><td className="py-2 px-4 border-b border-green-600">Detects water levels ("full" or "not full").</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Chlorella vulgaris Chambers</td><td className="py-2 px-4 border-b border-green-600">Three chambers with algae densities (10–20%, 25–35%, 40–50%).</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Full-Spectrum LED Lights</td><td className="py-2 px-4 border-b border-green-600">Enhances algae photosynthesis.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">CO₂ Reactor</td><td className="py-2 px-4 border-b border-green-600">Stabilizes pH by regulating carbon dioxide.</td></tr>
            </tbody>
          </table>

          <h3 className="text-green-400 font-semibold mb-2">Step 3: Software Implementation</h3>
          <p className="text-gray-300 mb-2">Programming: Arduino IDE for ESP32 logic (e.g., pH thresholds trigger CO₂ release).</p>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Web Interface: Displays real-time data (pH, water level) and historical logs.</li>
            <li>Automation: Algae chambers cycle through fill, treat, and drain phases.</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/aquaculture/aquaclear_UI.jpg" alt="Web Interface 1" width={500} height={400} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/aquaculture/aquaclear_database.jpg" alt="Web Interface 2" width={500} height={400} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Prototype Assembly</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 4: Physical Setup</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Algae Chambers: Three 4L chambers with mesh partitions for algae growth.</li>
            <li>Sensor Placement: pH sensor submerged in water; float switches at tank edges.</li>
            <li>Control Panel: Houses ESP32, relays, and power supplies.</li>
            <li>CO₂ Integration: DIY reactor connected to the algae chambers.</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/aquaculture/aquaclear_system.jpg" alt="Algae Chamber Setup 1" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/aquaculture/aquaclear_brainboard.jpg" alt="Algae Chamber Setup 2" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>

          <h3 className="text-green-400 font-semibold mb-2">Step 5: Calibration & Testing</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>pH Sensor: Calibrated with buffer solutions (pH 4.00, 7.00, 9.18).</li>
            <li>Float Switches: Tested for accuracy in 10 cycles (80% success rate; algae buildup caused occasional failures).</li>
          </ul>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Chamber</th>
                <th className="py-2 px-4 border-b border-green-600">Avg. pH Change</th>
                <th className="py-2 px-4 border-b border-green-600">Retention Time (sec)</th>
                <th className="py-2 px-4 border-b border-green-600">pH Change Rate (units/min)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">10–20% Algae</td><td className="py-2 px-4 border-b border-green-600">1.32</td><td className="py-2 px-4 border-b border-green-600">321.8</td><td className="py-2 px-4 border-b border-green-600">0.2459</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">25–35% Algae</td><td className="py-2 px-4 border-b border-green-600">0.56</td><td className="py-2 px-4 border-b border-green-600">235.1</td><td className="py-2 px-4 border-b border-green-600">0.1431</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">40–50% Algae</td><td className="py-2 px-4 border-b border-green-600">1.33</td><td className="py-2 px-4 border-b border-green-600">362.2</td><td className="py-2 px-4 border-b border-green-600">0.2211</td></tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Results & Discussion</h2>
          <h3 className="text-green-400 font-semibold mb-2">Key Findings</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Optimal Algae Density: Chamber 1 (10–20% algae) stabilized pH fastest (0.2459 pH units/minute).</li>
            <li>Retention Time: Chamber 3 (40–50% algae) had the longest retention (362 sec) but slower pH adjustment.</li>
            <li>Web Interface: Successfully displayed real-time data with 5-second updates.</li>
          </ul>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Chamber</th>
                <th className="py-2 px-4 border-b border-green-600">Avg. pH Change</th>
                <th className="py-2 px-4 border-b border-green-600">Retention Time (sec)</th>
                <th className="py-2 px-4 border-b border-green-600">pH Change Rate (units/min)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">10–20% Algae</td><td className="py-2 px-4 border-b border-green-600">1.32</td><td className="py-2 px-4 border-b border-green-600">321.8</td><td className="py-2 px-4 border-b border-green-600">0.2459</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">25–35% Algae</td><td className="py-2 px-4 border-b border-green-600">0.56</td><td className="py-2 px-4 border-b border-green-600">235.1</td><td className="py-2 px-4 border-b border-green-600">0.1431</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">40–50% Algae</td><td className="py-2 px-4 border-b border-green-600">1.33</td><td className="py-2 px-4 border-b border-green-600">362.2</td><td className="py-2 px-4 border-b border-green-600">0.2211</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 