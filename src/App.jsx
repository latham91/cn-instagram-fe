import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getOnlineUsers, verifyUser } from "./utils/authFetch";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import { AuthContext } from "./context/AuthContext";
import Profilepage from "./pages/Profilepage";
import CookieBanner from "./components/CookieBanner";
import Userpage from "./pages/Userpage";
import NotFound from "./pages/NotFound";

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

    const { setOnlineUsers } = useContext(AuthContext);

    useEffect(() => {
        const fetchOnlineUsers = async () => {
            const data = await getOnlineUsers();

            if (data.success) {
                setOnlineUsers(data.users);
            }
        };

        fetchOnlineUsers();
    }, [setOnlineUsers]);

    return (
        <>
            {/* <div className="fixed w-[800px] rounded-full h-[800px] -left-52 top-0 bg-blue-500/30 blur-3xl -z-50" />
            <div className="fixed w-[800px] rounded-full h-[800px] -right-52 -bottom-52 bg-teal-400/30 blur-3xl -z-50" /> */}

            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/register" element={<Registerpage />} />
                <Route path="/profile/:username" element={<Profilepage />} />
                <Route path="/account" element={<Userpage />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieBanner />
        </>
    );
}
