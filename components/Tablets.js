import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { whichTablet } from "../slices/repairSlice";

function Tablets({ id, title, image }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectTablet = () => {
    router.push("/repairParts");
    dispatch(
      whichTablet({
        tablet: title,
        id: id,
      })
    );
  };

  return (
    <div className=" md:-mt-20">
      <div
        onClick={selectTablet}
        className="bg-white m-2 rounded-lg p-8 shadow-lg hover:shadow-2xl cursor-pointer"
      >
        <img src={image} />
        <h1 className="font-semibold text-lg mt-2 text-center">{title}</h1>
      </div>
    </div>
  );
}

export default Tablets;
