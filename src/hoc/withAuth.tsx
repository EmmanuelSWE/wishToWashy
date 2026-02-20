// hoc/withAuth.tsx
import React, { useEffect } from 'react';
import { useAuthState } from '../providers/authProvider';
import { useNavigate } from 'react-router-dom';

export const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const { user } = useAuthState();
    const navigate = useNavigate();

    useEffect(() => {
      if (!user) navigate('/register');
    }, [user, navigate]);

    if (!user) return null;

    return <Component {...props} />;
  };
};
