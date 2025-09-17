import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { BookContext } from "../components/BookContext";
import "../styles/note.css";

function Notes() {
  const { id } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const book = books.find((b) => b.id === Number(id));

  const [noteSearch, setNoteSearch] = useState("");
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const [showImageModal, setShowImageModal] = useState(false);

  if (!book) return <p>Book not found</p>;

  // Notes
  const openNewNoteModal = () => {
    setEditingNote(null);
    setNoteTitle("");
    setNoteContent("");
    setShowNoteModal(true);
  };

  const openEditNoteModal = (note) => {
    setEditingNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.preview);
    setShowNoteModal(true);
  };

  const saveNote = () => {
    if (!noteTitle.trim() || !noteContent.trim()) return;

    if (editingNote) {
      setBooks((prev) =>
        prev.map((b) =>
          b.id === book.id
            ? {
                ...b,
                notes: b.notes.map((n) =>
                  n.id === editingNote.id
                    ? { ...n, title: noteTitle, preview: noteContent }
                    : n
                ),
              }
            : b
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title: noteTitle,
        preview: noteContent,
      };
      setBooks((prev) =>
        prev.map((b) =>
          b.id === book.id ? { ...b, notes: [...b.notes, newNote] } : b
        )
      );
    }

    setShowNoteModal(false);
  };

  const deleteNote = (noteId) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === book.id
          ? { ...b, notes: b.notes.filter((n) => n.id !== noteId) }
          : b
      )
    );
  };

  const filteredNotes = book.notes.filter(
    (n) =>
      n.title.toLowerCase().includes(noteSearch.toLowerCase()) ||
      n.preview.toLowerCase().includes(noteSearch.toLowerCase())
  );

  // Images
  const handleImageUpload = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded) {
      const url = URL.createObjectURL(uploaded);
      const newImage = { id: Date.now(), src: url, name: uploaded.name };
      setBooks((prev) =>
        prev.map((b) =>
          b.id === book.id ? { ...b, images: [...b.images, newImage] } : b
        )
      );
      setShowImageModal(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newImage = { id: Date.now(), src: url, name: file.name };
      setBooks((prev) =>
        prev.map((b) =>
          b.id === book.id ? { ...b, images: [...b.images, newImage] } : b
        )
      );
      setShowImageModal(false);
    }
  };

  const deleteImage = (imgId) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === book.id
          ? { ...b, images: b.images.filter((img) => img.id !== imgId) }
          : b
      )
    );
  };

  const renameImage = (imgId, newName) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === book.id
          ? {
              ...b,
              images: b.images.map((img) =>
                img.id === imgId ? { ...img, name: newName } : img
              ),
            }
          : b
      )
    );
  };

  return (
    <div className="notes-page">
      {/* Left page - Notes */}
      <div className="notes-left">
        <h2>NOTES for {book.title}</h2>
        <input
          type="text"
          className="note-search"
          placeholder="Search notes..."
          value={noteSearch}
          onChange={(e) => setNoteSearch(e.target.value)}
        />

        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id} className="note-card">
              <h4>{note.title}</h4>
              <p>{note.preview}</p>
              <div className="note-actions">
                <button onClick={() => openEditNoteModal(note)}>✏️ Edit</button>
                <button className="delete-btn" onClick={() => deleteNote(note.id)}>🗑️ Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching notes found</p>
        )}

        <button className="add-btn" onClick={openNewNoteModal}>
          ➕ Add Note
        </button>
      </div>

      {/* Right page - Images */}
      <div className="notes-right">
        <h2>Pictures</h2>
        <div className="images">
          {book.images.map((img) => (
            <div key={img.id} className="image-card">
              <img src={img.src} alt={img.name} />
              <input
                type="text"
                value={img.name}
                onChange={(e) => renameImage(img.id, e.target.value)}
                className="image-name"
              />
              <button className="delete-btn" onClick={() => deleteImage(img.id)}>🗑️</button>
            </div>
          ))}
        </div>

        <button className="upload-btn" onClick={() => setShowImageModal(true)}>
          📷 Add picture
        </button>
      </div>

      {/* Note Modal */}
      {showNoteModal && (
        <div className="modal-overlay" onClick={() => setShowNoteModal(false)}>
          <div className="modal note-editor" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Note title"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
            <textarea
              placeholder="Write your note..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={() => setShowNoteModal(false)}>Cancel</button>
              <button onClick={saveNote}>
                {editingNote ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Upload Modal */}
      {showImageModal && (
        <div className="modal-overlay" onClick={() => setShowImageModal(false)}>
          <div className="modal image-upload-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowImageModal(false)}>✖</button>
            <h3>Choose from the device</h3>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label htmlFor="fileInput" className="choose-btn">＋</label>
            <div
              className="drag-drop"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              Or drag and drop a file here
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
