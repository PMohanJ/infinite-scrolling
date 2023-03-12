import { createContext, useContext, useEffect, useState,  } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext({user: ""});

const AuthProvider = ({children}: LoginProviderProps) => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storage: string | null =  localStorage.getItem("userLoginCred")
       console.log("Localstorage context,", storage);
        const userDetails: string = JSON.parse(storage ?? "{}");
        setUser(userDetails);

        if (userDetails === "" || userDetails === null) {
            navigate("/");
        }
        
    }, []);

    return(
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}; 

export const AuthState = () => {
    return useContext(AuthContext);
}

export default AuthProvider;