import PropTypes from "prop-types";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthForm({ mode }) {
    const { errorMsg, loading, credentials, setCredentials, handleRegister, handleLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === "register") {
            handleRegister();
        }

        if (mode === "login") {
            handleLogin();
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 w-full max-w-sm my-10">
            {mode === "register" && (
                <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="email" className="text-zinc-800">
                        Username:
                    </label>
                    <input
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        type="text"
                        name="text"
                        disabled={loading}
                        placeholder="johndoe123"
                        className="py-2 px-4 border rounded-sm outline-blue-500"
                    />
                </div>
            )}
            <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="email" className="text-zinc-800">
                    Email address:
                </label>
                <input
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    type="email"
                    name="email"
                    disabled={loading}
                    placeholder="johndoe@mail.com"
                    className="py-2 px-4 border rounded-sm outline-blue-500"
                />
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="password" className="text-zinc-800">
                    Password:
                </label>
                <input
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    type="password"
                    name="password"
                    disabled={loading}
                    placeholder="Password"
                    className="py-2 px-4 border rounded-sm outline-blue-500"
                />
            </div>

            {errorMsg && (
                <div className="flex animate-pulse items-center gap-2 p-2 border border-red-600 bg-red-300 text-red-700 rounded-sm">
                    <ShieldAlert size={20} />
                    {errorMsg}
                </div>
            )}

            <button
                className="btn btn-primary disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-600"
                disabled={loading}
            >
                {mode === "register" ? "Create account" : "Login"}
            </button>
            <div className="text-zinc-800">
                {mode === "register" ? "Already" : "Don't"} have an account?{" "}
                <Link
                    to={mode === "register" ? "/login" : "/register"}
                    className="text-blue-500 font-semibold hover:underline"
                >
                    {mode === "register" ? "Login" : "Register"}
                </Link>
            </div>
        </form>
    );
}

AuthForm.propTypes = {
    mode: PropTypes.oneOf(["register", "login"]).isRequired,
};
