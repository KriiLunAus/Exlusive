import css from "./Contact.module.css"
import envelop from "../../assets/svg/envelop.svg"
import phone from "../../assets/svg/phone.svg"

export default function Contact() {
    return (<section className={css.contactWrapper}>
    <div className={css.ourInfo}>
        <div className={css.callToUs}>
            <h3 className={css.infoHeading}><div className={css.iconWrapper}><img src={phone} alt="" /></div>Call To Us</h3>
            <div className={css.paragraphs}>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
        </div>
        <div className={css.writeToUs}>
            <h3 className={css.infoHeading}><div className={css.iconWrapper}><img src={envelop} /></div>Write To US</h3>
            <div className={css.paragraphs}>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
            </div>
        </div>
    </div>
        <div className={css.contactForm}>
            <form onSubmit={(evt)=>{evt.preventDefault()}} >
                <div className={css.yourInfo}>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="tel" placeholder="Your Phone"  />
                </div>
                <div className={css.yourText}>
                    <textarea  placeholder="Your Message" cols={200} rows={100}/>
                </div>
                <div className={css.btnWrapper}>
                    <button  className={css.sendMessage} type="submit">
                        Send Message
                    </button>
                </div>
            </form>
    </div>
    </section>)
}