import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Service from './Components/Service';
import Contact from './Contact';
import About from './About';
import Login from './Components/Login';
import Register from './Register';
// import 'bootstrap/dist/css/bootstrap.min.css';
import API from './Components/API';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/API' element={<API />} />
      </Routes>
    </div>
  );
}

export default App;
