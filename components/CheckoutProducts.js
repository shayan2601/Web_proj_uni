import { StarIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  addToBasket,
  selectGrade,
} from "../slices/basketSlice";

function CheckoutProducts({ title, description, image, id, price, rating }) {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };

  const AddItem = () => {
    dispatch(
      addToBasket({
        title: title,
        description: description,
        id: id,
        price: price,
        image: image,
        rating: rating,
      })
    );
  };

  return (
    <div className="md:flex md:flex-row md:items-center rounded-md shadow-md md:my-4 md:p-4 bg-white relative hover:shadow-xl transition-all mx-4 p-8 xs:flex-col mt-5">
      <div className="flex items-center">
        <img className="w-28 object-contain rounded-md shadow-xl" src={image} />
        <div className="p-5 mr-28">
          <h1 className="font-bold">{title}</h1>
          <div className="flex"></div>
          <p className="line-clamp-2 mt-2">{description}</p>
          <p className="font-semibold mt-2">£{price}</p>
        </div>
      </div>

      <div className="p-2 flex flex-col">
        <button
          onClick={AddItem}
          className="button absolute right-2 top-14 p-2 text-xs rounded-md"
        >
          Add Item
        </button>
        <button
          onClick={removeItem}
          className="button absolute right-2 p-2  top-24 text-xs rounded-md"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
