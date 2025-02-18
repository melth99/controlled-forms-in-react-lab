// src/App.jsx
import Bookshelf from "./components/Bookshelf/Bookshelf";
const App = () => {
  function handleInputChange{

  }

  function handleSubmit{
    
  }
  
  return (
    <div className="bookshelfDiv">
    <div className="formDiv">
      <Bookshelf/>
      <h3>Add a Book</h3>
      {/* Form will go here */}
    </div>
    <div className="bookCardsDiv">{/* Book cards will display here */}</div>
  </div>
  
    )
};

export default App;
