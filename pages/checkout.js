import Header from "../components/Header";
import CheckoutProducts from "../components/CheckoutProducts";
import { useSelector } from "react-redux";
import { getBasketTotal, selectItems } from "../slices/basketSlice";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import Footer from "../components/Footer";
import { signIn, signOut, useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import {
  getRepairBasketTotal,
  selectRepairItems,
} from "../slices/repairBasketSlice";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  // const repairItems = useSelector(selectRepairItems);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //Call thr backend to create the checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      // email: session.user.email,
    });

    //redirect the user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

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
        className={`max-w-screen-2xl mx-auto pt-1 bg-gray-200 space-y-20  mt-10 px-10 g:flex`}
      >
        <div>
          <img
            className="h-52 rounded-sm"
            src="https://www.ionos.ca/digitalguide/fileadmin/DigitalGuide/Teaser/online-shopping-t.jpg"
          />
          <h1 className="font-bold text-2xl mt-4 italic">
            {items.length === 0
              ? "Your Shopping basket is empty"
              : "Shopping basket"}
          </h1>
          <hr />
          <div>
            {items.map((item) => (
              <CheckoutProducts
                title={item.title}
                description={item.description}
                key={item.id}
                id={item.id}
                price={item.price}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="bg-black text-white p-8 rounded-md mx-auto flex flex-col space-y-3 mt-8 h-full">
          {/* <CurrencyFormat
            renderText={(value) => (
              <>
                <h1 className=" font-semibold italic">
                  Subtotal
                  <span className=" font-normal">
                    ({items.length} items): <strong>{value}</strong>
                  </span>
                </h1>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(items)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"??"}
          /> */}
          <button
            className={`button p-2 shadow-md rounded-md font-semibold hover:shadow-lg text-center `}
            onClick={createCheckoutSession}
          >
            Proceed
          </button>

          {/* <button
            role="link"
            onClick={createCheckoutSession}
            disabled={!session ? true : false}
            className={
              !session
                ? "bg-gray-400 p-2 shadow-md rounded-md font-semibold hover:shadow-lg"
                : "button p-2 shadow-md rounded-md font-semibold hover:shadow-lg"
            }
          >
            {!session ? `Sign In to CheckOut` : "Proceed to CheckOut"}
          </button>
          <button
            onClick={!session ? signIn : signOut}
            className={`button p-2 shadow-md rounded-md font-semibold hover:shadow-lg text-center `}
          >
            {session ? `Sign Out` : "Sign In with Google"}
          </button> */}
        </div>
      </main>
      <footer style={{ minWidth: "600px" }} className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default Checkout;
