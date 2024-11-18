import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import CoffeeBeans from './components/CoffeeBeans';
import InstaPourCoffee from './components/InstaPourCoffee';
import CoffeeEquipment from './components/CoffeeEquipment';
import AboutUs from './components/AboutUs';
import CoffeeLocations from './components/CoffeeLocations';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {

  return (
    <>
     <NavBar />
    
     <Routes>
      <Route path='/' element={<CoffeeBeans/>} ></Route>
      <Route path='/instacoffee/' element={<InstaPourCoffee/>} ></Route>
      <Route path='/equipment/' element={<CoffeeEquipment/>} ></Route>
      <Route path='/about/' element={<AboutUs/>} ></Route>
      <Route path='/locations/' element={<CoffeeLocations/>} ></Route>
      <Route path='/cart/' element={<Cart/>} ></Route>
     </Routes>
    <Footer/>
     
    </>
  )
}

export default App