import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeroSection from "./components/AboutHeroSection";
import MyStorySection from "./components/MyStorySection";
import CareerJourneySection from "./components/CareerJourneySection";
import CredentialsSection from "./components/CredentialsSection";
import FeaturedInSection from "./components/FeaturedInSection";
import WorkTogetherSection from "./components/WorkTogetherSection";

export const metadata: Metadata = {
  title: "About Dr. Saylee Tulpule | The Sole Doctor",
  description:
    "Meet Dr. Saylee Tulpule — board-certified podiatrist, footwear expert, and founder of The Sole Doctor USA. Bridging foot health and fashion.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <MyStorySection />
        <CareerJourneySection />
        <CredentialsSection />
        <FeaturedInSection />
        <WorkTogetherSection />
      </main>
      <Footer />
    </>
  );
}
