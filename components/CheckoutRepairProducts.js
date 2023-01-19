import { useDispatch } from "react-redux";
import { removeFromRepairBasket } from "../slices/repairBasketSlice";

function CheckoutRepairProducts({ title, image, id, price, mobile }) {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromRepairBasket({ id }));
  };

  return (
    <div className="md:flex md:flex-row md:items-center rounded-md shadow-md md:my-4 md:p-4 bg-white relative hover:shadow-xl transition-all mx-4 p-8 xs:flex-col mt-5">
      <div className="flex items-center">
        <div className="p-5 mr-28">
          <p className="bg-gray-700 text-white font-bold text-center rounded-full px-2">
            {mobile}
          </p>
          <h1 className="font-bold mt-2">{title}</h1>

          <p className="font-semibold mt-2">£{price}</p>
        </div>
      </div>

      <div className="p-2 flex flex-col">
        <button
          onClick={removeItem}
          className="button absolute right-2 p-2  top-20 text-xs rounded-md"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutRepairProducts;
