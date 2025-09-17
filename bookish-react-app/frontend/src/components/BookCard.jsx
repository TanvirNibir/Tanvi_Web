// src/components/BookCard.jsx
import { useState } from "react";
import BookModal from "./BookModal";
import "../styles/mainPage.css";

function BookCard({ book }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="book-card">
      <div className="book-shape" onClick={() => setShowPopup(true)}>
        <span>{book.title}</span>
      </div>

      {/* 🔹 Status Badge */}
      {book.status && (
        <div className={`book-status-badge ${book.status.toLowerCase()}`}>
          {book.status}
        </div>
      )}

      {showPopup && <BookModal book={book} onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default BookCard;
