import { mobileBrands } from "../jsonData/mobileBrands";
import router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { whichBrand } from "../slices/repairSlice";

function BrandsData({ title, image, id }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const brandSelection = () => {
    router.push("/selectMobile");
    dispatch(
      whichBrand({
        name: title,
        id: id,
      })
    );
  };
  return (
    <div
      onClick={brandSelection}
      className=" flex-col items-center  bg-white md:p-8 rounded-lg mx-auto shadow-md hover:shadow-2xl cursor-pointer px-24 py-8"
    >
      <img src={image} />
      <p className="text-center font-bold text-xl uppercase bg-yellow-400 mt-8 rounded-full">
        {title}
      </p>
    </div>
  );
}

export default BrandsData;
