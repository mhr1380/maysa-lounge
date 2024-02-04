import Image from "next/image";
import salad from "../../assets/images/salad.svg";
import soop from "../../assets/images/soop.jpeg";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#a29378]">
        <Header />
        <span className="w-full h-[.5px] bg-[#0002] mb-2.5"></span>
        <div className="bg-[hsla(0,0%,100%,.12157)] font-medium text-[13px] px-8 rounded-full py-1 mb-2.5">
          {" "}
          همه دسته بندی ها در یک نگاه
        </div>
        <div className="flex">
          <div className="flex flex-col items-center bg-[#D1C9BC] rounded-xl p-4 mb-2">
            <Image src={salad} />
            <p>سالاد و پیش غذا</p>
          </div>
        </div>
      </div>
      <div className="bg-[#2d2d2d] flex flex-col">
        <span className="flex justify-center px-2 items-center gap-x-1 mb-4">
          <span className="w-[22%] h-[2px] bg-gray-400"></span>
          <span className="text-[#a29378] font-bold text-[20px]">{`« سالاد و پیش غذا »`}</span>
          <span className="w-[22%] h-[2px] bg-gray-400"></span>
        </span>
        <div className="grid grid-cols-1 w-[90%] mx-auto gap-y-4 pb-4">
          <div className="flex bg-[#454545] rounded-lg px-2 py-4 gap-x-2">
            <div className="w-[120px] h-[136px] overflow-hidden">
              <Image
                style={{ objectFit: "cover" }}
                className="rounded-md overflow-hidden h-[136px]"
                width={120}
                height={136}
                src={soop}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col text-white gap-y-2">
                <h3 className="font-bold text-[14px]"> سوپ/حساء/soup</h3>
                <p className="font-light text-[13px]">
                  قارچ،خامه،كره،شير،جعفري
                </p>
              </div>
              <span className="text-white flex gap-x-1 items-center">
                <span className="text-[20px] font-sans font-bold">69</span>
                <span className="text-[8px]">
                  هـــزار
                  <br></br>
                  <div className="-mt-1">تــومان</div>
                </span>
              </span>
            </div>
          </div>
          <div className="flex bg-[#454545] rounded-lg px-2 py-4 gap-x-2">
            <div className="w-[120px] h-[136px] overflow-hidden">
              <Image
                style={{ objectFit: "cover" }}
                className="rounded-md overflow-hidden h-[136px]"
                width={120}
                height={136}
                src={soop}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col text-white gap-y-2">
                <h3 className="font-bold text-[14px]"> سوپ/حساء/soup</h3>
                <p className="font-light text-[13px]">
                  قارچ،خامه،كره،شير،جعفري
                </p>
              </div>
              <span className="text-white flex gap-x-1 items-center">
                <span className="text-[20px] font-sans font-bold">69</span>
                <span className="text-[8px]">
                  هـــزار
                  <br></br>
                  <div className="-mt-1">تــومان</div>
                </span>
              </span>
            </div>
          </div>
          <div className="flex bg-[#454545] rounded-lg px-2 py-4 gap-x-2">
            <div className="w-[120px] h-[136px] overflow-hidden">
              <Image
                style={{ objectFit: "cover" }}
                className="rounded-md overflow-hidden h-[136px]"
                width={120}
                height={136}
                src={soop}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col text-white gap-y-2">
                <h3 className="font-bold text-[14px]"> سوپ/حساء/soup</h3>
                <p className="font-light text-[13px]">
                  قارچ،خامه،كره،شير،جعفري
                </p>
              </div>
              <span className="text-white flex gap-x-1 items-center">
                <span className="text-[20px] font-sans font-bold">69</span>
                <span className="text-[8px]">
                  هـــزار
                  <br></br>
                  <div className="-mt-1">تــومان</div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
