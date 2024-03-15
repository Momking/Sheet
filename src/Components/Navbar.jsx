import React from "react";
import BackButton from "./backButton";
import { Link } from "react-router-dom";

const Navbar = ({destination}) => {
  const liStyle = {
    display: "inline-block",
    margin: "1vh 2vh",
    fontSize: "1.7vw",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        padding: "1vh",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#2d3748",
        zIndex: "100",
      }}
    >
      <BackButton destination={destination}/>
      <ul style={{ flex: "1", listStyle: "none", textAlign: "center" }}>
        <Link to="/DoctorsSheet">
          <li style={liStyle}>Home</li>
        </Link>
        <Link to="/DoctorsSheet/Features">
          <li style={liStyle}>Features</li>
        </Link>
        <Link to="/DoctorsSheet/Price">
          <li style={liStyle}>Pricing</li>
        </Link>
        <Link to="/About">
          <li style={liStyle}>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
