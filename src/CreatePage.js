import React, { useState } from 'react';
import { createMovSho } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
import MovShoForm from './MovShoForm';

export default function CreatePage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [type, setType] = useState('');
  const [yearReleased, setYearReleased] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    const movSho = {
      title,
      genre,
      director,
      type,
      year_released: yearReleased
    };

    await createMovSho(movSho);
    history.push('/movies-shows');
  }

  return (
    <div>
      <MovShoForm
        submitMovSho={handleSubmit}
        title={title}
        setTitle={setTitle}
        genre={genre}
        setGenre={setGenre}
        director={director}
        setDirector={setDirector}
        type={type}
        setType={setType}
        yearReleased={yearReleased}
        setYearReleased={setYearReleased} />

    </div>
  );
}
