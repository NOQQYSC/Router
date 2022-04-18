import './App.css';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import { render } from '@testing-library/react';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <div>
      <h1>Welcome to React router</h1>
      <BrowserRouter>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '} 
      <Link to="/contact">Contact</Link>{' '} 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
