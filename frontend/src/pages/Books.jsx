import { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import RemoveBookBtn from './components/buttons/RemoveBookBtn';
import AddToCartBtn from './components/buttons/AddToCartBtn';

function Books(){

    const [data, setData] = useState([]);

    useEffect(() => {
      async function getData() {
        fetch("http://localhost/routes/showBooks.php")
          .then(res => res.json())
          .then(data => {
            setData(data);
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          } );
      } 
      getData();
    }, []);
  
    const JSX_Data = data.map((book, index) => {

      const stockColor = book.books_left <= 3 ? 'text-red-500' : 'text-black';

      return (
        <div key={index} className='bgColor2 m-5 flex ring-1 ring-gray-400 rounded-sm h-auto shadowTheme'>
          <div className='min-w-max w-max m-2'>
            <img src={book.image} alt="nothin" width="150" />
          </div>
          <div className='flex-grow text-pretty'>
              <a href={`/books/self/${book.book_id}`} className='hoverTextColor'><h2 className='min-w-min font-bold text-3xl  '>{book.title}</h2></a>
            <span className='flex items-center'><h2 className='font-bold'>Author:</h2><p className='ml-1'>{book.name}</p></span>
            <span className='flex items-center'><h2 className='font-bold'>Publish date:</h2><p className='ml-1'>{book.publication_year}</p></span>
            <span className='flex items-center'><h2 className='font-bold'>Status:</h2><p className='ml-1'>{book.availability}</p></span>
            <span className={`flex items-center ${stockColor}`} > <h2 className='font-bold'>In stock:</h2><p className='ml-1'>{book.books_left}</p></span>
            <span className='flex items-start'><h2 className='font-bold'>Description:</h2><p className='ml-1'>{book.description}</p></span>
            <span className=' float-end'><RemoveBookBtn id={book.book_id} /></span>
            <span className='  '><AddToCartBtn /></span>
          </div>
        </div>
      );
    });
    

    
  
    return (
      <>
      <Navbar />
      <div className=' mt-24'>
        {JSX_Data}
      </div>
      
      </>
    )

}


export default Books;