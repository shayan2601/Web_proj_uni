import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { whichLaptop } from "../slices/repairSlice";

function Laptops({ id, title, image }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectLaptop = () => {
    router.push("/repairParts");
    dispatch(
      whichLaptop({
        laptop: title,
        id: id,
      })
    );
  };

  return (
    <div className="">
      <div
        onClick={selectLaptop}
        className="bg-white m-2 rounded-lg p-8 shadow-lg hover:shadow-2xl cursor-pointer"
      >
        <img src={image} />
        <h1 className="font-semibold text-lg mt-2 text-center">{title}</h1>
      </div>
    </div>
  );
}

export default Laptops;
