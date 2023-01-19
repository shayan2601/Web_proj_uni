import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img7 from "../components/images/img7.jpg";
import img8 from "../components/images/img8.jpg";
import img9 from "../components/images/img9.jpg";
import img10 from "../components/images/img10.jpg";
import img11 from "../components/images/img11.jpg";
import img12 from "../components/images/img12.jpg";
import img6 from "../components/images/img6.png";

function Banner() {
  return (
    <div className="md:relative mt-14 px-10 mx-auto">
      {/* <div className="absolute md:inline-flex md:bottom-0 md:h-32 md:z-20 md:w-full md:bg-gradient-to-t md:from-gray-400 md:to-transparent hidden" /> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={true}
        interval={3000}
      >
        <div className="md:h-96 h-44">
          <img
            className=" md:h-96"
            loading="lazy"
            src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600"
          />
        </div>
        <div>
          <img
            className=" md:h-96"
            loading="lazy"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        {/* <div>
          <img
            className="object-cover md:h-88"
            src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
          />
        </div> */}
        <div>
          <img
            className=" md:h-96"
            loading="lazy"
            src="https://media.istockphoto.com/photos/repairman-disassembling-smartphone-with-tweezers-picture-id847644282?b=1&k=20&m=847644282&s=170667a&w=0&h=xjpxeHLn2tggqwNrn4_Nf4eugstO3tWPC4irxSk_LeI="
          />
        </div>

        {/* <div>
          <Image
            height={400}
            width={1300}
            className=" md:h-96 object-cover"
            loading="lazy"
            src={img10}
          />
        </div> */}
      </Carousel>
    </div>
  );
}

export default Banner;
