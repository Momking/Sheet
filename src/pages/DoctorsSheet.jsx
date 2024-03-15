import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const DoctorsSheet = () => {
  useEffect(() => {});

  return (
    <div className="div1">
      <Navbar destination={"/"}/>
      <div style={{ marginTop: "68px", position: "relative" }}>
        <div style={{ textAlign: "end", backgroundColor: "palevioletred", position: "fixed", width: "100%" }}>
          <Link to="/DoctorsSheet/Configure">
            <Box style={{ color: "white" }}>
              Configure Settings
            </Box>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSheet;
