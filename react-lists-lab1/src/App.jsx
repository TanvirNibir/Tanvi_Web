import Book from './Book';
import bookData from './bookData.jsx';
import './Book.css';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {bookData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;