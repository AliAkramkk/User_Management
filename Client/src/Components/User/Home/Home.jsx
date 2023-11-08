import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { DisplayName } = useSelector((state) => state.Client);
  console.log(DisplayName);
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-80">
        <h3 className="text-4xl text-amber-300 font-extrabold">
          Welcome {DisplayName}
        </h3>
      </div>
    </div>
  );
};

export default Home;
