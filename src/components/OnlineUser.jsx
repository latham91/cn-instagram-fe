import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function OnlineUser({ user }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full" />
                <Link to={`/profile/${user.username}`} className="hover:underline underline-offset-4">
                    @{user.username.toLowerCase()}
                </Link>
            </div>
        </div>
    );
}

OnlineUser.propTypes = {
    user: PropTypes.object.isRequired,
};
