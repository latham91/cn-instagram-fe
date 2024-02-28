import { useEffect, useContext } from "react";
import Container from "../components/Container";
import OnlineUser from "../components/OnlineUser";
import CenterBar from "../components/main/CenterBar";
import { getOnlineUsers } from "../utils/authFetch";
import { AuthContext } from "../context/AuthContext";

export default function Homepage() {
    const { onlineUsers, setOnlineUsers } = useContext(AuthContext);

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
        <section className="relative py-10">
            <Container>
                <div className="absolute flex-col items-center justify-center hidden gap-3 lg:flex top-20 left-18 text-slate-800">
                    {onlineUsers.length > 0 && (
                        <div className="mb-3 text-xl font-extrabold text-slate-800">Online users</div>
                    )}
                    {onlineUsers &&
                        onlineUsers.map((user) => (
                            <div key={user._id}>
                                <OnlineUser user={user} />
                            </div>
                        ))}
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <CenterBar />
                </div>
            </Container>
        </section>
    );
}
