import css from "./Header.module.css"
import clsx from "clsx"
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import searchIcon from "../../assets/svg/search.svg"
import cartIcon from "../../assets/svg/Cart.svg"
import wishlistIcon from "../../assets/svg/Wishlist.svg"
import userIcon from "../../assets/svg/user.svg"
import cancelIcon from "../../assets/svg/icon-cancel.svg"
import logoutIcon from "../../assets/svg/Icon-logout.svg"
import mallbagIcon from "../../assets/svg/icon-mallbag.svg"
import reviewsIcon from "../../assets/svg/Icon-Reviews.svg"



export default function Header() {
    
    const [accDropdownIsOpen, setAccDropdownIsOpen] = useState(false);

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
            <div className={css.rightSideHeader} >
                <div className={css.inputWrapper}>
                    <input placeholder="What are you looking for?" type="text" />
                    <button><img src={searchIcon} alt="search" width={24} height={24} /></button>
                </div>
                <div className={css.userInt}>
                    <img width={32} height={32} src={wishlistIcon}/>
                    <img width={32} height={32} src={cartIcon} />
                    <button className={css.dropDownBtn} onClick={()=>{setAccDropdownIsOpen(accDropdownIsOpen ? false : true)}}>
                        <img width={32} height={32} src={userIcon} />
                    </button>
                </div>
                {accDropdownIsOpen &&
                    <div className={css.accDropDownWrapper}>
                        <div className={css.accDropDown}>
                            <Link className={css.dropDownLink} to="/user-account">
                            <img width={24} height={24} src={userIcon} />
                            Manage My Account</Link>
                            <Link className={css.dropDownLink} to="/">
                            <img width={24} height={24} src={mallbagIcon} />
                            My Order</Link>
                            <Link className={css.dropDownLink} to="/">
                            <img width={24} height={24} src={cancelIcon} />
                            My Cancellations</Link>
                            <Link className={css.dropDownLink} to="/">
                            <img width={24} height={24} src={reviewsIcon} />
                            My Reviews</Link>
                            <Link className={css.dropDownLink} to="/">
                            <img width={24} height={24} src={logoutIcon} />
                            Logout</Link>
                        </div>
                    </div>}    
            </div>
        </header>
    )
}