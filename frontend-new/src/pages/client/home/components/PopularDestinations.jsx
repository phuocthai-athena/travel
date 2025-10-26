import SectionTitle from "@/components/common/SectionTitle";

export default function PopularDestinations() {
  const destinations = {
    row1: [
      {
        name: "Hội An",
        travelers: "+1800 lượt khách",
        image: "/dest-hoian.jpg",
        size: "small",
      },
      {
        name: "Phú Quốc",
        travelers: "+1800 lượt khách",
        image: "/dest-phuquoc.jpg",
        size: "large",
      },
      {
        name: "Hà Giang",
        travelers: "+1800 lượt khách",
        image: "/dest-hagiang.jpg",
        size: "small",
      },
    ],
    row2: [
      {
        name: "SaPa",
        travelers: "+1800 lượt khách",
        image: "/dest-sapa.jpg",
        size: "large",
      },
      {
        name: "Đà Nẵng",
        travelers: "+1800 lượt khách",
        image: "/dest-danang.jpg",
        size: "small",
      },
      {
        name: "Hạ Long",
        travelers: "+1800 lượt khách",
        image: "/dest-halong.jpg",
        size: "small",
      },
    ],
  };

  return (
    <section className="container mx-auto px-[120px] pb-[100px]">
      <div className="flex flex-col items-center gap-[60px]">
        <SectionTitle title="Điểm đến yêu thích" align="center" />

        {/* Destinations Grid */}
        <div className="space-y-6 w-full">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-6">
            <DestinationCard
              destination={destinations.row1[0]}
              className="col-span-3"
            />
            <DestinationCard
              destination={destinations.row1[1]}
              className="col-span-6"
            />
            <DestinationCard
              destination={destinations.row1[2]}
              className="col-span-3"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-6">
            <DestinationCard
              destination={destinations.row2[0]}
              className="col-span-6"
            />
            <DestinationCard
              destination={destinations.row2[1]}
              className="col-span-3"
            />
            <DestinationCard
              destination={destinations.row2[2]}
              className="col-span-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ destination, className }) {
  return (
    <div
      className={`relative h-[380px] rounded-lg overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${destination.image})`,
        }}
      />

      {/* Info */}
      <div className="absolute bottom-6 left-6 space-y-1">
        <h3 className="text-lg font-bold text-white">{destination.name}</h3>
        <p className="text-base text-yellow-400">{destination.travelers}</p>
      </div>
    </div>
  );
}
