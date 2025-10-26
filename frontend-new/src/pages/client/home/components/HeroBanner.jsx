import SearchBar from "./SearchBar";
import bannerImage from "@/assets/images/banner.png";

export default function HeroBanner() {
  return (
    <section className="relative h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bannerImage})`,
        }}
      />

      {/* Content */}
      <div className="container relative mx-auto px-[120px] pt-[100px]">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Title */}
          <div className="flex flex-col items-center gap-6">
            <h2
              className="text-[40px] leading-[52px] font-normal text-[#F27052]"
              style={{ fontFamily: "var(--font-motherland-signature)" }}
            >
              Cuộc hành trình
            </h2>
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-[64px] leading-[83px] font-bold text-[#00315C] uppercase">
                đang chờ đợi chúng ta!
              </h1>
              <p className="text-lg font-bold text-[#497E91]">
                TRẢI NGHIỆM TRỌN VẸN - GIÁ CẢ PHẢI CHĂNG
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar - Positioned at bottom */}
      <SearchBar />
    </section>
  );
}
