import { useState, useEffect } from "react"
import axios from "axios"
export default function HomePage() {
    const [movies, setMovies] = useState([])
    function fetchData() {
        axios.get("http://localhost:3000/movies")
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <><ul>
            {movies.map((el, i) => (
                <li key={i}>{el.title}</li>
            ))}

        </ul>
        </>
    )
}