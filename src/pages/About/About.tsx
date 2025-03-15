import css from "./About.module.css"

export default function About() {
  return (
    <section className={css.aboutWrapper}>
          <div className={css.aboutHero}>
              <div className={css.aboutText}>
                  <h2>Our Story</h2>
                  <div>
                    <p>Launced in 2015, Exclusive is South Asia
                        premier online shopping makterplace with
                        an active presense in Bangladesh. Supported
                        by wide range of tailored marketing, data and
                        service solutions, Exclusive has 10,500 sallers
                        and 300 brands and serves 3 millioons customers
                        across the region. </p>
                    <p>Exclusive has more than
                        1 Million products to offer,
                        growing at a very fast. Exclusive
                        offers a diverse assotment in categories ranging  from consumer.
                    </p>
                  </div>
              </div>
              <div className={css.aboutSideImage}></div>
        </div>
    </section>
  )
}
