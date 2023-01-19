import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsFeed from "../components/ProductsFeed";
import { connectToDatabase } from "../util/mongodb";

function covers({ backcover }) {
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
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mt-24 px-10`}
      >
        <div>
          <ProductsFeed backcover={backcover} />
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default covers;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const backcover = await db
    .collection("backCovers")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      backcover: JSON.parse(JSON.stringify(backcover)),
    },
  };
}
