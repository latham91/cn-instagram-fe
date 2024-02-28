export const registerUser = async (credentials) => {
    try {
        const response = await fetch("https://cn-instagram-be.onrender.com/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch("https://cn-instagram-be.onrender.com/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const getOnlineUsers = async () => {
    try {
        const response = await fetch("https://cn-instagram-be.onrender.com/api/users/online", {
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

export const logoutUser = async () => {
    try {
        const response = await fetch("https://cn-instagram-be.onrender.com/api/users/logout", {
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

export const verifyUser = async () => {
    try {
        const response = await fetch("https://cn-instagram-be.onrender.com/api/users/verify", {
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
