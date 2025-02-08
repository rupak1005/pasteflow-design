
import { Hero } from "@/components/Hero";
import { CursorGlow } from "@/components/CursorGlow";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <AnimatedBackground />
      <CursorGlow />
      <Hero />
    </main>
  );
};

export default Index;
