import Container from "../components/Container";
import AuthForm from "../components/AuthForm";

export default function Loginpage() {
    return (
        <section className="py-10">
            <Container>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-5xl font-extrabold text-zinc-800">Create your account</h1>
                    <p className="text-lg text-slate-600">
                        Create an account and begin sharing your moments with friends.
                    </p>
                    <AuthForm mode="register" />
                </div>
            </Container>
        </section>
    );
}
