import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

function BarchartDashboard({ budgetList }) {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <BarChart width={500} height={300} data={budgetList}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalSpend" stackId="a" fill="#2e81b4" />
        <Bar dataKey="amount" stackId="a" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default BarchartDashboard;
