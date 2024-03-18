import { useState, useEffect } from "react";
import axios from 'axios';

function SignUp() {
    const [input, setInput] = useState({ username: '', password: '' });
    const [data, setData] = useState("");
    const [responseData, setResponseData] = useState(null);



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        try {
            const response = await axios.post('http://localhost/routes/userSignUp.php', input);
            console.log(response.data);
            setResponseData(response.data['respond']);
            console.log(responseData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <h1>signup</h1>
            <div className='m-2'>
                <a href="/">
                    <button className='button1'>home</button>
                </a>
                <a href="/login">
                    <button className='button1'>login</button>
                </a>
            </div>
            <form className="bg-purple-100 p-6 w-max m-5 rounded" autoComplete='off' onSubmit={handleSubmit}>
                <h1 className="m-1 text-black text-center">SignUp</h1>
                <div className="grid grid-row-3 gap-2 w-max">
                    <input name="username" className="input-text" type="text" placeholder="username" onChange={handleChange} />
                    <input name="password" className="input-text" type="password" placeholder="password" onChange={handleChange} />
                    <button className="button1" type="submit">submit</button> 
                </div>
            </form>
            <p>{responseData != null ? responseData['respond'] : ""}</p> {/* Display response data */}
        </>
    );
}

export default SignUp;
