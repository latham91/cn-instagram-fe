import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { createPost, deletePost } from "../utils/postFetch";
import Cookies from "universal-cookie";

const PostContext = createContext();

function PostProvider({ children }) {
    const cookies = new Cookies();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [authCookie, setAuthCookie] = useState(cookies.get("insta_auth"));

    const handleCreatePost = async (post) => {
        try {
            setLoading(true);
            const data = await createPost(post, authCookie);

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
            value={{
                loading,
                setLoading,
                errorMsg,
                setErrorMsg,
                authCookie,
                setAuthCookie,
                handleCreatePost,
                handleDeletePost,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostContext, PostProvider };

PostProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
