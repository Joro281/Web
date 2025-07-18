"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Portfolio",
    year: 2025,
    command: "git clone portfolio",
    description:
      "Developed a personal portfolio website using Next.js and Tailwind CSS to showcase technical skills, academic background, and project experience.",
    image: "/images/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "React", "Responsive Design"],
    caseStudy: "portfolio-development-case-study",
  },
  {
    title: "Aquaculture System",
    year: 2025,
    command: "git clone aquaculture-system",
    description:
      "Developed an automated aquaculture monitoring system that detects critical pH levels and activates corrective mechanisms to maintain optimal water conditions.",
    image: "/images/Thesis.jpg",
    tags: ["ESP32", "HTML5", "CSS3", "JavaScript", " C++", "Arduino", "pH Sensor", "IoT", "Automation"],
    caseStudy: "aquaculture-monitoring-case-study",
  },
  {
    title: "Fuel Request System",
    year: 2025,
    command: "git clone fuel-request-system",
    description:
      "Developed a fuel request system for the Provincial Government of Misamis Oriental to enable drivers and department heads to manage and track fuel allocations efficiently.",
    image: "/images/Fuel_Request.jpg",
    tags: ["PHP", "CSS3", "JavaScript", "Blade", "Laravel", "MySQL"],
    caseStudy: "fuel-request-system-case-study",
  },
  {
    title: "RoboCar",
    year: 2024,
    command: "git clone robocar",
    description:
      "Developed a real-time remote-controlled surveillance vehicle equipped with a live camera feed and gas detection to monitor hazardous environments safely.",
    image: "/images/Robocar.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", " C++", "Arduino", "Raspberry Pi", "Gas Sensors"],
    caseStudy: "robocar-surveillance-case-study",
  },
  {
    title: "Bird Detection System",
    year: 2024,
    command: "git clone bird-detection-system",
    description:
      "Developed an automated bird detection and repelling system for farmers, integrating real-time monitoring with automatic deterrents to protect crops.",
    image: "/images/birddetection_hero.jpg",
    tags: ["ESP32", "Blynk", "Firebase", "Arduino", "IoT"],
    caseStudy: "bird-detection-system-case-study",
  },
  {
    title: "Click2Permit",
    year: 2023,
    command: "git clone click2permit",
    description:
      "Developed a request management system for the Cagayan de Oro City HRMO to streamline permit requests and enhance communication between employees and HR personnel.",
    image: "/images/project1.jpg",
    tags: ["PHP", "CSS3", "JavaScript", "MySQL"],
    caseStudy: "click2permit-case-study",
  },
];

const Projects = () => {
  const router = useRouter();



  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <h2 className="text-2xl sm:text-3xl mb-6 font-bold">Projects</h2>

      <div className="mb-6">
        <p>
          <span className="text-green-500">👤</span> user@portfolio:~${" "}
          <span className="text-white">ls -la projects/</span>
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-green-600 p-4 rounded-md space-y-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 hover:border-green-400 group relative overflow-hidden cursor-pointer"
            data-project-card
            onClick={() => router.push(`/case-studies/${project.caseStudy}`)}
          >
            {/* Hover overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">{project.command}</span>
            </p>

            <h3 className="text-xl text-green-300 font-semibold">
              {project.title} <span className="text-green-400 text-base font-normal">({project.year})</span>
            </h3>

            <p className="text-gray-300 text-sm">{project.description}</p>

            <div className="overflow-hidden rounded-md border border-dashed border-green-600">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-800 text-white text-xs px-3 py-1 rounded transition-colors duration-200 hover:bg-green-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2 items-center">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
