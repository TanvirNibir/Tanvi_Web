// src/components/BookModal.jsx
import { useContext } from "react";
import { BookContext } from "../components/BookContext";
import { useNavigate } from "react-router-dom";
import "../styles/mainPage.css";

function BookModal({ book, onClose }) {
  const { setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const updateStatus = (status) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === book.id ? { ...b, status } : b))
    );
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup fancy-popup" onClick={(e) => e.stopPropagation()}>
        <h3>{book.title}</h3>
        <p className="popup-subtext">Choose a status or add notes 📖</p>

        <div className="popup-actions">
          <button className="status-btn tbr" onClick={() => updateStatus("TBR")}>
            🖊️ TBR
          </button>
          <button
            className="status-btn reading"
            onClick={() => updateStatus("Reading")}
          >
            👓 Reading
          </button>
          <button
            className="status-btn read"
            onClick={() => updateStatus("Read")}
          >
            ✔️ Read
          </button>
          <button className="status-btn notes" onClick={() => navigate(`/notes/${book.id}`)}>
            📝 Notes
          </button>
        </div>

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default BookModal;
