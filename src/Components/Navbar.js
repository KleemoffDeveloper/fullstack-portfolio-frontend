import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="Navbar">
      <div className="Logo">
        <img src="https://github.com/KleemoffDeveloper/fullstack-portfolio-frontend/blob/main/public/Spider-Verse%20logo.png?raw=true" />
        <h2>Spider-Verse</h2>
      </div>
      
      <div className="Buttons">
        <button>View</button>
        <button>Create</button>
      </div>
    </div>
  );
}
