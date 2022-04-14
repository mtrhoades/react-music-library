// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState } from 'react'

export default function ArtistView() {
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <p>{artistData}!</p>
        </div>
    )
}

