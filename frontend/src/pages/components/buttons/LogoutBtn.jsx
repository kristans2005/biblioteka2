import { useEffect, useState } from "react";

export default function LogoutBtn(){
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
                    <a href="/logout">
                        <button>
                            logout👋
                        </button>
                    </a>
                </div>
                )
            }
        </>
    );
}