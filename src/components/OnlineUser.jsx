import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function OnlineUser({ user }) {
    return (
        <div className="flex items-center justify-between">
            <div className="w-4 h-4 m-1 bg-green-500 rounded-full" />
            <div className="flex items-center justify-start">
                <span className="font-semibold hover:underline">
                    <Link to={`/profile/${user.username}`}>@{user.username.toLowerCase()}</Link> - online
                </span>
            </div>
        </div>
    );
}

OnlineUser.propTypes = {
    user: PropTypes.object.isRequired,
};
