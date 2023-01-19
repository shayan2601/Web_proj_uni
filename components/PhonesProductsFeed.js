import Products from "./Products";
import { apple } from "../jsonData/appleData";
import { samsung } from "../jsonData/samsungData";
import { huawei } from "../jsonData/huaweiData";
import { oppo } from "../jsonData/oppoData";
import { google } from "../jsonData/googleData";
import { lg } from "../jsonData/lgData";
import PhonesProducts from "./PhonesProducts";

function PhonesProductsFeed({ appleData, samsungData }) {
  return (
    <div id="hello">
      <div>
        <div id="apple" className="grid place-items-center">
          <h1 className="font-bold text-2xl bg-yellow-500 rounded-md w-max px-4 py-1 mt-4 text-center">
            Apple Phones
          </h1>

          <div className="grid place-items-center">
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
              {appleData
                // .slice(0, 4)
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
                    <PhonesProducts
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
                className="md:col-span-full mt-8"
                src="https:links.papareact.com/dyz"
              />
            </div>
          </div>
        </div>
        <div id="samsung" className="grid place-items-center">
          <h1 className="font-bold text-2xl bg-yellow-500 rounded-md w-max px-4 py-1 mt-4 text-center">
            Samsung Phones
          </h1>

          <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
            {samsungData
              // .slice(0, 4)
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
                  <PhonesProducts
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonesProductsFeed;
