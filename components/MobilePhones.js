import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { whichMobile } from "../slices/repairSlice";

function MobilePhones({ id, title, image }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectPhone = () => {
    router.push("/repairParts");
    dispatch(
      whichMobile({
        mobile: title,
        id: id,
      })
    );
  };

  return (
    <div className="">
      <div
        onClick={selectPhone}
        className="bg-white m-2 rounded-lg p-8 shadow-lg hover:shadow-2xl cursor-pointer"
      >
        <img src={image} />
        <h1 className="font-semibold text-lg mt-2 text-center">{title}</h1>
      </div>
    </div>
  );
}

export default MobilePhones;
