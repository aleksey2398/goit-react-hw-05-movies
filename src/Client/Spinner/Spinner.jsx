import React from "react";
import Loader from "react-loader-spinner";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  console.log('Loader :>> ', Loader);
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};

export default Spinner;

