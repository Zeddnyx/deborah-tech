"use client";
import React, { useState, useEffect } from "react";

export default function carousal({
  children,
  autoSlide = false,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-10 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>

      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      {/* <div className="flex justify-center gap-2 items-center"> */}
      {/*   {children.map((_, id) => ( */}
      {/*     <div */}
      {/*       key={id} */}
      {/*       className={`transition-all w-3 h-3 bg-main rounded-full ${ */}
      {/*         curr === id ? "p-3" : "bg-opacity-50" */}
      {/*       }`} */}
      {/*     ></div> */}
      {/*   ))} */}
      {/* </div> */}
    </div>
  );
}
