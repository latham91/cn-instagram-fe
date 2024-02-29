import AuthForm from "../components/AuthForm";

export default function Loginpage() {
    return (
        <section className="flex justify-center w-full h-screen py-10">
            <div className="md:w-full w-[70px] hidden sm:block max-w-[350px]" />
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-5xl font-extrabold text-zinc-800">Welcome back</h1>
                <p className="text-lg text-slate-600">
                    Log in to your account to connect with friends and share moments.
                </p>
                <AuthForm mode="login" />
            </div>
        </section>
    );
}
