"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PenBox, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { db } from "@/Utils/dbConfig";
import { eq } from "drizzle-orm";
import { Budgets } from "@/Utils/schema";

function EditBudget({ budgetInfo, refreshData }) {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (budgetInfo) {
      setName(budgetInfo.name);
      setAmount(budgetInfo.amount);
    }
  }, [budgetInfo]);
  const updateBudget = async () => {
    setOpen(false);
    const result = await db
      .update(Budgets)
      .set({
        name: name,
        amount: amount,
      })
      .where(eq(Budgets.id, budgetInfo.id))
      .returning();
    if (result) {
      refreshData();
      alert("Budget Updated Successfully");
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex gap-2">
            <PenBox />
            Edit
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#f5f1f1] p-6 rounded-md">
          <DialogHeader>
            <DialogTitle>Update Budget</DialogTitle>
            <DialogDescription>
              <div className="grid gap-4">
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    type="text"
                    defaultValue={budgetInfo?.name}
                    placeholder="E.g. Groceries"
                    className="p-2 border"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    defaultValue={budgetInfo?.amount}
                    placeholder="2000"
                    className="p-2 border"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <Button
                  disabled={!name.trim() || !amount.trim()}
                  className="bg-[#f4b3b0] text-black py-2 px-4 rounded-md hover:bg-[#f4b3b0]"
                  onClick={() => updateBudget()}
                >
                  Update Budget
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBudget;
