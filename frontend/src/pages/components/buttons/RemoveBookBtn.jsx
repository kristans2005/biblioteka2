import { useEffect, useState } from "react";
import axios from "axios";

export default function RemoveBookBtn(props){
    const [value, setValue] = useState(props.id);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.is_admin == 1) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }

    }, []);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/routes/deleteBook.php', {id: value});
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    }


    return(
        <>
            {isAdmin && (
            <div className="button1 bg-red-300 w-max hover:bg-red-200 active:bg-green-300">
                <button onClick={handleSubmit} >remove book</button>
            </div>  
            )}
        </>
    );

}