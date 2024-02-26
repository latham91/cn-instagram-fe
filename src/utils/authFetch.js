export const registerUser = async (credentials) => {
    try {
        const response = await fetch("http://localhost:5001/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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
        const response = await fetch("http://localhost:5001/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const verifyUser = async () => {
    try {
        const response = await fetch("http://localhost:5001/api/users/verify", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5001",
            },
            credentials: "include",
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};
