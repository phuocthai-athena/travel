import SearchForm from "@/components/common/SearchForm";
import { useState } from "react";

export default function SearchSection({ onSearch }) {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-[-46px] z-20 flex flex-col"
      style={{ width: "1200px" }}
    >
      <SearchForm
        formData={formData}
        onChange={handleChange}
        onSubmit={onSearch}
      />
    </div>
  );
}
