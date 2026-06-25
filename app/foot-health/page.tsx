import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FootHealthHero from "./components/FootHealthHero";
import BrowseByCondition from "./components/BrowseByCondition";
import BrowseBySymptom from "./components/BrowseBySymptom";
import FeaturedArticles from "./components/FeaturedArticles";
import DailyCareTips from "./components/DailyCareTips";
import DrSayleeTip from "./components/DrSayleeTip";
import CompactAbout from "./components/CompactAbout";
import MediaStrip from "./components/MediaStrip";
import FootHealthNewsletter from "./components/FootHealthNewsletter";

export const metadata: Metadata = {
  title: "Foot Health Resource Center | The Sole Doctor — Dr. Saylee Tulpule, DPM",
  description:
    "Evidence-based foot health education from Dr. Saylee Tulpule, board-certified podiatrist. Browse conditions, symptoms, daily care tips, and expert guidance for plantar fasciitis, bunions, flat feet, heel pain, and more.",
  keywords:
    "foot health, plantar fasciitis, bunions, flat feet, heel pain, podiatrist advice, foot care tips, foot conditions, Dr. Saylee Tulpule",
};

export default function FootHealthPage() {
  return (
    <>
      <Navbar />
      <main>
        <FootHealthHero />
        <BrowseByCondition />
        <BrowseBySymptom />
        <FeaturedArticles />
        <DailyCareTips />
        <DrSayleeTip />
        <CompactAbout />
        <MediaStrip />
        <FootHealthNewsletter />
      </main>
      <Footer />
    </>
  );
}
