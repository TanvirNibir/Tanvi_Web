import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/mainPage";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import { BookProvider } from "./components/BookContext";
import "./styles/global.css";
import "./styles/mainPage.css";
export default function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notes/:id" element={<Notes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BookProvider>
  );
}
