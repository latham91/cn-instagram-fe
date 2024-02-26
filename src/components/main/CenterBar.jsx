import PostCreate from "../PostCreate";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getAllPosts } from "../../utils/postFetch";
import PostCard from "../PostCard";

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
        <div className="flex justify-center flex-col overflow-y-auto w-full sm:w-full md:w-3/5">
            {user && <PostCreate />}
            <div className="grid grid-cols-1 my-5">
                {posts && posts.map((post) => <PostCard key={post._id} post={post} likes={post.likes} />)}
                {!posts.length && <div className="flex justify-center items-center py-5 text-lg">No posts found</div>}
            </div>
        </div>
    );
}
