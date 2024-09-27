import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;  // Aqui estamos tipando children corretamente
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redireciona para login se não estiver autenticado
    return <Navigate to="/login" />;
  }

  // Renderiza o conteúdo protegido se autenticado
  return <>{children}</>;
};

export default ProtectedRoute;
