import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Figma, Folder, Github } from "lucide-react";

export default function Click2PermitCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Click2Permit – A Request Management System for HRMO</h1>
          <h2 className="text-xl text-green-400">Streamlining HR Document Requests</h2>
        </header>
        <div className="w-full mb-2">
          <Image src="/images/click2permit/Project1.jpg" alt="Click2Permit Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://www.figma.com/design/XTnwqmzeK4or4vO6bAAyFe/CLICK2PERMIT?node-id=0-1&t=LlqIXcSB2T8h5MHz-1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Figma size={24} strokeWidth={2} />
          </a>
          <a href="https://drive.google.com/drive/folders/1wVFklmYdBFiWhs0xAV-piL5-YRKJC_-k?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/Click2Permit.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-4">Methodology</h2>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 1: Requirements Gathering</h3>
            <p className="text-gray-300 mb-2">Interviews & Observations: Conducted with HRMO staff to understand current workflows. Document Review: Analyzed existing HR documents (e.g., Certificate of Employment, Leave Credits).</p>
            <ul className="list-disc ml-6 text-gray-400 mb-2">
              <li>Manual submission and approval processes.</li>
              <li>Lack of real-time tracking.</li>
              <li>Inefficient communication between employees and HR.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 2: Requirements Analysis</h3>
            <p className="text-gray-300 mb-2">User roles and system requirements were defined, including registration, authentication, request submission, approval workflow, and secure storage.</p>
            <ul className="list-disc ml-6 text-gray-400 mb-2">
              <li>Admin (HRMO Personnel): Manages requests, approvals, notifications.</li>
              <li>Employees/Newly Employed: Submits requests, tracks status.</li>
              <li>System: Registration, authentication, approval workflow, secure storage.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 3: System Design</h3>
            <p className="text-gray-300 mb-2">Architectural design included frontend (HTML, CSS, JS), backend (PHP), database (MySQL), and hosting (XAMPP). Diagrams and models were created for context, data flow, use cases, activities, and database schema. Figma was used for UI/UX prototyping.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 4: Implementation</h3>
            <p className="text-gray-300 mb-2">Frontend was built with HTML/CSS, backend with PHP, and MySQL for data. Key features included user authentication, request processing, and admin notifications. Employees could request documents and view status; admins could approve/reject and generate reports.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 5: Testing & Evaluation</h3>
            <p className="text-gray-300 mb-2">Unit, integration, and user acceptance testing were conducted. Functional testing had a 100% success rate. Usability testing scored 89.06/100 (“Best Imaginable” on SUS).</p>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 6: Deployment & Training</h3>
            <p className="text-gray-300 mb-2">Deployed on local server (XAMPP) for HRMO. Training sessions were held for staff and employees.</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Results & Impact</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li>Efficiency: Reduced document processing time from hours to minutes.</li>
            <li>User Satisfaction: Employees and admins reported high usability (89.06 SUS score).</li>
            <li>Error Reduction: Automated workflows minimized manual errors.</li>
            <li>Scalability: Designed for future enhancements (multi-language, mobile app).</li>
          </ul>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 