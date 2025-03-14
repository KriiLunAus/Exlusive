import css from "./Header.module.css"
import clsx from "clsx"
import { NavLink } from "react-router-dom"

import searchIcon from "../../assets/svg/search.svg"

export default function Header() {
    

    const buildLinkClass = (isActive: boolean) => { return clsx(css.link, isActive ? css.active : "")}

    return (
        <header className={css.headerWrapper}>
            <h1 className={css.exlusive}>Exlusive</h1>
            <div className={css.links}>
                <NavLink className={({isActive})=>buildLinkClass(isActive)} to="/">Home</NavLink>
                <NavLink className={({isActive})=>buildLinkClass(isActive)} to="/contact">Contact</NavLink>
                <NavLink className={({isActive})=>buildLinkClass(isActive)} to="/about">About</NavLink>
                <NavLink className={({isActive})=>buildLinkClass(isActive)} to="/sign-up">Sign Up</NavLink>
            </div>
            <div className={css.inputWrapper}>
                <input placeholder="What are you looking for?" type="text" />
                <button><img src={searchIcon} alt="search" width={24} height={24} /></button>
            </div>
        </header>
    )
}