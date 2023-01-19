import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function RepairBanner() {
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
        <div className="">
          <img
            className="md:h-96"
            src="https://images.unsplash.com/photo-1588515603068-adb330f26e92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlcGFpcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <img
            className="md:h-96 "
            loading="lazy"
            src="https://media.istockphoto.com/photos/technician-repairing-a-smarphone-picture-id472354892?b=1&k=20&m=472354892&s=170667a&w=0&h=_HrhoFV7m5NEz6Q-zVXCgQstk0GZbt4x-ZdCN3CiY08="
          />
        </div>
        <div>
          <img
            className="md:h-96 "
            loading="lazy"
            src="https://media.istockphoto.com/photos/mobile-phone-service-picture-id163524134?b=1&k=20&m=163524134&s=170667a&w=0&h=3aZbRYEuVrOxbWZuT9IQE0F121id0aTgXrDm_pd0xHk="
          />
        </div>
      </Carousel>
    </div>
  );
}

export default RepairBanner;
