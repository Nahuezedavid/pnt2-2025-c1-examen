import React, { useState } from 'react';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-[90px] text-center">
      {movie.poster && !imageError ? (
              <Link href={`/peliculas/${movie._id}`}>
                  <img 
                    src={movie.poster} 
                    alt={movie.title} 
                    className="w-full h-[135px] object-cover rounded-md"
                    onError={handleImageError}
                  />
              </Link>

      ) : (
        <Link href={`/peliculas/${movie._id}`}>
        <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs text-gray-600 text-center">{movie.title}</span>
          
        </div>
        </Link>  
      )}
      <p className="text-xs mt-1 truncate">{movie.title}</p>
      <p className="text-xs text-gray-600">{movie.year}</p>
      <div>
        <button onClick={() => setLikes(likes => likes + 1)} className="text-green-600 text-sm">👍 {likes}</button>
        <button onClick={() => setDislikes(dislikes => dislikes + 1)} className="text-red-600 text-sm">👎 {dislikes}</button>
      </div>
    </div>
  );
}