import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dangKyImg from "@/assets/images/dang-ky-bo-cong-thuong.png";
import thongBaoImg from "@/assets/images/thong-bao-bo-cong-thuong.png";
import visaImg from "@/assets/images/visa.png";
import paypalImg from "@/assets/images/paypal.png";
import mastercardImg from "@/assets/images/mastercard.png";
import ggPayImg from "@/assets/images/gg-pay.png";

export default function Footer() {
  const policies = [
    "Điều khoản và điều kiện",
    "Quy định về thanh toán",
    "Quy định về xác nhận thông tin",
    "Chính sách về hủy & hoàn trả tiền",
    "Các câu hỏi thường gặp",
  ];

  return (
    <footer className="bg-white w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto px-[120px]">
        <div
          className="flex justify-between items-start"
          style={{
            padding: "30px 0",
            gap: "101px",
          }}
        >
          {/* Về chúng tôi */}
          <div
            className="flex flex-col"
            style={{ width: "384px", gap: "30px" }}
          >
            {/* Text */}
            <div className="flex flex-col" style={{ gap: "24px" }}>
              <h3
                style={{
                  fontFamily: "Shopee Display",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "140%",
                  color: "#00315C",
                }}
              >
                Về Chúng Tôi
              </h3>
              <p
                style={{
                  fontFamily: "Shopee Display",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "140%",
                  textAlign: "justify",
                  color: "#707070",
                }}
              >
                Không hổ danh Thổ địa du lịch, V-Travel.com sẽ giúp bạn không bỏ
                lỡ bất cứ điều tuyệt vời nào trong chuyến du lịch của mình.
                Chúng tôi lựa chọn cho bạn khách sạn phù hợp, tour đặc sắc,
                thông tin du lịch chi tiết kèm mức giá hấp dẫn.
              </p>
            </div>

            {/* Logo */}
            <div className="flex" style={{ gap: "24px", height: "53px" }}>
              <img
                src={dangKyImg}
                alt="Đã đăng ký Bộ Công Thương"
                style={{ width: "173.13px", height: "53px" }}
              />
              <img
                src={thongBaoImg}
                alt="Đã thông báo Bộ Công Thương"
                style={{ width: "140px", height: "53px" }}
              />
            </div>
          </div>

          {/* Chính sách */}
          <div
            className="flex flex-col"
            style={{ width: "234px", gap: "30px" }}
          >
            <h3
              style={{
                fontFamily: "Shopee Display",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "140%",
                color: "#00315C",
              }}
            >
              Chính sách & Quy định
            </h3>

            {/* Text */}
            <div className="flex flex-col" style={{ gap: "12px" }}>
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    fontFamily: "Shopee Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#707070",
                  }}
                  className="hover:text-[#F27052] transition-colors"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>

          {/* Liên hệ */}
          <div
            className="flex flex-col"
            style={{ width: "350px", gap: "30px" }}
          >
            <h3
              style={{
                fontFamily: "Shopee Display",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "140%",
                color: "#00315C",
              }}
            >
              Liên hệ với chúng tôi
            </h3>

            {/* Thông tin */}
            <div className="flex flex-col" style={{ gap: "20px" }}>
              {/* Địa chỉ */}
              <div className="flex items-center" style={{ gap: "12px" }}>
                <MapPin
                  style={{ width: "20px", height: "20px", color: "#707070" }}
                />
                <span
                  style={{
                    fontFamily: "Shopee Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#707070",
                  }}
                >
                  32 Tây Mỗ, Nam Từ Liêm, Hà Nội.
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center" style={{ gap: "12px" }}>
                <Mail
                  style={{ width: "20px", height: "20px", color: "#707070" }}
                />
                <span
                  style={{
                    fontFamily: "Shopee Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#707070",
                  }}
                >
                  Information@Vtravel.gmail.com
                </span>
              </div>

              {/* Hotline */}
              <div className="flex items-center" style={{ gap: "12px" }}>
                <Phone
                  style={{ width: "20px", height: "20px", color: "#707070" }}
                />
                <span
                  style={{
                    fontFamily: "Shopee Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#707070",
                  }}
                >
                  1800 10 11 21
                </span>
              </div>

              {/* Nhập email */}
              <div className="flex" style={{ height: "46px" }}>
                <Input
                  placeholder="Nhập email của bạn..."
                  style={{
                    width: "234px",
                    height: "45px",
                    padding: "12px 0px 12px 20px",
                    border: "1px solid #E7E7E7",
                    borderRadius: "4px 0px 0px 4px",
                    fontFamily: "Shopee Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#707070",
                  }}
                  className="border-r-0"
                />
                <Button
                  className="bg-[#F27052] hover:bg-[#F27052]/90 text-white flex items-center justify-center"
                  style={{
                    width: "116px",
                    height: "46px",
                    padding: "12px 24px",
                    borderRadius: "0px 4px 4px 0px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Shopee Display",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#FFFFFF",
                    }}
                  >
                    Xác nhận
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line 55 */}
      <div
        className="w-full"
        style={{
          height: "0px",
          border: "2px solid hsla(0, 0%, 91%, 1)",
        }}
      />

      {/* Bottom */}
      <div className="container mx-auto px-[120px]">
        <div
          className="flex justify-between items-center"
          style={{
            padding: "12px 0",
          }}
        >
          <p
            style={{
              fontFamily: "Shopee Display",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "140%",
              color: "#00315C",
            }}
          >
            Copyright @ 2025 V-Travel. All Rights Reserved.
          </p>

          {/* Payment */}
          <div className="flex items-center" style={{ gap: "20px" }}>
            <img
              src={visaImg}
              alt="Visa"
              style={{ width: "55.57px", height: "18px" }}
            />
            <img
              src={paypalImg}
              alt="PayPal"
              style={{ width: "90.72px", height: "24px" }}
            />
            <img
              src={mastercardImg}
              alt="Mastercard"
              style={{ width: "69.57px", height: "24px" }}
            />
            <img
              src={ggPayImg}
              alt="Google Pay"
              style={{ width: "58.55px", height: "24px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
