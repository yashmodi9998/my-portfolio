import AboutSection from "@/components/AboutMe";
import ContactSection from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LottieAnimation from "@/components/LottieAnimation";
import PortfolioSection from "@/components/Portfolio";


export default function Home() {
  return (
    
  <main className="bg-background">

      {/* Hero + Lottie Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12">
        <div className="flex-1 flex flex-col justify-center max-w-lg">
          <HeroSection />
        </div>

        <div className="flex-1 flex justify-center max-w-lg">
          <LottieAnimation />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
