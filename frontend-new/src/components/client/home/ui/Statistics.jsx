import { Check } from "lucide-react";
import { useState } from "react";
import cooperateWithUsImage from "@/assets/images/cooperate-with-us.png";
import SectionTitle from "@/components/common/SectionTitle";

export default function Statistics() {
  const [activeSlide, setActiveSlide] = useState(0);

  const benefits = [
    "Đăng ký hoàn toàn miễn phí trong 15 phút",
    "Tiếp cận hàng triệu khách hàng tiềm năng",
    "Dễ dàng quản lý mọi nơi",
  ];

  const statsSlides = [
    [
      { number: "20K+", label: "Nhà cung cấp dịch vụ du lịch, nhà hàng" },
      { number: "15K+", label: "Khách hàng tiếp cận" },
    ],
    [
      { number: "5K+", label: "Đối tác truyền thông" },
      { number: "3K+", label: "Booking mỗi tháng" },
    ],
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-25 max-w-[1440px] mx-auto">
      {/* Title */}
      <SectionTitle
        title="HỢP TÁC CÙNG CHÚNG TÔI"
        subtitle="CHẤT LƯỢNG VÀ UY TÍN LÀ ƯU TIÊN HÀNG ĐẦU"
        align="center"
      />

      {/* Content */}
      <div className="flex items-center gap-[189px] w-full">
        {/* Left Side - Benefits */}
        <div className="flex-1 space-y-10">
          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="size-7.5 flex items-center justify-center">
                  <Check className="size-4.5 text-[#00315C]" strokeWidth={3} />
                </div>
                <span className="text-lg text-[#00315C]">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Statistics Slider */}
          <div className="space-y-3">
            {/* Stats Container with Scroll */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {statsSlides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full flex items-center gap-3"
                  >
                    {slide.map((stat, statIndex) => (
                      <>
                        <div
                          key={statIndex}
                          className="flex-1 flex flex-col items-center gap-3"
                        >
                          <h3 className="text-[64px] leading-[83px] font-bold text-[#F27052] uppercase">
                            {stat.number}
                          </h3>
                          <p className="text-xl leading-[140%] text-center text-[#888888]">
                            {stat.label}
                          </p>
                        </div>
                        {statIndex < slide.length - 1 && (
                          <div className="h-20 w-0.5 bg-gray-200" />
                        )}
                      </>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              {statsSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`size-0.5 rounded-full transition-colors ${
                    index === activeSlide ? "bg-[#F27052]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-[437px] h-[451px]">
          <img
            src={cooperateWithUsImage}
            alt="Cooperate with us"
            className="absolute w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
