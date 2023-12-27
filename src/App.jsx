import React from 'react';
import Header from './templates/Header.jsx';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddPage from "./pages/AddPage.jsx";

function App() {
  return (
    <div className="app-container">
      <Header title="Mynotes" />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/notes/new" element={<AddPage />}/>
          <Route path="/notes/:id" element={<DetailPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
