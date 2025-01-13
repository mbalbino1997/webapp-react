import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({ title, abstract, ID, image, URI, avg_vote }) {


    return (
        <div className={style.card}>
            <figure className={style.card_figure}><img className={style.card_img} src={image ? image.includes("https") ? image : `${URI}imgs/${image}` : null} alt={title} /></figure>
            <div className={style.card_description}>
                <h3>{title}</h3>
                <h2>voto: {avg_vote}/5</h2>
                <p>{abstract}</p>
                <div className={style.lower_card}>
                    <Link to={`/${ID}`}>maggiori informazioni</Link>

                </div>
            </div>
        </div>
    )
}