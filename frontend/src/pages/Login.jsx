import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [input, setInput] = useState({ email: '', password: '' });
    const [backendRespond, setBackendRespond] = useState("");
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        try {
            const response = await axios.post('http://localhost/routes/userLogin.php', input);
            if(response.data['respond'] != null){
                setBackendRespond(response.data['respond'])
            }else{
                setBackendRespond("")
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate("/");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };



    return(
        <>
            <h1>login</h1>
            <div className=' m-2'>
                <a href="/">
                    <button className='button1'  >home</button>
                </a>
                <a href="/signup">
                    <button className='button1'  >SignUp</button>
                </a>
            </div>
            <form className="bg-purple-100 p-6 w-max m-5 rounded" autoComplete='off' onSubmit={handleSubmit}>
                <h1 className="m-1 text-black text-center">Login</h1>
                <div className="grid grid-row-3 gap-2 w-max">
                    <input name="email" className="input-text" type="text" placeholder="email" onChange={handleChange} />
                    <input name="password" className="input-text" type="password" placeholder="password" onChange={handleChange} />
                    <button className="button1" type="submit">login</button> 
                    {backendRespond != "" ?  <li>{backendRespond}</li> : <></>}
                </div>
            </form>
        </>
    );

}


export default Login;