import { useParams } from 'react-router-dom'
import { useState } from 'react';

export default function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>{albumData}</p>
        </div>
    )
}
