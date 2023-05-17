import Image from "next/image";
import MainImage from "@/public/Homepage.svg";
import { aos } from '@/utils/aos'

export default function Homepage() {
  aos()
  return (
    <section name="home" className="homepage">
      <div data-aos="fade-left" className='homepage-text'>
        <h1 className='text-[20px] md:text-[48px]'>
          Boutique standard website and mobile app, tailored to your requests.
        </h1>
        <p>
          Our Agency Software House Delivers one of a kind application only for
          your needs.
        </p>
        <button className='btn-gradient w-full py-3 md:w-28'>
          <a href="https://api.whatsapp.com/send/?phone=6282144234649&text=Hi&type=phone_number&app_absent=0">Contact Us</a>
        </button>
      </div>
      <div data-aos="fade-right">
        <Image
          className="homepage-image"
          width={490}
          height={480}
          src={MainImage}
          alt="Main Image"
        />
      </div>
    </section>
  );
}
