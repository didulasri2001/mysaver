import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/Utils/dbConfig";
import { Budgets, Expenses } from "@/Utils/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";

function AddExpenses({ budgetId, user, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("YYYY-MM-DD"),
      })
      .returning({ insertedId: Budgets.id });
    setName("");
    setAmount("");
    console.log(result);
    if (result) {
      setLoading(false);
      refreshData();
      alert("Expense Added Successfully");
    }
    setLoading(false);
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
            value={name}
            className="p-2 border"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <h2 className="text-black font-medium my-1">Expense Amount</h2>
          <Input
            type="text"
            placeholder="e.g. 1000"
            value={amount}
            className="p-2 border"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button
          onClick={() => addNewExpense()}
          disabled={!(name && amount) || loading}
          className="mt-3 w-full"
        >
          {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
        </Button>
      </div>
    </div>
  );
}

export default AddExpenses;
