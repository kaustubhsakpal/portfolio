import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, settime] = useState("");

  useEffect(() => {
    const days = ["Sun","mon", "Tue", "wed", "Thu", "fri", "sat"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

   

    const interval = setInterval(() => {
      const date = new Date();
      const day = days[date.getDay()];
      const months = month[date.getMonth()]
      const datenumber=date.getDate()
      const hours = date.getHours().toString().padStart(2, "0");
      const mintues = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");

      const time = `${day} ${months} ${datenumber} ${hours}:${mintues}:${seconds}`;
      settime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="left">
          <div className="icon">
            <img src="/navbar-icons/apple.svg" alt="" />
          </div>
          <div className="text">
            <h1>Kaustubh sakpal</h1>
          </div>
          <div className="text">
            <h1>File</h1>
          </div>
          <div className="text">
            <h1>Window</h1>
          </div>
          <div className="text">
            <h1>terminal</h1>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <img src="/navbar-icons/wifi.svg" alt="" />
          </div>
          <div className="time">
            <p>{time}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
