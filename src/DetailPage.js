import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getSingleMovSho } from './services/fetch-utils';

export default function DetailPage() {
  const [movieShow, setMovieShow] = useState([]);
  const match = useRouteMatch();

  

  return (
    <div>DetailPage</div>
  );
}
