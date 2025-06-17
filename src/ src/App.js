import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { id: Date.now(), text: input }]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Simple Chat App</h2>
      <div
        style={{
          border: '1px solid #ccc',
          height: 300,
          padding: 10,
          overflowY: 'auto',
          marginBottom: 10,
          backgroundColor: '#f9f9f9'
        }}
      >
        {messages.map((msg) => (
          <div key={msg.id} style={{ margin: '5px 0' }}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        style={{ width: '80%', padding: 8 }}
      />
      <button onClick={sendMessage} style={{ padding: '8px 12px', marginLeft: 10 }}>
        Send
      </button>
    </div>
  );
}
