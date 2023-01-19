import {
  ChipIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuOption from "./MenuOption";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import FacebookIcon from "@mui/icons-material/Facebook";
import { selectRepairItems } from "../slices/repairBasketSlice";
import "react-responsive-modal/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriver } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [show, handleShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const opened = Boolean(open);
  const basket = useSelector(selectItems);
  const repairBasket = useSelector(selectRepairItems);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  //   return () => window.removeEventListener("scroll");
  // }, []);

  const menuOpen = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };

  return (
    <header className="flex flex-col">
      <div className="bg-gray-400 grid place-items-center justify-center py-1">
        {/* <p className="animate-mobile mr-auto px-2 ml-4 text-yellow-300 font-semibold rounded-full">
          {" "}
          +44 7527 900053
        </p> */}
        <div className="flex items-center justify-center py-1 mx-auto ml-10">
          <h2 className=" font-semibold text-white">
            You can also contact us on Facebook & WhatsApp
          </h2>
          <div className="ml-8 text-blue-500 cursor-pointer">
            <a
              target="_blank"
              href="https://www.facebook.com/102700721218659/posts/102726397882758/?d=n"
            >
              <FacebookIcon className=" text-3xl" />
            </a>
          </div>
          <div className="ml-2 text-white  rounded-full overflow-hidden cursor-pointer">
            <a href="https://chatwith.io/s/phoneshut" target="_blank">
              <img
                className="object-contain h-7"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-between md:px-4 px-8 sm:py-3 py-6 text-white  bg-amazon_blue ${
          show && "bg-amazon_blue-transparent"
        }  `}
      >
        <div
          aria-expanded={opened ? "true" : undefined}
          onClick={menuOpen}
          className="md:hidden cursor-pointer relative"
        >
          <MenuIcon className="sm:h-10 h-12  text-white" />
        </div>
        <div
          onClick={() => {
            router.push("/");
          }}
          className="flex items-center"
        >
          <div className="bg-gray-300 rounded-full px-2 flex items-center">
            <div className="text-white rounded-full mr-1 p-1 h-1 w-1 z-50 bg-white" />
            <h2 className=" text-2xl font-bold font-sans cursor-pointer text-black">
              PHONES<span className="text-yellow-500">HUT</span>
            </h2>
            <div className=" rounded-full ml-1 p-1 h-1 w-1 z-50 bg-black" />
          </div>
        </div>

        <div className=" items-center space-x-3 hidden md:inline-flex">
          <MenuOption
            onClick={() => {
              router.push("/");
              setSelected("Home");
            }}
            selected
            active={selected === "Home"}
            title="Home"
          />
          <MenuOption
            onClick={() => {
              router.push("/about");
              setSelected("About");
            }}
            active={selected === "About"}
            title="About"
          />
          <MenuOption
            onClick={() => {
              router.push("/contact");
              setSelected("Contact");
            }}
            active={selected === "Contact"}
            title="Contact US"
          />
          <MenuOption
            onClick={() => {
              router.push("/checkout");
              setSelected("Cart");
            }}
            active={selected === "Cart"}
            title="Cart"
          />
          <MenuOption
            onClick={() => {
              router.push("/repair");
              setSelected("repair");
            }}
            active={selected === "repair"}
            title="Repair"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <span
            onClick={() => router.push("/checkout")}
            className="relative cursor-pointer"
          >
            <ShoppingCartIcon className="sm:h-8 h-12  hover:text-gray-300" />
            <sup className="absolute -top-1 py-2 sm:-top-2 sm:left-6 left-9 bg-red-600 text-white p-1 rounded-full">
              {basket.length}
            </sup>
          </span>
          <span
            onClick={() => router.push("/repairCheckout")}
            className="relative cursor-pointer -mt-0.5"
          >
            <FontAwesomeIcon
              icon={faScrewdriver}
              className="sm:h-8 h-9 hover:text-gray-300 text-4xl"
            />
            <sup className="absolute -top-3 py-2 sm:-top-2 left-4 bg-red-600 text-white p-1 rounded-full">
              {repairBasket.length}
            </sup>
          </span>
          <p className="text-lg md:inline-flex hidden">
            {session ? `Hello! ${session.user.name}` : null}
          </p>
        </div>
      </div>

      {/* menuOpen */}
      {open ? (
        <div className="bg-amazon_blue animation">
          <div className=" flex flex-col items-left space-y-3 text-white px-8 py-5 ">
            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <HomeIcon className="h-10 p-2 text-gray-400" />

              <p
                className=" cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono"
                onClick={() => router.push("/")}
              >
                Home
              </p>
            </div>

            <hr />

            <div className="items-center flex hover:bg-gray-700 rounded-md ">
              <DocumentDuplicateIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono"
                onClick={() => router.push("/about")}
              >
                About Us
              </p>
            </div>

            <hr />

            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <PhoneIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono "
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </p>
            </div>
            <hr />
            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <ChipIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono "
                onClick={() => router.push("/repair")}
              >
                Repair
              </p>
            </div>
            <hr />
            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <ShoppingBagIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono "
                onClick={() => router.push("/checkout")}
              >
                Cart
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
