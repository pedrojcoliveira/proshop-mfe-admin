// Dev-only: seed a mock admin user so AdminRoute passes in standalone mode
// Must run before bootstrap imports the store (which reads localStorage on init)
if (!localStorage.getItem('userInfo')) {
  localStorage.setItem('userInfo', JSON.stringify({
    _id: 'dev-admin',
    name: 'Dev Admin',
    email: 'admin@dev.com',
    isAdmin: true,
    token: 'dev-token',
  }));
}

import('./bootstrap');
