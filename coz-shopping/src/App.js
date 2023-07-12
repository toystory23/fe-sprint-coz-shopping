import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Productpage from './pages/Productpage';
import Bookmarkpage from './pages/Bookmarkpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/products/list" element={<Productpage />} />
        <Route path="/bookmark" element={<Bookmarkpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
