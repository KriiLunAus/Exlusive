import css from "./LogInForm.module.css"

export default function LogInForm() {
    return (
        <form className={css.form}>
        <h2 className={css.createAccHeader}>Log in to Exlusive</h2>
        <p>Enter your details below</p>
        <div className={css.inputsWrapper}> 
            <input placeholder="Email or Phone Number" type="text" />
            <input placeholder="Password" type="text" />
            </div>
            <div className={css.loginAndForgetPass}>
                <button type="button" className={css.createAccBtn}>Log In</button>
                <p>Forget password?</p>
            </div>
        </form>
    )
}