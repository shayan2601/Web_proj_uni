import router, { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BrandsData from "../components/BrandsData";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mobileBrands } from "../jsonData/mobileBrands";

export default function selectBrand() {
  const [input, setInput] = useState("");

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
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mt-20 px-10`}
      >
        <p
          style={{ fontFamily: "Lobster" }}
          className="text-center text-4xl font-bold text-black mt-16 bg-gray-400  p-2 rounded-lg shadow-xl"
        >
          Select Your Mobile
        </p>
        <div className="grid place-items-center">
          <input
            className="outline-none py-2 rounded-full bg-white focus-within:shadow-2xl shadow-lg text-xl px-4 mt-4"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Your Mobile"
          />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-6 mt-10">
          {mobileBrands
            .filter((val) => {
              if (input == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(input.toLowerCase())
              ) {
                return val;
              }
            })
            .map(({ title, image, id }) => (
              <BrandsData title={title} image={image} key={id} id={id} />
            ))}
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
