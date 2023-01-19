import Footer from "../components/Footer";
import Header from "../components/Header";
import img4 from "../components/images/img4.png";
import Image from "next/image";
import img5 from "../components/images/img5.png";

function about() {
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
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mt-10 px-10`}
      >
        <div className="place-items-center grid">
          <h1
            style={{ fontFamily: "Lobster" }}
            className="text-center text-4xl font-bold text-black  bg-gray-200 w-max p-2 rounded-lg shadow-xl "
          >
            About Our Company
          </h1>
        </div>

        <div className=" bg-gray-400 p-6 sm:flex sm:items-center rounded-lg shadow-xl">
          <Image className="rounded-md" src={img5} />
          <p
            style={{ fontFamily: "Yanone Kaffeesatz" }}
            className="px-10 py-5 font-semibold text-gray-800 text-xl"
          >
            <span
              style={{ fontFamily: "Pacifico" }}
              className="text-yellow-400 font-bold text-2xl block"
            >
              {" "}
              WHAT WE DO?
            </span>
            MobileShop gives you a chance to quickly and easily find the phone
            you want and have it delivered to your home in no time, regardless
            of your location, as long as it is in one of the countries of the UK
          </p>
        </div>
        <div className=" bg-gray-400 p-6 sm:flex sm:items-center rounded-lg shadow-xl">
          <p
            style={{ fontFamily: "Yanone Kaffeesatz" }}
            className="px-10 py-5 font-semibold text-gray-800 text-xl"
          >
            Collective experience of our team members and the years we have
            spent in the business allowed us to develop a vast network of
            suppliers, ensuring that our customers will always find what they
            are looking for.
          </p>
          <Image className="rounded-md" src={img4} />
        </div>
        <div className=" bg-gray-400 p-6 sm:flex sm:items-center rounded-lg shadow-xl">
          <Image className="rounded-md" src={img5} />
          <p
            style={{ fontFamily: "Yanone Kaffeesatz" }}
            className="px-10 py-5 font-semibold text-gray-800 text-xl"
          >
            Our affordability, fast and reliable delivery, and the fact that you
            will always be able to find the phone that you are looking for in
            our offer
          </p>
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default about;
