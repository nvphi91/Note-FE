import React, { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unSubcribed = auth.onIdTokenChanged((user) => {
            console.log('user');
            console.log(user);
            if (user?.uid) {
                setUser(user);
                localStorage.setItem('accessToken', user.accessToken)
                return
            }
            setUser({})
            localStorage.clear()
            navigate('/login')
        })

        return () => {
            unSubcribed();
        }
    }, [auth])

    return (<AuthContext.Provider
        value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;