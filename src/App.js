// import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
// import Card from './pages/Card';
// import Error from './pages/Error';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Apartment from './components/Apartment';
import Footer from './components/Footer';

function App() {
  return (
    <div >
     <Navbar/>
     <Banner/>
     <Apartment/>
     <Footer/>
  
    </div>
  );
}

export default App;