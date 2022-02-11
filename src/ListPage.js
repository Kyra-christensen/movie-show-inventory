import React, { useState, useEffect } from 'react';
import { getAllMovSho } from './services/fetch-utils';
import SingleMoSho from './SingleMoSho';

export default function ListPage() {
  const [movSho, setMovSho] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getAllMovSho();
      setMovSho(data);
    }
    fetch();
  }, []);

  return (
    <div>ListPage</div>
  );
}
