import Footer from "../components/Footer";
import Header from "../components/Header";
import PhonesProductsFeed from "../components/PhonesProductsFeed";
import { Link } from "react-scroll";
import { connectToDatabase } from "../util/mongodb";
import { useEffect, useState } from "react";

function phones({ appleData, samsungData }) {
  const [samsungMysqlData, setSamsungMysqlData] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.products);
      setSamsungMysqlData(res.products);
    }
    getPageData();
  }, []);

  return (
    <div
      style={{ height: "100%", minWidth: "600px", scrollBehavior: "smooth" }}
      className="flex flex-col bg-gray-200"
    >
      <header className="fixed w-full top-0 z-50">
        <Header />
      </header>
      <main
        style={{ minWidth: "600px" }}
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mt-28 px-10`}
      >
        <div className="grid place-items-center">
          <h1
            style={{ fontFamily: "Lobster" }}
            className="text-center text-4xl font-bold text-black mt-6 bg-gray-200  p-2 rounded-lg shadow-xl"
          >
            We have very large variety of Mobile Phones and Laptops
          </h1>

          <div className="grid md:grid-cols-6 grid-cols-2 gap-y-2 gap-x-5 mt-4">
            <Link to="apple" duration={1500} smooth={true}>
              {" "}
              <div className=" border-4 border-yellow-300 rounded-full shadow-2xl font-bold text-xl px-4 py-1 cursor-pointer hover:bg-black hover:text-white uppercase">
                <p className="text-center">Apple</p>
              </div>
            </Link>

            <Link to="samsung" duration={1500} smooth={true}>
              <div className=" border-4 border-yellow-300 rounded-full shadow-2xl font-bold text-xl px-4 py-1 cursor-pointer hover:bg-black hover:text-white uppercase">
                <p className="text-center">Samsung</p>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <PhonesProductsFeed appleData={appleData} samsungData={samsungMysqlData} />
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default phones;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const appleData = await db
    .collection("AppleData")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  const samsungData = await db
    .collection("SamsungData")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  return {
    props: {
      appleData: JSON.parse(JSON.stringify(appleData)),
      samsungData: JSON.parse(JSON.stringify(samsungData)),
    },
  };
}
