import { useState } from "react";
import Flashcard from "./Flashcard";
import Next from "../assets/arrow-left-circle.svg";
import Previous from "../assets/arrow-right-circle.svg";
import img1 from "../assets/animal_pics/1.jpg";
import img2 from "../assets/animal_pics/2.jpg";
import img3 from "../assets/animal_pics/3.jpg";
import img4 from "../assets/animal_pics/4.jpg";
import img5 from "../assets/animal_pics/5.jpg";
import img6 from "../assets/animal_pics/6.jpg";
import img7 from "../assets/animal_pics/7.jpg";

const Carousel = () => {
  // Dummy Data
  const flashcardsData = [
    { pic: img1, name: "Capybara" },
    { pic: img2, name: "Tiger" },
    { pic: img3, name: "Pangolins" },
    { pic: img4, name: "Red panda" },
    { pic: img5, name: "Narwhal" },
    { pic: img6, name: "Peacock mantis shrimp" },
    { pic: img7, name: "African wild dog" },
  ];

  // useState for handling card indexing
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Index through flashcard length

  // Random card (Function)
  const handleCards = () => {
    const rndNum = Math.floor(Math.random() * flashcardsData.length);
    setCurrentCardIndex(rndNum === currentCardIndex ? (rndNum + 1) % flashcardsData.length : rndNum);
  };

  return (
    <div className="carousel">
      <img src={Next} alt="Next" onClick={handleCards} />
      <Flashcard
        pic={flashcardsData[currentCardIndex].pic}
        name={flashcardsData[currentCardIndex].name}
      />
      <img src={Previous} alt="Previous" onClick={handleCards} />
    </div>
  );
};

export default Carousel;
