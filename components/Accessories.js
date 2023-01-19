import { useRouter } from "next/router";
import { Link } from "react-scroll";

function Accessories() {
  const router = useRouter();
  return (
    <div id="hello" className=" bg-gray-900 p-24">
      <div className="grid place-items-center">
        <p className="text-3xl font-semibold uppercase bg-gray-500 text-white px-4 py-4 rounded-md text-center">
          Choose Your Product
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-x-4 gap-y-4 mt-10">
        {/* <Link to="cover" duration={1500} smooth={true}> */}
        <div
          onClick={() => router.push("/covers")}
          style={{ letterSpacing: 3 }}
          className="bg-white rounded-lg border-4 border-yellow-400 px-16 py-8 cursor-pointer font-bold text-2xl hover:bg-black hover:text-white active:bg-black "
        >
          <h1
            style={{ fontFamily: "Lato" }}
            className=" font-bold text-2xl text-center"
          >
            Back Covers
          </h1>
        </div>
        {/* </Link> */}

        {/* <Link to="protector" duration={1500} smooth={true}> */}
        <div
          onClick={() => router.push("/protectors")}
          style={{ letterSpacing: 3 }}
          className="bg-white rounded-lg border-4 border-yellow-400 px-16 py-8 cursor-pointer font-bold text-2xl hover:bg-black hover:text-white active:bg-black"
        >
          <h1
            style={{ fontFamily: "Lato" }}
            className=" font-bold text-2xl text-center"
          >
            Protectors
          </h1>
        </div>
        {/* </Link> */}

        <div
          onClick={() => router.push("/sound")}
          style={{ letterSpacing: 3 }}
          className="bg-white rounded-lg border-4 border-yellow-400 px-16 py-8 cursor-pointer hover:bg-black hover:text-white active:bg-black "
        >
          <h1
            style={{ fontFamily: "Lato" }}
            className=" font-bold text-2xl text-center"
          >
            HeadPhones
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
