import React, { Component } from "react";
import "./admin.css";
import { Chart } from "react-google-charts";
import Admin from "./Admin";
import AdminNav from "../../components/admin/admincomp/AdminNav";
import AdminPanel from "../../components/admin/admincomp/AdminPanel";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
export const options = {
  title: "My Daily Activities",
};

const charts = () => {
  return (
    <div>
      <div className="g-chart">
        <Admin />
      </div>
      <Chart
        className="charts"
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};
export default charts;
