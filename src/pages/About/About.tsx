import AboutUsIcon from "../../components/AboutUsIcon/AboutUsIcon"
import aboutUsHome from "../../assets/svg/aboutUsHome.svg"
import aboutUsDollar from "../../assets/svg/aboutUsDollar.svg"
import aboutUsDollarBag from "../../assets/svg/aboutUsDollarBag.svg"
import aboutUsBag from "../../assets/svg/aboutUsBag.svg"
import aboutUsCustomerService from "../../assets/svg/aboutUsCustomerService.svg"
import aboutUsDelivery from "../../assets/svg/aboutUsDelivery.svg"
import aboutUsSecure from "../../assets/svg/aboutUsSecure.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import css from "./About.module.css"
import PeopleSwiper from "../../components/PeopleSwiper/PeopleSwiper"
export default function About() {

const params = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1, // Adjust to display how many slides per view
  spaceBetween: 10, // Adjust the spacing between slides
  loop: true // Optionally enable looping
};


  return (
    <section className={css.aboutWrapper}>
        <div className={css.aboutHero}>
              <div className={css.aboutText}>
                  <h2>Our Story</h2>
                  <div>
                    <p>Launced in 2015, Exclusive is South Asia
                        premier online shopping makterplace with
                        an active presense in Bangladesh. Supported
                        by wide range of tailored marketing, data and
                        service solutions, Exclusive has 10,500 sallers
                        and 300 brands and serves 3 millioons customers
                        across the region. </p>
                    <p>Exclusive has more than
                        1 Million products to offer,
                        growing at a very fast. Exclusive
                        offers a diverse assotment in categories ranging  from consumer.
                    </p>
                  </div>
              </div>
        <div className={css.aboutSideImage}></div>
      </div>
      
      <div className={css.statisticsWrapper}>
        <div className={css.statisticsCard}>
          <AboutUsIcon icon={aboutUsHome} />
          <h3>10.5K</h3>
          <p>Sallers active on our site</p>
        </div>

        <div className={css.statisticsCard}>
          <AboutUsIcon icon={aboutUsDollar} />
          <h3>33K</h3>
          <p>Monthly Product Sale</p>
        </div>

        <div className={css.statisticsCard}>
          <AboutUsIcon icon={aboutUsDollarBag} />
          <h3>45.5K</h3>
          <p>Customers on our site</p>
        </div>

        <div className={css.statisticsCard}>
          <AboutUsIcon icon={aboutUsBag} />
          <h3>25K</h3>
          <p>Anual gross sale in our site</p>
        </div>
      </div>

      <PeopleSwiper />

      <div className={css.customerAssurenseWrapper}>
        <div className={css.customerAssurenceCard}>
          <AboutUsIcon icon={aboutUsDelivery} />
          <h3>free and fast delivery</h3>
          <p>Free delivery for all orders over 140$</p>
        </div>
        <div className={css.customerAssurenceCard}>
          <AboutUsIcon icon={aboutUsCustomerService} />
          <h3>24/7 customer service</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className={css.customerAssurenceCard}>
          <AboutUsIcon icon={aboutUsSecure} />
          <h3>money back guarantee</h3>
          <p>We return money within 30 days</p>
        </div>
    </div>
    </section>
  )
}
