import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getAllPosts } from "../../utils/postFetch";

import PostCreate from "../PostCreate";
import PostCard from "../PostCard";
import FadeUp from "../FadeUp";
import Spinner from "../Spinner";

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
        <div className="flex justify-center">
            <div className="flex flex-col justify-center w-full md:w-4/6">
                {user && <PostCreate />}
                <div className="grid grid-cols-1 my-5 gap-14">
                    {posts.length === 0 ? (
                        <div className="flex flex-col w-[400px] gap-5 text-xl font-semibold items-center justify-center text-slate-800">
                            <p className="text-center">
                                Render server spinning up <br /> please wait
                            </p>
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <h3 className="text-4xl font-extrabold text-slate-800">Latest posts</h3>
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
        </div>
    );
}
