import { useEffect, useContext } from "react";
import CenterBar from "../components/main/CenterBar";
import { getOnlineUsers } from "../utils/authFetch";
import { AuthContext } from "../context/AuthContext";

export default function Homepage() {
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
        <section className="flex items-center justify-center px-5 py-10 sm:px-14">
            <div className="md:w-full w-[70px] hidden sm:block max-w-[350px]" />
            <div className="grid grid-cols-1 place-items-center">
                <CenterBar />
            </div>
        </section>
    );
}
