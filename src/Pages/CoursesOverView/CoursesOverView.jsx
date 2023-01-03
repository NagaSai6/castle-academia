import React from "react";
import CRTModuleSection from "../../components/CoursersOverView/CRTModuleSection/CRTModuleSection";
import AbroadModuleSection from "../../components/CoursersOverView/AbroadModuleSection/AbroadModuleSection";
import StartUpModuleSection from "../../components/CoursersOverView/StartUpModuleSection/StartUpModuleSection";

export default function CoursesOverView() {
  return (
    <div>
      <CRTModuleSection />
      <StartUpModuleSection />
      <AbroadModuleSection />
    </div>
  );
}
