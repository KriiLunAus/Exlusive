import css from "./Assurence.module.css"
import AboutUsIcon from "../AboutUsIcon/AboutUsIcon"
import aboutUsCustomerService from "../../assets/svg/aboutUsCustomerService.svg"
import aboutUsDelivery from "../../assets/svg/aboutUsDelivery.svg"
import aboutUsSecure from "../../assets/svg/aboutUsSecure.svg"

export default function Assurence() {
  return (
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
  )
}
