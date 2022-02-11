import React, { useState } from 'react';
import { createMovSho } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

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
    <div>CreatePage</div>
  );
}
