import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import AddService from './Components/AddService/AddService'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Nav from './Components/Navbar/Nav'
import Home from './Components/Pages/Home'
import Services from './Components/Services/Services'
import UpdateService from './Components/UpdateService/UpdateService'

function App() {
  return (
    <div>
      
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Banner" element={<Banner />} />
        <Route path="/Contact" element={<Contact />} />
        
        <Route path="/Services" element={<Services />} />
        <Route path="/addService" element={<AddService />} />
        <Route path="/updateService/:serviceId" element={<UpdateService />} />
    
      </Routes>
    </div>
  );
}

export default App;
