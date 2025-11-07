import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbBanner({
  title,
  backgroundImage,
  breadcrumbs = [],
}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section
      className={cn(
        "relative w-full h-62.5 bg-cover bg-center flex flex-col items-center justify-center gap-2 backdrop-blur-sm",
        "bg-linear-to-b from-[rgba(24, 90, 157, 0.7)] to-[rgba(67, 206, 162, 0.7)]",
        "bg-linear-to-t from-[rgba(0, 0, 0, 0.5)] to-[rgba(0, 0, 0, 0.5)]"
      )}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Title */}
      <h1 className="text-[32px] font-bold text-white uppercase leading-[130%] text-center">
        {title}
      </h1>

      {/* Breadcrumb */}
      {breadcrumbs.length > 0 && (
        <Breadcrumb>
          <BreadcrumbList className="text-base font-normal flex flex-wrap justify-center gap-0!">
            {breadcrumbs.map((item, index) => {
              const isActive = location.pathname === item.href;
              const isLastItem = index === breadcrumbs.length - 1;
              const isBeforeLastItem = index === breadcrumbs.length - 2;

              return (
                <div key={index} className="flex items-center">
                  <BreadcrumbItem>
                    {isActive ? (
                      <span className="text-white cursor-default">
                        {item.label}
                      </span>
                    ) : (
                      <BreadcrumbLink
                        onClick={() => navigate(item.href)}
                        className="cursor-pointer text-[#B0B0B0] hover:text-white transition-colors"
                      >
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLastItem && (
                    <BreadcrumbSeparator>
                      <ChevronRight
                        className={cn(
                          "mx-1 size-4.5",
                          isBeforeLastItem ? "text-white" : "text-[#B0B0B0]"
                        )}
                      />
                    </BreadcrumbSeparator>
                  )}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </section>
  );
}
