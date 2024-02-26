import { SquarePen, ThumbsUp } from "lucide-react";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
    return (
        <div className="border rounded-md border-slate-300 overflow-hidden">
            <div className="bg-slate-800 p-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">@aaron</h3>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="w-full">
                <img src={post.image} alt="post" className="object-cover object-top w-full" />
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
                    <button className="btn flex items-center gap-2 bg-slate-100 text-slate-800">
                        <ThumbsUp size={16} />
                        Like
                    </button>
                    <button className="btn bg-slate-100 text-slate-800 flex items-center gap-2">
                        <SquarePen size={16} />
                        Comment
                    </button>
                </div>
            </div>
        </div>
    );
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
};
