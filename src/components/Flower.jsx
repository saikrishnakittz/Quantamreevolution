import flowerImage1 from "../assets/flower1.svg";
import flowerImage2 from "../assets/flower2.svg";

export default function Flower() {
  return (
    <section className="relative h-[500px] bg-black flex items-center overflow-hidden">
      <div className="flex justify-center lg:justify-start items-center gap-12 pt-8">
        <div className="absolute top-[50px] right-[10%] w-[197px]">
          <img src={flowerImage1} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-[250px] right-[550px] w-[150px]">
          <img src={flowerImage2} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
