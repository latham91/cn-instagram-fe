import PropTypes from "prop-types";
import { Clock, SquarePen, ThumbsUp, Trash } from "lucide-react";
import formatTimeSince from "../utils/formatTimestamp";
import PostComment from "./PostComment";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { createComment, likePost } from "../utils/postFetch";
import { Link } from "react-router-dom";

export default function PostCard({ post, likes, profile }) {
    const { user } = useContext(AuthContext);
    const { handleDeletePost, loading } = useContext(PostContext);
    const [comments, setComments] = useState(post.comments);
    const [optLikes, setOptLikes] = useState(likes);
    const [toggleComments, setToggleComments] = useState(false);
    const [content, setContent] = useState("");

    const formattedTime = formatTimeSince(post.createdAt);

    const handleCreatePost = async () => {
        const commentBody = {
            postId: post._id,
            userId: user.id,
            content,
        };

        try {
            const optimisticComment = {
                _id: Date.now(),
                content,
                userId: {
                    _id: user.id,
                    username: user.username,
                },
                postId: post._id,
                createdAt: new Date().toISOString(),
            };

            setComments([...comments, optimisticComment]);

            await createComment(commentBody);

            setContent("");
        } catch (error) {
            console.error("Error creating comment:", error);
        }
    };

    const handleLikePost = async () => {
        try {
            let optimisticLikes = [...optLikes];

            if (optLikes.some((like) => like.userId === user.id)) {
                optimisticLikes = optimisticLikes.filter((like) => like.userId !== user.id);
                setOptLikes(optimisticLikes);
            } else {
                optimisticLikes.push({ userId: user.id });
                setOptLikes(optimisticLikes);
            }

            await likePost(post._id);
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    return (
        <div className="overflow-hidden border rounded-md shadow-2xl shadow-slate-500 border-slate-300 bg-gradient-to-br from-transparent to-slate-400">
            <div className="flex items-center justify-between p-5 bg-slate-800">
                <h3 className="text-2xl font-semibold hover:text-slate-400">
                    <Link to={`/profile/${post.userId.username}`}>@{post.userId.username.toLowerCase()}</Link>
                </h3>
                <div className="flex items-center justify-center gap-3">
                    <span className="flex items-center gap-2">
                        <Clock size={20} />
                        {formattedTime}
                    </span>
                    {user && post.userId._id === user.id && (
                        <button
                            onClick={() => handleDeletePost(post._id, post.userId._id)}
                            disabled={loading}
                            className="flex items-center justify-center gap-2 p-2 text-sm bg-red-500 rounded-md disabled:bg-red-300 disabled:text-gray-400"
                        >
                            <Trash size={20} />
                            {loading ? "Deleting..." : "Delete"}
                        </button>
                    )}
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <img
                    src={post.image}
                    alt="post"
                    draggable={false}
                    className="object-cover w-full h-[600px] max-h-[600px] transition-all duration-300 ease-in-out hover:scale-105"
                />
            </div>
            <div>
                <p className="flex gap-3 p-5 bg-slate-200 text-slate-800">
                    <span className="font-extrabold">@{post.userId.username.toLowerCase()}</span>
                    {post.description}
                </p>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 py-3 min-h-16 bg-slate-800">
                <span className="text-lg font-semibold">
                    {optLikes.length} {optLikes.length === 1 ? "like" : "likes"}
                </span>
                {!profile && (
                    <>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleLikePost}
                                disabled={!user}
                                className={`btn flex items-center gap-2 bg-slate-100 text-slate-800 disabled:bg-gray-300 disabled:text-gray-400 `}
                            >
                                <ThumbsUp size={16} />
                                {user && optLikes.some((like) => like.userId === user.id) ? "Unlike" : "Like"}
                            </button>
                            <button
                                onClick={() => setToggleComments(!toggleComments)}
                                className="flex items-center gap-2 btn bg-slate-100 text-slate-800"
                            >
                                <SquarePen size={16} />
                                {post && comments.length === 1
                                    ? "1 Comment"
                                    : `${comments.length || "No"} Comment${comments.length !== 1 ? "s" : ""}`}
                            </button>
                        </div>
                    </>
                )}
            </div>
            {toggleComments && (
                <div className="p-5 bg-slate-800">
                    <span>Comments</span>
                    <div className="flex flex-col gap-4 p-3 rounded-md bg-slate-100 text-slate-800">
                        {comments.length ? (
                            comments.map((comment) => <PostComment key={comment._id} comment={comment} />)
                        ) : (
                            <p>No comments yet</p>
                        )}
                    </div>
                    {user && (
                        <div className="flex items-center gap-2 mt-3">
                            <input
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
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
    profile: PropTypes.bool,
};
