import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import AddBook from './Components/AddBook/AddBook'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Nav from './Components/Navbar/Nav'
import Home from './Components/Pages/Home'
import Books from './Components/Books/Books'
import UpdateBook from './Components/UpdateBook/UpdateBook'
import Reviews from './Components/Reviews/Reviews'
import AddReview from './Components/AddReview/AddReview'

function App() {
  return (
    <div>
      
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/updateBook/:bookId" element={<UpdateBook />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/addReview" element={<AddReview />} />

      </Routes>
    </div>
  );
}

export default App;
