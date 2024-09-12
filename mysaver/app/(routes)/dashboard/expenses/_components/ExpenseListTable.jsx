import { Trash } from "lucide-react";
import React from "react";

function ExpenseListTable({ expensesList }) {
  const deleteExpense = (expense) => {
    console.log("Deleting", expense);
  };
  return (
    <div className="mt-3">
      <div className="grid grid-cols-4 bg-slate-200 p-2">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {expensesList.map((expense, index) => (
        <div
          key={index}
          className="grid grid-cols-4 p-2 border-b border-slate-200 p-2"
        >
          <h2>{expense.name}</h2>
          <h2>Rs.{expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2>
            <Trash
              className="text-red-600"
              onClick={() => deleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
