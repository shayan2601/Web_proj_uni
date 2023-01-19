import Products from "./Products";
import { airpods } from "../jsonData/accessories/airpodsData";
import { useState } from "react";

function AirpodsProductsFeed() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div id="airpod">
        <div className="grid place-items-center">
          <input
            className="outline-none py-2 rounded-full bg-white focus-within:shadow-2xl shadow-lg text-xl px-4 mt-4"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Your Covers"
          />
        </div>

        <h1 className="text-2xl font-bold bg-gray-400 rounded-lg shadow-lg px-3 py-3 text-center mt-10 uppercase">
          Airpods
        </h1>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {airpods
            .filter((val) => {
              if (input == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(input.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(0, 4)
            .map(
              ({ title, description, id, price, category, image, rating }) => (
                <Products
                  title={title}
                  description={description}
                  id={id}
                  key={id}
                  price={price}
                  s
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
          <img
            className="md:col-span-full"
            src="https:links.papareact.com/dyz"
          />

          <div className="md:col-span-2">
            {airpods
              .filter((val) => {
                if (input == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .slice(4, 5)
              .map(
                ({
                  title,
                  description,
                  id,
                  price,
                  category,
                  image,
                  rating,
                }) => (
                  <Products
                    title={title}
                    description={description}
                    id={id}
                    key={id}
                    price={price}
                    category={category}
                    image={image}
                    rating={rating}
                  />
                )
              )}
          </div>
          {airpods
            .filter((val) => {
              if (input == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(input.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(5, airpods.length)
            .map(
              ({ title, description, id, price, category, image, rating }) => (
                <Products
                  title={title}
                  description={description}
                  id={id}
                  key={id}
                  price={price}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default AirpodsProductsFeed;
