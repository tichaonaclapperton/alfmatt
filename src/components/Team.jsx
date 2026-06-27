import "../styles/team.css";

export default function Team() {
  const team = [
    {
      name: "Lawson Mateyu",
      role: "Lead Mechanic",
      image: "/images/team1.jpg",
    },
    {
      name: "Banett",
      role: "Engine Specialist",
      image: "/images/team2.jpg",
    },
    {
      name: "Mike",
      role: "Diagnostics Expert",
      image: "/images/team3.jpg",
    },
  ];

  return (
    <section className="team">
      <h2>Meet Our Team</h2>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />

            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}