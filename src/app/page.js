import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "../components/Hero";
import ProductHighlights from "../components/ProductHighlights";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <ProductHighlights />
        <WhyChooseUs />
        <Testimonials />
    </div>
  );
}
