export default function Footer() {
    const footerStyle = {
        backgroundColor: "#34495e",
        color: "#ecf0f1",
        padding: "10px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.9rem",
    };

    const linkStyle = {
        color: "#1abc9c",
        textDecoration: "none",
        margin: "0 10px",
    };

    const copyrightStyle = {
        marginTop: "10px",
        fontSize: "0.8rem",
        color: "#95a5a6",
    };

    return (
        <footer style={footerStyle}>
            <div>
                <a href="/about" style={linkStyle}>About</a>
                <a href="/contact" style={linkStyle}>Contact</a>
                <a href="/privacy" style={linkStyle}>Privacy Policy</a>
            </div>
            <p style={copyrightStyle}>
                © {new Date().getFullYear()} MovieReviews. All rights reserved.
            </p>
        </footer>
    );
}
