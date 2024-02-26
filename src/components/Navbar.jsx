import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
    return (
        <header>
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-extrabold">SnapGram</div>
                    <div className="flex items-center gap-3">
                        <Link to="/register" className="btn btn-primary">
                            Register
                        </Link>
                        <Link to="/login" className="btn btn-outline">
                            Login
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
