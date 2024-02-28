import PropTypes from "prop-types";
import formatTimeSince from "../utils/formatTimestamp";
import { Link } from "react-router-dom";

export default function PostComment({ comment }) {
    const formattedTime = formatTimeSince(comment.createdAt);

    return (
        <div className="text-sm">
            <div className="flex items-center justify-between">
                <span className="font-semibold">
                    <Link to={`/profile/${comment.userId._id}`}>@{comment.userId.username.toLowerCase()}</Link>
                </span>
                <span>{formattedTime}</span>
            </div>
            <p>{comment.content}</p>
        </div>
    );
}

PostComment.propTypes = {
    comment: PropTypes.object.isRequired,
};
