import React from 'react';
import Nav from '../components/navbar/Navbar';

const Layout: React.FC<{ children: React.ReactNode; username?: string }> = ({ children, username }) => {
  return (
    <div>
      <Nav />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
