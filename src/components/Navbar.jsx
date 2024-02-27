import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, handleLogout } = useContext(AuthContext);
    return (
        <header className="bg-slate-800">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-extrabold text-slate-100">
                        <Link to="/">SnapGram</Link>
                    </div>
                    <div>
                        {!user ? (
                            <>
                                <div className="flex items-center gap-3">
                                    <Link to="/register" className="font-semibold btn bg-slate-100 text-slate-800">
                                        Register
                                    </Link>
                                    <Link to="/login" className="font-semibold btn bg-slate-100 text-slate-800">
                                        Login
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link to="/profile" className="font-semibold btn text-slate-100">
                                    Welcome back, {user.username}
                                </Link>
                                <button onClick={handleLogout} className="btn bg-slate-100 text-slate-800">
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
