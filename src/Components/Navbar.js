import "./Navbar.css";

export default function Navbar({setPage}) {
  return (
    <div id="Navbar">
      <div className="Logo" onClick={() => setPage('')}>
        <img src="https://github.com/KleemoffDeveloper/fullstack-portfolio-frontend/blob/main/public/Spider-Verse%20logo.png?raw=true" />
        <h2>Spider-Verse</h2>
      </div>
      
      <div className="Buttons">
        <button onClick={() => setPage('View All')}>View</button>
        <button onClick={() => setPage('Create Form')}>Create</button>
      </div>
    </div>
  );
}
