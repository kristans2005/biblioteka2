import { useEffect, useState } from "react";
import React from "react";
import HomeButton from "./buttons/HomeButton";
import LoginAndSignUpBtn from "./buttons/LoginAndSignUpBtn";
import LogoutBtn from "./buttons/LogoutBtn";
import AddBookButton from "./buttons/AddBookButton";
import CartBtn from "./buttons/CartBtn";
import DarkModeBtn from "./buttons/darkModeBtn";

function Navbar() {
    const [username, setUsername] = useState("");

    const buttons = [
        <HomeButton key="home" />,
        <LoginAndSignUpBtn key="login" />,
        <LogoutBtn key="logout" />,
        <CartBtn key='cart' />,
        <AddBookButton key='addBtn' />,
        <DarkModeBtn key='colorMode' />
    ];

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user != null) {
            setUsername(user);
        }
    }, []);

    return (
        <div className="bgColor1 p-2 grid grid-flow-col h-20 w-screen shadowTheme fixed top-0 z-30">
            <div className=" grid grid-flow-col auto-cols-max  content-center z-40">
            {buttons.map((button, index) => (
                <div key={index}>
                    {button}
                </div>
            ))}
            </div>
            <div className=" text-right mr-5 self-center font-bold z-40">
                {username !== "" && (
                    <p>
                        {username.name} 😎
                    </p>
                )}
                <p className="text-red-200">{username && username.is_admin === 1 ? "admin" : ""}</p>
            </div>



        </div>
        
    );
}

export default Navbar;
