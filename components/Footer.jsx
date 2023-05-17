"use client";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import Linkedin from "@/public/linkedin.svg";
import { aos } from "@/utils/aos";

export default function Footer() {
  aos();
  return (
    <>
      <footer data-aos="fade-bottom">
        <div className="col-span-3 lg:col-span-2 grid gap-3">
          <Image src={Logo} width={200} height={200} alt="Deborah Tech" />
          <div className="text-[#d4d4d4] text-[14px]">
            Our Agency Software House Delivers one of kind applications only for
            your needs.
          </div>
          <ul className="text-[#fff]">
            <li>Jember, Indonesia</li>
            <a href="mailto:callmetatia@gmail.com">
              <li>callmetatia@gmail.com</li>
            </a>
            <li className="underline">
              <a href="https://api.whatsapp.com/send/?phone=6282144234649&text=Hi&type=phone_number&app_absent=0">
                Tel: +6282144234649
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>SERVICE</h6>
          <ul className="li-footer">
            <li>Web Development</li>
            <li>Mobile development</li>
            <li>Web3 or AI Development</li>
          </ul>
        </div>
        <div>
          <h6>PORTOFOLIO</h6>
          <ul className="li-footer">
            <li>Web Development</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div>
          <h6>ABOUT US</h6>
          <ul>
            <li className="li-footer">Our Team</li>
          </ul>
        </div>
        <div className="text-start lg:text-end col-span-3 md:col-span-2 gap-4 flex items-start text-start lg:items-end lg:flex-col w-full justify-between">
          <div>
            <h6>INQUIRIES</h6>
            <ul className="lg:items-end flex flex-col">
              <li className="li-footer">
                For requests for quote or for general inquiries, please call
              </li>
              <li className="underline">
                <a href="https://api.whatsapp.com/send/?phone=6282144234649&text=Hi&type=phone_number&app_absent=0">
                  A QUOTE: +6282144234649
                </a>{" "}
              </li>
            </ul>
          </div>
          <a href="https://linkedin.com/company/deborah">
            <Image src={Linkedin} width={30} height={30} alt="linkedin" />
          </a>
        </div>
      </footer>
      <div className="text-center flex w-full bg-mainGray w-full justify-center py-2">
        <p>Deborah Tech 2023. All right reseved</p>
      </div>
    </>
  );
}
