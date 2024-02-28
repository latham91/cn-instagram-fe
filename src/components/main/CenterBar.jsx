import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getAllPosts } from "../../utils/postFetch";

import PostCreate from "../PostCreate";
import PostCard from "../PostCard";
import FadeUp from "../FadeUp";

export default function CenterBar() {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getAllPosts();

            if (data.success) {
                setPosts(data.posts);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center w-full sm:w-full md:w-3/5">
                {user && <PostCreate />}
                <div className="grid grid-cols-1 my-5 gap-14">
                    {posts.length === 0 ? (
                        <div className="text-xl font-semibold text-center text-slate-800">
                            No posts yet. Or backend server is booting up. Try again later.
                        </div>
                    ) : (
                        <>
                            <h3 className="text-3xl font-extrabold text-slate-800">Latest posts</h3>
                            <div className="flex flex-col gap-10">
                                {posts.map((post) => (
                                    <FadeUp key={post._id}>
                                        <PostCard post={post} likes={post.likes} />
                                    </FadeUp>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
