import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 w-10/12 h-full border rounded-lg p-5">
        <div className="skeleton h-32 w-3/12"></div>
        <div className="flex flex-col gap-5 w-full">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-10/12"></div>
          <div className="skeleton h-4 w-10/12"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
