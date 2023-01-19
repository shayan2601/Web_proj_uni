import BookRepair from "../components/BookRepair";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RepairBanner from "../components/RepairBanner";

function repair() {
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
        <RepairBanner />
        <h1 className="bg-black p-2 text-white text-xl mt-2 text-center font-bold max-w-screen-xl mx-10">
          Contact us or you can also visit us for mobile Repairing and other
          services
        </h1>

        <BookRepair />

        <p className="mx-10 my-10 border-4 rounded-md shadow-2xl border-red-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.91389043358714!2d-2.483022549997998!3d53.748342928277225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9fef2bf8bc0d%3A0x3602d48e5693fcff!2sPhones%20Hut!5e0!3m2!1sen!2s!4v1633709395760!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </p>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default repair;
