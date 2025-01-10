import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function ({ title, abstract, ID }) {


    return (
        <div className={style.card}>
            <div className={style.card_description}>
                <h3>{title}</h3>
                <p>{abstract}</p>
                <div className={style.lower_card}>
                    <Link to={`/movies/${ID}`}>maggiori informazioni</Link>

                </div>
            </div>
        </div>
    )
}