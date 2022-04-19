// imports
import React, { useEffect, useState, Suspense } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { Route, Routes } from 'react-router-dom';
import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext'
import Spinner from './components/Spinner'

// functional component
export default function App () {
  // vanilla js section
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);
  
  const API_URL = 'https://itunes.apple.com/search?term=';

    // functions section
    useEffect(() => {
      if (search) {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch(API_URL + search)
            const resData = await response.json()
            if (resData.results.length > 0) {
              setData(resData.results)
            } else {
              setMessage('Not Found')
            }
        }
        fetchData()
      }
    }, [search])

    const handleSearch = (e, term) => {
      e.preventDefault();
      setSearch(term)
    }



    const renderGallery = () => {
      if (data) {
        return (
          <Suspense fallback={<Spinner />}>
            {/* <Gallery /> */}
          </Suspense>
        )
      }
    }



    // jsx section
    return (
      <div>
      {message}
              <Routes>
                  <Route path="/" element={
                      <React.Fragment>
                          <SearchBar handleSearch = {handleSearch}/>
                          <SearchContext.Provider />
                          <DataContext.Provider value={data} />
                            {renderGallery()}
                          <DataContext.Provider />
                          <Gallery data={data} />
                      </React.Fragment>
                  } />
                  <Route path="/album/:id" element={<AlbumView />} />
                  <Route path="/artist/:id" element={<ArtistView />} />
              </Routes>
      </div>
  )
}




