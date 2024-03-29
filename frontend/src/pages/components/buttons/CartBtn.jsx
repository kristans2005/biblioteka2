import { useState, useEffect } from "react"

export default function CartBtn(){
    const [isLoged, setIsLoged] = useState(false);

    useEffect(() => {

        const user = localStorage.getItem('user');
        if (user != null) {
            setIsLoged(true);
        } else {
            setIsLoged(false);
        }

    }, []);

    return(
        <>
        {
            isLoged && (
            <div className="navBarBtn hoverTextColor">
                <a href="/cart">
                    <button>
                        cart🛒
                    </button>
                </a>
            </div>
            )
        }
    </>
    )
}