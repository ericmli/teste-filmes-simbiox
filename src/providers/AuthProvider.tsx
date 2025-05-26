// src/auth/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';


interface LoginProps {
    name: string
    token: string
}

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    login: (login: LoginProps) => void;
    logout: () => void;
    isLoading: boolean
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const storedToken = localStorage.getItem('token') || null;
        setToken(storedToken);
        setIsLoading(false)
    }, []);

    const login = (login: LoginProps) => {
        setToken(login.token);
        
        localStorage.setItem('token', login.token);
        localStorage.setItem('nameUser', login.name);
        setIsLoading(false)
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, token, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuthContext must be used within an AuthProvider');
    return context;
};
