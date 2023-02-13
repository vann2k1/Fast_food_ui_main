import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  WhatBK,
  Shop,
  Blogs,
  BlogSingle,
  Contact,
  Error,
  Profile,
  Product,
  Cart,
} from './pages';
import { ForgotPassword } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<WhatBK />} />
            <Route path="products" element={<Shop />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="blogs" element={<Blogs />}>
              <Route path="category/:category" element={<Blogs />} />
              <Route path="time/:time" element={<Blogs />} />
            </Route>
            <Route path="blogs/:id" element={<BlogSingle />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="profile" element={<Profile />} />

          {/* catch all */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
