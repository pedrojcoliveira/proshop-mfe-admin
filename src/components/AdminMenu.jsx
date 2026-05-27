import { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import authService from 'mfeAuth/AuthService';

const AdminMenu = () => {
  const [isAdmin, setIsAdmin] = useState(() => authService.isAdmin());
  const navigate = useNavigate();

  useEffect(() => {
    return authService.subscribe((user) => setIsAdmin(user?.isAdmin === true));
  }, []);

  if (!isAdmin) return null;

  return (
    <NavDropdown title='Admin' id='adminmenu'>
      <NavDropdown.Item onClick={() => navigate('/admin/productlist')}>
        Products
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => navigate('/admin/orderlist')}>
        Orders
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => navigate('/admin/userlist')}>
        Users
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default AdminMenu;
