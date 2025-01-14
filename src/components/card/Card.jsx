import style from "./Card.module.css"
import { Link } from "react-router-dom";
import GenerateStars from "../GenerateStars";

export default function Card({ title, abstract, ID, image, URI, avg_vote }) {


    return (
        <div className={style.card}>
            <figure className={style.card_figure}><img className={style.card_img} src={image ? image.includes("https") ? image : `${URI}imgs/${image}` : null} alt={title} /></figure>
            <div className={style.card_description}>
                <h3>{title}</h3>
                <div>{avg_vote !== null && avg_vote !== undefined ? <GenerateStars score={avg_vote} /> : ""}</div>
                <p>{abstract}</p>
                <div className={style.lower_card}>
                    <Link className="btn" to={`/${ID}`}>maggiori informazioni</Link>

                </div>
            </div>
        </div>
    )
}