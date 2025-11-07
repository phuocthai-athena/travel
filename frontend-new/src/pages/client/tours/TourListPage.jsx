import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import SidebarFilters from "@/components/client/tours-list/containers/SidebarFilters";
import TourListContainer from "@/components/client/tours-list/containers/TourListContainer";

import bannerImage from "@/assets/images/tours-banner.png";

export default function TourListPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <BreadcrumbBanner
        title="Tour"
        backgroundImage={bannerImage}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Danh sách tour", href: "/tours/list" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-[120px] py-[90px]">
        <div className="flex gap-[24px]">
          <SidebarFilters />
          <TourListContainer />
        </div>
      </div>
    </div>
  );
}
