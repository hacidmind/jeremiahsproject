import './App.css';
import Footer from './hoc/Footer';
// import ClassActivityOne from './pages/ClassActivityOne';
import Navbar from './hoc/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Colors from './components/Colors';
import User from './pages/User';
import Blog from './components/Blog';
import ErrorPage from './pages/ErrorPage';
import BlogPage from './pages/BlogPage';
import NewBlog from './pages/NewBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/colors' element={<Colors />} />
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<User />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/addblog' element={<NewBlog />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </ Router>

  );
}

export default App;
