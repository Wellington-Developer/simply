// Globa Style
import './App.css';
import { Footer } from './Components/Footer';

// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { ProductPage } from './Components/ProductPage';
import { CategoryProducts } from './Components/CategoryProducts';

export const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={ <ProductPage /> } />
          <Route path="/category/:id" element={ <CategoryProducts /> } />
        </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}