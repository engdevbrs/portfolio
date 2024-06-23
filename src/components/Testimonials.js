import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <section className="pp-section pp-scrollable">
      <div className="container">
      <div className="title">
        <h3>Projects.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="project-01 media">
          <div className="avatar">
            <img src="static/img/team-1.jpg" title="" alt="" />
          </div>
          <div className="media-body">
          <h6>FEB/2023 to NOV/2023</h6>
            <p>I have developed a Chilean web application, whose objective is to create a
              marketplace for trades workers such as carpenters, welders, gas fitters, who need casual jobs
              requested by customers who need to solve a problem urgently or quickly.
            </p>
            <h6>IRODUM</h6>
            <span>CEO at pxdraft</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-01 media">
          <div className="avatar">
            <img src="static/img/team-2.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s.
            </p>
            <h6>Jennifer Lutheran</h6>
            <span>CEO at pxdraft</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </div>
    </section>
  );
};
export default Testimonials;
