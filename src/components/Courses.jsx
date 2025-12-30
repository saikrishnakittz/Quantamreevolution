import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import FeatureLeft from "../assets/feature-left-icon.png";
import FeatureRight from "../assets/feature-icon.png";

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: "Quantum Healing Foundation Course",
      description:
        "Heal from within & become a source of transformation for others.",
      metaLeft: "6 Days",
      metaRight: "Available online",
      price: "$500",
    },
    {
      title: "Quantum Advanced Therapy Course",
      description:
        "Master deep healing methods using quantum biology, morphic fields & energy resonance.",
      metaLeft: "12 Days",
      metaRight: "Practitioner Level",
      price: "$850",
    },
    {
      title: "Quantum Mapping with François",
      description:
        "Reprogram your life for health, wealth & harmony by mapping goals from the heart.",
      metaLeft: "1-on-1 Session",
      metaRight: "By Appointment",
      price: "$500",
    },
    {
      title: "Quantum Energy Flow",
      description:
        "Align your energetic body with universal frequencies for sustained vitality.",
      metaLeft: "3 Days",
      metaRight: "Workshop",
      price: "$300",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (courses.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (courses.length - 2)) % (courses.length - 2)
    );
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 md:mb-16">
          <h2 className="text-white font-poppins font-normal text-2xl sm:text-3xl md:text-4xl leading-[1.4] tracking-[1px] max-w-2xl">
            Our Signature Courses Built for Transformation
          </h2>
          <button className="whitespace-nowrap bg-white/5 hover:bg-white/10 text-[#09AF9B] px-6 py-2.5 rounded-lg text-sm font-bold transition-all border border-white/5">
            View All
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

          <div className="overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {courses.slice(0, 3).map((course, index) => (
                <div
                  key={index}
                  className="bg-[#111111] rounded-[2rem] p-6 md:p-10 flex flex-col border border-white/5 hover:border-white/10 transition-all group/card"
                >
                  <div className="flex-grow">
                    <h3 className="font-roboto font-medium text-white text-xl md:text-2xl leading-[1.4] tracking-[0.006em]">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed tracking-[0.006em]">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-8 md:mt-12">
                    <div className="flex justify-between items-center mb-6 md:mb-8">
                      <span className="text-gray-500 text-sm md:text-base">
                        {course.metaLeft}
                      </span>
                      <span className="bg-white/5 text-gray-400 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/5">
                        {course.metaRight}
                      </span>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <div className="font-roboto text-white text-2xl md:text-3xl font-medium">
                        {course.price}
                      </div>

                      <button className="w-full bg-[#09AF9B] hover:bg-[#00ACAF] text-white py-3.5 md:py-4 px-6 md:px-8 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] group/btn">
                        <span className="font-bold text-base md:text-lg">
                          View details
                        </span>
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-white/60 transition-colors">
                          <ArrowRight size={18} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
