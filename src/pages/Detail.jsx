import style from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const { image, title, abstract, release_year, director } = movie;
    const URI = "http://localhost:3000/";
    function fetchData() {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                setMovie(res.data)

            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    useEffect(() => {
        fetchData()
    }, [id]);
    return (<>

        <div className={`container row ${style.div}`}>
            <figure className={style.figure}><img className={style.cover_img} src={image ? image.includes("https") ? image : `${URI}imgs/${image}` : null} alt="" /></figure>
            <div>
                <h1>{title}</h1>
                <p>{release_year}-{director}</p>
                <h2>{abstract}</h2>

            </div>

        </div>
        <div className="container">
            <hr />
            <button><Link to="/">back to movies</Link></button>


        </div>
    </>
    )
}