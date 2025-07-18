import { notFound } from "next/navigation";
import { caseStudies, CaseStudy } from "../../../data/caseStudies";
import CaseStudyClient from "./CaseStudyClient";

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

interface Props {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-black">
      <CaseStudyClient study={study} />
    </div>
  );
}

