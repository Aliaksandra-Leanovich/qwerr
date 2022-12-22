import { BlogSection } from "../components/BlogSection";
import { DropdownSection } from "../components/DropdownSection";
import { Footer } from "../components/Footer";
import { FormSection } from "../components/FormSection";
import { Header } from "../components/Header";
import { MainSection } from "../components/MainSection";
import { ServicesSection } from "../components/SevicesSection";
import { SliderSection } from "../components/SliderSection";

export const Home = () => {
  return (
    <main>
      <Header />
      <MainSection />
      <ServicesSection />
      <SliderSection />
      <DropdownSection />
      <BlogSection />
      <FormSection />
      <Footer />
    </main>
  );
};
