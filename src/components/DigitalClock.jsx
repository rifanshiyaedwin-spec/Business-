import React, { useState, useEffect } from "react";

// List your desired time zones here:
const timeZones = [
  { label: "India Standard Time", tz: "Asia/Kolkata" },
  { label: "Greenwich Mean Time", tz: "Europe/London" },
  { label: "Pacific Time (US)", tz: "America/Los_Angeles" },
  { label: "Central European Time", tz: "Europe/Berlin" },
  { label: "Eastern Time (US)", tz: "America/New_York" },
];

function DigitalClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col max-w-md mx-auto bg-white shadow rounded p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">World Digital Clocks</h2>
      <ul>
        {timeZones.map(({ label, tz }) => {
          const time = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: tz,
          });
          const date = now.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            timeZone: tz,
          });

          return (
            <li
              key={tz}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <span className="font-medium">{label}</span>
              <span className="ml-4 tabular-nums text-lg">{date} {time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DigitalClock;