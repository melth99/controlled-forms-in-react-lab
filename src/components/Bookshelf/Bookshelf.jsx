import { useState } from 'react';
// https://generalassembly.instructure.com/courses/733/assignments/16642?module_item_id=64370

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
// handleInputChange
    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    {/* Form will go here */}
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */}</div>
            </div>
        </>
    )
}

export default Bookshelf