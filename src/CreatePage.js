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
  
  return (
    <div>CreatePage</div>
  );
}
