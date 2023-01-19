import InvertColorsIcon from "@mui/icons-material/InvertColors";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import BatteryUnknownIcon from "@mui/icons-material/BatteryUnknown";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useDispatch } from "react-redux";
import { addToRepairBasket } from "../slices/repairBasketSlice";

function LaptopBoxes() {
  const dispatch = useDispatch();

  const screen = () => {
    dispatch(
      addToRepairBasket({
        title: "Screen Replacement",
        price: "350",
      })
    );
  };
  const battery = () => {
    dispatch(
      addToRepairBasket({
        title: "Battery Replacement",
        price: "200",
      })
    );
  };
  const liquid = () => {
    dispatch(
      addToRepairBasket({
        title: "Liquid Replacement",
        price: "150",
      })
    );
  };
  const camera = () => {
    dispatch(
      addToRepairBasket({
        title: "Camera Replacement",
        price: "200",
      })
    );
  };
  const keyboard = () => {
    dispatch(
      addToRepairBasket({
        title: "Keyboard Damage",
        price: "230",
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
      <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl p-4 mt-5 m-5 grid place-items-center space-y-5">
        <KeyboardIcon className="text-8xl" />
        <h1>Keyboard damage</h1>

        <h1>£230</h1>
        <button
          onClick={keyboard}
          className="border-4 border-yellow-300 rounded-full shadow-lg hover:shadow-2xl px-4 font-semibold hover:bg-black hover:text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default LaptopBoxes;
