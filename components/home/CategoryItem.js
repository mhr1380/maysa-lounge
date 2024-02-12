import Image from "next/image";
export const CategoryItem = ({ image, name }) => {
  return (
    <div
      className="inline-block items-center bg-[#EEEDEB] rounded-xl mb-2 ml-4 w-[120px] h-[120px] overflow-hidden cursor-pointer"
      onClick={() => {
        document.getElementById(name).scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className="flex flex-col gap-y-2 p-2 justify-center items-center">
        <Image
          className="max-w-[60px] max-h-[60px]"
          width={60}
          height={60}
          src={image}
          alt="cat"
        />
        <p>{name}</p>
      </div>
    </div>
  );
};
