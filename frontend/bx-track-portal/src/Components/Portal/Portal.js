import axios from "axios";
import React, { useEffect, useState } from "react";

const Portal = ({fname,lname,setPortal}) => {
    const [title,setTitle] = useState()
    const [author,setAuthor] = useState()
    const [pages,setPages] = useState()
    const [date,setDate] = useState()

    const [Books,setBooks] = useState([])

    const [selectedBook,setSelectedBook] = useState()

    

    useEffect(() => {
        getbooks()
    },[])

    const getbooks = async() => {
        await axios.get(`http://localhost:5000/books/getAllBooks`)
        .then((res) => setBooks(res.data.data))
        .catch((err) => console.log(err))
        
        
    }

    const addBook = async() => {
        await axios.post(`http://localhost:5000/books/createBook`,{
            title:title,
            author:author,
            pages:pages,
            published_at:date
            

        })
        .then(() => {
            getbooks()
            console.log("Book Added Successfully")
        })
        .catch((err) => console.log(err))

    }

    const updateBook = async() => {
        await axios.put(`http://localhost:5000/books/updateBook/${selectedBook}`,{
            title:title,
            author:author,
            pages:pages,
            published_at:date
            

        })
        .then(() => {
            getbooks()
            console.log("Book Updated Successfully")
        })
        .catch((err) => console.log(err))

    }
    const deleteBook = async() => {
        await axios.delete(`http://localhost:5000/books/deleteBook/${selectedBook}`,{
            title:title,
            author:author,
            pages:pages,
            published_at:date
            

        })
        .then(() => {
            getbooks()
            console.log("Book deleted Successfully")})
        .catch((err) => console.log(err))

    }

    return (
        <div>
            <div>
                <h1> Welcome {fname} {lname}</h1>
            </div>
            
            <div>
                <form>
                    <div>
                        <label>Title</label>
                        <input type='text' value={title} onChange={(text) => 
                            setTitle(text.target.value)}></input>
                    </div>
                    <div>
                        <label>Author</label>
                        <input type='text' value={author} onChange={(text) => 
                            setAuthor(text.target.value)}></input>
                    </div>
                    <div>
                        <label>Pages</label>
                        <input type='number' value={pages} onChange={(text) => 
                            setPages(text.target.value)}></input>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='date' value={date} onChange={(text) => 
                            setDate(text.target.value)}></input>
                    </div>
                    
                </form>
                    <div>
                        <button onClick={addBook}>Add Book</button>
                    </div>
                    <div>
                        <button onClick={updateBook}>Update Book</button>
                    </div>
                    <div>
                        <button onClick={deleteBook}>Delete Book</button>
                    </div>
            </div>
            <div>
                {Books.map((item,index) => {
                    return (
                    <div>
                        <button>
                        <li onClick={() => {
                            setTitle(item.title)
                            setAuthor(item.author)
                            setPages(item.pages)
                            setDate(item.published_at)
                            setSelectedBook(item._id)
                        }} 
                        key={index}>{item.title} {item.author} {item.pages} {item.published_at}</li>
                        </button>
                    </div>
                    )
                })}
            </div>
            <button onClick={() => setPortal(false)}>Back</button>

            
        </div>
    )
}

export default Portal