// src/pages/MainPage.jsx
import Bookshelf from "../components/Bookshelf";
import "../styles/mainPage.css";

function MainPage() {
  return (
    <div className="page-layout">
     {/* Bookshelf component */}
      <Bookshelf />
    </div>
  );
}

export default MainPage;
