// import Products from "./Products";

import TabletsProducts from "./TabletsProducts";

// import PhonesProducts from "./PhonesProducts";

function TabletsProductsFeed({ tablets }) {
  return (
    <div id="hello">
      <div>
        <div id="apple" className="grid place-items-center">
          <h1 className="font-bold text-2xl bg-yellow-500 rounded-md w-max px-4 py-1 mt-4 text-center">
            Tablets
          </h1>

          <div className="grid place-items-center">
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
              {tablets
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
                    <TabletsProducts
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
      </div>
    </div>
  );
}

export default TabletsProductsFeed;
