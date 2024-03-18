import { useState, useEffect } from 'react'

function App() {

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
    return(
      <div key={index}>
        <h2 className=' font-bold '>{book.title}</h2>
        <p>{book.author_id}</p>
        <p>{book.availability}</p>
        <p>{book.book_id}</p>
        <p>{book.image}</p>
        <p>{book.publication_year}</p>
      </div>
    )
  })

  return (
    <>
    <div className=' m-2'>
      <a href="/login">
        <button className='button1'  >LogIn</button>
      </a>
      <a href="/signup">
        <button className='button1'  >SignUp</button>
      </a>
    </div>
    
    <h1 className="text-3xl font-bold underline text-violet-700">
      Hello world!
    </h1>

    {JSX_Data}
    </>
  )
}

export default App
