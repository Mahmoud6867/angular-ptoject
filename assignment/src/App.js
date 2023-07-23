import Header from './components/navBar/navBar';
// import ToDo from './components/toDo/toDo';
import SignUp from './components/signUp/signUp';
import Movies from './components/movies/movies';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Login from './components/login/login';
import NotFound from './components/notFound/NotFound';
import MoviesDetails from './components/moviesDetails/MoviesDetails';
import Footer from './components/footer/footer';
import Favorites from './components/favorites/Favorites';
import { useSelector } from 'react-redux';

function App() {
  const language= useSelector((state)=>state.lang)
  return (
    <div dir={`${language==="EN"?"ltr":"rtl"}`}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/details/:id' element={<MoviesDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
