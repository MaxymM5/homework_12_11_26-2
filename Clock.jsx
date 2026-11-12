
import { useState, useEffect } from "react";

function Clock({ title, city }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <p><b>Місто:</b> {city}</p>
      <h1>{time.toLocaleTimeString("uk-UA")}</h1>
      <p>{time.toLocaleDateString("uk-UA")}</p>
    </div>
  );
}

export default Clock;
