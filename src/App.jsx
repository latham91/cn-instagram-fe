import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { sendOfflineSignal, verifyUser } from "./utils/authFetch";

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

    useEffect(() => {
        const handleBeforeUnload = async (e) => {
            e.preventDefault();
            // Send a final signal to the server before the page is unloaded
            await sendOfflineSignal();
        };

        window.addEventListener("visibilitychange", (e) => handleBeforeUnload(e));

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            window.removeEventListener("visibilitychange", handleBeforeUnload);
        };
    }, []);

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
