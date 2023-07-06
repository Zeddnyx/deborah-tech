import { MotionOpacity } from "../components/Motion";

export default function About() {
  return (
    <MotionOpacity>
    <section name="about">
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
        </div>
      </div>
    </section>
    </MotionOpacity>
  );
}
