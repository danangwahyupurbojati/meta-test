import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './pages/home';
import Navbar from './component/Navbar';
import Product1 from './pages/product1';
import Product2 from './pages/product2';
import Product3 from './pages/product3';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/product1" element={<Product1 />} />
                <Route path="/product2" element={<Product2 />} />
                <Route path="/product3" element={<Product3 />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>

      </BrowserRouter>
  );
}

export default App;
