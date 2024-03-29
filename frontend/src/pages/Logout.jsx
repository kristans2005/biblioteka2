import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user != null){
            
        }else{
            navigate("/");
        }
    }, []);

    function handleChange(){
        localStorage.removeItem('user');
        navigate("/");
    }


    return(
        <>
            <Navbar />
            <div className=" mt-24 ">
                <h1>do you wanna logout</h1>
                <button className="button1" onClick={handleChange}>yes</button>
                <button className="button1" onClick={() => navigate("/")}>no</button>
            </div>
        </>
        
    );

}


export default Logout;