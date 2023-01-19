import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  addGrade,
  addToBasket,
  selectGrade,
  selectProducts,
} from "../slices/basketSlice";
import React, { useEffect } from "react";
import react, { useState } from "react";
import Currency from "react-currency-formatter";

export default function openPhone() {
  const dispatch = useDispatch();

  const itemsProducts = useSelector(selectProducts);
  const grades = useSelector(selectGrade);

  const addItems = () => {
    dispatch(
      addToBasket({
        title: itemsProducts?.title,
        id: itemsProducts?.id,
        price:
          grades?.grade === "A"
            ? itemsProducts?.price
            : grades?.grade === "B"
            ? itemsProducts?.price - 20
            : grades?.grade === "C"
            ? itemsProducts?.price - 40
            : null,
        category: itemsProducts?.category,
        image: itemsProducts?.image,
        grade: grades?.grade,
      })
    );
  };

  return (
    <div
      style={{ height: "100%", minWidth: "600px", scrollBehavior: "smooth" }}
      className="flex flex-col bg-gray-200"
    >
      <header className="  fixed w-full top-0 z-50">
        <Header />
      </header>
      <main
        style={{ minWidth: "600px" }}
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20 mt-32 px-10`}
      >
        <div className="md:flex md:flex-row md:items-center rounded-md shadow-md md:my-4 md:p-4 bg-white relative hover:shadow-xl transition-all mx-4 p-8 xs:flex-col mt-20">
          <div className="flex items-center">
            <img
              className=" w-56 object-contain rounded-md shadow-xl"
              src={itemsProducts?.image}
            />

            <div className="p-5 mr-28">
              <p className="font-bold">Grade: {grades?.grade}</p>

              <h1 className="font-bold text-2xl">{itemsProducts?.title}</h1>
              <div className="flex"></div>
              <p className="line-clamp-2 mt-2">{itemsProducts?.description}</p>
              <Currency
                quantity={
                  grades?.grade === "A"
                    ? itemsProducts?.price
                    : grades?.grade === "B"
                    ? itemsProducts?.price - 20
                    : grades?.grade === "C"
                    ? itemsProducts?.price - 40
                    : null
                }
                currency="GBP"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={addItems}
              className=" mt-10 button px-4 flex items-center mx-auto"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
