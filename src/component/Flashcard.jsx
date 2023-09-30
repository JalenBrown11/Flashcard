import { useState } from "react";

const Flashcard = ({ pic, name }) => {
  // useState for flashcard
  const [isDescVisible, setIsDescVisible] = useState(false); // Flip flashcard (pic-to-description)

  // Toggle function for description visibility
  const toggleDescription = () => {
    setIsDescVisible(!isDescVisible);
  };

  return (
    <div
      className={`flashcard ${isDescVisible ? "show-desription" : ""}}`}
      onClick={toggleDescription}
    >
      <div className="flashcard-text">
        {isDescVisible ? <img src={pic} alt="Picture" style={{width: "256px", height:"256px"}}/> : name}
      </div>
    </div>
  );
};

export default Flashcard;
