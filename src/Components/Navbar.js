import "./Navbar.css"

import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div>
        <div className="container-fluid background-image nav">
          <ul className="d-flex flex-row navbar-section">
            <Link to="/gettheapp"> <li className="getapp"> Gettheapp </li></Link>
            <Link to="/investors"> <li className="investors-nav"> Investors </li></Link>
           <Link to="/addrestrurant"> <li> Addrestrurant </li></Link> 
            <Link to="/login"> <li> Login</li></Link>
            <Link to="/signup"> <li className="signup">Signup </li></Link>
          </ul>
          
            <h1 className="zomato-heading"> Zomato</h1>
            <p className="best-food"> Discover the best food & drinks in Hydrebad</p>
            <div className="selection-nav">
            <select className="option-nav">
              <option className="hyd"> Hydrebad</option>
            </select>
            </div>
            
           <input className="input-text" type="text" placeholder="search for the restrurant"/>

        </div>
       
        </div>
    )
}
export default Navbar