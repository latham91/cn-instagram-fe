import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPostsByUsername } from "../utils/postFetch";
import PostCard from "../components/PostCard";

export default function Profilepage() {
    const { username } = useParams();
    const [userPosts, setUserPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserPosts = async () => {
            const data = await getPostsByUsername(username);

            if (data.success) {
                return setUserPosts(data.userPosts);
            }

            navigate("/not-found");
        };

        fetchUserPosts();
    }, [username, navigate]);

    return (
        <section className="flex items-center justify-center px-5 py-10 sm:px-14">
            <div className="md:w-full w-[70px] hidden sm:block max-w-[350px]" />
            <div>
                <h1 className="mb-4 text-6xl font-extrabold text-center text-slate-800">@{username}&apos;s posts</h1>
                <div className="mb-10 font-semibold text-center text-slate-800">
                    Joined on {userPosts[0] && new Date(userPosts[0].userId.createdAt).toLocaleDateString()}
                </div>
                {userPosts ? (
                    <div className={`grid grid-cols-1 xl:grid-cols-2 w-full gap-5 my-5`}>
                        {!userPosts ? (
                            <h1 className="text-3xl font-bold">No posts found</h1>
                        ) : (
                            userPosts.map((post) => <PostCard key={post._id} post={post} likes={post.likes} profile />)
                        )}
                    </div>
                ) : (
                    <h1 className="text-3xl font-bold">Loading...</h1>
                )}
            </div>
        </section>
    );
}
