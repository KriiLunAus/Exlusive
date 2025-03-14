import { Routes, Route } from "react-router-dom"
import SignUp from "../../pages/SignUp/SignUp"
import NotFound from "../../pages/NotFound/NotFound"

export default function Nav() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUp isSignUp={true} />} />
            <Route path="/log-in" element={<SignUp isSignUp={false} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        
    )
}