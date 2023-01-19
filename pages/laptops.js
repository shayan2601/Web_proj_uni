import Footer from "../components/Footer";
import Header from "../components/Header";
import { connectToDatabase } from "../util/mongodb";
import LaptopsProductFeed from "../components/LaptopsProductFeed";

function laptops({ laptops }) {
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
            We have very large variety of Laptops
          </h1>
        </div>

        <div>
          <LaptopsProductFeed laptops={laptops} />
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default laptops;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const laptops = await db
    .collection("laptops")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      laptops: JSON.parse(JSON.stringify(laptops)),
    },
  };
}
