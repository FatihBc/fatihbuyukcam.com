import { useEffect, useState } from "react";
import "./clock.css";
import { useTheme } from "../../context/useTheme";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const clockBg = isDark
    ? "bg-[#1a0000] border-gray-200 text-transparent"
    : "bg-[#fdf5f5] border-gray-200 text-transparent";

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  const zero = (n: number) => (n < 10 ? "0" + n : n);

  const getDots = (count: number, activeIndex: number, step: number) => {
    const dots = [];
    for (let i = 1; i <= count; i++) {
      const rotation = i * step;
      dots.push(
        <div
          key={i}
          className={`dot ${i === activeIndex ? "active" : ""}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
      );
    }
    return dots;
  };

  const hoursRaw = time.getHours();
  const hours = hoursRaw % 12 === 0 ? 12 : hoursRaw % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amPm = hoursRaw >= 12 ? "PM" : "AM";

  return (
    <div className={`clock-wrapper w-full py-16 rounded-lg ${clockBg}`}>
      <div id="clock">
        <div id="hrDots" style={{ "--clr": "#c0392b" } as React.CSSProperties}>
          {getDots(12, hours, 30)}
          <b className="text-[#c0392b]">{amPm}</b>
          <h2>
            {zero(hours)}
            <br />
            <span>Hours</span>
          </h2>
        </div>
        <div id="minDots" style={{ "--clr": "#e74c3c" } as React.CSSProperties}>
          {getDots(60, minutes, 6)}
          <h2>
            {zero(minutes)}
            <br />
            <span>Minutes</span>
          </h2>
        </div>
        <div id="secDots" style={{ "--clr": "#ff6b6b" } as React.CSSProperties}>
          {getDots(60, seconds, 6)}
          <h2>
            {zero(seconds)}
            <br />
            <span>Seconds</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
