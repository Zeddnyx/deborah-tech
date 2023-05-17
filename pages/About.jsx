import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { aos } from "@/utils/aos";

export default function About() {
  aos();
  return (
    <section data-aos="fade-top" name="about">
      <h3>About Us</h3>
      <div className="flex flex-col lg:flex-row gap-5 items-center px-10 md:px-20">
        <div>
          <p>
            Our team consists of highly skilled and experienced developers and
            designers from various parts of the world. We specialize in software
            development and design, and we provide flexible and scalable
            solutions tailored to meet the specific needs of our clients. We are
            dedicated to delivering top-notch work that meets the highest
            standards of quality within the agreed timeline and budget. Whether
            you need a website, a mobile app, we are here to help you bring your
            ideas to life.
          </p>
          <br />
          <p>
            Our company specializes in crafting bespoke mobile and web
            applications, developing cutting-edge{" "}
            <span className="font-bold">crypto tokens</span>, building
            state-of-the-art <span className="font-bold">web3 platforms</span>,
            and leveraging the latest advancements in{" "}
            <span className="font-bold">artificial intelligence</span> to create
            unparalleled digital experiences. Services Web app Development Web3
            and AI Development Mobile App Development We build user-friendly and
            visually appealing websites that help drive business growth.
            Transform your business with our Web3 solutions, designed for the
            new decentralized world. We create mobile apps that engage customers
            and enhance user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
