import Image from "next/image";
import { useEffect } from "react";
export const SingleItemPopup = ({
  name,
  description,
  price,
  image,
  show,
  onCancel,
  onAddToCart,
}) => {
  // Function to handle showing/hiding the popup
  const handlePopupVisibility = (visible) => {
    // Get the body element
    const body = document.querySelector("body");
    // Toggle the overflow property based on the visibility of the popup
    body.style.overflow = visible ? "hidden" : "auto";
  };

  // Call the handlePopupVisibility function when the show prop changes
  useEffect(() => {
    handlePopupVisibility(show);
  }, [show]);

  return (
    <div
      className={`w-full h-screen bg-[#2d2d2d] flex flex-col fixed top-0 left-0 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out z-30`}
    >
      <div>
        <Image
          width={400}
          height={400}
          className="w-full h-[400px]"
          src={image}
        />
      </div>
      <div className="bg-[#2d2d2d] rounded-2xl -mt-4">
        <div className="flex flex-col gap-y-6 w-[90%] mx-auto bg-gradient-to-b opacity-90 from-[#454545] to-[#2d2d2d] p-4 mt-8 rounded-lg">
          <div className="w-full flex flex-col">
            <div className="flex flex-col">
              <div className="text-white text-lg font-bold">{name}</div>
              <div className="text-white">{description}</div>
              <span className="text-white flex gap-x-1 items-center self-end">
                <span className="text-[20px] font-sans font-bold">{price}</span>
                <span className="text-[8px]">
                  هـــزار
                  <br></br>
                  <div className="-mt-1">تــومان</div>
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <button
              className="flex bg-[#a29378] px-4 py-2 rounded-lg font-bold justify-center text-[15px]"
              onClick={() => {
                onAddToCart();
              }}
            >
              افزون به یادداشت سفارش
            </button>
            <button
              className="flex bg-[#a29378] px-4 py-2 rounded-lg font-bold justify-center text-[15px]"
              onClick={() => {
                onCancel();
              }}
            >
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
