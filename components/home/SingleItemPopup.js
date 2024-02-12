import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlinePostAdd } from "react-icons/md";
export const SingleItemPopup = ({
  name,
  description,
  price,
  image,
  show,
  onCancel,
  onAddToCart,
}) => {
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading((last) => !last);
  }, [show]);
  return (
    <div
      className={`w-full h-screen lg:mx-auto bg-[#efecec] lg:bg-opacity-70 flex flex-col fixed top-0 left-0 lg:items-center lg:justify-center ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out z-30`}
    >
      <div
        className="absolute top-2 left-2 bg-[#f3f3f328] rounded-full"
        onClick={() => {
          setIsLoading(true);
          onCancel();
        }}
      >
        <HiMiniXMark className="text-[#E0CCBE] text-4xl" />
      </div>
      {show && (
        <div className="lg:w-[400px] lg:h-[650px] lg:bg-[#efecec] lg:rounded-2xl lg:overflow-hidden">
          <div className="flex justify-center">
            {isLoading && (
              <div className="w-[400px] h-[400px] bg-[#efecec] flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#E0CCBE]"></div>
              </div>
            )}
            <Image
              className={`w-full h-[400px] ${!isLoading ? "" : "hidden"}`}
              src={image}
              alt={name}
              width={400}
              height={400}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="bg-[#efecec] rounded-2xl">
            <div className="flex flex-col gap-y-6 w-[90%] mx-auto bg-[#E5E1DA] p-4 mt-8 rounded-lg">
              <div className="w-full flex flex-col">
                <div className="flex flex-col">
                  <div className="text-[#2d2d2d] text-lg font-bold">{name}</div>
                  <div className="text-[#2d2d2d]">{description}</div>
                  <span className="text-[#2d2d2d] flex gap-x-1 items-center self-end">
                    <span className="text-[20px] font-sans font-bold">
                      {price}
                    </span>
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
                  className="flex items-center bg-[#E0CCBE] px-4 py-2 rounded-lg font-bold justify-center text-[15px] text-[#2d2d2d]"
                  onClick={() => {
                    onAddToCart();
                  }}
                >
                  افزون به یادداشت سفارش
                  <MdOutlinePostAdd size={23} color="#2d2d2d" />
                </button>
                {/* <button
                  className="flex bg-[#E0CCBE] px-4 py-2 rounded-lg font-bold justify-center text-[15px]"
                  onClick={() => {
                    setIsLoading(true);
                    onCancel();
                  }}
                >
                  بازگشت
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
