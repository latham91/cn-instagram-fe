export default function NotFound() {
    return (
        <div className="flex">
            <div className="md:w-full w-[70px] hidden sm:block max-w-[350px]" />
            <div className="flex flex-col items-center justify-center w-full h-screen gap-5 text-slate-800">
                <h1 className="text-5xl font-extrabold text-slate-800">404 Page Not Found</h1>
                <p className="text-xl">Page not found. Must&apos;ve been abducted by aliens.</p>
            </div>
        </div>
    );
}
