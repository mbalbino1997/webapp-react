import axios from "axios";
import { useState } from "react";
export default function FormReview({ ID, onReviewSubmitted }) {
    const initFormReview = {
        name: "",
        vote: 1,
        text: ""
    }
    const [review, setReview] = useState(initFormReview)
    function handleChange(e) {
        const { name, value } = e.target;
        setReview((prevReview) => ({
            ...prevReview,
            [name]: name === "vote" ? parseInt(value, 10) : value,
        }));
    }
    function postReview(e) {
        e.preventDefault();

        axios.post(`http://localhost:3000/movies/reviews/${ID}`, review)
            .then((res) => {
                console.log(res.data)
                setReview(initFormReview);
                onReviewSubmitted()
            })
            .catch((err) => {
                console.error(err)
            });

    }
    return (
        <>
            <h1 className="text_center">Add your review:</h1>
            <form className="form_review" onSubmit={postReview}>
                <div className="form_item">
                    <label htmlFor="name">your name:</label>
                    <input type="text"
                        value={review.name}
                        name="name"
                        required
                        onChange={handleChange} />
                </div>
                <div className="form_item">
                    <label htmlFor="vote">Vote:</label>
                    <select
                        id="vote"
                        name="vote"
                        value={review.vote}
                        onChange={handleChange}
                        required
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form_item">
                    <label htmlFor="name">text:</label>
                    <textarea
                        style={{ resize: "none" }}
                        name="text"
                        id="text"
                        rows={4}
                        cols={20}
                        value={review.text}
                        onChange={handleChange}>

                    </textarea>
                </div>
                <button className="btn" type="submit">Add</button>

            </form>

        </>
    )
}
