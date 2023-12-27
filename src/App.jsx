import React from 'react';
import Heading from './templates/Heading';
import NoteItem from './components/NoteItem';
import NoteList from './components/NoteList';
import ActionButton from './components/ActionButton';

function App() {
  return (
    <div className="app-container">
      <Heading title="Mynotes" />
      <main>
        <section className="search-bar">
          <h2>Catatan Aktif</h2>
          <input type="text" placeholder='Cari berdasarkan judul ...' />
        </section>

        <NoteList />
        <ActionButton />
      </main>
    </div>
  );
}

export default App;
