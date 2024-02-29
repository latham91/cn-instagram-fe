import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Camera, LogIn, LogOut, UserPlus } from "lucide-react";
import OnlineUser from "./OnlineUser";

export default function Navbar() {
    const { user, handleLogout, onlineUsers } = useContext(AuthContext);

    return (
        <header className="fixed top-0 z-50 h-screen p-4 shadow-2xl hidden sm:block w-full max-w-[70px] md:max-w-[350px] shadow-slate-400 bg-slate-800">
            <nav className="flex flex-col items-center h-full">
                <div className="text-3xl font-extrabold text-slate-100">
                    <Link to="/" className="flex items-center gap-3">
                        <Camera size={36} />
                        <span className="hidden md:block">Gramster.</span>
                    </Link>
                </div>
                <div className="w-full h-full">
                    {!user ? (
                        <>
                            <div className="flex flex-col items-center gap-3 py-10">
                                <Link
                                    to="/register"
                                    className="flex items-center justify-center w-full gap-2 font-semibold btn bg-slate-100 text-slate-800"
                                >
                                    <UserPlus size={20} />
                                    Register
                                </Link>
                                <Link
                                    to="/login"
                                    className="flex items-center justify-center w-full gap-2 font-semibold btn bg-slate-100 text-slate-800"
                                >
                                    <LogIn size={20} />
                                    Login
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col justify-end w-full h-full py-8 md:justify-between">
                            <div className="flex-col hidden text-xl text-center md:flex">
                                <span>Welcome back</span>
                                <span className="pb-5 text-2xl font-semibold border-b border-dashed">
                                    @{user.username.toLowerCase()}
                                </span>
                                {onlineUsers && (
                                    <div className="py-10">
                                        <div className="mb-1 font-semibold">Currently online</div>
                                        <div className="online-user-container">
                                            {onlineUsers.map((user) => (
                                                <OnlineUser key={user._id} user={user} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 py-3 font-semibold rounded-sm bg-slate-100 text-slate-800"
                            >
                                <LogOut size={20} />
                                <span className="hidden md:block">Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
