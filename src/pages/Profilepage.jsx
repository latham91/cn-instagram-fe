import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import { getPostsByUsername } from "../utils/postFetch";
import PostCard from "../components/PostCard";

export default function Profilepage() {
    const { username } = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            const data = await getPostsByUsername(username);

            if (data.success) {
                setUserPosts(data.userPosts);
                console.log(data);
            }
        };

        fetchUserPosts();
    }, [username]);

    return (
        <section className="py-10 ">
            <Container className="flex flex-col items-center">
                <h1 className="mb-4 text-6xl font-extrabold text-center text-slate-800">@{username}&apos;s posts</h1>
                <div className="mb-10 font-semibold text-center text-slate-800">
                    Joined on {new Date(userPosts.createdAt).toLocaleDateString()}
                </div>
                {userPosts.posts ? (
                    <div
                        className={`grid ${
                            userPosts.posts.length === 1 ? "grid-cols-1" : "grid-cols-2"
                        } w-full gap-5 my-5`}
                    >
                        {!userPosts.posts ? (
                            <h1 className="text-3xl font-bold">No posts found</h1>
                        ) : (
                            userPosts.posts.map((post) => (
                                <PostCard key={post._id} post={post} likes={post.likes} profile />
                            ))
                        )}
                    </div>
                ) : (
                    <h1 className="text-3xl font-bold">Loading...</h1>
                )}
            </Container>
        </section>
    );
}
