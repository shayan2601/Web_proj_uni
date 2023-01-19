import Head from "next/head";
import Accessories from "../components/Accessories";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsFeed from "../components/ProductsFeed";
import Section from "../components/Section";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import clientPromise from "../util/mongodb";

export default function Home() {
  const router = useRouter();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 2000);
  }, []);

  return (
    <div
      style={{ height: "100%", minWidth: "600px", scrollBehavior: "smooth" }}
      className="flex flex-col bg-gray-200"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* popup */}

      {/* <div className="bg-amazon_blue animation  z-50 mx-auto rounded-b-lg"> */}
      <div
        className={` flex animation flex-col items-left sm:mt-28 mt-32 text-white px-8 py-5 bg-amazon_blue animation z-50 mx-auto rounded-b-lg ${
          popup == true ? "inline-block" : "hidden"
        }`}
      >
        <div className="ml-auto">
          <CloseIcon
            onClick={() => setPopup(false)}
            className="cursor-pointer"
          />
        </div>
        <a href="https://chatwith.io/s/phoneshut" target="_blank">
          <img
            className="object-contain h-20 mx-auto animate-bounce"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          />
        </a>

        <p className=" font-semibold text-lg text-center ">
          Contact us on WhatsApp for quotations
        </p>
        <p className="text-center mt-2">+44 7527 900053</p>
      </div>
      {/* </div> */}

      {/* popup end */}

      <header className="  fixed w-full top-0 z-50">
        <Header />
      </header>
      <main
        style={{ minWidth: "600px" }}
        className={`max-w-screen-2xl mx-auto ${
          popup == true ? " -mt-60" : "sm:mt-20 mt-24"
        } pt-1 bg-gray-200`}
      >
        <Banner />
        <Section />
        <Accessories />
        <div className="grid md:grid-cols-3 place-items-center  gap-x-3 gap-y-20 mt-10">
          <div
            onClick={() => router.push("/covers")}
            className="shadow-lg hover:shadow-2xl rounded-b-lg cursor-pointer"
          >
            <img
              className="object-contain h-56 mb-2"
              src="https://media.istockphoto.com/photos/colorful-silicone-cases-for-your-smartphone-picture-id1163393607?b=1&k=20&m=1163393607&s=170667a&w=0&h=2DBXZtz1hIvAM7ehJtfKzC0WA9SQNzWCq8w02HXdcyw="
            />
            <div className="flex items-center">
              <p className=" px-3 py-1 rounded-md font-bold text-center">
                Go Check Cases
              </p>
              <ArrowForwardIcon />
            </div>
          </div>

          <div
            onClick={() => router.push("/laptops")}
            className="shadow-lg hover:shadow-2xl rounded-b-lg cursor-pointer"
          >
            <img
              className="object-contain h-56 mb-2"
              src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <div className="flex items-center">
              <p className=" px-3 py-1 rounded-md font-bold text-center">
                Go Check Laptops
              </p>
              <ArrowForwardIcon />
            </div>
          </div>
          <div
            onClick={() => router.push("/phones")}
            className="shadow-lg hover:shadow-2xl rounded-b-lg cursor-pointer"
          >
            <img
              className="object-contain h-56 mb-2"
              src="https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <div className="flex items-center">
              <p className=" px-3 py-1 rounded-md font-bold text-center">
                Go Check Mobiles
              </p>
              <ArrowForwardIcon />
            </div>
          </div>
          <div
            onClick={() => router.push("/tablets")}
            className="shadow-lg hover:shadow-2xl rounded-b-lg cursor-pointer"
          >
            <img
              className="object-contain h-56 mb-2"
              src="https://i.insider.com/604bd188fea127001886a8ce?width=1000&format=jpeg&auto=webp"
            />
            <div className="flex items-center">
              <p className=" px-3 py-1 rounded-md font-bold text-center">
                Go Check Tablets
              </p>
              <ArrowForwardIcon />
            </div>
          </div>
          <div
            onClick={() => router.push("/sound")}
            className="shadow-lg hover:shadow-2xl rounded-b-lg cursor-pointer"
          >
            <img
              className="object-contain h-56 mb-2"
              src="https://i.gadgets360cdn.com/large/samsung_akg_n700nc_m2_1569329585572.jpg"
            />
            <div className="flex items-center">
              <p className=" px-3 py-1 rounded-md font-bold text-center">
                Go Check Headphones
              </p>
              <ArrowForwardIcon />
            </div>
          </div>
          <div
            onClick={() => router.push("/repair")}
            className="shadow-lg hover:shadow-2xl rounded-b-lg cursor-pointer"
          >
            <img
              className="object-contain h-56 mb-2"
              src="https://media.istockphoto.com/photos/technician-repairing-broken-smartphone-on-desk-picture-id1125323600?b=1&k=20&m=1125323600&s=170667a&w=0&h=54jgymTLiizPx94Vhpw6xZ-UqXY_VrkEItP9aP-BNmc="
            />
            <div className="flex items-center">
              <p className=" px-3 py-1 rounded-md font-bold text-center">
                Repair Something
              </p>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
