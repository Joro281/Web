"use client";
import Image from "next/image";

const projects = [
  {
    title: "Click2Permit",
    command: "git clone click2permit",
    description:
      "Developed a request management system for the Cagayan de Oro City HRMO to streamline permit requests and enhance communication between employees and HR personnel.",
    image: "/images/project1.jpg",
    tags: ["PHP", "CSS3", "JavaScript", "MySQL"],
    figma: "https://www.figma.com/design/XTnwqmzeK4or4vO6bAAyFe/CLICK2PERMIT?node-id=0-1&t=pwI4fRWbed1h0mzc-1",
    pdf: "https://drive.google.com/file/d/abc123/view",
  },
  {
    title: "Fuel Request System",
    command: "git clone fuel-request-system",
    description:
      "Developed a fuel request system for the Provincial Government of Misamis Oriental to enable drivers and department heads to manage and track fuel allocations efficiently.",
    image: "/images/Fuel_Request.jpg",
    tags: ["PHP", "CSS3", "JavaScript", "Blade", "Laravel", "MySQL"],
    figma: "https://www.figma.com/design/SdAJN2bBluX5Xqlk5ga0XE/Fuel-Request-System?node-id=0-1&t=qcUoPEVOfuhm6CtX-1",
    pdf: "https://drive.google.com/file/d/def456/view",
  },
  {
    title: "RoboCar",
    command: "git clone robocar",
    description:
      "Developed a real-time remote-controlled surveillance vehicle equipped with a live camera feed and gas detection to monitor hazardous environments safely.",
    image: "/images/Robocar.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", " C++", "Arduino", "Raspberry Pi", "Gas Sensors"],
    figma: null,
    pdf: "https://drive.google.com/file/d/ghi789/view",
  },
  {
    title: "Bird Detection System",
    command: "git clone bird-detection-system",
    description:
      "Developed an automated bird detection and repelling system for farmers, integrating real-time monitoring with automatic deterrents to protect crops.",
    image: "/images/BirdDetection.jpg",
    tags: ["ESP32", "Blynk", "Firebase", "Arduino", "IoT"],
    figma: null,
    pdf: "https://drive.google.com/file/d/jkl012/view",
  },
  {
    title: "Aquaculture System",
    command: "git clone aquaculture-system",
    description:
      "Developed an automated aquaculture monitoring system that detects critical pH levels and activates corrective mechanisms to maintain optimal water conditions.",
    image: "/images/Thesis.jpg",
    tags: ["ESP32", "HTML5", "CSS3", "JavaScript", " C++", "Arduino", "pH Sensor", "IoT", "Automation"],
    figma: null,
    pdf: "https://drive.google.com/file/d/mno345/view",
  },
  {
    title: "Portfolio",
    command: "git clone portfolio",
    description:
      "Developed a personal portfolio website using Next.js and Tailwind CSS to showcase technical skills, academic background, and project experience.",
    image: "/images/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "React", "Responsive Design"],
    figma: "https://www.figma.com/file/pqr678/portfolio-design",
    pdf: "https://drive.google.com/file/d/stu901/view",
  },
];

const Projects = () => {
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
            className="border border-green-600 p-4 rounded-md space-y-4 transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20"
          >
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">{project.command}</span>
            </p>

            <h3 className="text-xl text-green-300 font-semibold">
              {project.title}
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
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/figma.png"
                    alt="Figma"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-transform duration-300 hover:scale-110"
                  />
                </a>
              )}
              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/pdf.png"
                    alt="PDF"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-transform duration-300 hover:scale-110"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
