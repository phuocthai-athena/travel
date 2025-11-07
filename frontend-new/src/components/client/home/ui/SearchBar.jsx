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
      <div className="flex w-[261px] shadow-[4px_6px_19px_0px_#0000001A]">
        <button
          onClick={() => setActiveTab("tour")}
          className={`flex items-center gap-2 px-6 py-3 transition-colors cursor-pointer rounded-tl-md ${
            activeTab === "tour"
              ? "bg-[#00315C] text-white"
              : "bg-white text-[#707070]"
          }`}
        >
          <Send className="size-4.5" />
          <span className="text-base">Tour</span>
        </button>

        <button
          onClick={() => setActiveTab("hotel")}
          className={`flex items-center gap-2 px-6 py-3 transition-colors cursor-pointer rounded-tr-md ${
            activeTab === "hotel"
              ? "bg-[#00315C] text-white"
              : "bg-white text-[#707070]"
          }`}
        >
          <Building2 className="size-4.5" />
          <span className="text-base">Khách sạn</span>
        </button>
      </div>

      {/* Form */}
      <SearchForm
        type={activeTab}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="rounded-tl-none"
      />
    </div>
  );
}
