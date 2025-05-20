import React from 'react';
import { Stack } from 'expo-router';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <Stack>
            {children}
        </Stack>    
    );
};



export default AuthLayout;