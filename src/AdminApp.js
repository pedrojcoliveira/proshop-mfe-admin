import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from './store';
import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const AdminApp = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes>
        <Route index element={<Navigate to='orderlist' replace />} />
        <Route path='' element={<AdminRoute />}>
          <Route path='orderlist' element={<OrderListScreen />} />
          <Route path='productlist' element={<ProductListScreen />} />
          <Route path='productlist/:pageNumber' element={<ProductListScreen />} />
          <Route path='userlist' element={<UserListScreen />} />
          <Route path='product/:id/edit' element={<ProductEditScreen />} />
          <Route path='user/:id/edit' element={<UserEditScreen />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default AdminApp;
