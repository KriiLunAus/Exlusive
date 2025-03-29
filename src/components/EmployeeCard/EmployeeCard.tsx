import css from "./EmployeeCard.module.css"
import iconInstagram from "../../assets/svg/icon-instagram.svg"
import iconTwitter from "../../assets/svg/devicon_twitter.svg"
import iconLinkedin from "../../assets/svg/Icon-Linkedin.svg"
import { Link } from "react-router-dom"


export default function EmployeeCard({img, name, position}) {
  return (
        <div className={css.cardWrapper}>
          <img src={img} alt="person photo" />
          <h3>{name}</h3>
          <p>{position}</p>
          <div className={css.socialWrapper}>
              <Link to={"https://x.com/"}>
                <img src={iconTwitter} />
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <img src={iconInstagram} />
              </Link>
              <Link to={"https://www.linkedin.com/"}>
                <img src={iconLinkedin} />
              </Link>
          </div>
        </div>
  )
}

