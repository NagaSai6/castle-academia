import React from 'react';
import BannerSectionContainer from "../BannerSection/BannerSectionContainer";
import CoursesSection from '../CoursesSection/CoursesSection';
import HallOfFame from '../HallOfFame/HallOfFame';
import AchieversSection from '../AchieversSection/AchieversSection';
import FactsSection from '../FactsSection/FactsSection';
import FormSection from '../FormSection/FormSection';


export default function HomePage() {
  return (
    <>
    <CoursesSection />
    <HallOfFame />
    <AchieversSection />
    <FactsSection />
    <FormSection />
    </>
  )
}
