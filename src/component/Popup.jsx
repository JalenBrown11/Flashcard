import { useState } from "react";

const Popup = ({ addFlashcard }) => {
  // addFlashcard passes a function
  // useState for new flashcard
  const [pic, setPic] = useState(""); // Set pic
  const [name, setName] = useState(""); // Set name

  const handleAddFlashcard = (e) => {
    // Check if input fields are empty
    if (pic.trim() !== "" && name.trim() !== "") {
      // Create a new flashcard object
      const newFlashcard = {
        pic: pic,
        name: name,
      };

      // Add to data structure
      //   addFlashcard(newFlashcard);

      // Empty text fields
      setPic("");
      setName("");
    }
    // Else trigger an alert message and reset inputs
    else {
      alert("Empty text input!");
      setPic("");
      setName("");
    }
    // Prevent page reset (Form element)
    e.preventDefault();
  };

  return (
    <div className="popup-menu">
      <h2>Create new flashcard!</h2>
      <form onSubmit={handleAddFlashcard}>
        <input
          type="text"
          placeholder="Enter pic"
          value={pic} // Default value
          onChange={(e) => setPic(e.target.value)} // Captures user input
        />
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Popup;
