import PropTypes from "prop-types";
import { SquarePen, ThumbsUp } from "lucide-react";
import formatTimeSince from "../utils/formatTimestamp";
import PostComment from "./PostComment";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createComment, likePost } from "../utils/postFetch";

export default function PostCard({ post, likes }) {
    const { user } = useContext(AuthContext);
    const [toggleComments, setToggleComments] = useState(false);
    const [content, setContent] = useState("");

    const formattedTime = formatTimeSince(post.createdAt);

    const handleCreatePost = async () => {
        const commentBody = {
            postId: post._id,
            userId: user.id,
            content,
        };

        await createComment(commentBody);
    };
    return (
        <div className="overflow-hidden border rounded-md border-slate-300 bg-gradient-to-br from-transparent to-slate-400">
            <div className="flex items-center justify-between p-5 bg-slate-800">
                <h3 className="text-2xl font-semibold">@{post.userId.username}</h3>
                <span>{formattedTime}</span>
            </div>
            <div className="w-full">
                <img src={post.image} alt="post" draggable={false} className="object-cover object-top w-full" />
            </div>
            <div>
                <p className="flex items-center gap-2 p-5 bg-slate-200 text-slate-800">
                    <span className="font-extrabold">@{post.userId.username}</span>
                    {post.description}
                </p>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 py-3 bg-slate-800">
                <span className="text-lg">
                    {post.likes.length} {post.likes.length === 1 ? "like" : "likes"}
                </span>
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
                        className="flex items-center gap-2 btn bg-slate-100 text-slate-800"
                    >
                        <SquarePen size={16} />
                        {post && post.comments.length === 1
                            ? "1 Comment"
                            : `${post.comments.length || "No"} Comment${post.comments.length !== 1 ? "s" : ""}`}
                    </button>
                </div>
            </div>
            {toggleComments && (
                <div className="p-5 bg-slate-800">
                    <span>Comments</span>
                    <div className="flex flex-col gap-4 p-3 rounded-md bg-slate-100 text-slate-800">
                        {post.comments.length ? (
                            post.comments.map((comment) => <PostComment key={comment._id} comment={comment} />)
                        ) : (
                            <p>No comments yet</p>
                        )}
                    </div>
                    {user && (
                        <div className="flex items-center gap-2 mt-3">
                            <input
                                onChange={(e) => setContent(e.target.value)}
                                type="text"
                                className="w-full px-4 py-2 text-sm border rounded-sm outline-zinc-500 text-slate-800"
                            />
                            <button onClick={handleCreatePost} className="btn bg-slate-100 text-slate-800">
                                Send
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    likes: PropTypes.array.isRequired,
};
