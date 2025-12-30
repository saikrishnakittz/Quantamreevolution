import { useState } from "react";
import FeatureLeft from "../assets/feature-left-icon.png";
import FeatureRight from "../assets/feature-icon.png";
import Star from "../assets/star.png";
import role1 from "../assets/role1.png";
import role2 from "../assets/role2.png";
import role3 from "../assets/role3.png";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Padmini",
      location: "Gorakhpur",
      content:
        "I suffered from ALS. After one quantum session, my pain reduced and I've been sleeping better. I feel calm.",
      rating: 5,
      avatar: role1,
    },
    {
      name: "Jayesh",
      location: "Allahabad",
      content:
        "After one healing with my father, he slept peacefully for 7 hours for the first time in years.",
      rating: 5,
      avatar: role2,
    },
    {
      name: "Anor",
      location: "Chennai",
      content: "Bala's session felt like a deep activation on a soul level.",
      rating: 5,
      avatar: role3,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-[250px] text-white bg-black  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-poppins font-normal text-[32px] leading-[150%] tracking-[1px]">
            Real People. Real Transformations.
          </h2>
          <button className="w-[89px] h-[50px] opacity-100 gap-4 rounded-[8px] pt-[10px] pr-4 pb-[10px] pl-4">
            <p className="font-roboto font-normal text-[16px] leading-[30px] tracking-[0px] bg-white/5 hover:bg-white/10 text-[#09AF9B] px-6 py-2.5 rounded-lg text-sm font-bold transition-all border border-white/5">
              View All
            </p>
          </button>
        </div>

        <div className="relative group">
          <button
            onClick={prevSlide}
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#00C2CB] hover:text-[#00C2CB] transition-all z-20 hidden xl:flex"
          >
            <img src={FeatureLeft} alt="" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#00C2CB] hover:text-[#00C2CB] transition-all z-20 hidden xl:flex"
          >
            <img src={FeatureRight} alt="" />
          </button>

          <div className="blur-52 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] rounded-[2rem] p-8 md:p-10 flex flex-col border border-white/5 hover:border-white/10 transition-all group/card h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/5 shadow-xl">
                    <img
                      src={t.avatar}
                      className="w-full h-full object-cover"
                      alt={t.name}
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-roboto font-semibold text-[24px] leading-[100%] tracking-[0.006em] align-middle">
                      {t.name}
                    </h4>
                    <p className="font-roboto font-normal mt-2 text-[12px] leading-[100%] tracking-[0.006em] align-middle">
                      {t.location}
                    </p>
                  </div>
                  <div className="flex text-[#FFD700]">
                    {[...Array(t.rating)].map((_, i) => (
                      <img key={i} src={Star} alt="" />
                    ))}
                  </div>
                </div>

                <p className="text-white font-roboto font-light text-[14px] leading-[24px] tracking-[0.006em] align-middle">
                  {t.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
