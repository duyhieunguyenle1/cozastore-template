import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";
import './App.css'
import { ToastContainer } from 'react-toastify';
import {
  AboutPage,
  ContactPage,
  CartPage,
  ShareLayOut,
  HomePage,
  ShopPage,
  ErrorPage,
  BlogPage,
  BlogDetailPage,
  ProductPage,
  LoginPage,
  ProfilePage
} from './Pages'
import { ProtectedRoute } from "./components";
import SidebarProvider from './contexts/SidebarContext'
import NavBarProvider from './contexts/NavBarContext'
import ProductProvider from './contexts/ProductContext'
import CartProvider from './contexts/CartContext'
import ScrollToTop from './components/ScrollToTop'
import BlogProvider from './contexts/BlogContext'

function App() {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const cliendId = import.meta.env.VITE_AUTH0_CLIENT_ID

  return (
    <Auth0Provider domain={domain} clientId={cliendId}>
      <CartProvider>
        <ProductProvider>
          <BlogProvider>
            <SidebarProvider>
              <NavBarProvider>
                <Router>
                  <ScrollToTop>
                    <Routes>
                      <Route path='/' element={<ShareLayOut />}>
                        <Route index element={<HomePage />} />
                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='/shop/:id' element={<ProductPage />} />
                        <Route path='/cart' element={<ProtectedRoute children={<CartPage />} />} />
                        <Route path='/blog' element={<BlogPage />} />
                        <Route path='/blog/:id' element={<BlogDetailPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/profile' element={<ProtectedRoute children={<ProfilePage />} />} />
                      </Route>

                      {/* <Route path='/login' element={<LoginPage />} /> */}

                      <Route path='*' element={<ErrorPage />} />
                    </Routes>
                  </ScrollToTop>
                </Router>
                <ToastContainer autoClose={3000} />
              </NavBarProvider>
            </SidebarProvider>
          </BlogProvider>
        </ProductProvider>
      </CartProvider>
    </Auth0Provider>

  )
}

export default App
