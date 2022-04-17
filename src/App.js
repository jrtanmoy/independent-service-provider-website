import { Route, Routes } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckoutOrder from './components/Checkout/CheckoutOrder';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<CheckoutOrder></CheckoutOrder>
        }></Route>
        
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
