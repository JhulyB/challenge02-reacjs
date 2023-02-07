import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { GenreResponseProps, SideBar } from './components/SideBar';
import { Content, MovieProps } from './components/Content';
import { Header } from './components/Header';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        onClickGenre={(selected) => setSelectedGenreId(selected)}
        selectedGenreId={selectedGenreId}
        />

      <div className="container">
        <Header genretitle={selectedGenre.title} />

        <Content genreId={selectedGenreId}/>
      </div>
    </div>
  )
}