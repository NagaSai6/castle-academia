import React from "react";
import BannerSectionContainer from "../../components/BannerSection/BannerSectionContainer";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import HallOfFame from "../../components/HallOfFame/HallOfFame";
import AchieversSection from "../../components/AchieversSection/AchieversSection";
import FactsSection from "../../components/FactsSection/FactsSection";
import FormSection from "../../components/FormSection/FormSection";
import Footer from "../../components/Footer/Footer";
import Advertisement from "../../components/Advertisements/Advertisement";

export default function HomePage() {
  return (
    <>
      <BannerSectionContainer />
      <CoursesSection />
      <HallOfFame />
      <AchieversSection />
      <FactsSection />
      <FormSection />
       <Advertisement />
      <Footer />
    </>
  );
}
