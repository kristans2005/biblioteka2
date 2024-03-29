import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";

function AddNewBook() {
    const [input, setInput] = useState({ title: '', author: '', year: 0, stock: 0, image: '', description: '' });
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
            const response = await axios.post('http://localhost/routes/addNewBook.php', input);
            console.log(response.data);
            if(response.data['respond'] != null){
                setBackendRespond(response.data['respond'])
            }else{
                setBackendRespond("")
                navigate("/");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return(
        <div>
            <Navbar />
            <div className="grid w-full h-full justify-center mt-24 ">
                <form onSubmit={handleSubmit}>
                    <div className=" w-max p-5 m-5 grid bgColor2 rounded-lg shadowTheme gap-2">
                        <h1>Add new book</h1>
                        <input type="text" name="title" placeholder="Title" className="input-text" onChange={handleChange} />
                        <input type="text" name="author" placeholder="Author" className="input-text" onChange={handleChange} />
                        <input type="number" name="year" min="1900" max="2099" step="1" placeholder="Release year" className="input-text" onChange={handleChange} />
                        <input type="number" name="stock" min='0' max='100' placeholder="books in stock" className="input-text" onChange={handleChange} />
                        <input type="text" name="image" placeholder="ImageURL" className="input-text" onChange={handleChange} />
                        <textarea name="description" cols="30" rows="5" maxLength={255} placeholder="description" className="input-text" onChange={handleChange} ></textarea>
                        <button className="button1">Add book</button>
                        {backendRespond != "" ?  <li>{backendRespond}</li> : <></>}
                    </div>
                </form>
            </div>
        </div>
    )

}

export default AddNewBook;