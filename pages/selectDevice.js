import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectDevices } from "../slices/repairSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import WarningIcon from "@mui/icons-material/Warning";
import Tablets from "../components/Tablets";
import Laptops from "../components/Laptops";
import { tablets } from "../jsonData/tabletData";
import { laptops } from "../jsonData/laptopData";

function selectDevice() {
  const devices = useSelector(selectDevices);
  const dispatch = useDispatch();
  const router = useRouter();

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
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mb-10 mt-28 px-10`}
      >
        <h1
          onClick={() => router.push("/repair")}
          className="text-2xl font-bold uppercase bg-black text-white p-2 rounded-md shadow-lg mt-6 animate-bounce text-center cursor-pointer"
        >
          Select your Device
        </h1>

        {devices.device === "tablet" ? (
          <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto place-items-center sm:p-32">
            {tablets.map(({ title, id, image }) => (
              <div className="mt-20">
                {" "}
                <Tablets key={id} id={id} title={title} image={image} />
              </div>
            ))}
          </div>
        ) : devices.device === "laptop" ? (
          <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto place-items-center sm:p-32">
            {laptops.map(({ title, id, image }) => (
              <Laptops key={id} id={id} title={title} image={image} />
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
