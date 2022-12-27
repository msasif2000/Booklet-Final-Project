import Logo from "../../imgs/booklet-logo.png"
import "./Nav.css"
import {Link} from "react-router-dom"
function Nav(){
    return(
      <header>
      <Link to="/"><img src={Logo} alt="Booklet Logo"/></Link>
      <div className="navbar">
			<Link to="/">Home</Link>
      <Link to="/Banner">Banner</Link>
			<Link to="/Services">Services</Link>
      <Link to="/addService">Add Service</Link>
			<Link to="/Contact">Contact</Link>
      </div>
      </header>
    );
}
export default Nav;

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});