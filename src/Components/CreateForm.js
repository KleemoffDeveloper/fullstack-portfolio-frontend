import "./CreateForm.css";

export default function CreateForm() {
  return (
    <div className="create-form">
      <h1>Create a new Spider Character</h1>
      <div className="banner">
        <form>
          <div className="input-field">
            <label>Image</label>
            <div className="image-gallery"></div>
          </div>

          <div className="input-field">
            <label>Name</label>
            <input type="text" required />
          </div>

          <div className="input-field">
            <label>Age</label>
            <input type="number" min={1} required />
          </div>

          <div className="input-field">
            <label>First Appearance</label>
            <input type="text" required />
          </div>

          <div className="input-field">
            <label>Description</label>
            <input type="text" required />
          </div>
        </form>
      </div>
    </div>
  );
}
