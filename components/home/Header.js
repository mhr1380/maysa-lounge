import Image from "next/image";
import cartIcon from "../../assets/icons/cart-new.png";
const Header = ({ logo, title, description, cart, onCart }) => {
  const checkIsEnglish = (input, isTitle) => {
    let regex = /^[a-zA-Z]+$/;
    if (regex.test(input)) {
      return "text-lg font-[vogueb]";
    } else {
      if (isTitle) {
        return "text-[16px]";
      } else {
        return "";
      }
    }
  };
  return (
    <div className="flex max-w-max items-center gap-x-2 bg-[#e0e0e0] rounded-full my-1.5">
      <span className="bg-white rounded-full w-[45px] h-[45px] flex justify-center items-center">
        {logo ? (
          <Image
            className="rounded-full h-full"
            width={50}
            height={50}
            src={logo}
            alt="logo"
          />
        ) : (
          ""
        )}
      </span>
      {cart.length > 0 ? (
        <div
          className="fixed left-4 top-4"
          onClick={() => {
            onCart();
          }}
        >
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-700 text-[9px] w-5 h-5 rounded-full flex justify-center items-center text-white font-bold">
              {cart.length}
            </span>
            <Image width={24} height={24} src={cartIcon} alt="cart" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col items-center ml-7">
        <h3 className={`font-bold ${checkIsEnglish(title)}`}>{title}</h3>
        <p
          className={`text-[12px] font-normal -mt-[4px] mb-0.5 ${checkIsEnglish(
            description
          )}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default Header;
