import React from "react";
import Image from "next/image";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Transactions from "./Transactions";

const RightBar = () => {
  return (
    <>
    <div className="w-[22%] h-80 rounded-xl bg-gradient-to-b from-[#253150] to-[#1a2236] text-white">
      <div className="flex mt-7 ml-7 align-middle">
        <Image
          src="/flame.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
        <h3 className="ml-1 font-bold">Available Now</h3>
      </div>
      <div className="mt-6 ml-7 font-bold text-lg leading-5">
        How to use the new version of the
        <br /> admin dashboard?{" "}
      </div>
      <div className="mt-6 ml-7 text-[#A4ACC3] text-xs">
        Takes 4 minutes to learn
      </div>
      
      <div className="mt-6 ml-7 text-[#A4ACC3] text-xs">
        Lorem ipsum dolor sit amet consectetur
        <br /> adipisicing elit. Iste delectus a sequi dolorem
        <br /> minima quasi consequatur non quasmios.
        <Image
          src="/astronaut1.webp"
          width={200}
          height={200}
          alt="Picture of the author"
          className="relative ml-auto -mt-[108px] opacity-25 -z-1 rounded-br-xl bg-transparent"
        />
      </div>
      <button className="bg-[#6056CD] px-3 py-2 rounded-md ml-7 -mt-7 align-middle relative"><PlayCircleFilledSharpIcon className="text-sm -mt-1 mr-1"/>Watch</button>
    </div>
    <Transactions/>
    {/* rightar 2 */}
    <div className="w-[22%] h-80 rounded-xl bg-gradient-to-b from-[#253150] to-[#1a2236] text-white ml-auto">
      <div className="flex mt-7 ml-7 align-middle">
        <Image
          src="/rocket.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
        <h3 className="ml-1 font-bold">Coming Soon</h3>
      </div>
      <div className="mt-6 ml-7 font-bold text-lg leading-5">
        New server actions are available,<br/>
        partial pre-rendering is coming up!
      </div>
      <div className="mt-6 ml-7 text-[#A4ACC3] text-xs">
        Boost your productivity
      </div>
      
      <div className="mt-6 ml-7 text-[#A4ACC3] text-xs">
        Lorem ipsum dolor sit amet consectetur
        <br /> adipisicing elit. Iste delectus a sequi dolorem
        <br /> minima quasi consequatur non quasmios.
      </div>
      <button className="bg-[#6056CD] px-3 py-2 rounded-md ml-7 mt-6 align-middle relative"><LocalLibraryIcon className="text-sm -mt-1 mr-1"/>Learn</button>
      
    </div>
    
    </>
    
  );
};

export default RightBar;
