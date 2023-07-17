import React, { useEffect, useState } from "react";

const ProgressBar = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 1 : prevProgress
        );
      }, 30); 
    }

    return () => {
      clearInterval(interval);
      setProgress(0);
    };
  }, [isVisible]);

  return (
    <div className="h-1 left-0 top-0 flex w-full absolute rounded-full">
      <div
        style={{ width: `${progress}%` }}
        className={`h-full bg-[#7F56D9] rounded-full`}
      ></div>
    </div>
  );
};

export default ProgressBar;
