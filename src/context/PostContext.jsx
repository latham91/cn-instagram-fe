import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { createPost, deletePost } from "../utils/postFetch";

const PostContext = createContext();

function PostProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleCreatePost = async (post) => {
        try {
            setLoading(true);
            const data = await createPost(post);

            if (!data.success) {
                setTimeout(() => {
                    setErrorMsg("");
                }, 3000);

                setLoading(false);
                return setErrorMsg(data.message);
            }

            setLoading(false);
            window.location.reload();
            return data;
        } catch (error) {
            setTimeout(() => {
                setErrorMsg("");
            }, 3000);

            setLoading(false);
            return setErrorMsg(error.message);
        }
    };

    const handleDeletePost = async (postId, userId) => {
        try {
            setLoading(true);
            const data = await deletePost(postId, userId);

            if (!data.success) {
                setTimeout(() => {
                    setErrorMsg("");
                }, 3000);

                setLoading(false);
                return setErrorMsg(data.message);
            }

            setLoading(false);
            window.location.reload();
            return data;
        } catch (error) {
            setTimeout(() => {
                setErrorMsg("");
            }, 3000);

            return setErrorMsg(error.message);
        }
    };

    return (
        <PostContext.Provider
            value={{ loading, setLoading, errorMsg, setErrorMsg, handleCreatePost, handleDeletePost }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostContext, PostProvider };

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
