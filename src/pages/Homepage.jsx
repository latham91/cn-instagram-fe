import Container from "../components/Container";
import LeftBar from "../components/main/LeftBar";
import CenterBar from "../components/main/CenterBar";
import RightBar from "../components/main/RightBar";

export default function Homepage() {
    return (
        <section>
            <Container>
                <div className="relative flex justify-center w-full">
                    <LeftBar />
                    <CenterBar />
                    <RightBar />
                </div>
            </Container>
        </section>
    );
}
