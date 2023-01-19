import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectBrand, selectDevices } from "../slices/repairSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import WarningIcon from "@mui/icons-material/Warning";
// import { apple } from "../jsonData/appleData";
import { samsung } from "../jsonData/samsungData";
import { huawei } from "../jsonData/huaweiData";
import { oppo } from "../jsonData/oppoData";
import { google } from "../jsonData/googleData";
import { lg } from "../jsonData/lgData";
import SchemaMobiles from "../components/SchemaMobiles";
import { useState } from "react";
import { connectToDatabase } from "../util/mongodb";

function selectDevice({appleData}) {
  const [input, setInput] = useState("");

  const brand = useSelector(selectBrand);
  const dispatch = useDispatch();
  console.log(appleData, 'Apple')
  const router = useRouter();

  return (
    <div
      style={{ height: "100%", minWidth: "600px", scrollBehavior: "smooth" }}
      className="flex flex-col bg-gray-200"
    >
      <header className="fixed w-full top-0 z-50">
        <Header />
      </header>
      <main
        style={{ minWidth: "600px" }}
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mb-10 mt-28 px-10`}
      >
        <h1
          onClick={() => router.push("/selectBrand")}
          className="text-2xl font-bold uppercase bg-black text-white p-2 rounded-md shadow-lg mt-6 animate-bounce text-center cursor-pointer"
        >
          Select your Device
        </h1>
        <div className="grid place-items-center">
          <input
            className="outline-none py-2 rounded-full bg-white focus-within:shadow-2xl shadow-lg text-xl px-4 mt-4"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Your Mobile"
          />
        </div>

        {brand.name === "Apple" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
            {appleData
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ title, image, id, price, screen_replacement, battery_replacement, liquid_damage, camera_damage }) => (
                <div className="mt-3">
                  <SchemaMobiles title={title} image={image} id={id} key={id} screen_replacement={screen_replacement} battery_replacement={battery_replacement} liquid_damage={liquid_damage} camera_damage={camera_damage} />
                </div>
              ))}
          </div>
        ) : brand.name === "Samsung" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
            {samsung
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ title, image, id, price, screen_replacement }) => (
                <div className="mt-3">
                  <SchemaMobiles title={title} image={image} id={id} key={id} screen_replacement={screen_replacement}/>
                </div>
              ))}
          </div>
        ) : brand.name === "Huawei" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
            {huawei
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ title, image, id, price, screen_replacement }) => (
                <div className="mt-3">
                  <SchemaMobiles title={title} image={image} id={id} key={id} screen_replacement={screen_replacement} />
                </div>
              ))}
          </div>
        ) : brand.name === "OPPO" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
            {oppo
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ title, image, id, price, screen_replacement }) => (
                <div className="mt-3">
                  <SchemaMobiles title={title} image={image} id={id} key={id} screen_replacement={screen_replacement} />
                </div>
              ))}
          </div>
        ) : brand.name === "Google" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
            {google
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ title, image, id, price, screen_replacement }) => (
                <div className="mt-3">
                  <SchemaMobiles title={title} image={image} id={id} key={id} screen_replacement={screen_replacement} />
                </div>
              ))}
          </div>
        ) : brand.name === "LG" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
            {lg
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ title, image, id, price, screen_replacement }) => (
                <div className="mt-3">
                  <SchemaMobiles title={title} image={image} id={id} key={id} screen_replacement={screen_replacement} />
                </div>
              ))}
          </div>
        ) : (
          <div className="grid place-items-center">
            <WarningIcon className="text-8xl animate-mobile" />
            <h1 className="text-red-500 text-center font-bold text-xl">
              Error: Select your device Again
            </h1>
          </div>
        )}
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default selectDevice;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const appleData = await db
    .collection("AppleData")
    .find({})
    // .sort({ metacritic: -1 })
    // .limit(20)
    .toArray();

  return {
    props: {
      appleData: JSON.parse(JSON.stringify(appleData)),
    },
  };
}
