import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export default function PortfolioDevelopmentCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Personal Portfolio Development – Modern Web Technologies Showcase</h1>
          <h2 className="text-xl text-green-400">Showcasing Skills with Next.js, React, and Tailwind CSS</h2>
        </header>


        <div className="w-full mb-2">
          <Image src="/images/portfolio/portfolio.jpg" alt="Portfolio Development Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>

        <div className="flex gap-4 mb-4">
          <a href="https://github.com/Joro281/Portfolio.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Background</h4>
          <p className="mb-2">
            Need for professional online presence to showcase technical skills and projects. Lack of centralized platform to display academic background and achievements. Requirement for responsive design that works across all devices. Need for modern, interactive user experience that reflects technical capabilities.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Objectives</h3>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li>Create a comprehensive personal portfolio website using modern web technologies</li>
            <li>Implement responsive design principles for optimal mobile and desktop experience</li>
            <li>Showcase technical projects with detailed descriptions and visual elements</li>
            <li>Demonstrate proficiency in Next.js, React, and Tailwind CSS frameworks</li>
            <li>Achieve fast loading times and optimal SEO performance</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Methodology</h3>
          <p className="text-gray-300 mb-2">
            The portfolio was developed using Next.js 15 for server-side rendering and optimal performance. React 19 provided the component-based architecture for maintainable code. Tailwind CSS enabled rapid styling with consistent design patterns. TypeScript ensured type safety and better development experience. The design process included wireframing, prototyping, and iterative user testing for optimal user experience.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">More Details Coming Soon</h3>
          <p className="text-gray-400">This case study is still in progress. Please check back later for updates and in-depth analysis.</p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Recommendations</h3>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li>Implement blog functionality for sharing technical insights and tutorials</li>
            <li>Add interactive project demos and live code examples</li>
            <li>Integrate analytics dashboard for visitor behavior analysis</li>
            <li>Develop dark/light theme toggle for enhanced user preference options</li>
            <li>Create automated deployment pipeline with continuous integration</li>
          </ul>
        </section>
      </main>
      <SlideUpFooter />
    </>
  );
} 