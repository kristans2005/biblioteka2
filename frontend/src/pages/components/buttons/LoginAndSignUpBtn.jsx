import { useEffect, useState } from "react";

export default function LoginAndSignUpBtn(){
    const [isLoged, setIsLoged] = useState(false);

    useEffect(() => {

        const user = localStorage.getItem('user');
        if (user == null) {
            setIsLoged(true);
        } else {
            setIsLoged(false);
        }

    }, []);

    return(
        <>
            {
                isLoged && (
                    <div className=" grid grid-flow-col">
                    <div className="navBarBtn hoverTextColor">
                        <a href="/login">
                            <button>
                                login👋
                            </button>
                        </a>
                    </div>
                    <div className="navBarBtn hoverTextColor">
                        <a href="/signup">
                            <button>
                                signUp👋
                            </button>
                        </a>
                    </div>    
                </div>
                )
            }
        </>
    );
}