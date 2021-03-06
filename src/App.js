import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Login from './pages/Authentication/Login/Login';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './pages/Authentication/Register/Register';
import Courses from './pages/Courses/Courses';
import AddCourse from './pages/DashboardPage/AddCourse/AddCourse';
import AllCourses from './pages/DashboardPage/AllCourses/AllCourses';
import Dashboard from './pages/DashboardPage/Dashboard/Dashboard';
import DashBoardHome from './pages/DashboardPage/DashboardHome/DashBoardHome';
import MakeAdmin from './pages/DashboardPage/MakeAdmin/MakeAdmin';
import StudentDetails from './pages/DashboardPage/StudentDetails/StudentDetails';
import Home from './pages/HomePage/Home/Home';
import NotFound from './pages/NotFound/NotFound';
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
            <Route path='/courses' element={<Courses />} />
            <Route path='/about' element={<About />} />
            <Route path='/student-details/:id' element={<StudentDetails />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
