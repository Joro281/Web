import React from "react";
import ScrollLoadingBar from "@/app/components/ui/ScrollLoadingBar";
import SlideUpFooter from "@/app/components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Figma, Folder, Github } from "lucide-react";

export default function Click2PermitCaseStudy() {
  return (
    <>
      <ScrollLoadingBar />
      <main className="p-8 max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 mb-8"
          >
            <span className="mr-2">←</span>
            <span className="text-sm font-mono">cd ../projects</span>
          </Link>
        </div>

        {/* Title and Subtitle */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Click2Permit – A Request Management System for HRMO</h1>
          <h2 className="text-xl text-green-400">Streamlining HR Document Requests</h2>
        </header>

        {/* Full-width Hero Image */}
        <div className="w-full mb-2">
          <Image src="/images/Project1.jpg" alt="Click2Permit Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        {/* Figma, Folder, and GitHub Lucide Icons, left-aligned */}
        <div className="flex gap-4 mb-4">
          <a href="https://www.figma.com/design/XTnwqmzeK4or4vO6bAAyFe/CLICK2PERMIT?node-id=0-1&t=pwI4fRWbed1h0mzc-1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Figma size={24} strokeWidth={2} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/jorodotexe/click2permit" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        {/* Role */}
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> UI/UX Developer, Full Stack Developer
        </div>

        {/* Introduction Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h2>
          <p className="text-gray-300 mb-2">Click2Permit is a web-based request management system designed to streamline document requests for employees and newly employed individuals in the Human Resource Management Office (HRMO). The system addresses inefficiencies in traditional manual processes, such as delays, errors, and administrative burdens, by providing a digital platform for requesting, tracking, and managing HR documents.</p>
        </section>

        {/* Problem Statement Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Problem Statement</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li>Manual document request processes in HRMO led to inefficiencies, delays, and errors.</li>
            <li>Lack of a centralized system for tracking requests and approvals.</li>
            <li>Employees faced difficulties in accessing and managing HR documents.</li>
          </ul>
        </section>

        {/* Objective Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Objective</h2>
          <p className="text-gray-300 mb-2">To design and implement a user-friendly, efficient, and secure web-based system that automates document requests, approvals, and tracking for HRMO.</p>
        </section>

        {/* Methodology Section */}
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

        {/* Results & Impact Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Results & Impact</h2>
          {/* Place a chart or graph here if needed */}
          {/* Example: <Image src="/images/your_chart.jpg" alt="Results Chart" width={600} height={300} className="mx-auto rounded shadow bg-black" /> */}
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li>Efficiency: Reduced document processing time from hours to minutes.</li>
            <li>User Satisfaction: Employees and admins reported high usability (89.06 SUS score).</li>
            <li>Error Reduction: Automated workflows minimized manual errors.</li>
            <li>Scalability: Designed for future enhancements (multi-language, mobile app).</li>
          </ul>
        </section>

        {/* Challenges & Solutions Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Challenges & Solutions</h2>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-left text-gray-300 border border-green-600">
              <thead className="bg-green-900">
                <tr>
                  <th className="py-2 px-4 border-b border-green-600">Challenge</th>
                  <th className="py-2 px-4 border-b border-green-600">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Manual approval delays</td>
                  <td className="py-2 px-4 border-b border-green-600">Automated workflow with email notifications</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Data security concerns</td>
                  <td className="py-2 px-4 border-b border-green-600">Implemented role-based access control</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">User adoption resistance</td>
                  <td className="py-2 px-4 border-b border-green-600">Conducted training and usability testing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendations for Future Improvements Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Recommendations for Future Improvements</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Mobile App Integration: Extend accessibility via smartphones.</li>
            <li>Multi-Language Support: Cater to non-English speakers.</li>
            <li>Biometric Authentication: Enhance security with ID verification.</li>
            <li>Live Chat Support: Improve real-time communication.</li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Conclusion</h2>
          <p className="text-gray-300 mb-2">Click2Permit successfully transformed HRMO's document request system from a manual, error-prone process into an efficient, automated, and user-friendly platform. The system's high usability score and positive feedback from users demonstrate its effectiveness in improving HR operations.</p>
        </section>

        {/* Key Takeaways Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Key Takeaways</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-2">
            <li>Automation significantly reduces administrative workload.</li>
            <li>User-centered design ensures high adoption rates.</li>
            <li>Scalability allows for future enhancements.</li>
          </ul>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 