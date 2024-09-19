import { useState, useEffect } from "react";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log('Current name:', name);
    console.log('Current email:', email);
  }, [name, email]);

  function Submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={Submit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={{ textAlign: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>

        {submitted && (
          <div>
            <h2>Submitted Information:</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
