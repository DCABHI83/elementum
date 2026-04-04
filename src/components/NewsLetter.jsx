import React from "react";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
const NewsLetter = () => {
  return (
    <div className="main flex flex-col justify-center items-center gap-4">
      <div className="arrow">
        <img className="w-[4vw]" src={arrow1} alt="arrow" />
        <img className="w-[4vw]" src={arrow2} alt="arrow2" />
      </div>
      <div className="text flex flex-col justify-center items-center">
        <h1 className="text-4xl">Subscribe to</h1>
        <h1 className="text-4xl">our newsletter</h1>
        <div>
          <p className="text-[15px]">
            To make your stay special and even more memorable
          </p>
        </div>
      </div>
      <div>
        <button className="bg-black text-white p-2 rounded-xl">
          SubsCribe Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
