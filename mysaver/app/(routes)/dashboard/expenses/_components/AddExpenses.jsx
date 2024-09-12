import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/Utils/dbConfig";
import { Budgets, Expenses } from "@/Utils/schema";
import React, { useState } from "react";

function AddExpenses({ budgetId, user, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const addNewExpense = async () => {
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdBy: user.primaryEmailAddress?.emailAddress,
      })
      .returning({ insertedId: Budgets.id });
    console.log(result);
    if (result) {
      refreshData();
      alert("Expense Added Successfully");
    }
  };
  return (
    <div className="border p-5 rounded-lg shadow-md">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div>
        <div className="mt-2">
          <h2 className="text-black font-medium my-1">Expense Name</h2>
          <Input
            type="text"
            placeholder="e.g. Vegetables"
            className="p-2 border"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <h2 className="text-black font-medium my-1">Expense Amount</h2>
          <Input
            type="text"
            placeholder="e.g. 1000"
            className="p-2 border"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button
          onClick={() => addNewExpense()}
          disabled={!(name && amount)}
          className="mt-3 w-full"
        >
          Add New Expense
        </Button>
      </div>
    </div>
  );
}

export default AddExpenses;
