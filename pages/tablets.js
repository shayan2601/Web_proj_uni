import Footer from "../components/Footer";
import Header from "../components/Header";
import { connectToDatabase } from "../util/mongodb";
import TabletsProductsFeed from "../components/TabletsProductsFeed";

function tablets({ tablets }) {
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
            A very large variety of Tablets
          </h1>
        </div>

        <div>
          <TabletsProductsFeed tablets={tablets} />
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default tablets;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const tablets = await db
    .collection("tablets")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      tablets: JSON.parse(JSON.stringify(tablets)),
    },
  };
}
