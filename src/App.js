
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import "bootstrap/dist/css/bootstrap.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <AnimatedCursor
     innerSize={10}
     outerSize={6}

     />
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/aboutus' element={<AboutUs/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/contactus' element={<Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
