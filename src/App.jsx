import { useState } from "react";
import Carousel from "./component/Carousel";
import Popup from "./component/Popup";
import "./App.css";

function App() {
  // useState for Popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility

  // Add new data
  // const addNewFlashcard = () => {
  //   const flashcardFile = JSON.parse()
  // };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="header">
        <h1>Flashcard!</h1>
      </div>
      <div className="card-container">
        <Carousel />
        <div className="add-card">
          <button onClick={togglePopup}>Add flashcard</button>
          {isPopupOpen && <Popup />}
        </div>
      </div>
    </>
  );
}

export default App;
