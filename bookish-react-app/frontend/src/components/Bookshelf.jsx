// src/components/Bookshelf.jsx
import { useContext, useState } from "react";
import { BookContext } from "../components/BookContext";
import BookCard from "./BookCard";
import AddBookButton from "./AddBookButton";
import "../styles/mainPage.css";

function Bookshelf() {
  const { books } = useContext(BookContext);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const slotsPerPage = 9;

  // Filter logic
  let filteredBooks = books;
  if (filter === "TBR") filteredBooks = books.filter((b) => b.status === "TBR");
  if (filter === "Reading") filteredBooks = books.filter((b) => b.status === "Reading");
  if (filter === "Read") filteredBooks = books.filter((b) => b.status === "Read");
  if (filter === "Notes") filteredBooks = books.filter((b) => b.notes && b.notes.length > 0);

  if (search.trim() !== "") {
    filteredBooks = filteredBooks.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const startIndex = page * slotsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + slotsPerPage);

  const slots = [...currentBooks];
  while (slots.length < slotsPerPage) slots.push(null);

  const totalPages = Math.ceil(filteredBooks.length / slotsPerPage) || 1;

  return (
    <div className="page-layout">
      {/* Search bar in center top */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔹 Filters - NOW inside main page */}
      <div className="mainpage-filters">
        <button className={filter === "ALL" ? "active" : ""} onClick={() => setFilter("ALL")}>📚 All</button>
        <button className={filter === "TBR" ? "active" : ""} onClick={() => setFilter("TBR")}>🖊️ TBR</button>
        <button className={filter === "Reading" ? "active" : ""} onClick={() => setFilter("Reading")}>👓 Reading</button>
        <button className={filter === "Read" ? "active" : ""} onClick={() => setFilter("Read")}>✔️ Read</button>
        <button className={filter === "Notes" ? "active" : ""} onClick={() => setFilter("Notes")}>📝 Notes</button>
      </div>

      {/* Bookshelf */}
      <div className="bookshelf">
        <h2 className="shelf-title">Bookshelf</h2>
        <div className="shelf-container">
          {slots.map((book, i) => (
            <div key={i} className="book-slot">
              {book ? (
                <BookCard book={book} />
              ) : i === slotsPerPage - 1 ? (
                <AddBookButton inline />
              ) : (
                <div className="empty-slot" />
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="shelf-nav">
          <button
            className="nav-btn"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            ◀
          </button>
          <button
            className="nav-btn"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Floating Add Button */}
      <div className="side-add-btn">
        <AddBookButton />
      </div>
    </div>
  );
}

export default Bookshelf;
