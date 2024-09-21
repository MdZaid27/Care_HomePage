import Header from "./Header";
import Banner from "./Banner";
import MainContent from "./MainContent";
import FloatingButtons from "./FloatingButtons";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Banner />
        <MainContent />
      </main>
      <FloatingButtons />
    </div>
  );
}
