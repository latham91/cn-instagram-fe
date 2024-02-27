import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Camera, LogIn, LogOut, UserPlus } from "lucide-react";

export default function Navbar() {
    const { user, handleLogout } = useContext(AuthContext);
    return (
        <header className="sticky top-0 z-50 py-4 shadow-2xl shadow-slate-400 bg-slate-800">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-extrabold text-slate-100">
                        <Link to="/" className="flex items-center gap-3">
                            <Camera size={36} />
                            Gramster.
                        </Link>
                    </div>
                    <div>
                        {!user ? (
                            <>
                                <div className="flex items-center gap-3">
                                    <Link
                                        to="/register"
                                        className="flex items-center gap-2 font-semibold btn bg-slate-100 text-slate-800"
                                    >
                                        <UserPlus size={20} />
                                        Register
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="flex items-center gap-2 font-semibold btn bg-slate-100 text-slate-800"
                                    >
                                        <LogIn size={20} />
                                        Login
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="text-lg font-semibold btn text-slate-100">
                                    Welcome back, {user.username}
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 font-semibold btn bg-slate-100 text-slate-800"
                                >
                                    <LogOut size={20} />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
}
