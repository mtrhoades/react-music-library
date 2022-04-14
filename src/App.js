// imports
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

// functional component
export default function App(){
  // vanilla js section

    const API_URL = 'https://itunes.apple.com/search?term=';
    
    let [search, setSearch] = useState('');
    let [message, setMessage] = useState('Search for Music!');
    let [data, setData] = useState([]);


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

    // jsx section
    return (
        <div>
            <SearchBar handleSearch= {handleSearch}/>
            {message}
            <Gallery data={data} />
        </div>
    )
}




