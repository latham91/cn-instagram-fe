import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function CookieBanner() {
    const [banner, setBanner] = useState(true);

    useEffect(() => {
        const cookies = new Cookies();
        const cookie = cookies.get("cookieBanner");

        if (cookie === "accepted") {
            setBanner(false);
        }
    }, []);

    const handleAccept = () => {
        const cookies = new Cookies();
        cookies.set("cookieBanner", "accepted");
        setBanner(false);
    };
    return (
        <>
            {banner && (
                <div>
                    <div className="fixed bottom-0 z-50 flex items-center justify-center w-full gap-5 p-8 text-center bg-white shadow-lg text-slate-800 shadow-slate-800">
                        <p className="text-lg">We use cookies to ensure you get the best experience on our website.</p>
                        <button onClick={handleAccept} className="font-semibold bg-green-500 btn text-slate-100">
                            Accept
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
