import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { ThreeDMarqueeDemoSecond } from "./components/ThreeDMarquee";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ThreeDMarqueeDemoSecond />
      <Extensions />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
