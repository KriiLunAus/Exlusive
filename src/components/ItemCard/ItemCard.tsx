import css from "./ItemCard.module.css"
import itemImg from "../../assets/images/itemImg.png"
import eyeIcon from "../../assets/svg/eyeIcon.svg"
import wishlistIcon from "../../assets/svg/Wishlist.svg"

export default function ItemCard() {
  return (
      <div className={css.itemCardWrapper}>
          <div className={css.itemImg}>
              <div className={css.discount}>-40%</div>
              <div className={css.cardIconsWrapper}>
                  <div>
                    <img src={wishlistIcon} />
                  </div>
                  <div>
                    <img src={eyeIcon} />
                  </div>
              </div>
              <img width={190} height={180} src={itemImg} />
              <button className={css.addToCartBtn}>Add To Cart</button>
          </div>
          <div className={css.itemInfo}>
              <p>HAVIT HV-G92 Gamepad</p>
              <p className={css.price}>$120<span className={css.previousPrice}>$160</span></p>
              <div>stars <span className={css.reviewsCount}>{`(${88})`}</span></div>
          </div>
    </div>
  )
}
