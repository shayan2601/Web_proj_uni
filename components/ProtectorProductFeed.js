import Products from "./Products";
import { useState } from "react";

function ProtectorProductFeed({ protectors }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <div id="airpod">
        <h1 className="text-2xl font-bold bg-gray-400 rounded-lg shadow-lg px-3 py-3 text-center mt-10 uppercase">
          Protectors
        </h1>
        <div className="grid place-items-center">
          <input
            className="outline-none py-2 rounded-full bg-white focus-within:shadow-2xl shadow-lg text-xl px-4 mt-4"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Your Protector"
          />
        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {protectors
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
            {protectors
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
          {protectors
            .filter((val) => {
              if (input == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(input.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(5, protectors.length)
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

export default ProtectorProductFeed;
