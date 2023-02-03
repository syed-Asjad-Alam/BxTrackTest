import axios from "axios";
import React, { useEffect, useState } from "react";
import './Portal.css'

const Portal = ({fname,lname,setPortal}) => {
    const [title,setTitle] = useState()
    const [author,setAuthor] = useState()
    const [pages,setPages] = useState()
    const [date,setDate] = useState()

    const [Books,setBooks] = useState([])

    const [selectedBook,setSelectedBook] = useState()
    const [select,isSelected] = useState(false)

    

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
            <div className="heading">
                <h1> Welcome {fname} {lname}</h1>
            </div>
            
            <div>
                <form>
                    <div className="innerMain">
                        <label>Title</label>
                        <input type='text' value={title} onChange={(text) => 
                            setTitle(text.target.value)}></input>
                    </div>
                    <div className="innerMain">
                        <label>Author</label>
                        <input type='text' value={author} onChange={(text) => 
                            setAuthor(text.target.value)}></input>
                    </div>
                    <div className="innerMain">
                        <label>Pages</label>
                        <input type='number' value={pages} onChange={(text) => 
                            setPages(text.target.value)}></input>
                    </div>
                    <div className="innerMain">
                        <label>Date</label>
                        <input type='date' value={date} onChange={(text) => 
                            setDate(text.target.value)}></input>
                    </div>
                    
                </form>
                <div className="buttons">
                    <div >
                        <button className="add" onClick={addBook}>Add Book</button>
                    </div>
                    <div >
                        <button className="update" onClick={updateBook}>Update Book</button>
                    </div>
                    <div >
                        <button className="delete" onClick={deleteBook}>Delete Book</button>
                    </div>
                </div>
            </div>
            <div>
                {Books.map((item,index) => {
                    return (
                    <div>
                        <button className={selectedBook == item._id ? "light" : "default"}>
                        <li  onClick={() => {
                            isSelected(true)
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
            <div>
                <button className="back" onClick={() => setPortal(false)}>Back</button>
            </div>

            
        </div>
    )
}

export default Portal