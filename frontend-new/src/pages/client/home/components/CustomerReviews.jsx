import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import estherHowardImg from "@/assets/images/esther-howard.png";
import jacobJonesImg from "@/assets/images/jacob-jones.png";
import janeCooperImg from "@/assets/images/jane-cooper.png";
import jennyWilsonImg from "@/assets/images/jenny-wilson.png";
import wadeWarrenImg from "@/assets/images/wade-warren.png";

export default function CustomerReviews() {
  // All reviews data
  const allReviews = [
    {
      id: 1,
      avatar: estherHowardImg,
      name: "Esther Howard",
      rating: 5,
      quote: "Lorem Ipsum is simply dummy printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      avatar: jacobJonesImg,
      name: "Jacob Jones",
      rating: 5,
      quote: "Lorem Ipsum is simply dummy printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      avatar: janeCooperImg,
      name: "Jane Cooper",
      rating: 5,
      quote: "Lorem Ipsum is simply dummy printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      avatar: jennyWilsonImg,
      name: "Jenny Wilson",
      rating: 5,
      quote: "Lorem Ipsum is simply dummy printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      avatar: wadeWarrenImg,
      name: "Wade Warren",
      rating: 5,
      quote: "Lorem Ipsum is simply dummy printing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current featured review and 4 small reviews
  const getFeaturedReview = () => allReviews[currentIndex];
  const getSmallReviews = () => {
    const reviews = [];
    for (let i = 1; i <= 4; i++) {
      reviews.push(allReviews[(currentIndex + i) % allReviews.length]);
    }
    return reviews;
  };

  // Auto slide every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % allReviews.length);
      setIsTransitioning(false);
    }, 300);
  };

  const featuredReview = getFeaturedReview();
  const reviews = getSmallReviews();

  return (
    <section className="container mx-auto px-[120px] pb-[100px]">
      <div className="flex flex-col items-center" style={{ gap: "60px" }}>
        <SectionTitle title="Khách hàng đánh giá" align="center" />

        {/* Đánh giá Container */}
        <div
          className="flex flex-col items-center"
          style={{ width: "1200px", gap: "60px" }}
        >
          {/* Featured Review Card */}
          <div
            className="relative"
            style={{
              width: "997px",
              height: "480px",
              transition: "opacity 0.3s ease-in-out",
              opacity: isTransitioning ? 0.5 : 1,
            }}
          >
            {/* Avatar */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: "0px",
                top: "35px",
                width: "385px",
                height: "410px",
                borderRadius: "8px 8px 8px 0px",
                boxShadow: "3px 21px 30px -6px rgba(255, 96, 46, 0.2)",
              }}
            >
              <img
                src={featuredReview.avatar}
                alt="Customer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Background Card */}
            <div
              className="absolute bg-white"
              style={{
                left: "307px",
                right: "0px",
                top: "0px",
                height: "480px",
                border: "1px solid #F27052",
                borderRadius: "0px 12px 12px 0px",
                boxShadow: "3px 21px 30px -6px rgba(255, 96, 46, 0.2)",
              }}
            >
              {/* Text Container */}
              <div
                className="absolute"
                style={{
                  left: "103px",
                  right: "102px",
                  top: "50px",
                  height: "380px",
                }}
              >
                {/* Quote Mark */}
                <div
                  className="absolute text-center"
                  style={{
                    left: "0px",
                    right: "419px",
                    top: "0px",
                    fontFamily: "Big Shoulders Display",
                    fontWeight: 400,
                    fontSize: "200px",
                    lineHeight: "239px",
                    color: "#497E91",
                    textTransform: "capitalize",
                  }}
                >
                  "
                </div>

                {/* Title */}
                <h3
                  className="absolute"
                  style={{
                    left: "100.5px",
                    right: "0.5px",
                    top: "59px",
                    fontFamily: "Shopee Display",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "130%",
                    color: "#00315C",
                  }}
                >
                  {featuredReview.quote}
                </h3>

                {/* Description */}
                <p
                  className="absolute"
                  style={{
                    left: "-0.5px",
                    right: "0.5px",
                    top: "183px",
                    fontFamily: "Shopee Display",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#888888",
                  }}
                >
                  {featuredReview.text}
                </p>

                {/* Author */}
                <p
                  className="absolute"
                  style={{
                    left: "347.5px",
                    right: "0.5px",
                    top: "307px",
                    fontFamily: "Shopee Display",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "140%",
                    color: "#00315C",
                  }}
                >
                  _{featuredReview.name}_
                </p>
              </div>
            </div>
          </div>

          {/* Tài khoản Container */}
          <div
            className="flex flex-col"
            style={{ width: "1200px", gap: "20px" }}
          >
            {/* Reviews Grid */}
            <div
              className="flex"
              style={{
                width: "1200px",
                gap: "24px",
                transition: "opacity 0.3s ease-in-out",
                opacity: isTransitioning ? 0.5 : 1,
              }}
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {/* Pagination / Slider Indicators */}
            <div
              className="flex justify-center items-center"
              style={{ width: "1200px", height: "30px", gap: "0px" }}
            >
              {/* Indicators */}
              {allReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ width: "24px", height: "25px" }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "2px",
                      background:
                        index === currentIndex ? "#F27052" : "#888888",
                      transition: "background 0.3s ease-in-out",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col" style={{ width: "282px", gap: "12px" }}>
      {/* Account */}
      <div
        className="flex items-center"
        style={{ width: "282px", height: "80px", gap: "24px" }}
      >
        {/* Avatar */}
        <div
          className="overflow-hidden"
          style={{
            width: "80px",
            height: "80px",
            border: "1px solid #E7E7E7",
            borderRadius: "50%",
          }}
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col flex-1" style={{ gap: "12px" }}>
          <h4
            style={{
              fontFamily: "Shopee Display",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "140%",
              color: "#00315C",
            }}
          >
            {review.name}
          </h4>

          {/* Rating */}
          <div className="flex justify-end items-center" style={{ gap: "8px" }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${
                  i < review.rating
                    ? "fill-[#FFC515] text-[#FFC515]"
                    : "text-gray-300"
                }`}
                style={{ width: "18px", height: "18px" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Comment */}
      <p
        style={{
          width: "282px",
          fontFamily: "Shopee Display",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "140%",
          color: "#707070",
        }}
      >
        {review.comment}
      </p>
    </div>
  );
}
