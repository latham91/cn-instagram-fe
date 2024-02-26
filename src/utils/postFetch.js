export const getAllPosts = async () => {
    try {
        const response = await fetch("http://localhost:5001/api/posts");
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await fetch("http://localhost:5001/api/posts/create", {
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
