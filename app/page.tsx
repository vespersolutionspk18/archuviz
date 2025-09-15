
import Hero from "./homecomponents/Hero";
import AboutUs from "./homecomponents/AboutUs";
import AboutUsAfter from "./homecomponents/AboutUsAfter";
import Header from "@/components/Header";
import OurDuty from "./homecomponents/OurDuty";
import OurDutyAfter from "./homecomponents/OurDutyAfter";
import OurDutySecond from "./homecomponents/OurDutySecond";
import IndustriesWeServe from "./homecomponents/IndustriesWeServe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <AboutUs />
    <AboutUsAfter />
    <OurDuty />
    <OurDutyAfter />
    <OurDutySecond />
    <IndustriesWeServe />
    <Footer />
    </>
  );
}
