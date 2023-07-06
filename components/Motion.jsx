import { motion as m } from "framer-motion";
import React from "react";


export const MotionLeft = ({ children, x }) => {
  return (
    <m.section
      initial={{ x: -1000 }}
      animate={{ x: x }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 2 }}
    >
      {children}
    </m.section>
  )
};

export const MotionRight = ({ children, x }) => {
  return (
    <m.section
      initial={{ x: 1000 }}
      animate={{ x: x }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 2 }}
    >
      {children}
    </m.section>
  )
};

export const MotionUp = ({ children, y }) => {
  return (
    <m.section
      initial={{ y: -1000 }}
      animate={{ y: y }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 2 }}
    >
      {children}
    </m.section>
  )
};

export const MotionDown = ({ children, y }) => {
  return (
    <m.section
      initial={{ y: 1000 }}
      animate={{ y: y }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 2 }}
    >
      {children}
    </m.section>
  )
};

export const MotionOpacity = ({ children }) => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 2 }}
    >
      {children}
    </m.section>
  )
};
