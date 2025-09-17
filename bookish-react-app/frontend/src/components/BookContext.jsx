// src/components/BookContext.jsx
import { createContext, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Sample Book 1",
      status: "TBR",
      notes: [
        { id: 101, title: "First Note", preview: "This is a demo note." }
      ],
      images: [],
      cover: null,
    },
    {
      id: 2,
      title: "Sample Book 2",
      status: "Reading",
      notes: [],
      images: [],
      cover: null,
    },
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
