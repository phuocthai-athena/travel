import { useState } from "react";
import { Send, Building2 } from "lucide-react";
import SearchForm from "@/components/common/SearchForm";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("tour");
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    startDate: "",
    endDate: "",
    hotelDestination: "",
    roomsGuests: "",
    checkinDate: "",
    checkoutDate: "",
  });

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (data) => {
    console.log("Search submitted:", data);
  };

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-[-92px] z-20 flex flex-col"
      style={{ width: "1200px" }}
    >
      {/* Tabs */}
      <div
        className="flex w-[261px]"
        style={{
          filter: "drop-shadow(4px 6px 19px rgba(0, 0, 0, 0.1))",
        }}
      >
        <button
          onClick={() => setActiveTab("tour")}
          className={`flex items-center gap-2 px-6 py-3 transition-colors cursor-pointer ${
            activeTab === "tour"
              ? "bg-[#00315C] text-white"
              : "bg-white text-[#707070]"
          }`}
          style={{
            borderRadius: "8px 0 0 0",
            width: "111px",
            height: "46px",
          }}
        >
          <Send className="w-[18px] h-[18px]" />
          <span className="text-[16px]">Tour</span>
        </button>

        <button
          onClick={() => setActiveTab("hotel")}
          className={`flex items-center gap-2 px-6 py-3 transition-colors cursor-pointer ${
            activeTab === "hotel"
              ? "bg-[#00315C] text-white"
              : "bg-white text-[#707070]"
          }`}
          style={{
            borderRadius: "0 8px 0 0",
            width: "150px",
            height: "46px",
          }}
        >
          <Building2 className="w-[22px] h-[22px]" />
          <span className="text-[16px]">Khách sạn</span>
        </button>
      </div>

      {/* Form */}
      <SearchForm
        type={activeTab}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
