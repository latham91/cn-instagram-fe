import Container from "../components/Container";
import CenterBar from "../components/main/CenterBar";

export default function Homepage() {
    return (
        <section className="py-10">
            <Container>
                <div className="grid grid-cols-1 place-items-center">
                    <CenterBar />
                </div>
            </Container>
        </section>
    );
}
