import css from "./App.module.css"
import Footer from '../Footer/Footer'
import Header from "../Header/Header"
import SighnUp from "../../pages/SighnUp/SighnUp"

function App() {

  return (
    <>
      <Header />
      <main className={css.mainWrapper}>
        <SighnUp />
      </main>
      <Footer />
  </>
  )
}

export default App
