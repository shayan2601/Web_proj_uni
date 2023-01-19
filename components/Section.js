import {
  ChipIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-scroll";

function Section() {
  const router = useRouter();

  return (
    <div className={`  text-white  items-center justify-center p-4`}>
      <div className="grid md:grid-cols-2">
        <div
          style={{ boxShadow: "0px 1px 8px 1px rgba(0,0,0,0.75)" }}
          onClick={() => router.push("/repair")}
          className="bg-black px-8 py-10 rounded-md shadow-xl hover:shadow-3xl cursor-pointer hover:bg-gray-400 m-4 hover:text-black font-bold flex-col active:bg-gray-400"
        >
          <h1
            style={{ letterSpacing: 4, fontFamily: "Oswald" }}
            className="text-3xl text-center"
          >
            Repair and Services
          </h1>
          <ChipIcon className=" h-8 mt-2 text-red-500 mx-auto hover:text-black" />
        </div>
        <div
          style={{ boxShadow: "0px 1px 8px 1px rgba(0,0,0,0.75)" }}
          className="bg-red-700 px-8 py-10 rounded-md shadow-xl hover:shadow-3xl cursor-pointer hover:bg-gray-400 m-4 hover:text-black font-bold flex-col active:bg-gray-400 items-center justify-center"
        >
          <Link to="hello" duration={1500} smooth={true}>
            <h1
              style={{ letterSpacing: 4, fontFamily: "Oswald" }}
              className="text-3xl text-center"
            >
              {" "}
              Mobile Accessories
            </h1>
          </Link>

          <DeviceMobileIcon className=" h-8 mt-2 text-yellow-400 mx-auto hover:text-black" />
        </div>
      </div>

      <div className="">
        <div
          style={{ boxShadow: "0px 2px 8px 1px rgba(0,0,0,0.75)" }}
          onClick={() => router.push("/phones")}
          className=" bg-yellow-500 px-8 py-10 rounded-md shadow-xl hover:shadow-3xl cursor-pointer hover:bg-gray-400 m-4 hover:text-black font-bold flex-col items-center justify-center active:bg-gray-400"
        >
          <h1
            style={{ letterSpacing: 4, fontFamily: "Oswald" }}
            className="text-3xl text-center"
          >
            {" "}
            Phones and Tablets
          </h1>

          <DeviceTabletIcon className=" h-8 mt-2 text-black mx-auto hover:text-black" />
        </div>
      </div>
    </div>
  );
}

export default Section;
