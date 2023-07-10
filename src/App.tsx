// Globa Style
import './App.css';
import { Footer } from './Components/Footer';

// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { ProductPage } from './Components/ProductPage';

export const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={ <ProductPage /> } />
        </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}