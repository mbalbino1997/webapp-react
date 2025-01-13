import style from "./ReviewCard.module.css"
export default function ReviewCard({ review }) {
    return (
        <div className={style.reviewCard}>
            <h2>{review.name}</h2>
            <h2>{review.vote}</h2>
            <p>{review.text}</p>
        </div>
    )
}