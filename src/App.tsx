import { FrameBackground } from './components/FrameBackground';
import { NeuralBackdrop } from './components/NeuralBackdrop';
import { Navbar } from './components/Navbar';
import { HeroScrollytelling } from './components/HeroScrollytelling';
import { AboutSection } from './components/AboutSection';
import { TimelineSection } from './components/TimelineSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactAndFooter } from './components/ContactAndFooter';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#050508] text-zinc-100 film-grain">
      <FrameBackground />
      <NeuralBackdrop />
      <Navbar />
      <main>
        <HeroScrollytelling />
        <AboutSection />
        <TimelineSection />
        <AchievementsSection />
      </main>
      <ContactAndFooter />
    </div>
  );
}

export default App;
