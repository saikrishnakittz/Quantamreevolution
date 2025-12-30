import starImage1 from "../assets/star1.svg";
import starImage2 from "../assets/star2.svg";

export default function Stars() {
  return (
    <section className="relative h-[400px] bg-black flex items-center pt-24 overflow-hidden">
      <div className="flex justify-center lg:justify-start items-center gap-12 pt-8">
        <div className="absolute top-0 left-[10%] overflow-hidden w-[197px] h-[218px] text-[#FFD700]">
          <img src={starImage1} alt="" />
        </div>
        <div className="absolute top-[250px] left-[550px] overflow-hidden w-[150px] h-[150px] text-[#FFD700]">
          <img src={starImage2} alt="" />
        </div>
      </div>
    </section>
  );
}
