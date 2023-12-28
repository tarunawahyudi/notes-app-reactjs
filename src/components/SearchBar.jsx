import React from "react";

function SearchBar() {
    return (
        <section className="search-bar">
            <h2>Catatan Aktif</h2>
            <input name="search" type="text" placeholder='Cari berdasarkan judul ...'/>
        </section>
    )
}

export default SearchBar;