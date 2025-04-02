import Assurence from "../../components/Assurence/Assurence"
import ItemCard from "../../components/ItemCard/ItemCard"
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <section className={css.homeWrapper}>
          <ItemCard />
        <Assurence />
    </section>
  )
}
