import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { loginUser, registerUser } from "../utils/authFetch";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const cookies = new Cookies();

    // Auth State
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [credentials, setCredentials] = useState({});

    // Register User
    const handleRegister = async () => {
        try {
            setLoading(true);
            const data = await registerUser(credentials);

            if (!data.success) {
                setTimeout(() => {
                    setErrorMsg("");
                }, 3000);

                setLoading(false);
                return setErrorMsg(data.message);
            }

            setLoading(false);
            setCredentials({});
            navigate("/login");
        } catch (error) {
            setTimeout(() => {
                setErrorMsg("");
            }, 3000);

            setLoading(false);
            return setErrorMsg(error.message);
        }
    };

    // Login User
    const handleLogin = async () => {
        try {
            setLoading(true);
            const data = await loginUser(credentials);

            if (!data.success) {
                setTimeout(() => {
                    setErrorMsg("");
                }, 3000);

                setLoading(false);
                return setErrorMsg(data.message);
            }

            setLoading(false);
            setUser(data.user);
            setCredentials({});
            cookies.set("insta_auth", data.token);

            navigate("/");
        } catch (error) {
            setTimeout(() => {
                setErrorMsg("");
            }, 3000);

            setLoading(false);
            return setErrorMsg(error.message);
        }
    };

    const handleLogout = () => {
        cookies.remove("insta_auth");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading,
                errorMsg,
                setErrorMsg,
                credentials,
                setCredentials,
                handleRegister,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
