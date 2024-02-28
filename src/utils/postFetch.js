export const getAllPosts = async () => {
    try {
        const response = await fetch("https://cn-instagram-bes.onrender.com/api/posts");
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await fetch("https://cn-instagram-bes.onrender.com/api/posts/create", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://cn-instagram-bes.onrender.com",
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
        const response = await fetch(`https://cn-instagram-bes.onrender.com/api/likes/${postId}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://cn-instagram-bes.onrender.com",
            },
            credentials: "include",
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        return error;
    }
};

export const createComment = async (comment) => {
    try {
        const response = await fetch(`https://cn-instagram-bes.onrender.com/api/comments/${comment.postId}/create`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://cn-instagram-bes.onrender.com",
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
        const response = await fetch(`https://cn-instagram-bes.onrender.com/api/posts/${postId}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://cn-instagram-bes.onrender.com",
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
        const response = await fetch(`https://cn-instagram-bes.onrender.com/api/posts/${username}`);
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};
