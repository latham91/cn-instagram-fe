import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";

export default function Profilepage() {
    const { username } = useParams();

    useEffect(() => {
        // TODO: Get usernames posts
        console.log("Username: ", username);
    }, [username]);

    return (
        <section className="py-10 text-slate-800">
            <Container className="flex flex-col items-center">
                <h1 className="mb-10 text-6xl font-extrabold">@{username} profile</h1>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>card</div>
                    <div>card</div>
                    <div>card</div>
                    <div>card</div>
                </div>
            </Container>
        </section>
    );
}
