import React, {useEffect, useState} from 'react'

export default function PutFilm(props){
  const { url } = props
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newFilm = await response.json();
      setFilm(newFilm);
    };

    fetchData();
  }, [url]);

  if (film) {
    return <span>{film.title}</span>;
  } else {
    return null;
  }
}