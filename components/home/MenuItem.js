import Image from "next/image";
export const MenuItem = ({ name, description, image, price }) => {
  return (
    <div className="flex bg-[#454545] rounded-lg px-2 py-4 gap-x-2">
      <div className="w-[120px] h-[136px] overflow-hidden">
        {image ? (
          <Image
            style={{ objectFit: "cover" }}
            className="rounded-md overflow-hidden h-[136px]"
            width={120}
            height={136}
            src={image}
            alt={name}
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
