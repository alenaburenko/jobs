import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, color }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;
