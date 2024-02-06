import Image from "next/image";
import { useState } from "react";
export const MenuItem = ({ name, description, image, price, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className="flex bg-[#454545] rounded-lg px-2 py-4 gap-x-2 cursor-pointer"
      onClick={() => {
        onClick();
      }}
    >
      <div className="w-[120px] h-[136px] overflow-hidden">
        {isLoading && image ? (
          <div className="w-[120px] h-[136px] bg-[#2d2d2d] flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#a29378]"></div>
          </div>
        ) : (
          ""
        )}
        {image ? (
          <Image
            style={{ objectFit: "cover" }}
            className={`rounded-md overflow-hidden h-[136px]`}
            width={120}
            height={136}
            src={image}
            alt={name}
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col text-white gap-y-2">
          <h3 className="font-bold text-[14px]"> {name}</h3>
          <p className="font-light text-[13px]">{description}</p>
        </div>
        <span className="text-white flex gap-x-1 items-center">
          <span className="text-[20px] font-sans font-bold">{price}</span>
          <span className="text-[8px]">
            هـــزار
            <br></br>
            <div className="-mt-1">تــومان</div>
          </span>
        </span>
      </div>
    </div>
  );
};
