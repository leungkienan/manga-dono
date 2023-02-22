import React from 'react'

function MangaCard({ manga }) {
  return (
    <article className="manga-card">
      <a href={manga.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={manga.images.jpg.image_url} alt="Manga Pic" />
        </figure>
        <h3>{manga.title}</h3>
      </a>
      <button class="button">Add Chapter</button>
    </article>
  )
}

export default MangaCard
