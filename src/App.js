import "./App.css";

import BannerSectionContainer from "./components/BannerSection/BannerSectionContainer";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import AchieversSection from "./components/AchieversSection/AchieversSection";
import HallOfFame from "./components/HallOfFame/HallOfFame";
import FactsSection from "./components/FactsSection/FactsSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      {/* <BannerSectionContainer /> */}
      <CoursesSection />
      <HallOfFame />
      <AchieversSection />
      <FactsSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default App;
