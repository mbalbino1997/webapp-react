export default function Header() {
    const headerStyle = {
        backgroundColor: "#69150ec7",
        color: "white",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        marginBottom: "20px"
    };

    const titleStyle = {
        fontSize: "2.5rem",
        margin: "0",
    };

    const taglineStyle = {
        fontSize: "1.2rem",
        margin: "5px 0 0",
        fontStyle: "italic",
        color: "white",
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>MovieReviews</h1>
            <p style={taglineStyle}>Discover, rate, and share your favorite movies</p>
        </header>
    );
}
