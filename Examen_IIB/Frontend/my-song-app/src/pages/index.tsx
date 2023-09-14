import React, { useState } from 'react';
import SongList from '../components/SongList';

const Home: React.FC = () => {
    const [songs, setSongs] = useState([
        { id: 1, title: 'Love Yourself', artist: 'Justin Bieber' },
        { id: 2, title: 'Shape of You', artist: 'Ed Sheeran' },
        { id: 3, title: 'Rolling in the Deep', artist: 'Adele' },
        { id: 4, title: 'Billie Jean', artist: 'Michael Jackson' },
        { id: 5, title: 'Bohemian Rhapsody', artist: 'Queen' },
        { id: 6, title: 'Imagine', artist: 'John Lennon' },
        { id: 7, title: 'Hotel California', artist: 'Eagles' },
        { id: 8, title: 'Hey Jude', artist: 'The Beatles' },
        { id: 9, title: 'Purple Haze', artist: 'Jimi Hendrix' },
        { id: 10, title: 'Like a Rolling Stone', artist: 'Bob Dylan' },
        { id: 11, title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
        { id: 12, title: 'Imagine', artist: 'John Lennon' },
        { id: 13, title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' },
        { id: 14, title: 'I Want to Hold Your Hand', artist: 'The Beatles' },
        { id: 15, title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
        { id: 16, title: 'Hello', artist: 'Adele' },
        { id: 17, title: 'All of Me', artist: 'John Legend' },
        { id: 18, title: 'Wonderwall', artist: 'Oasis' },
        { id: 19, title: 'Sweet Child o Mine', artist: 'Guns N Roses' },
        { id: 20, title: 'Thriller', artist: 'Michael Jackson' },
        { id: 21, title: 'Shape of My Heart', artist: 'Sting' },
        { id: 22, title: 'Hallelujah', artist: 'Leonard Cohen' },
        { id: 23, title: 'Blinding Lights', artist: 'The Weeknd' },
        { id: 24, title: 'Thinking Out Loud', artist: 'Ed Sheeran' },
        { id: 25, title: 'Yesterday', artist: 'The Beatles' },
        { id: 26, title: 'Dont Stop Believin', artist: 'Journey' },
        { id: 27, title: 'Radioactive', artist: 'Imagine Dragons' },
        { id: 28, title: 'I Will Always Love You', artist: 'Whitney Houston' },
        { id: 29, title: 'Hotline Bling', artist: 'Drake' },
        { id: 30, title: 'Take Me to Church', artist: 'Hozier' },
      ]);
      

  const handleDelete = (id: number) => {
    // Implementa la lógica para eliminar la canción con el ID proporcionado
    // Actualiza el estado songs después de eliminar la canción
  };

  return (
    <div>
      <SongList songs={songs} onDelete={handleDelete} />
      {/* Agrega un formulario para agregar canciones */}
    </div>
  );
};

export default Home;