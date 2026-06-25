import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "./components/BlogHero";
import BlogGrid from "./components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Podiatrist-Written Foot Health & Footwear Guides — The Sole Doctor",
  description:
    "Browse podiatrist-written articles on foot health conditions, footwear guides, shoe reviews, and expert advice from Dr. Saylee Tulpule, DPM.",
  keywords: "foot health blog, podiatrist articles, best shoes for nurses, plantar fasciitis, bunions, flat feet, shoe reviews",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
