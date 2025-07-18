"use client";
import { usePathname } from "next/navigation";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCaseStudyPage = pathname.includes('/case-studies/');

  if (isCaseStudyPage) {
    // Case study pages: no navbar/footer
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  // Regular pages: with navbar/footer
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
