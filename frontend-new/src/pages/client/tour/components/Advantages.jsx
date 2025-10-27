import { Users, Compass, Shield } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      icon: <Users size={48} />,
      title: "Tư vấn chuyên nghiệp",
      description: "Hỗ trợ nhiệt tình, chăm sóc chu đáo",
    },
    {
      id: 2,
      icon: <Compass size={48} />,
      title: "Trải nghiệm đa dạng",
      description: "Chọn tour phù hợp, giá tour hợp lý",
    },
    {
      id: 3,
      icon: <Shield size={48} />,
      title: "Thanh toán an toàn",
      description: "Linh hoạt, rõ ràng, bảo mật",
    },
  ];

  return (
    <section className="flex items-center justify-between gap-15 px-30 pb-25 max-w-[1440px] mx-auto">
      {advantages.map((advantage) => (
        <div
          key={advantage.id}
          className="flex flex-row items-center gap-6 flex-1"
        >
          {/* Icon */}
          <div className="relative size-19.5 flex-none">
            <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center text-[#00315C]">
              {advantage.icon}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-bold text-lg leading-[140%] text-[#00315C]">
              {advantage.title}
            </h3>
            <p className="text-base leading-[140%] text-[#707070]">
              {advantage.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
