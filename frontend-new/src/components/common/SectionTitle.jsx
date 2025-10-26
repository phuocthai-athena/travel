export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignmentClasses = {
    left: "items-start",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={`flex flex-col gap-3 ${alignmentClasses[align]} ${className}`}
    >
      {subtitle && <p className="text-lg text-[#497E91]">{subtitle}</p>}
      <h2 className="text-[32px] leading-[42px] font-bold text-[#00315C] uppercase">
        {title}
      </h2>
      <div className="w-20 h-[3px] bg-gray-200" />
    </div>
  );
}
