import { useEffect, useState } from "react";

export default function ProgressBar({ value = 60 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(value), 300);
  }, [value]);

  return (
    <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
      <div
        className="bg-yellow-400 h-full transition-all duration-1000"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}