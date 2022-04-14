import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Product from './pages/ProductList/Product/Product';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Productlist from './pages/ProductList/ProductList';
import Search from './pages/Search/Search';
import Host from './pages/Host/Host';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/places/place" element={<Productlist />} />
        <Route path="/places/detail/:id" element={<Product />} />
        <Route path="/host" element={<Host />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage/*" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
