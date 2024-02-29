import CenterBar from "../components/main/CenterBar";

export default function Homepage() {
    return (
        <section className="flex items-center justify-center px-5 py-10 sm:px-14">
            <div className="md:w-full w-[70px] hidden sm:block max-w-[350px]" />
            <div className="grid grid-cols-1 place-items-center">
                <CenterBar />
            </div>
        </section>
    );
}
