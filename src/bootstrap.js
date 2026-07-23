import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AdminApp from './AdminApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <main className='py-3' style={{ minHeight: '100vh' }}>
        <Container>
          <Routes>
            <Route path='/' element={<Navigate to='/admin/orderlist' replace />} />
            <Route path='/admin/*' element={<AdminApp />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  </StrictMode>
);
