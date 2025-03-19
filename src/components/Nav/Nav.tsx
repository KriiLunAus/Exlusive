import { Routes, Route } from "react-router-dom"
import SignUp from "../../pages/SignUp/SignUp"
import NotFound from "../../pages/NotFound/NotFound"
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact"

export default function Nav() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUp isSignUp={true} />} />
            <Route path="/log-in" element={<SignUp isSignUp={false} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        
    )
}