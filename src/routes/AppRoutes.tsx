import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../components/auth/Register";
import HomeLayout from "../pages/home";
import { useAuthState } from "../providers/authProvider";

// ProtectedRoute HOC
const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const { user } = useAuthState(); // get current user
  if (!user) {
    // Not logged in → redirect to register
    return <Navigate to="/register" replace />;
  }
  return children; // logged in → show page
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Registration / login page */}
      <Route path="/register" element={<Register />} />

      {/* Home page, protected */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        }
      />

      {/* Default route → redirect to register */}
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
};

export default AppRoutes;
