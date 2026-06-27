import "../styles/serviceList.css";
import {
  Wrench,
  Settings,
  Car,
  Gauge,
} from "lucide-react";

export default function ServiceList() {
  const services = [
    {
      icon: <Settings size={40} />,
      title: "Engine Repairs",
      description:
        "Complete engine diagnostics, repairs, rebuilds and maintenance.",
    },
    {
      icon: <Car size={40} />,
      title: "Gearbox Repairs",
      description:
        "Manual and automatic gearbox servicing and repairs.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Suspension Repairs",
      description:
        "Shock absorbers, control arms, steering and suspension work.",
    },
    {
      icon: <Gauge size={40} />,
      title: "Computer Diagnostics",
      description:
        "Advanced fault detection using modern diagnostic equipment.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Brake Services",
      description:
        "Brake pads, discs, drums and complete brake inspections.",
    },
    {
      icon: <Settings size={40} />,
      title: "Oil & Filter Service",
      description:
        "Regular servicing to keep your engine performing efficiently.",
    },
  ];

  return (
    <section className="service-list">
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}