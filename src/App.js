import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/HomePage/Home/Home';
import Footer from './pages/SharedPage/Footer/Footer';
import Header from './pages/SharedPage/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
