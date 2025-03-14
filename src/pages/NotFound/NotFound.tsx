import css from "./NotFound.module.css"
import { Link } from "react-router-dom"

export default function NotFound() {
    return ( 
        <section className={css.notFoundWrapper}>
            <h2>404 Not Found</h2>
            <p>Your visited page not found. You may go home page.</p>
            <Link className={css.backHome} to="/">Back to home page</Link>
        </section>
    )
}