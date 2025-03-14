import { Link } from "react-router-dom"
import css from "./SignUpForm.module.css"
import iconGoogle from "../../assets/svg/Icon-Google.svg"


export default function SignUpForm() {
    return (
        <form className={css.form}>
        <h2 className={css.createAccHeader}>Create an account</h2>
        <p className={css.enterDetails}>Enter your details below</p>
        <div className={css.inputsWrapper}> 
            <input placeholder="Name" type="text" />
            <input placeholder="Email or Phone Number" type="text" />
            <input placeholder="Password" type="text" />
        </div>
        <button type="button" className={css.createAccBtn}>Create Account</button>
            <button type="button" className={css.sighWithGoogle}>
                <div>
                    <img className={css.iconGoogle} src={iconGoogle} />
                    <p>
                    Sign up with Google
                    </p>
            </div>
            </button>
        <p style={{textAlign: "center"}}>Already have an account? <Link to="/log-in">Log In</Link></p>
        </form>
    )
}
