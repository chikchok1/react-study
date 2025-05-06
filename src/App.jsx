import { useState, useEffect } from "react";

function Clock({ time, color }) {
  return <h1 style={{ color }}>{time}</h1>;
}

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("white");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Clock time={time} color={color} />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
