import { team } from "@/utils/data";
import Card from "@/components/cardTeam";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MotionUp } from "../components/Motion";

export default function Team() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1350 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1354, min: 834 },
      items: 3,
    },
    mobileBig: {
      breakpoint: { max: 833, min: 655 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 654, min: 0 },
      items: 1,
    },
  };
  return (
    <MotionUp y={30}>
      <section className="grid gap-3">
        <h3>Meet Our Talented Team</h3>
        <p className="text-center">
          Our team of experts is dedicated to delivering top-notch software that
          drive your success.
        </p>

        <Carousel responsive={responsive} swipeable={true} infinite={true}>
          {team.map((item, id) => (
            <Card
              id={id}
              image={item.image}
              role={item.role}
              name={item.name}
              desc={item.desc}
              logo={item.logo}
              link={item.link}
            />
          ))}
        </Carousel>

        <h4 className="text-center font-semibold bg-gradient-to-r from-main to-pressed text-transparent bg-clip-text ">
          +120 other experienced in-house freelancer
        </h4>
      </section>
    </MotionUp>
  );
}
