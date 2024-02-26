export const getAllPosts = async () => {
    try {
        const response = await fetch("http://192.168.1.145:5001/api/posts");
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await fetch("http://192.168.1.145:5001/api/posts/create", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5001",
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
        const response = await fetch(`http://192.168.1.145:5001/api/likes/${postId}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5001",
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
        const response = await fetch(`http://192.168.1.145:5001/api/comments/${comment.postId}/create`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5001",
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
