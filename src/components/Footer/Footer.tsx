import css from "./Footer.module.css"
import iconCopyright from "../../assets/images/icon-copyright.png"
export default function Footer() {
    return (<section className={css.footerWrapper}>
    <div className={css.linksWrapper}>
            <div>
                <h3 className={css.linksHeader}>Exclusive</h3>
                <div className={css.links}>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <input type="text" />
                </div>
        </div>
            <div>
                <h3 className={css.linksHeader}>Support</h3>
                <div className={css.links}>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
        </div>
            <div>
                <h3 className={css.linksHeader}>Account</h3>
                <div className={css.links}>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
        </div>
            <div>
                <h3 className={css.linksHeader}>Quick Link</h3>
                <div className={css.links}>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h3 className={css.linksHeader}>Download</h3>
        </div>
    </div>

        <div className={css.footerCopyright}>
            <div className={css.cImage}>
                <img width={20} height={20} src={iconCopyright} />
            </div>
            <p>
                Copyright Rimel 2022. All right reserved
            </p>
        </div>
    </section>)
}