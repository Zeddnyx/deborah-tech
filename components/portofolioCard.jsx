import Image from "next/image";

export default function portofolioCard({ src, title, tech, tech2 }) {
  return (
    <div
      data-aos="fade-top"
      className="group relative cursor-pointer items-center justify-center mx-auto overflow-hidden w-full sm:w-[400px] md:w-[650px] lg:w-[800px] xl:w-[565px] rounded-lg self-center"
    >
      <div>
        <Image
          className="portofolio-image"
          src={src}
          width={780}
          height={400}
          alt="portofolio"
        />
      </div>
      <div className="absolute inset-0 group-hover:bg-black/60 rounded-lg"></div>
      <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 transition-all duration-700 group-hover:translate-y-20 rounded-lg">
        <div className="flex items-center justify-center w-full w-full">
          <div className="flex flex-col items-center gap-3">
            <h3>{title}</h3>
            <div className="flex gap-5">
              <button className="btn-hover-blur-portofolio">{tech}</button>
              <button className="btn-hover-blur-portofolio">{tech2}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
