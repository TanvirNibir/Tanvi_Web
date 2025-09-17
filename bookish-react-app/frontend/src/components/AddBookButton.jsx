// src/components/AddBookButton.jsx
import "../styles/mainPage.css";

function AddBookButton({ onClick }) {
  return (
    <button className="add-book-btn" onClick={onClick}>
      +
    </button>
  );
}

export default AddBookButton;
