"use client";
import { useRouter } from "next/navigation";
import LoadingScreen from "./components/loadingscreen";

export default function LoadingPage() {
  const router = useRouter();

  const handleComplete = () => {
    router.replace("/home");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <LoadingScreen onComplete={handleComplete} />
    </div>
  );
}
