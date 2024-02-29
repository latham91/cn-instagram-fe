import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUsersLikedPosts } from "../utils/postFetch";
import PostCard from "../components/PostCard";

export default function Accountpage() {
    const { user } = useContext(AuthContext);
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        const fetchLikedPosts = async () => {
            const data = await getUsersLikedPosts();

            setLikedPosts(data.posts);
        };

        fetchLikedPosts();
    }, []);

    return (
        <section className="flex items-center justify-center px-5 py-10 sm:px-14">
            <div className="md:w-full w-[70px] hidden sm:block max-w-[350px]" />

            <div className="flex flex-col items-center w-3/5">
                <div className="w-full mb-10">
                    <h1 className="mb-10 text-5xl font-extrabold text-center text-slate-800">
                        @{user.username}&apos;s profile
                    </h1>
                    <span className="text-3xl font-semibold text-slate-800">Your liked moments</span>
                </div>
                <div className="grid w-full grid-cols-1 gap-5">
                    {likedPosts && likedPosts.length > 0 ? (
                        likedPosts.map((post) => <PostCard key={post._id} post={post} likes={post.likes} profile />)
                    ) : (
                        <div className="text-slate-800">You don&apos;t have any liked posts yet.</div>
                    )}
                </div>
            </div>
        </section>
    );
}
