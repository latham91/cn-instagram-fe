import PropTypes from "prop-types";
import { SquarePen, ThumbsUp } from "lucide-react";
import formatTimeSince from "../utils/formatTimestamp";
import PostComment from "./PostComment";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { likePost } from "../utils/postFetch";

export default function PostCard({ post, likes }) {
    const { user } = useContext(AuthContext);
    const [toggleComments, setToggleComments] = useState(false);

    const formattedTime = formatTimeSince(post.createdAt);
    return (
        <div className="border rounded-md border-slate-300 overflow-hidden bg-gradient-to-br from-transparent to-slate-400">
            <div className="bg-slate-800 p-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">@aaron</h3>
                <span>{formattedTime}</span>
            </div>
            <div className="w-full">
                <img src={post.image} alt="post" draggable={false} className="object-cover object-top w-full" />
            </div>
            <div>
                <p className="p-5 bg-slate-200 text-slate-800 flex items-center gap-2">
                    <span className="font-extrabold">@{post.userId.username}</span>
                    {post.description}
                </p>
            </div>

            <div className="flex items-center gap-3 justify-between px-5 py-3 bg-slate-800">
                <span className="text-lg">{post.likes.length} likes</span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => likePost(post._id)}
                        disabled={!user}
                        className={`btn flex items-center gap-2 bg-slate-100 text-slate-800 disabled:bg-gray-300 disabled:text-gray-400 `}
                    >
                        <ThumbsUp size={16} />
                        {user && likes.some((like) => like.userId === user.id) ? "Unlike" : "Like"}
                    </button>
                    <button
                        onClick={() => setToggleComments(!toggleComments)}
                        className="btn bg-slate-100 text-slate-800 flex items-center gap-2"
                    >
                        <SquarePen size={16} />
                        Comments
                    </button>
                </div>
            </div>
            {toggleComments && (
                <div className="bg-slate-800 p-5">
                    <span>Comments</span>
                    <div className="bg-slate-100 text-slate-800 p-3 rounded-md flex flex-col">
                        <PostComment />
                    </div>
                </div>
            )}
        </div>
    );
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    likes: PropTypes.array.isRequired,
};
