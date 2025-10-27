import { Calendar, User, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/common/SectionTitle";
import bvMaPiLengImg from "@/assets/images/bv-ma-pi-leng.png";
import bvMonAnSaiGonImg from "@/assets/images/bv-mon-an-sai-gon.png";
import bvTop11MonAnImg from "@/assets/images/bv-top-11-mon-an-con-dao.png";
import bvGuiThanhXuanImg from "@/assets/images/bv-gui-thanh-xuan.png";

export default function FeaturedBlogs() {
  const blogs = [
    {
      id: 1,
      image: bvMaPiLengImg,
      title: 'Trọn bộ " bí kíp" chinh phục Đèo Mã Pí Lèng cực chất',
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
    {
      id: 2,
      image: bvMonAnSaiGonImg,
      title: "Khó cưỡng với các món ăn vặt tại Sài Gòn",
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
    {
      id: 3,
      image: bvTop11MonAnImg,
      title: "Top 11 món ăn ngon còn đảo bạn nhất định phải thử",
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
    {
      id: 4,
      image: bvGuiThanhXuanImg,
      title: "Gửi thanh xuân, gửi những chuyến đi dài...",
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
  ];

  return (
    <section className="flex flex-col gap-15 px-30 pb-25 max-w-[1440px] mx-auto">
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{ height: "54px" }}
      >
        <SectionTitle title="Bài viết nổi bật" align="left" />

        <Button
          className="bg-[#F27052] hover:bg-[#F27052]/90 text-white flex items-center justify-center"
          style={{
            width: "161px",
            height: "49px",
            padding: "12px 24px",
            gap: "8px",
            borderRadius: "4px",
          }}
        >
          <span
            style={{
              fontFamily: "Shopee Display",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "140%",
              color: "#FFFFFF",
            }}
          >
            Xem tất cả
          </span>
          <ArrowUpRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Blog Grid */}
      <div className="flex flex-col" style={{ gap: "24px" }}>
        {/* Row 1 */}
        <div
          className="flex justify-between"
          style={{ height: "222px", gap: "24px" }}
        >
          {blogs.slice(0, 2).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Row 2 */}
        <div
          className="flex justify-between"
          style={{ height: "222px", gap: "24px" }}
        >
          {blogs.slice(2, 4).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog }) {
  return (
    <div className="flex flex-1" style={{ height: "222px" }}>
      {/* Image */}
      <div
        className="shrink-0 overflow-hidden"
        style={{
          width: "50%",
          height: "222px",
          borderRadius: "8px 0px 0px 8px",
        }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div
        className="flex flex-col bg-white flex-1"
        style={{
          height: "222px",
          padding: "24px",
          gap: "24px",
          borderRadius: "0px 8px 8px 0px",
        }}
      >
        {/* Nội dung */}
        <div className="flex flex-col flex-1" style={{ gap: "12px" }}>
          <h3
            className="line-clamp-2"
            style={{
              fontFamily: "Shopee Display",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "140%",
              color: "#00315C",
            }}
          >
            {blog.title}
          </h3>
          <p
            className="line-clamp-3"
            style={{
              fontFamily: "Shopee Display",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "140%",
              color: "#707070",
            }}
          >
            {blog.excerpt}
          </p>
        </div>

        {/* Icon */}
        <div
          className="flex justify-between items-center"
          style={{ height: "22px" }}
        >
          {/* Thời gian */}
          <div className="flex items-center" style={{ gap: "8px" }}>
            <Calendar
              style={{ width: "18px", height: "18px", color: "#707070" }}
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
              {blog.date}
            </span>
          </div>

          {/* Tác giả */}
          <div className="flex items-center" style={{ gap: "8px" }}>
            <User style={{ width: "18px", height: "18px", color: "#707070" }} />
            <span
              style={{
                fontFamily: "Shopee Display",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "140%",
                color: "#707070",
              }}
            >
              {blog.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
