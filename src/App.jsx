import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";

export default function App() {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/register" element={<Registerpage />} />
            </Routes>
        </Container>
    );
}
