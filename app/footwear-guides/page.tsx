import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FootwearHero from "./components/FootwearHero";
import FootwearCategories from "./components/FootwearCategories";
import WhyFootwearMatters from "./components/WhyFootwearMatters";
import EvaluationFramework from "./components/EvaluationFramework";
import FiveStepTest from "./components/FiveStepTest";
import FootwearFeatured from "./components/FootwearFeatured";
import FootwearCollections from "./components/FootwearCollections";

export const metadata: Metadata = {
  title: "Footwear Guide | How Dr. Saylee Evaluates Shoes — The Sole Doctor",
  description:
    "Learn how Dr. Saylee Tulpule, board-certified podiatrist, evaluates footwear. Discover her 5-point shoe framework, the 5-step in-store test, and podiatrist-approved guides for every lifestyle.",
  keywords:
    "podiatrist shoe evaluation, best shoes for flat feet, best shoes for plantar fasciitis, how to choose supportive shoes, footwear guide podiatrist, Dr. Saylee Tulpule",
};

export default function FootwearGuidesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FootwearHero />
        <FootwearCategories />
        <WhyFootwearMatters />
        <EvaluationFramework />
        <FiveStepTest />
        <FootwearFeatured />
        <FootwearCollections />
      </main>
      <Footer />
    </>
  );
}
