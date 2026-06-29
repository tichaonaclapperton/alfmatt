import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="container">
				{/* Logo */}
				<div className="logo">
					<img src="/images/logo.png" alt="Company Logo" />
					
				</div>

				{/* Navigation Links */}
				<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
					<li>
						<Link to="/" onClick={() => setMenuOpen(false)}>
							Home
						</Link>
					</li>

					<li>
						<Link to="/about" onClick={() => setMenuOpen(false)}>
							About
						</Link>
					</li>

					<li>
						<Link to="/service" onClick={() => setMenuOpen(false)}>
							Services
						</Link>
					</li>

					<li>
						<Link to="/contact" onClick={() => setMenuOpen(false)}>
							Contact
						</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="menu-btn"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>
		</nav>
	);
}