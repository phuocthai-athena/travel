import { Separator } from "@/components/ui/separator";
import SearchFilter from "../ui/SearchFilter";
import CategoryFilter from "../ui/CategoryFilter";
import CalendarFilter from "../ui/CalendarFilter";
import PriceRangeFilter from "../ui/PriceRangeFilter";
import RatingFilter from "../ui/RatingFilter";
import { useTourFilterStore } from "@/features/tours/store/useTourFilterStore";
import { Button } from "@/components/ui/button";

export default function SidebarFilters() {
  const { filters, setFilter, setCategory, resetFilters } =
    useTourFilterStore();

  return (
    <aside className="w-[282px] flex flex-col gap-5">
      <div className="w-full flex flex-col gap-5">
        <SearchFilter
          values={filters}
          onChange={setFilter}
          onSearch={() => console.log("search clicked")}
        />

        <CategoryFilter
          categories={filters.categories}
          setCategory={(v) => setCategory(v)}
        />
      </div>

      <Separator />

      <CalendarFilter
        selected={filters.date}
        onChange={(d) => setFilter("date", d)}
      />

      <Separator />

      <PriceRangeFilter
        range={filters.priceRange}
        onChange={(r) => setFilter("priceRange", r)}
      />

      <Separator />

      <RatingFilter
        selected={filters.rating}
        onChange={(r) => setFilter("rating", r)}
      />

      <Separator />

      <Button onClick={resetFilters}>Đặt lại bộ lọc</Button>
    </aside>
  );
}
