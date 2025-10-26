import { Calendar, User, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/common/SectionTitle";

export default function FeaturedBlogs() {
  const blogs = [
    {
      id: 1,
      image: "/blog-1.jpg",
      title: 'Trọn bộ " bí kíp" chinh phục Đèo Mã Pí Lèng cực chất',
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
    {
      id: 2,
      image: "/blog-2.jpg",
      title: 'Trọn bộ " bí kíp" chinh phục Đèo Mã Pí Lèng cực chất',
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
    {
      id: 3,
      image: "/blog-3.jpg",
      title: 'Trọn bộ " bí kíp" chinh phục Đèo Mã Pí Lèng cực chất',
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
    {
      id: 4,
      image: "/blog-4.jpg",
      title: 'Trọn bộ " bí kíp" chinh phục Đèo Mã Pí Lèng cực chất',
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      date: "02.03.2023",
      author: "by Admin",
    },
  ];

  return (
    <section className="container mx-auto px-[120px] pb-[100px]">
      <div className="flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SectionTitle title="Bài viết nổi bật" align="left" />

          <Button className="bg-[#F27052] hover:bg-[#F27052]/90 text-white px-6 py-3 gap-1">
            <span className="font-bold text-lg">Xem tất cả</span>
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            {blogs.slice(0, 2).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            {blogs.slice(2, 4).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog }) {
  return (
    <div className="flex bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-[294px] h-[222px] shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#00315C] line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-base text-gray-500 line-clamp-3">{blog.excerpt}</p>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-[18px] h-[18px]" />
            <span className="text-base">{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-[18px] h-[18px]" />
            <span className="text-base">{blog.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
