import Image from "next/image";
import cart from "../../assets/icons/cart.png";
const Header = ({ logo, title, description }) => {
  return (
    <div className="flex max-w-max items-center gap-x-2 bg-[rgba(0,0,0,.12157)] rounded-full my-1.5">
      <span className="bg-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
        {logo ? <Image width={42} height={42} src={logo} alt="logo" /> : ""}
      </span>
      <div className="absolute left-4 top-4">
        <div className="relative">
          <Image width={24} height={24} src={cart} alt="cart" />
        </div>
      </div>
      <div className="flex flex-col items-center ml-7">
        <h3 className="font-bold text-lg font-[vogueb]">{title}</h3>
        <p className="text-[12px] font-normal -mt-[4px] mb-0.5">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Header;
