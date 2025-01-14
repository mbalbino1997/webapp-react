import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";
export default function GenerateStars({ score }) {
    if (typeof score !== "number") +score;
    const roundScore = Math.round(score);
    return Array.from({ length: 5 }, (_, i) => (
        <FontAwesomeIcon
            key={i}
            icon={i < roundScore ? faStar : faStarEmpty}
            color={i < roundScore ? "gold" : "lightgray"}
        />
    ))
}