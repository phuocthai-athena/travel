import SearchSection from "./SearchSection";

export default function Banner({ onSearch }) {
  return (
    <section className="relative h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/src/assets/images/banner.png')`,
        }}
      />

      {/* Search Section - Positioned at bottom */}
      <SearchSection onSearch={onSearch} />
    </section>
  );
}
