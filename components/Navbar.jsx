"use client";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { nav } from "@/utils/data.js";
import { Link } from "react-scroll";
import Menu from "@/public/menu.svg";
import { useState } from "react";
import { MotionUp } from "./Motion";
import { usePathname } from "next/navigation";

export default function navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);
  const active = usePathname();
  return (
    <MotionUp y={0}>
      <nav>
        <div className="z-50">
          <Link offset={-140} smooth={true} duration={500} to="home">
            <Image
              className="logo"
              src={Logo}
              alt="Deborah Tech"
              width={130}
              height={130}
            />
          </Link>
        </div>

        <ul className="ul-nav">
          {nav.map((item, id) => (
            <li key={id} className={active == "/" + item.to ? "text-main" : ""}>
              <Link offset={-130} smooth={true} duration={500} to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={handleMenu}
          className="z-50 font-bold  text-surface md:hidden text-xl"
        >
          {!menu ? <Image src={Menu} alt="Menu" width={30} height={30} /> : "X"}
        </div>

        <ul
          onClick={handleMenu}
          className={` ${!menu ? "navMobileOff" : `left-0`} navMobile`}
        >
          {nav.map((item, id) => (
            <li key={id} className="hover:text-textGray text-lg">
              <Link offset={-130} smooth={true} duration={500} to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </MotionUp>
  );
}
