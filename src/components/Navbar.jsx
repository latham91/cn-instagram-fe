import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, handleLogout } = useContext(AuthContext);
    return (
        <header>
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-extrabold">
                        <Link to="/">SnapGram</Link>
                    </div>
                    <div>
                        {!user ? (
                            <>
                                <div className="flex items-center gap-3">
                                    <Link to="/register" className="btn btn-primary">
                                        Register
                                    </Link>
                                    <Link to="/login" className="btn btn-outline">
                                        Login
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/account" className="btn text-zinc-800 font-semibold">
                                    Welcome back, {user.username}
                                </Link>
                                <button onClick={handleLogout} className="btn btn-primary">
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
}
