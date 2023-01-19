import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Products({ title, id, price, category, image }) {
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      addToBasket({
        title: title,
        id: id,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  return (
    <div className="md:relative bg-white m-5 z-30 md:flex md:flex-col md:shadow-md md:rounded-md md:mt-5 md:p-10 md:mx-5 rounded-md shadow-lg p-3 relative flex flex-col xs:mx-6 hover:shadow-2xl items-center">
      <p className="text-gray-600 italic absolute top-2 right-2">{category}</p>
      <img
        objectFit="contain"
        src={image}
        className=" h-60 w-56 object-cover rounded-md mt-6"
      />

      <h1 className="font-bold mt-4">{title}</h1>

      <div className="font-semibold mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      <button onClick={addItems} className="mt-auto button px-4">
        Add to Basket
      </button>
    </div>
  );
}

export default Products;
