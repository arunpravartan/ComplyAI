// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getUser } from 'api/users';
// import { userLogin, userLogout } from 'api/login';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const fetchUser = async () => {
        //     try {
        //         const response = await getUser();
        //         setUser(response?.data);
        //     } catch (error) {
        //         setUser(null);
        //     }
        //     setLoading(false);
        // };

        // fetchUser();
        try {
            const loggedinUser = localStorage.getItem("user");
            if (loggedinUser) {
                setUser(JSON.parse(loggedinUser));
            } else {
                setUser(null)
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (payload) => {
        try {
            // const response = await userLogin(payload);
            // if (response?.success) setUser(response.data);
            // return { success: response };
            setLoading(true);
            localStorage.setItem("user", JSON.stringify(payload));
            setUser(payload);
        } catch (error) {
            console.error(error);
            return { error };
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            // await userLogout({ id: user?.id });
            localStorage.removeItem("user");
            setUser(null);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const updateContext = (payload) => {
        try {
            setUser((prevousState) => {
                return { ...prevousState, ...(payload || {}) }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const authContextValue = {
        user,
        login,
        logout,
        updateContext,
        loading,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
