import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Fantasy Basketball Tool</Link>
            </div>
            <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/team" className="nav-link" onClick={() => setMenuOpen(false)}>Your Team</Link>
            </div>
        </nav>
    );
}

export default NavBar;
