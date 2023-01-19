import router from "next/router";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LaptopBoxes from "../components/LaptopBoxes";
import MobileBoxes from "../components/MobileBoxes";
import TabletBoxes from "../components/TabletBoxes";
import {
  selectLaptop,
  selectMobile,
  selectTablet,
} from "../slices/repairSlice";

function repairParts() {
  const mobile = useSelector(selectMobile);
  const tablet = useSelector(selectTablet);
  const laptop = useSelector(selectLaptop);

  return (
    <div
      style={{ height: "100%", minWidth: "600px", scrollBehavior: "smooth" }}
      className="flex flex-col bg-gray-200"
    >
      <header className="  fixed w-full top-0 z-50">
        <Header />
      </header>
      <main
        style={{ minWidth: "600px" }}
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mt-28 px-10`}
      >
        <h1 className=" font-semibold bg-gray-700 text-white rounded-md shadow-lg p-4 text-xl text-center">
          What do you want us to repair?{" "}
          <span className="text-yellow-500">Select Your service type</span>
        </h1>

        {mobile.mobile || tablet.tablet || laptop.laptop ? (
          <p className="font-bold text-yellow-500 bg-gray-700 p-2 rounded-md text-center mt-10 text-xl">
            {" "}
            {mobile.mobile || tablet.tablet || laptop.laptop}
          </p>
        ) : (
          <div className="grid place-items-center">
            <h1 className="text-red-700 animate-mobile px-10 mt-10">
              Error: "Dont Refresh page, Otherwise all your data will be
              removed. So you'll have to select your device again"
            </h1>
            <button
              onClick={() => router.push("/repair")}
              className="button px-5 rounded-lg mt-8"
            >
              Go back
            </button>
          </div>
        )}
        {mobile.mobile ? (
          <MobileBoxes />
        ) : tablet.tablet ? (
          <TabletBoxes />
        ) : laptop.laptop ? (
          <LaptopBoxes />
        ) : null}
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default repairParts;
