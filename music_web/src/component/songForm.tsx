// src/components/SongForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { addSong } from '../app/store';

const SongForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //dispatch(addSong({ title }));
    setTitle('');
  };

  return (
    <div>
      <h2>Add a Song</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default SongForm;
