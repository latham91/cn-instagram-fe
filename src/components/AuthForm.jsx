import { ShieldAlert } from "lucide-react";

export default function AuthForm({ mode }) {
    return (
        <form className="flex flex-col gap-4 w-full max-w-sm">
            {mode === "register" && (
                <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="email" className="text-zinc-800">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="text"
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
                    type="email"
                    name="email"
                    placeholder="johndoe@mail.com"
                    className="py-2 px-4 border rounded-sm outline-blue-500"
                />
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="password" className="text-zinc-800">
                    Password:
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="py-2 px-4 border rounded-sm outline-blue-500"
                />
            </div>
            <div className="flex animate-pulse items-center gap-2 p-1 border border-red-600 bg-red-300 text-red-700 rounded-sm">
                <ShieldAlert size={20} />
                Alert message
            </div>
            <button className="btn btn-primary">{mode === "register" ? "Create account" : "Login"}</button>
        </form>
    );
}
