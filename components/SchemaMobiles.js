import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { whichMobile } from "../slices/repairSlice";

function SchemaMobiles({ title, image, price, id, screen_replacement, battery_replacement, liquid_damage, camera_damage }) {
  const router = useRouter();
  const dispatch = useDispatch();

  console.log(screen_replacement, "Screen_replacement")

  const mobileService = () => {
    router.push("/mobileRepairParts");
    dispatch(
      whichMobile({
        name: title,
        id: id,
        screen_replacement: screen_replacement,
        battery_replacement: battery_replacement,
        liquid_damage: liquid_damage,
        camera_damage: camera_damage
      })
    );
  };

  return (
    <div
      onClick={mobileService}
      className=" flex-col items-center  bg-white md:p-8 rounded-lg mx-auto shadow-md hover:shadow-2xl cursor-pointer px-24 py-8"
    >
      <img src={image} />
      <p>{price}</p>
      <p>{title}</p>
    </div>
  );
}

export default SchemaMobiles;
