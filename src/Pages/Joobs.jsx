import React from "react";
import Job from "../components/Job";

const Joobs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div>
        <label htmlFor="type"> Filter By Type</label>
        <select name="type" id="type">
          <option value="all">All Time</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
        </select>
      </div>

      <div className="border border-gray-300 my-4"></div>
      <Job/>


    </div>
  );
};

export default Joobs;
