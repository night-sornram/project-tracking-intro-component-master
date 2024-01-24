import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="  font-barlow-con relative w-screen h-screen flex flex-col">
      <div className=" absolute top-0 right-0 w-1/2 h-1/2 bg-custom-500 -z-50 rounded-bl-[100px]">
      </div>
      <Navbar/>
      <div className=" mt-[10vh] h-[90vh] w-full flex flex-col-reverse md:flex-row">
        <div className=" w-full md:px-0 px-6 md:w-1/2 md:py-0 py-16 space-y-16 flex justify-center flex-col items-center">
          <div className=" space-y-7 flex flex-col w-full md:w-10/12 lg:w-2/3">
            <div className=" flex flex-row">
              <div className=" text-custom-500 font-bold text-sm bg-black py-1 px-2 font-barlow  rounded-full">
                NEW
              </div>
              <div className=" ml-5 tracking-[0.2em] text-custom-400 uppercase ">
                Monograph Dashboard 
              </div>
            </div>
            <div className=" text-5xl xl:text-7xl text-custom-200 font-barlow-con font-bold">
                POWERFUL INSIGHTS INTO YOUR TEAM
            </div>
            <div className="text-custom-300 text-lg  ">
              Project planning and time tracking for agile teams
            </div>
          </div>
          <div className=" flex flex-row justify-start w-full md:w-10/12 lg:w-2/3">
            <button className=" text-sm min-[425px]:text-base bg-custom-100 text-white uppercase font-bold py-3 px-6 rounded-md font-barlow-con">
              Schedule a demo
            </button>
            <div className="text-sm min-[425px]:text-base ml-5 flex justify-center items-center tracking-[0.2em] text-custom-400 uppercase ">
              TO see a preview
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex justify-end md:justify-center md:items-center">
          <Image
          src={"/images/illustration-devices.svg"}
          width={960}
          height={464}
          className=" md:object-none object-cover h-full md:h-2/3 "
          alt="illustrations"/>
        </div>
      </div>



    </div>
  )}
    