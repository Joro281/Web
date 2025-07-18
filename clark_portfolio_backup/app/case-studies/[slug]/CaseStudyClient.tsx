"use client";
import { CaseStudy } from "../../../data/caseStudies";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyClient({ study }: Props) {
  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono z-20">
      {/* Scroll-based Loading Bar */}
      <ScrollLoadingBar />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto p-6 pt-4">
        <Link
          href="/projects"
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 mb-8"
        >
          <span className="mr-2">←</span>
          <span className="text-sm font-mono">cd ../projects</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 space-y-12 bg-black relative">
        <Section id="title" label="Overview">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/overview.md</span>
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-4">
            {study.title}
          </h1>
          <div className="text-gray-300">
            <p className="mb-2">
              <span className="text-green-400">Authors:</span>{" "}
              {study.authors.join(", ")}
            </p>
            <p>
              <span className="text-green-400">Date:</span> {study.date}
            </p>
          </div>
        </Section>

        <Section id="problem-statement" label="Redesign Rationale">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/redesign-rationale.md</span>
            </p>
          </div>
          <ul className="space-y-3">
            {study.problemStatement.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="objectives" label="Customer & Audience">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/customer-audience.md</span>
            </p>
          </div>
          <ul className="space-y-3">
            {study.objectives.map((objective, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">{objective}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="methodology" label="How Might We?">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/how-might-we.md</span>
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed">{study.methodology}</p>
        </Section>

        <Section id="findings" label="Onboarding Requirements">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/onboarding-requirements.md</span>
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed">{study.findings}</p>
        </Section>

        <Section id="conclusion" label="Streamlining the Onboarding">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/streamlining-onboarding.md</span>
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed">{study.conclusion}</p>
        </Section>

        <Section id="recommendations" label="Translating Solutions to Good UX">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/solutions-to-ux.md</span>
            </p>
          </div>
          <ul className="space-y-3">
            {study.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">{rec}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="references" label="Designing for System Consistency">
          <div className="mb-4">
            <p>
              <span className="text-green-500">👤</span> user@portfolio:~${" "}
              <span className="text-white">cat {study.slug}/system-consistency.md</span>
            </p>
          </div>
          <ul className="space-y-2">
            {study.references.map((ref, i) => (
              <li key={i} className="text-gray-300 text-sm">
                {ref}
              </li>
            ))}
          </ul>
        </Section>

        <div className="pt-8 border-t border-green-600">
          <p className="text-gray-400 text-sm mb-6">
            <span className="text-green-500">👤</span> user@portfolio:~${" "}
            <span className="text-white">echo "Case study completed successfully."</span>
          </p>
        </div>
      </div>

      {/* Slide Up Footer - positioned at the end */}
      <SlideUpFooter />
    </div>
  );
}

// Section wrapper component
function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-300 border-b border-green-600 pb-2">
        {label}
      </h2>
      {children}
    </section>
  );
}




