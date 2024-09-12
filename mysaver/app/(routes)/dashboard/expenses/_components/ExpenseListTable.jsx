import React from "react";

function ExpenseListTable({ expensesList }) {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-4 bg-slate-200 p-2">
        <h2>Name</h2>
        <h2>Amount</h2>
        <h2>Date</h2>
        <h2>Action</h2>
      </div>
    </div>
  );
}

export default ExpenseListTable;
