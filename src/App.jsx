import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { verifyUser } from "./utils/authFetch";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import { AuthContext } from "./context/AuthContext";
import Profilepage from "./pages/Profilepage";
import CookieBanner from "./components/CookieBanner";

export default function App() {
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await verifyUser();

            if (data.success) {
                setUser(data.user);
            }
        };

        fetchUser();
    }, [setUser]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/register" element={<Registerpage />} />
                <Route path="/profile/:username" element={<Profilepage />} />
            </Routes>
            <CookieBanner />
        </>
    );
}
