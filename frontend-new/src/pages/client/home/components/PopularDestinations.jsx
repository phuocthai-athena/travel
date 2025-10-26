import SectionTitle from "@/components/common/SectionTitle";
import hoiAnImg from "@/assets/images/fv-hoi-an.png";
import phuQuocImg from "@/assets/images/fv-phu-quoc.png";
import haGiangImg from "@/assets/images/fv-ha-giang.png";
import sapaImg from "@/assets/images/fv-sapa.png";
import daNangImg from "@/assets/images/fv-da-nang.png";
import haLongImg from "@/assets/images/fv-ha-long.png";

export default function PopularDestinations() {
  const destinations = {
    row1: [
      {
        name: "Hội An",
        travelers: "+1800 lượt khách",
        image: hoiAnImg,
        size: "small",
      },
      {
        name: "Phú Quốc",
        travelers: "+1800 lượt khách",
        image: phuQuocImg,
        size: "large",
      },
      {
        name: "Hà Giang",
        travelers: "+1800 lượt khách",
        image: haGiangImg,
        size: "small",
      },
    ],
    row2: [
      {
        name: "SaPa",
        travelers: "+1800 lượt khách",
        image: sapaImg,
        size: "large",
      },
      {
        name: "Đà Nẵng",
        travelers: "+1800 lượt khách",
        image: daNangImg,
        size: "small",
      },
      {
        name: "Hạ Long",
        travelers: "+1800 lượt khách",
        image: haLongImg,
        size: "small",
      },
    ],
  };

  return (
    <section className="container mx-auto px-[120px] pb-[100px]">
      <div className="flex flex-col items-center" style={{ gap: "60px" }}>
        <SectionTitle title="Điểm đến yêu thích" align="center" />

        {/* Destinations Grid */}
        <div className="flex flex-col w-full" style={{ gap: "24px" }}>
          {/* Row 1 */}
          <div className="flex w-full" style={{ gap: "24px" }}>
            <DestinationCard
              destination={destinations.row1[0]}
              className="flex-1"
              style={{ width: "282px" }}
            />
            <DestinationCard
              destination={destinations.row1[1]}
              className="flex-none"
              style={{ width: "588px" }}
            />
            <DestinationCard
              destination={destinations.row1[2]}
              className="flex-1"
              style={{ width: "282px" }}
            />
          </div>

          {/* Row 2 */}
          <div className="flex w-full" style={{ gap: "24px" }}>
            <DestinationCard
              destination={destinations.row2[0]}
              className="flex-none"
              style={{ width: "588px" }}
            />
            <DestinationCard
              destination={destinations.row2[1]}
              className="flex-1"
              style={{ width: "282px" }}
            />
            <DestinationCard
              destination={destinations.row2[2]}
              className="flex-1"
              style={{ width: "282px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ destination, className, style }) {
  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      style={{ ...style, height: "380px", borderRadius: "8px" }}
    >
      {/* Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${destination.image})`,
        }}
      />

      {/* Info */}
      <div
        className="absolute flex flex-col"
        style={{ left: "24px", bottom: "24px", gap: "4px" }}
      >
        <h3
          className="text-white flex items-center"
          style={{
            fontFamily: "Shopee Display",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "140%",
          }}
        >
          {destination.name}
        </h3>
        <p
          className="flex items-center"
          style={{
            fontFamily: "Shopee Display",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "140%",
            color: "#FFC515",
          }}
        >
          {destination.travelers}
        </p>
      </div>
    </div>
  );
}
