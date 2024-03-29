import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Login from "./Login";

function Self() {
    const { id } = useParams();
    const navigate = useNavigate();
    const parsedId = parseInt(id)
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.post('http://localhost/routes/getBookByID.php', { id: parsedId });
                if(response.data != "no"){
                    setBookData(response.data);
                    console.log(bookData);
                }else{
                    navigate("/");
                }

            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        getData();
    }, [parsedId]);

    let JSX_DataImg = null;
    if (bookData) {
        JSX_DataImg = bookData.map((book, index) => {
            return (
                <div key={index} className=' '>
                    <img src={book.image} alt="nothin" width="250" />
                </div>
            );
        });
    }

    let JSX_Data = null;
    if (bookData) {
        JSX_Data = bookData.map((book, index) => {
            const stockColor = book.books_left <= 3 ? 'text-red-500' : 'text-black';
            return (
                <div key={index} className=' '>
                    <h2 className='min-w-min font-bold text-3xl  '>{book.title}</h2>
                    <span className='flex items-center'><h2 className='font-bold'>Author:</h2><p className='ml-1'>{book.name}</p></span>
                    <span className='flex items-center'><h2 className='font-bold'>Publish date:</h2><p className='ml-1'>{book.publication_year}</p></span>
                    <span className='flex items-center'><h2 className='font-bold'>Status:</h2><p className='ml-1'>{book.availability}</p></span>
                    <span className={`flex items-center ${stockColor}`} > <h2 className='font-bold'>In stock:</h2><p className='ml-1'>{book.books_left}</p></span>
                    <br/>
                    <span className='flex items-start'><h2 className='font-bold'>Description:</h2></span>
                    <span className="flex items-start "><p className='ml-1'>{book.description}</p></span>
                </div>
            );
        });
    }

    return (
        <>
            <Navbar />
            <div className=" mt-24 ">
                <main className=" rounded-sm m-4 bgColor2 shadowTheme h-full">
                    <article className="flex">
                        <div className="min-w-max w-max p-2">
                            {JSX_DataImg}
                        </div>
                        <div>
                            {JSX_Data}
                        </div>
                    </article>
                    <article className=" p-4 border-y-2 border-b-0 border-gray-400 ">
                        <div>
                            <h1 className=" text-3xl">Reviews</h1>    
                        </div>
                        <div>
                        <span className='flex items-center'><h2 className='font-bold'>Kristians:</h2><p className='ml-1'>Reviews comming soon.. (no it's not).. stfu</p></span>
                        </div>
                    </article>                    
                </main>
            </div>
        </>
    )
}

export default Self;
