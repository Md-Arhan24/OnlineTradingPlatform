import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './home/HomePage';
import SingUp from './singup/Singup';
import PricingPage from './pricing/PricingPage';
import ProductsPage from './products/ProductsPage';
import SupportPage from './support/SupportPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutPage from './about/AboutPage';
import { NotFound } from './NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './login/Login';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
 <BrowserRouter>
 <NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SingUp/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
 </BrowserRouter>
 </CookiesProvider>
);

