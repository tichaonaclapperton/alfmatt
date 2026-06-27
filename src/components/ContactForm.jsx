import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../styles/contactForm.css";

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		vehicle: "",
		service: "",
		appointmentDate: "",
		appointmentTime: "",
		message: "",
	});

	function handleChange(e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}
	const [status, setStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setStatus("Sending...");

		emailjs
			.send("service_0j6fqlb", "template_hiehk7o", form, "jfchY-MUg5i2A7jIp")
			.then(() => {
				setStatus("Appointment request sent successfully!");

				setForm({
					name: "",
					email: "",
					phone: "",
					vehicle: "",
					service: "",
					appointmentDate: "",
					appointmentTime: "",
					message: "",
				});
			})
			.catch((error) => {
				console.error(error);
				setStatus("Failed to send appointment request.");
			});
	};
	const handleWhatsApp = () => {
		const phone = "27812119738";

		const message = `
    *New Appointment Request*
    
    👤 Name: ${form.name}
    📧 Email: ${form.email}
    📞 Phone: ${form.phone}
    
    🚗 Vehicle: ${form.vehicle}
    🔧 Service: ${form.service}
    
    📅 Date: ${form.appointmentDate}
    🕒 Time: ${form.appointmentTime}
    
    📝 Message:
    ${form.message}
    `;

		window.open(
			`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
			"_blank"
		);
	};

	return (
		<section className="contact-form-section">
			<div className="form-container">
				<h2>Book a Service</h2>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={form.name}
						onChange={handleChange}
						required
					/>

					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={form.email}
						onChange={handleChange}
						required
					/>

					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						value={form.phone}
						onChange={handleChange}
						required
					/>
					<input
						type="text"
						name="vehicle"
						placeholder="vehicle model"
						value={form.vehicle}
						onChange={handleChange}
						required
					/>

					<select
						className="sel"
						name="service"
						value={form.service}
						onChange={handleChange}
					>
						<option value="">Select Service</option>
						<option value="Oil Change">Oil Change</option>
						<option value="Brake Service">Brake Service</option>
						<option value="Engine Repair">Engine Repair</option>
						<option value="Gearbox Repair">Gearbox Repair</option>
						<option value="Suspension Repair">Suspension Repair</option>
						<option value="Diagnostics">Diagnostics</option>
					</select>

					<div className="date-time-row">
						<input
							type="date"
							name="appointmentDate"
							value={form.appointmentDate}
							onChange={handleChange}
							required
						/>

						<input
							type="time"
							name="appointmentTime"
							value={form.appointmentTime}
							onChange={handleChange}
							required
						/>
					</div>

					<textarea
						name="message"
						placeholder="How can we help you?"
						rows="6"
						value={form.message}
						onChange={handleChange}
						required
					/>

					<button type="submit">Send Booking Request</button>

					<button type="button" onClick={handleWhatsApp}>
						Book via WhatsApp
					</button>
				</form>
                {status && <p className="status-message">{status}</p>}
			</div>
		</section>
	);
}
