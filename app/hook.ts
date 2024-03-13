import { useEffect, useState } from "react";
import { TOKEN_KEY } from "./constant"

export const useAuth = () => {
    const [auth, setAuth] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        setAuth(!!token);
    }, [])

    return auth;
}