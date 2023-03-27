import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  //Room State

  // Messages States
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, message]);
    setMessage("");
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages([...messages, { message: data.message, sent: false }]);
    });
  }, [socket, messages]);

  return (
    <div className="App">
      <input
        placeholder="Message..."
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messages.map((msg, index) => (
        <p key={index} className={msg.sent ? "sent" : "received"}>
          {msg.message}
        </p>
      ))}
    </div>
  );
}

export default App;
