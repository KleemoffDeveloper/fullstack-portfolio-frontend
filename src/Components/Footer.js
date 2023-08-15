import "./Footer.css";

export default function Footer() {
  return (
    <div id="Footer">
      <hr />
      <section>
        <div className="sub-section">
          <h2>About</h2>
          <p>
            This fanmade Spider-Verse website is a project that I created with
            React (frontend) and Express (backend). Its a part of a series of
            projects in a fullstack web development curriculum whereas this one
            in particular is meant to showcase my ability to create a fullstack
            application from scratch.
          </p>
        </div>
        <div className="sub-section">
          <h2>Silis Kleemoff</h2>
          <a href="https://www.linkedin.com/in/silis-kleemoff/" target="_blank" className="graphic-link">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/kleemoffdeveloper" target="_blank" className="graphic-link">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>
      <section>
        <p>
          Fan website made with{" "}
          <a href="https://react.dev/" target="_blank">
            React
          </a>{" "}
          by <b>Silis Kleemoff</b>
        </p>
      </section>
    </div>
  );
}
