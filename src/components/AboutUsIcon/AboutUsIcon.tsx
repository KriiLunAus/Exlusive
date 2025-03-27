import css from "./AboutUsIcon.module.css"

export default function AboutUsIcon({icon}) {
    return (
        <div className={css.outerCircle}>
            <div className={css.innerCircle}>
                <img color="black" src={icon} className={css.icon}/>
            </div>
        </div>
  )
}

