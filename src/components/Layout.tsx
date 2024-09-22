import Header from "./Header";
import Banner from "./Banner";
import MainContent from "./MainContent";
import FloatingButtons from "./FloatingButtons";
import CareSection from "./WhyCareHospitals";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Banner />
        <MainContent />
        <CareSection />
      </main>
      <FloatingButtons />
    </div>
  );
}
