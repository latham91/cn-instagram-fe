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
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-full max-w-sm gap-4 my-10">
            {mode === "register" && (
                <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="email" className="font-semibold text-zinc-800">
                        Username:
                    </label>
                    <input
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        type="text"
                        name="text"
                        disabled={loading}
                        placeholder="johndoe123"
                        className="px-4 py-2 border rounded-sm outline-zinc-500 text-slate-800"
                    />
                </div>
            )}
            <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="email" className="font-semibold text-zinc-800">
                    Email address:
                </label>
                <input
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    type="email"
                    name="email"
                    disabled={loading}
                    placeholder="johndoe@mail.com"
                    className="px-4 py-2 border rounded-sm outline-zinc-500 text-slate-800"
                />
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="password" className="font-semibold text-zinc-800">
                    Password:
                </label>
                <input
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    type="password"
                    name="password"
                    disabled={loading}
                    placeholder="Password"
                    className="px-4 py-2 border rounded-sm outline-zinc-500 text-slate-800"
                />
            </div>

            {errorMsg && (
                <div className="flex items-center gap-2 p-2 text-red-700 bg-red-300 border border-red-600 rounded-sm animate-pulse">
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
                    className="font-semibold text-slate-600 hover:underline"
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
