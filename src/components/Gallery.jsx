import { useState, useEffect } from "react";
import "../styles/gallery.css";

import phto1 from "../assets/gallery/phto1.jpg";
import phto2 from "../assets/gallery/phto2.jpg";
import phto3 from "../assets/gallery/phto3.jpg";
import phto4 from "../assets/gallery/phto4.jpg";
import phto5 from "../assets/gallery/phto5.jpg";
import phto6 from "../assets/gallery/phto6.jpg";
import phto7 from "../assets/gallery/phto7.jpg";
import phto8 from "../assets/gallery/phto8.jpg";
import phto9 from "../assets/gallery/phto9.jpg";
import phto10 from "../assets/gallery/phto10.jpg";

export default function Gallery() {
	const images = [
		phto1,
		phto2,
		phto3,
		phto4,
		phto5,
		phto6,
		phto7,
		phto8,
		phto9,
		phto10,
        phto10,

        phto1,
		phto2,
		phto3,
		phto4,
		phto5,
		phto6,
		phto7,
		phto8,
		phto9,
	];

	return (
		<section className="gallery">
			<div className="gallery-header">
				<h2>Our Workshop Gallery</h2>
				<p>See our latest repair work and workshop.</p>
			</div>

			<div className="gallery-track">
				{images.map((image, index) => (
					<img key={index} src={image} alt={`Workshop ${index}`} />
				))}
			</div>
		</section>
	);
}
