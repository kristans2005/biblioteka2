import { useState, useEffect } from "react";

function AddBookButton() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.is_admin == 1) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);

    return (
        <>
            {isAdmin && (
                <div className="navBarBtn">
                    <a href="/books/add">
                        <button className=" text-green-400">Add book📑</button>
                    </a>
                </div>
                
            )}
        </>
    );
}

export default AddBookButton;
