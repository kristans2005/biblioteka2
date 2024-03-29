import { useState, useEffect } from 'react';
import lightMode from '../../../imgs/light_mode_FILL0_wght400_GRAD0_opsz48.png';
import darkMode from '../../../imgs/dark_mode_FILL0_wght400_GRAD0_opsz48.png';

export default function DarkModeBtn() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            html.dataset.theme = "dark";
        }

    }, []);

    const handleClick = () => {
        setIsDarkMode(prevMode => !prevMode);
        console.log(isDarkMode);
        if(isDarkMode == false){
            //console.log("dark");
            html.dataset.theme = "dark";
            localStorage.setItem("theme", "dark");
        }else{
            //console.log("light");
            html.dataset.theme = "light";
            localStorage.setItem("theme", "light");
        }
        //console.log(localStorage.getItem('theme'));
    };

    return (
        <>
            <div className='navBarBtn'>
                <input 
                    type="checkbox" 
                    className="absolute h-8 w-8 z-10 opacity-0 cursor-pointer" 
                    onChange={handleClick}
                    checked={isDarkMode}
                />
                {isDarkMode ? (
                    <img src={darkMode} alt="dark" id="dark_img" className="absolute w-8 invert" />
                ) : (
                    <img src={lightMode} alt="light" id="light_img" className="absolute w-8" />
                )}
            </div>
        </>
    );
}
