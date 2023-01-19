import InvertColorsIcon from "@mui/icons-material/InvertColors";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import BatteryUnknownIcon from "@mui/icons-material/BatteryUnknown";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToRepairBasket } from "../slices/repairBasketSlice";

function TabletBoxes() {
  const router = useRouter();
  const dispatch = useDispatch();

  const screen = () => {
    dispatch(
      addToRepairBasket({
        title: "Screen Replacement",
        image: <InvertColorsIcon />,
        price: "350",
      })
    );
  };
  const battery = () => {
    dispatch(
      addToRepairBasket({
        title: "Battery Replacement",
        image: <MobileScreenShareIcon />,
        price: "200",
      })
    );
  };
  const liquid = () => {
    dispatch(
      addToRepairBasket({
        title: "Liquid Replacement",
        image: <BatteryUnknownIcon />,
        price: "150",
      })
    );
  };
  const camera = () => {
    dispatch(
      addToRepairBasket({
        title: "Camera Replacement",
        image: <CameraAltIcon />,
        price: "200",
      })
    );
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 mt-10">
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-4 mt-5 m-5 grid place-items-center space-y-5">
        <InvertColorsIcon className="text-8xl" />
        <h1>Screen Replacement</h1>
        <h1>£350</h1>
        <button
          onClick={screen}
          className="border-4 border-yellow-300 rounded-full shadow-lg hover:shadow-2xl px-4 font-semibold hover:bg-black hover:text-white"
        >
          Select
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-4 mt-5 m-5 grid place-items-center space-y-5">
        <MobileScreenShareIcon className="text-8xl" />
        <h1>Battery Replacement</h1>
        <h1>£200</h1>
        <button
          onClick={battery}
          className="border-4 border-yellow-300 rounded-full shadow-lg hover:shadow-2xl px-4 font-semibold hover:bg-black hover:text-white"
        >
          Select
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-4 mt-5 m-5 grid place-items-center space-y-5">
        <BatteryUnknownIcon className="text-8xl" />
        <h1>Liquid Damage</h1>

        <h1>£150</h1>
        <button
          onClick={liquid}
          className="border-4 border-yellow-300 rounded-full shadow-lg hover:shadow-2xl px-4 font-semibold hover:bg-black hover:text-white"
        >
          Select
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-4 mt-5 m-5 grid place-items-center space-y-5">
        <CameraAltIcon className="text-8xl" />
        <h1>Camera damage</h1>

        <h1>£200</h1>
        <button
          onClick={camera}
          className="border-4 border-yellow-300 rounded-full shadow-lg hover:shadow-2xl px-4 font-semibold hover:bg-black hover:text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default TabletBoxes;
