import {Navigation, Pagination} from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
import baleImg from "../../assets/images/christian-bale.png"
import emmaImg from "../../assets/images/emma-watson.png"
import tomImg from "../../assets/images/tom-cruise.png"
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import css from "./PeopleSwiper.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function PeopleSwiper() {
  return (
    <Swiper
      className={css.swiperWrapper}
      initialSlide={2}
      modules={[ Pagination ]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true, type: "bullets", horizontalClass: `${css.swiper}`, bulletActiveClass: `${css.activeBullet}` }}
    >
       <SwiperSlide>
        <EmployeeCard img={tomImg} name={"Tom Cruise"} position={"Founder & Chairman"} />
      </SwiperSlide>

      <SwiperSlide>
        <EmployeeCard img={baleImg} name={"Christian Bale"} position={"Product Designer"} />
      </SwiperSlide>

      <SwiperSlide>
        <EmployeeCard img={tomImg} name={"Tom Cruise"} position={"Founder & Chairman"} />
      </SwiperSlide>

      <SwiperSlide>
        <EmployeeCard img={emmaImg} name={"Emma Watson"} position={"Managing Director"} />
      </SwiperSlide>

      <SwiperSlide>
        <EmployeeCard img={baleImg} name={"Christian Bale"} position={"Product Designer"} />
      </SwiperSlide>

      <SwiperSlide>
        <EmployeeCard img={emmaImg} name={"Emma Watson"} position={"Managing Director"} />
      </SwiperSlide>

      <SwiperSlide>
        <EmployeeCard img={tomImg} name={"Tom Cruise"} position={"Founder & Chairman"} />
      </SwiperSlide>

    </Swiper>
  )
}


