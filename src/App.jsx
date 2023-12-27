import React from 'react';
import Heading from './templates/Heading';

function App() {
  return (
    <div className="app-container">
      <Heading title="Mynotes" />
      <main>
        <div className="search-bar">
          <h2>Catatan Aktif</h2>
          <input type="text" placeholder='Cari berdasarkan judul ...' />
        </div>
      </main>
    </div>
  );
}

export default App;
