import Image from "next/image";
import { service } from "@/utils/data";
import { MotionUp, MotionOpacity } from "../components/Motion";

export default function Services() {
  return (
    <MotionOpacity>
      <MotionUp y={100}>
        <section className="grid gap-4 sm:px-20 lg:px-10" name="service">
          <h3>Services</h3>

          <div className="service-card">
            {service.map((item, id) => (
              <div
                key={id}
                className="bg-mainGray flex justify-center  rounded-md p-5 w-full"
              >
                <div className="gap-4 flex justify-center flex-col items-center text-center">
                  <Image
                    className="w-20 h-20 p-[24px] rounded-full bg-surface"
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    quality={40}
                  />
                  <h4>{item.title}</h4>
                  <p className="text-[13px]">{item.desc}</p>
                  <button className="btn-gradient w-40 px-3 p-2">
                    <a href="https://api.whatsapp.com/send/?phone=6282144234649&text=Hi&type=phone_number&app_absent=0">
                      Contact Us
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-mainGray mt-10 py-5 gap-4 rounded flex flex-col items-center justify-center text-center w-full ">
            <p>Get in Touch With Us</p>
            <h1 className="text-[23px] lg:text-[35px] xl:text-[40px] w-full px-10 md:px-2">
              Let's Talk About Your Software Development Needs
            </h1>
            <button className="bg-surface px-3 text-[16px]">
              <a href="https://api.whatsapp.com/send/?phone=6282144234649&text=Hi&type=phone_number&app_absent=0">
                Contact Us
              </a>
            </button>
          </div>
        </section>
      </MotionUp>
    </MotionOpacity>
  );
}
