import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TabletIcon from "@mui/icons-material/Tablet";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addDevice } from "../slices/repairSlice";

function BookRepair() {
  const router = useRouter();
  const dispatch = useDispatch();

  const brandSelection = () => {
    router.push("/selectBrand");

    dispatch(
      addDevice({
        device: "mobile",
      })
    );
  };
  const tabSelection = () => {
    router.push("/selectDevice");

    dispatch(
      addDevice({
        device: "tablet",
      })
    );
  };

  const laptopSelection = () => {
    router.push("/selectDevice");

    dispatch(
      addDevice({
        device: "laptop",
      })
    );
  };

  return (
    <div className="md:grid md:grid-cols-3 space-x-3 p-5 md:gap-y-5 px-6">
      <div className="bg-white p-3 flex-col items-center justify-center rounded-md shadow-xl hover:shadow-2xl text-center space-y-8 mt-10 pb-8">
        <PhoneAndroidIcon className=" text-9xl animate-mobile mt-5" />
        <p className="text-lg font-semibold text-gray-700">
          The smartphone repair service for iPhone, Samsung, Google
        </p>
        <button
          value="mobile"
          onClick={brandSelection}
          className="border-4 border-yellow-400 rounded-full p-2 font-bold uppercase hover:bg-black hover:text-white"
        >
          Mobile Repair
        </button>
      </div>
      <div className="bg-white p-3 flex-col items-center justify-center rounded-md shadow-xl hover:shadow-2xl text-center space-y-8 md:relative mt-10 pb-8">
        <TabletIcon className=" text-9xl animate-tab mt-5" />
        <p className="text-lg font-semibold text-gray-700">
          Expert repairs for all kind of iPads and tablets of any model
        </p>
        <button
          onClick={tabSelection}
          className="border-4 border-yellow-400 rounded-full p-2 font-bold uppercase hover:bg-black hover:text-white mt-auto"
        >
          Tablet Repair
        </button>
      </div>
      <div className="bg-white p-3 flex-col items-center justify-center rounded-md shadow-xl hover:shadow-2xl text-center space-y-8 mt-10 pb-8">
        <LaptopMacIcon className=" text-9xl animate-bounce mt-5" />
        <p className="text-lg font-semibold text-gray-700">
          Specialist repair centres for laptop, computers and macbooks
        </p>
        <button
          onClick={laptopSelection}
          className="border-4 border-yellow-400 rounded-full p-2 font-bold uppercase hover:bg-black hover:text-white"
        >
          Laptop Repair
        </button>
      </div>
    </div>
  );
}

export default BookRepair;
