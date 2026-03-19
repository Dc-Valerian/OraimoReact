import React from "react";

const CardProps = ({ text, image }) => {
  return (
    <div
      className="w-full rounded-2xl h-64 object-cover bg-no-repeat bg-cover md:bg-cover flex items-start px-5"
      style={{
        backgroundImage: `url(${image}`,
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default CardProps;
