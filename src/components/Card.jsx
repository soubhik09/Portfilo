import React from "react";
import { IoLinkSharp } from "react-icons/io5";

function Card({ image, title, subtitle, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="m-4 block max-w-sm overflow-hidden rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <div className="relative">
        <img className="w-full rounded-lg" src={image} alt={title} />
        <div className="absolute rounded-lg top-0 left-0 bg-black/60 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
          <IoLinkSharp className="text-4xl" />
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 text-white">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-2 text-sm font-medium">{subtitle}</p>
      </div>
    </a>
  );
}

export default Card;
