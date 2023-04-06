
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import AddProducts from './components/AddProducts';
 

function App() {
  return (
     <Router>
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/signup' exact element={<Signup/>} />
        <Route path='/login' exact element= {<Login/>} />
        <Route path='/add-products' exact element={<AddProducts/>}/>
        </Routes>
     </Router>
  );
}

export default App;
