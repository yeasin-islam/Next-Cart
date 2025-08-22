import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "../components/Hero";
import ProductHighlights from "../components/ProductHighlights";
import Testimonials from "@/components/Testimonials";
import FeaturedSections from "@/components/FeaturedSections";
import LatestBlog from "@/components/LatestBlog";
import CategoryBrowse from "@/components/CategoryBrowse";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <FeaturedSections />
        <ProductHighlights />
        <CategoryBrowse />
        <WhyChooseUs />
        <Testimonials />
        <LatestBlog />
        <FaqSection />
    </div>
  );
}
