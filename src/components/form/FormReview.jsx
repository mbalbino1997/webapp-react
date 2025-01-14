export default function FormReview({ }) {
    return (
        <>
            <h1 className="text_center">Add your review:</h1>
            <form className="form_review">
                <div className="form_item">
                    <label htmlFor="name">your name:</label>
                    <input type="text" value={name} name="name" />
                </div>
                <div className="form_item">
                    <label htmlFor="vote">Voto:</label>
                    <select
                        id="vote"
                        name="vote"

                    >
                        <option value="">Seleziona un voto</option>
                        <option value="1">1 - Scarso</option>
                        <option value="2">2 - Sufficiente</option>
                        <option value="3">3 - Buono</option>
                        <option value="4">4 - Molto buono</option>
                        <option value="5">5 - Eccellente</option>
                    </select>
                </div>
                <div className="form_item">
                    <label htmlFor="name">text:</label>
                    <textarea style={{ resize: "none" }} name="text" id="text" rows={4} cols={20}></textarea>
                </div>
                <button className="btn" type="submit">Invia</button>

            </form>

        </>
    )
}
