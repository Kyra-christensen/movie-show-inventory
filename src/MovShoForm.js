import React from 'react';

export default function MovShoForm({ 
  submitMovSho,
  title,
  setTitle,
  genre,
  setGenre,
  director,
  setDirector,
  type,
  setType,
  yearReleased,
  setYearReleased
}) {
  return (
    <div className='create'>
      <form onSubmit={submitMovSho}>
        <h2>Add a movie or TV show</h2>
        <label>
          Title 
          <input required name='title' value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Director 
          <input required name='director' value={director} onChange={e => setDirector(e.target.value)} />
        </label>
        <label>
          Genre 
          <input required name='genre' value={genre} onChange={e => setGenre(e.target.value)} />
        </label>
        <label>
          Type 
          <select required value={type} onChange={e => setType(e.target.value)}>
            <option>select one</option>
            <option>Movie</option>
            <option>TV Show</option>
          </select>
        </label>
        <label>
          Year Released
          <input required value={yearReleased} onChange={e => setYearReleased(e.target.value)} />
        </label>
        <button>Add to inventory</button>
      </form>
    </div>
  );
}
