import sideImage from "../../assets/images/signup-side-Image.jpg"
import LogInForm from "../../components/LogInForm/LogInForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

import css from "./SignUp.module.css"

export default function SignUp({ isSignUp }) {
    return (
    <section className={css.sighnUpWrapper}>
        <img className={css.sideImage} src={sideImage} alt="image of the phone and cart" />
            {isSignUp && <SignUpForm />}
            {!isSignUp && <LogInForm />}
    </section>)
}