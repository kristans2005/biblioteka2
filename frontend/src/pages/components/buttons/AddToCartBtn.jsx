import { useState, useEffect } from "react";

export default function AddToCartBtn(props){
    const [value, setValue] = useState(props.id);
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState({ user_id: 0, book_id: 0, quanity: 0 });



    const handleChange = async (e) => {
        try {
            const response = await axios.post('http://localhost/routes/addToCart.php', data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return(
        <>
            <div className="button1 bg-gray-200 w-max border-2 hover:border-gray-300 hover:bg-gray-200">
                <button onClick={handleChange}>+🛒</button>
            </div>  
        </>
    );
}