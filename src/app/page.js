import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "../components/Hero";
import ProductHighlights from "../components/ProductHighlights";
import Testimonials from "@/components/Testimonials";
import FeaturedSections from "@/components/FeaturedSections";
import LatestBlog from "@/components/LatestBlog";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <FeaturedSections />
        <ProductHighlights />
        <WhyChooseUs />
        <Testimonials />
        <LatestBlog />
    </div>
  );
}
