import React from 'react';
import ReactLoading from "react-loading";

const CustomLoading = () => {
  return (
    <div className="flex w-full absolute bg-white top-0 left-0 right-0 items-center justify-center h-screen">
      <ReactLoading
                  type={"spinningBubbles"}
                  color={"#7F56D9"}
                  height={100}
                  width={100}
                  className="m-auto flex w-full"
                />
    </div>
  );
};

export default CustomLoading;
