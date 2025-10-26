import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const policies = [
    "Điều khoản và điều kiện",
    "Quy định về thanh toán",
    "Quy định về xác nhận thông tin",
    "Chính sách về hủy & hoàn trả tiền",
    "Các câu hỏi thường gặp",
  ];

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-[120px] py-[30px]">
        <div className="flex justify-between gap-[101px]">
          {/* About Us */}
          <div className="space-y-[30px] w-[384px]">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#00315C]">Về Chúng Tôi</h3>
              <p className="text-base text-gray-500 text-justify leading-relaxed">
                Không hổ danh Thổ địa du lịch, V-Travel.com sẽ giúp bạn không bỏ
                lỡ bất cứ điều tuyệt vời nào trong chuyến du lịch của mình.
                Chúng tôi lựa chọn cho bạn khách sạn phù hợp, tour đặc sắc,
                thông tin du lịch chi tiết kèm mức giá hấp dẫn.
              </p>
            </div>

            {/* Certification Logos */}
            <div className="flex items-start gap-6">
              <div className="w-[173px] h-[53px] bg-gray-100" />
              <div className="w-[140px] h-[53px] bg-gray-100" />
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-[30px] w-[234px]">
            <h3 className="text-lg font-bold text-[#00315C]">
              Chính sách & Quy định
            </h3>
            <ul className="space-y-3">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-[#F27052] transition-colors"
                  >
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-[30px] w-[350px]">
            <h3 className="text-lg font-bold text-[#00315C]">
              Liên hệ với chúng tôi
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-base text-gray-500">
                  32 Tây Mỗ, Nam Từ Liêm, Hà Nội.
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-base text-gray-500">
                  Information@Vtravel.gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-base text-gray-500">1800 10 11 21</span>
              </div>

              {/* Email Subscribe */}
              <div className="flex items-stretch">
                <Input
                  placeholder="Nhập email của bạn..."
                  className="rounded-r-none border-gray-200 h-[45px] flex-1"
                />
                <Button className="rounded-l-none bg-[#F27052] hover:bg-[#F27052]/90 text-white px-6 h-[46px]">
                  <span className="font-bold text-base">Gửi ngay</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-gray-200" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-[120px] py-3">
        <div className="flex items-center justify-between">
          <p className="text-base text-[#00315C]">
            Copyright @ 2023 Vtravel. All Rights Reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-5">
            <div className="w-[55.57px] h-[18px] bg-gray-100" />
            <div className="w-[90.72px] h-6 bg-gray-100" />
            <div className="w-[69.57px] h-6 bg-gray-100" />
            <div className="w-[58.55px] h-6 bg-gray-100" />
          </div>
        </div>
      </div>
    </footer>
  );
}
