import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Authentication/Login/Login';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './pages/Authentication/Register/Register';
import AddCourse from './pages/DashboardPage/AddCourse/AddCourse';
import AllCourses from './pages/DashboardPage/AllCourses/AllCourses';
import Dashboard from './pages/DashboardPage/Dashboard/Dashboard';
import DashBoardHome from './pages/DashboardPage/DashboardHome/DashBoardHome';
import MakeAdmin from './pages/DashboardPage/MakeAdmin/MakeAdmin';
import Home from './pages/HomePage/Home/Home';
import Footer from './pages/SharedPage/Footer/Footer';
import Header from './pages/SharedPage/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path='/dashboard' element={<DashBoardHome />}></Route>
              <Route path='all-courses' element={<AllCourses />} />
              <Route path='add-course' element={<AddCourse />} />
              <Route path='make-admin' element={<MakeAdmin />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
