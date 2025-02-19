import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    function handleChange(e) {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='author'>Author: </label>
                    <input type="text" name="author" id="author" value={newBook.author} onChange={handleChange} 
                    />
                    <label htmlFor='title'>Title: </label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={handleChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>{book.title} : {book.author}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Bookshelf;
