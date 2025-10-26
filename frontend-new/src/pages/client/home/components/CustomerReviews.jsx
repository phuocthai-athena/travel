import { Star, ChevronLeft } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      avatar: "/avatar-1.jpg",
      name: "Nguyen Phuong",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      avatar: "/avatar-2.jpg",
      name: "Nguyen Phuong",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      avatar: "/avatar-3.jpg",
      name: "Nguyen Phuong",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      avatar: "/avatar-4.jpg",
      name: "Nguyen Phuong",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const featuredReview = {
    avatar: "/featured-avatar.jpg",
    quote: "Lorem Ipsum is simply dummy printing",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "_Esther Howard_",
  };

  return (
    <section className="container mx-auto px-[120px] pb-[100px]">
      <div className="flex flex-col items-center gap-[60px]">
        <SectionTitle title="Khách hàng đánh giá" align="center" />

        {/* Featured Review Card */}
        <div className="relative w-[997px] h-[480px]">
          {/* Avatar */}
          <div className="absolute left-0 top-[35px] w-[385px] h-[410px] rounded-lg rounded-br-none overflow-hidden shadow-xl">
            <img
              src={featuredReview.avatar}
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Card */}
          <div className="absolute left-[307px] top-0 right-0 h-full bg-white border border-[#F27052] rounded-r-xl shadow-xl p-[50px]">
            <div className="space-y-[60px]">
              {/* Quote Mark */}
              <div
                className="text-[200px] leading-[239px] text-[#497E91]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "
              </div>

              {/* Review Text */}
              <div className="space-y-6 -mt-20">
                <h3 className="text-[32px] leading-[42px] font-bold text-[#00315C]">
                  {featuredReview.quote}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {featuredReview.text}
                </p>
                <p className="text-lg font-bold text-[#00315C] text-right">
                  {featuredReview.author}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Grid */}
        <div className="w-full space-y-5">
          <div className="grid grid-cols-4 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-0">
            <button className="w-[30px] h-[30px] flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-[#F27052]" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center">
              <div className="w-6 h-px bg-gray-400" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center">
              <div className="w-6 h-px bg-gray-400" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center">
              <div className="w-6 h-px bg-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="space-y-3">
      {/* User Info */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full border border-gray-200 overflow-hidden">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-3">
          <h4 className="text-lg font-bold text-[#00315C]">{review.name}</h4>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-[18px] h-[18px] ${
                  i < review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-base text-gray-500">{review.comment}</p>
    </div>
  );
}
