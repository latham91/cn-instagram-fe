import { ImagePlus, Newspaper } from "lucide-react";
import { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";

export default function PostCreate() {
    const { handleCreatePost } = useContext(PostContext);
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
                // Update state with the Base64 string after the file is read
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

        console.log(data);
    };

    return (
        <div className="flex w-full border rounded-md border-slate-300 bg-slate-800">
            <div className="flex w-full p-4 flex-col gap-5">
                <div>
                    <span className="font-semibold">@aaron</span>
                    <textarea
                        onChange={(e) => {
                            setTextAreaLength(e.target.value.length);
                            setPostBody({
                                ...postBody,
                                description: e.target.value,
                            });
                        }}
                        placeholder="Whats on your mind?"
                        className="border py-2 px-4 rounded-sm w-full max-h-[150px] min-h-[70px] text-slate-800 focus:outline-slate-800"
                        maxLength={255}
                    />
                    <span className="flex justify-end">{textAreaLength}/255</span>
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
                        <label htmlFor="image" className="cursor-pointer">
                            <ImagePlus size={24} />
                        </label>
                        {postBody.image && <span>{fileName}</span>}
                    </div>
                    <button onClick={handleSubmit} className="btn bg-zinc-100 text-slate-800 flex items-center gap-2">
                        <Newspaper size={16} />
                        Create post
                    </button>
                </div>
            </div>
        </div>
    );
}
