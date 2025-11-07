import megaphoneIcon from "@/assets/images/megaphone.png";
import mapPinIcon from "@/assets/images/map-pin.png";
import messageCircleIcon from "@/assets/images/message-circle-more.png";
import SectionTitle from "@/components/common/SectionTitle";

export default function HowItWorks() {
  const steps = [
    {
      icon: megaphoneIcon,
      title: "Hãy cho chúng tôi biết bạn muốn làm gì?",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
    {
      icon: mapPinIcon,
      title: "Chia sẻ địa điểm du lịch của bạn",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
    {
      icon: messageCircleIcon,
      title: "Chia sẻ sở thích du lịch của bạn",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-25 max-w-[1440px] mx-auto pt-50">
      <SectionTitle
        title="Tìm chuyến đi cho bạn"
        subtitle="3 BƯỚC ĐỂ CÓ MỘT CHUYẾN ĐI HOÀN HẢO"
        align="center"
      />

      <div className="grid grid-cols-3 gap-6 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 text-center"
          >
            <div className="w-20 h-20">
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#00315C]">{step.title}</h3>
              <p className="text-base text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
