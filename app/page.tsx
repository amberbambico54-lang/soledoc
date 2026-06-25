import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import AboutDoctor from "./components/AboutDoctor";
import Conditions from "./components/Conditions";
import ShoeGuides from "./components/ShoeGuides";
import Videos from "./components/Videos";
import Partnerships from "./components/Partnerships";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <AboutDoctor />
        <Conditions />
        <ShoeGuides />
        <Videos />
        <Partnerships />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
