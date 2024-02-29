const url = import.meta.env.PROD ? "https://cn-instagram-be.onrender.com" : "http://localhost:5001";

export const getAllPosts = async () => {
    try {
        const response = await fetch(`${url}/api/posts`);
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await fetch(`${url}/api/posts/create`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
            credentials: "include",
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const likePost = async (postId) => {
    try {
        const response = await fetch(`${url}/api/likes/${postId}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const createComment = async (comment) => {
    try {
        const response = await fetch(`${url}/api/comments/${comment.postId}/create`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
            credentials: "include",
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const deletePost = async (postId, userId) => {
    try {
        const response = await fetch(`${url}/api/posts/${postId}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ userId }),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const getPostsByUsername = async (username) => {
    try {
        const response = await fetch(`${url}/api/posts/${username}`);
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const getUsersLikedPosts = async () => {
    try {
        const response = await fetch(`${url}/api/likes/liked-posts`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};
