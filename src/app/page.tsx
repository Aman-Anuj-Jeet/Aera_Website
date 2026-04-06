import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShowcaseSection from '@/components/ShowcaseSection';
import AgentSection from '@/components/AgentSection';
import APIKeySection from '@/components/APIKeySection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <AgentSection />
      <APIKeySection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
