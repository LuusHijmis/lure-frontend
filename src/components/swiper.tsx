import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import offerData from "../data/offer-data";
import recept from "../images/recept.jpeg"

function SwiperComp() {

    const images = [
        {
            url: recept,
            alternativeText: "Sweden Photo One"
        },
        {
            url: "recept",
            alternativeText: "Sweden Photo Two"
        },
        {
            url: recept,
            alternativeText: "Sweden Photo Three"
        },
        {
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fallesvoortaarten.nl%2Fwp-content%2Fuploads%2F2020%2F10%2Fhome_07_slider_03-1.png&imgrefurl=https%3A%2F%2Fallesvoortaarten.nl%2F&tbnid=ZZrdyeMZYXU7PM&vet=12ahUKEwj-_MHjk7D4AhURP-wKHZrjAqYQMygUegUIARDaAw..i&docid=fF6YBwXVs0xTwM&w=777&h=987&q=taart&ved=2ahUKEwj-_MHjk7D4AhURP-wKHZrjAqYQMygUegUIARDaAw",
            alternativeText: "Je moeder"
        }
    ];


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            id="main"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onClick={(swiper) => console.log("geclicked")}
            onSwiper={(swiper) => console.log(swiper)}
            onInit={(swiper) => console.log("Swiper initialized!", swiper)}
            onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
            }}
            onReachEnd={() => console.log("Swiper end reached")}
        >
            {images.map((photo, index) => (
              <SwiperSlide key={index}>
                  <img
                      src={photo.url}
                      style={{ width: "250px" }}
                  />
              </SwiperSlide>
            ))}
            {/*{slides}*/}
            {/*{slideShow}*/}
        </Swiper>
    );
};

export default SwiperComp;