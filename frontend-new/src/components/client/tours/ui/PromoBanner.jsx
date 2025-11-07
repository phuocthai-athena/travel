import tourBanner from "@/assets/images/tour-banner.png";

export default function PromoBanner() {
  return (
    <section className="relative flex justify-center mb-[100px]">
      {/* Container tổng, giới hạn 1440px */}
      <div
        className="relative h-[400px] w-[1200px] max-w-[1440px] rounded-[8px] overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${tourBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gradient nhẹ */}
        <div className="absolute inset-0 bg-linear-to-br from-[rgba(73,126,145,0.1)] to-[rgba(242,112,82,0.1)]" />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-[30px] text-center w-[388px] h-[202px]">
          {/* Slogan */}
          <p className="font-motherland-signature text-[32px] leading-[130%] text-[#497E91] m-0">
            Rộn ràng hè sang
          </p>

          {/* Nút chính */}
          <div className="flex items-center justify-center px-[30px] py-[12px] bg-[#F27052] rounded-[40px]">
            <span className="font-bold text-[32px] leading-[130%] uppercase text-white text-center">
              Hơn 1000 tour
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-bold text-[24px] leading-[140%] text-[#497E91] text-center m-0">
            Mới lạ - Chất lượng từ Bắc vào Nam
          </p>
        </div>
      </div>
    </section>
  );
}
