import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
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
  ProductPage
} from './Pages'
import SidebarProvider from './contexts/SidebarContext'
import NavBarProvider from './contexts/NavBarContext'
import ProductProvider from './contexts/ProductContext'
import CartProvider from './contexts/CartContext'
import ScrollToTop from './components/ScrollToTop'
import BlogProvider from './contexts/BlogContext'

function App() {

  return (
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
                      <Route path='/cart' element={<CartPage />} />
                      <Route path='/blog' element={<BlogPage />} />
                      <Route path='/blog/:id' element={<BlogDetailPage />} />
                      <Route path='/about' element={<AboutPage />} />
                      <Route path='/contact' element={<ContactPage />} />
                    </Route>

                    <Route path='*' element={<ErrorPage />} />
                  </Routes>
                </ScrollToTop>
              </Router>
            </NavBarProvider>
          </SidebarProvider>
        </BlogProvider>
      </ProductProvider>
    </CartProvider>
  )
}

export default App
