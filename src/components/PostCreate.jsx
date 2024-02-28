import { ImagePlus, Newspaper } from "lucide-react";
import { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";

export default function PostCreate() {
    const { handleCreatePost, loading, errorMsg } = useContext(PostContext);
    const { user } = useContext(AuthContext);
    const [textAreaLength, setTextAreaLength] = useState(0);
    const [fileName, setFileName] = useState("");
    const [postBody, setPostBody] = useState({
        description: "",
        id: user.id,
        image: null,
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result;
                setPostBody({ ...postBody, image: base64 });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        const data = await handleCreatePost(postBody);

        if (!data.success) {
            return console.log(data.message);
        }

        window.location.reload();
    };

    return (
        <div className="flex w-full mb-10 border rounded-md shadow-2xl shadow-slate-400 border-slate-300 bg-slate-800">
            <div className="flex flex-col w-full gap-5 p-4">
                <div>
                    <span className="text-xl font-semibold">@{user.username}</span>
                    <textarea
                        onChange={(e) => {
                            setTextAreaLength(e.target.value.length);
                            setPostBody({
                                ...postBody,
                                description: e.target.value,
                            });
                        }}
                        placeholder="Whats on your mind?"
                        className="border py-2 px-4 mt-2 rounded-sm w-full max-h-[150px] min-h-[70px] text-slate-800 focus:outline-slate-800"
                        maxLength={255}
                    />
                    <div className="flex items-center justify-between">
                        {errorMsg && <span className="text-red-500 animate-pulse">{errorMsg}</span>}
                        <span className="flex justify-end">{textAreaLength}/255 characters</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <input
                            onChange={handleFileChange}
                            type="file"
                            id="image"
                            name="image"
                            className="hidden"
                            accept="image/*"
                        />
                        <label htmlFor="image" className="flex items-center gap-3 font-semibold cursor-pointer">
                            <ImagePlus size={34} />
                            <span>{postBody.image ? fileName : "Upload an image"}</span>
                        </label>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex items-center gap-2 btn bg-zinc-100 text-slate-800"
                    >
                        <Newspaper size={16} />
                        {loading ? "Posting..." : "Post"}
                    </button>
                </div>
            </div>
        </div>
    );
}
