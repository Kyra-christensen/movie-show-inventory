import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getSingleMovSho } from './services/fetch-utils';

export default function DetailPage() {
  const [movieShow, setMovieShow] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const singleMovSho = await getSingleMovSho(match.user_id);
      setMovieShow(singleMovSho);
    }
    fetch();
  }, [match]);

  return (
    <div>DetailPage</div>
  );
}
