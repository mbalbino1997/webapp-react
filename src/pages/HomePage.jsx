import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/card/Card";
export default function HomePage() {
    const [movies, setMovies] = useState([])
    const URI = "http://localhost:3000/"
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
        <><section>
            <div className="container">
                <div className="row">

                    {movies.map((el, i) => (
                        <div className="col" key={i}>
                            <Card title={el.title} abstract={el.abstract} ID={el.id} image={el.image} URI={URI} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
        </>
    )
}