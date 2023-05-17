"use client"
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const aos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
};
