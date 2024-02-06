import Image from "next/image";
import { useEffect, useState } from "react";
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
      className={`w-full h-screen lg:mx-auto bg-[#2d2d2d] lg:bg-opacity-70 flex flex-col fixed top-0 left-0 lg:items-center lg:justify-center ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out z-30`}
    >
      {show && (
        <div className="lg:w-[400px] lg:h-[650px] lg:bg-[#2d2d2d] lg:rounded-2xl lg:overflow-hidden">
          <div className="flex justify-center">
            {isLoading && (
              <div className="w-[400px] h-[400px] bg-[#2d2d2d] flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#a29378]"></div>
              </div>
            )}
            <Image
              className={`w-full h-[400px] ${!isLoading ? "" : "hidden"}`}
              src={image}
              alt={name}
              width={400}
              height={400}
              onLoadingComplete={() => {
                console.log("Image loaded");
                setIsLoading(false);
              }}
            />
          </div>
          <div className="bg-[#2d2d2d] rounded-2xl -mt-4">
            <div className="flex flex-col gap-y-6 w-[90%] mx-auto bg-gradient-to-b opacity-90 from-[#454545] to-[#2d2d2d] p-4 mt-8 rounded-lg">
              <div className="w-full flex flex-col">
                <div className="flex flex-col">
                  <div className="text-white text-lg font-bold">{name}</div>
                  <div className="text-white">{description}</div>
                  <span className="text-white flex gap-x-1 items-center self-end">
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
                    setIsLoading(true);
                    onCancel();
                  }}
                >
                  بازگشت
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
