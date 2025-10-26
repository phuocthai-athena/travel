import TopBar from "./TopBar";
import Header from "./Header";

export default function Navbar() {
  return (
    <div className="bg-[#00315C] text-white sticky top-0 z-50">
      {/* Top Bar */}
      <TopBar />
      {/* Header */}
      <Header />
    </div>
  );
}
