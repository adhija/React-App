import React, { useState } from 'react';

// Child Component
const Child = ({ parentMessage, onUpdateMessage }) => (
  <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed blue' }}>
    <h3>Child Component</h3>
    <p>Message received from parent: <strong>{parentMessage}</strong></p>
    <button onClick={() => onUpdateMessage("Hello from the Child Component!")} style={{ padding: '8px' }}>
      Send Message to Parent
    </button>
  </div>
);

// Parent Component (Default Export)
export default function App() {
  const [message, setMessage] = useState("Awaiting update from child...");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', border: '2px solid black', maxWidth: '400px' }}>
      <h2>Parent Component</h2>
      <p>Current Message: <span style={{ color: 'green', fontWeight: 'bold' }}>{message}</span></p>
      
      {/* Passing state and callback function as props */}
      <Child parentMessage={message} onUpdateMessage={setMessage} />
    </div>
  );
}