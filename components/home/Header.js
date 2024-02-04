import Image from "next/image";
import maysa from "../../assets/images/maysa-lounge-small.png";
const Header = ({ logo, title, description }) => {
  return (
    <div className="flex max-w-max items-center gap-x-2 bg-[rgba(0,0,0,.12157)] rounded-full my-1.5">
      <span className="bg-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
        {logo ? <Image width={42} height={42} src={logo} alt="logo" /> : ""}
      </span>
      <div className="flex flex-col items-center ml-7 ">
        <h3 className="font-bold text-lg font-[vogueb]">{title}</h3>
        <p className="text-[12px] font-normal -mt-[4px] mb-0.5">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Header;
