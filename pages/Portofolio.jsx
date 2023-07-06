import { useState } from "react";
import Image from "next/image";
import { portofolio } from "@/utils/data";
import Card from "@/components/portofolioCard";
import { MotionDown, MotionOpacity } from "../components/Motion";

export default function Portofolio() {
  const [slide, setSlide] = useState(portofolio[0]);
  const [slide2, setSlide2] = useState(portofolio[1]);
  const handleClick = (index) => {
    const slider = portofolio[index];
    setSlide(slider);
  };
  const handleClick2 = (index) => {
    const slider = portofolio[index + 1];
    setSlide2(slider);
  };
  return (
    <MotionOpacity>
      <MotionDown y={30}>
        <section name="portofolio" className="grid gap-5 w-full">
          <h3>Portofolio</h3>
          <div className="flex w-full gap-4 justify-between items-center transition-all duration-500 ease-in-out">
            <Card
              src={slide.image}
              title={slide.title}
              tech={slide.tech}
              tech2={slide.tech2}
            />
            <div className="hidden xl:flex">
              <Card
                src={slide2.image}
                title={slide2.title}
                tech={slide2.tech}
                tech2={slide2.tech2}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:gap-x-28 xl:gap-6 gap-5  mt-5">
            {portofolio.map((item, id) => (
              <div
                key={id}
                onClick={() => {
                  handleClick(id);
                  handleClick2(id == 5 ? 0 : id);
                }}
              >
                <Image
                  className="w-[118px] md:w-[200px] lg:w-[290px] xl:w-[360px] object-cover h-full md:h-40 lg:h-80 rounded overflow-hidden"
                  src={item.image}
                  width={200}
                  height={250}
                  alt="portofolio"
                />
              </div>
            ))}
          </div>
        </section>
      </MotionDown>
    </MotionOpacity>
  );
}
