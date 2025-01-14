import style from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewCard from "../components/reviewCard/ReviewCard";
import GenerateStars from "../components/GenerateStars";
import FormReview from "../components/form/FormReview";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({ reviews: [] })
    const { image, title, abstract, release_year, director, avg_score } = movie;
    const URI = "http://localhost:3000/";
    function fetchData() {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                setMovie(res.data)
                console.log(movie.reviews)

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
            <hr className="hr" />
            <figure className={style.figure}><img className={style.cover_img} src={image ? image.includes("https") ? image : `${URI}imgs/${image}` : null} alt="" /></figure>
            <hr className="hr" />
            <div>
                <h1>{title}</h1>
                <p>{release_year}-{director}</p>
                <div>{avg_score !== null && avg_score !== undefined ? <GenerateStars score={avg_score} /> : ""}</div>
                <h2>{abstract}</h2>

            </div>

        </div>
        <div className="container">
            <hr className="hr" />
            <div className="row row-review">
                <h1>Reviews:</h1>
                <button className="btn"><Link to="/">back to movies</Link></button>

            </div>
            <hr className="hr" />
            {Array.isArray(movie.reviews) && movie.reviews.map((review, i) => (

                <ReviewCard key={i} review={review} />
            )
            )}
            <FormReview />


        </div>

    </>
    )
}