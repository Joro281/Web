import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Figma, Folder, Github } from "lucide-react";

export default function FuelRequestSystemCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Fuel Request System – Optimizing Government Fleet Management</h1>
          <h2 className="text-xl text-green-400">Streamlining Fuel Allocation and Tracking</h2>
        </header>
        <div className="w-full mb-2">
          <Image src="/images/fuelrequest/Fuel_Request.jpg" alt="Fuel Request System Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://www.figma.com/design/SdAJN2bBluX5Xqlk5ga0XE/Fuel-Request-System?node-id=0-1&t=8f9E1VrmBALohMKV-1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Figma size={24} strokeWidth={2} />
          </a>
          <a href="https://drive.google.com/drive/folders/1JIPnqd6sytqoG5645SxsaIuYb7hE_wC_?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/CompEngOJT/CapitolRequest2.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Backend Developer
        </div>
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Background</h4>
          <p className="mb-2">
            The Provincial Engineering Office of Misamis Oriental faced inefficiencies in managing service and fuel requests for government vehicles due to manual, paper-based processes. To streamline operations, an Online Request System was developed to digitize request submissions, approvals, and inventory tracking.
          </p>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Objective</h4>
          <ul className="list-disc list-inside mb-2 pl-4">
            <li>Automate request workflows (fuel, maintenance, parts).</li>
            <li>Track real-time request statuses and inventory levels.</li>
            <li>Enhance accountability with role-based access (Users and Admins).</li>
          </ul>
        </section>
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">System Design & Development</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Phase 1: System Architecture</h4>
          <ul className="list-disc list-inside mb-2 pl-4">
            <li><span className="font-semibold">Frontend:</span> Web-based interface (compatible with desktop/mobile).</li>
            <li><span className="font-semibold">Backend:</span> Database for storing requests, inventory, and user data.</li>
          </ul>
          <div className="mb-2">
            <span className="font-semibold">User Roles:</span>
            <ul className="list-disc list-inside pl-6">
              <li><span className="font-semibold">Users (Employees):</span> Submit and track requests.</li>
              <li><span className="font-semibold">Admins:</span> Approve requests, manage inventory, and generate reports.</li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/fuelrequest/Fuel_Request.jpg" alt="System Workflow Diagram" width={400} height={200} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/fuelrequest/fuelrequest_user.jpg" alt="System Workflow Diagram" width={400} height={200} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>
          <h4 className="text-lg font-semibold text-green-400 mb-1 mt-6">Phase 2: Key Features</h4>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-[350px] w-full border border-green-600 text-gray-300">
              <thead className="bg-green-900">
                <tr>
                  <th className="py-2 px-4 border-b border-green-600 text-left">Feature</th>
                  <th className="py-2 px-4 border-b border-green-600 text-left">Functionality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Request Submission</td>
                  <td className="py-2 px-4 border-b border-green-600">Users submit fuel/service requests via digital forms.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Real-Time Tracking</td>
                  <td className="py-2 px-4 border-b border-green-600">View request status (Pending/Approved/Rejected).</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Inventory Management</td>
                  <td className="py-2 px-4 border-b border-green-600">Admins monitor stock levels (e.g., engine oil, fuel).</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Dashboard Analytics</td>
                  <td className="py-2 px-4 border-b border-green-600">Visualize consumption trends and request history.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold text-green-400 mb-1 mt-6">Phase 3: Technology Stack</h4>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li><span className="font-semibold">Frontend:</span> HTML, CSS, JavaScript.</li>
            <li><span className="font-semibold">Backend:</span> PHP/Node.js with MySQL database.</li>
            <li><span className="font-semibold">Security:</span> Role-based authentication (User/Admin).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Implementation & Testing</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Phase 4: User Flow</h4>
          <ul className="list-decimal list-inside pl-4 mb-2">
            <li>Login: Users/Admins access the system via credentials.</li>
            <li>Request Submission: Users fill out forms (e.g., driver, vehicle, product details).</li>
            <li>Admin Approval: Admins review and approve/reject requests.</li>
            <li>Inventory Update: System deducts stock upon approval.</li>
          </ul>
          <h4 className="text-lg font-semibold text-green-400 mb-1 mt-6">Phase 5: Testing</h4>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li>Usability Testing: Conducted with 20 employees; 90% found the interface intuitive.</li>
            <li>Performance Testing: Handled 100+ concurrent requests without lag.</li>
            <li>Bug Fixes: Resolved float switch errors in inventory tracking.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Results & Impact</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Key Outcomes</h4>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li><span className="font-semibold">Efficiency:</span> Reduced request processing time by 70% (from 2 days to 2 hours).</li>
            <li><span className="font-semibold">Transparency:</span> Real-time tracking eliminated manual follow-ups.</li>
            <li><span className="font-semibold">Cost Savings:</span> Reduced paper usage and fuel wastage.</li>
          </ul>
          <h4 className="text-lg font-semibold text-green-400 mb-1 mt-6">User Feedback</h4>
          <blockquote className="border-l-4 border-green-300 pl-4 italic text-gray-700 mb-2">
            "The system made it easy to submit requests and track approvals instantly."
            <br />
            <span className="text-xs text-gray-500">— Motorpool Division Employee</span>
          </blockquote>
          <h4 className="text-lg font-semibold text-green-400 mb-1 mt-6">Challenges & Solutions</h4>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-[300px] w-full border border-green-600 text-gray-300">
              <thead className="bg-green-900">
                <tr>
                  <th className="py-2 px-4 border-b border-green-600 text-left">Challenge</th>
                  <th className="py-2 px-4 border-b border-green-600 text-left">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Mobile compatibility issues</td>
                  <td className="py-2 px-4 border-b border-green-600">Optimized UI for smaller screens.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-600">Inventory sync delays</td>
                  <td className="py-2 px-4 border-b border-green-600">Implemented auto-update triggers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Conclusion & Recommendations</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Conclusion</h4>
          <p className="mb-2">
            The Online Request System successfully digitized the Provincial Engineering Office's workflows, improving efficiency, accountability, and resource management.
          </p>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Recommendations</h4>
          <ul className="list-disc list-inside pl-4">
            <li>Mobile App: Develop a dedicated app for field employees.</li>
            <li>Integration: Link with fuel stations for automated stock updates.</li>
            <li>Training: Regular workshops for new users.</li>
          </ul>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 