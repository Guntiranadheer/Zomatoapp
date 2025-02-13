
import React from "react"
import Gettheapp from "../Components/Gettheapp"
import Investors from "../Components/Investors"
import Addrestrurant from "../Components/Addrestrurant"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import { Routes,Route} from "react-router-dom";
import Navbar from "../Components/Navbar"
import Body from "../Components/Body"
// import Footer from "../Components/Footer"

function Landingpage(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/"element={<Body/>}></Route>
                <Route path="/gettheapp"element={<Gettheapp/>}></Route>
                <Route path="/investors"element={<Investors/>}></Route>
                <Route path="/addrestrurant"element={<Addrestrurant/>}></Route>
                <Route path="/login"element={<Login/>}></Route>
                <Route path="/signup"element={<Signup/>}></Route>
            </Routes>
            {/* <Footer/> */}
        </>
    )
}
export default Landingpage;