import { Navigate, Outlet } from 'react-router-dom';
import authService from 'mfeAuth/AuthService';

const AdminRoute = () => {
  return authService.isAdmin() ? <Outlet /> : <Navigate to='/user/login' replace />;
};

export default AdminRoute;
