import React from "react";
import Card from "../../Component/CostCard/Card";
// Import Data
import { BiayaIuran, Seragam, Sabuk } from "../../Component/CostCard/Data";

const Cost = () => {
  return (
    <>
      <Card BiayaIuran={BiayaIuran} Seragam={Seragam} Sabuk={Sabuk} />
    </>
  );
};
export default Cost;
