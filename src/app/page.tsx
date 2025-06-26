import AboutSection from "@/components/AboutMe";
import ContactSection from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LottieSection from "@/components/LottieAnimation";
import LottieAnimation from "@/components/LottieAnimation";
import PortfolioSection from "@/components/Portfolio";


export default function Home() {
  return (
    
  <main className="bg-background">

      {/* Hero + Lottie Section */}
     <section className="min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex-1 flex justify-center max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-lg order-2 md:order-1">
          <HeroSection />
        </div>
        <div className="flex-1 flex justify-center max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-lg order-1 md:order-2">
          <LottieSection />
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
