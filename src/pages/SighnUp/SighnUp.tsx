import sideImage from "../../assets/images/signup-side-Image.jpg"
import iconGoogle from "../../assets/svg/Icon-Google.svg"

import css from "./SighnUp.module.css"
import { Link }  from "react-router-dom"

export default function SighnUp() {
    return (<section className={css.sighnUpWrapper}>
        <img className={css.sideImage} src={sideImage} alt="image of the phone and cart" />
        <form className={css.form}>
        <h2 className={css.createAccHeader}>Create an account</h2>
        <p className={css.enterDetails}>Enter your details below</p>
        <div className={css.inputsWrapper}> 
            <input placeholder="Name" type="text" />
            <input placeholder="Email or Phone Number" type="text" />
            <input placeholder="Password" type="text" />
        </div>
        <button className={css.createAccBtn}>Create Account</button>
            <button className={css.sighWithGoogle}>
                <div>
                    <img className={css.iconGoogle} src={iconGoogle} />
                    <p>
                    Sign up with Google
                    </p>
            </div>
            </button>
        <p style={{textAlign: "center"}}>Already have an account? <Link to="/log-in">Log In</Link></p>
        </form>
    </section>)
}