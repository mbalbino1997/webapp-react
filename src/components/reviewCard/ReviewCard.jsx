import style from "./ReviewCard.module.css";
import GenerateStars from "../GenerateStars";
export default function ReviewCard({ review }) {
    return (
        <div className={style.reviewCard}>
            <h2>{review.name}</h2>
            <div className="row star_gap">
                <p>voto:</p>
                {review.vote !== null && review.vote !== undefined ? <GenerateStars score={review.vote} /> : ""}
            </div>
            <p>{review.text}</p>
        </div>
    )
}