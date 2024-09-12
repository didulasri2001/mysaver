"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { db } from "@/Utils/dbConfig";
import { Budgets } from "@/Utils/schema";
import { useUser } from "@clerk/nextjs";
// import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
// import { toast } from "sonner";

function CreateBudget({ refreshData }) {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);

  const handlebudget = async () => {
    setOpen(false);

    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user.primaryEmailAddress?.emailAddress,
      })
      .returning({ insertedId: Budgets.id });

    console.log(result);

    if (result) {
      refreshData();
      alert("Budget Created Successfully");
    } else {
      alert("Failed to create budget");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="bg-[#f5f1f1] p-10 rounded-md justify-center text-center border-2 cursor-pointer hover:shadow-md mt-2">
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>

        <DialogContent className="bg-[#f5f1f1] p-6 rounded-md">
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="grid gap-4">
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    type="text"
                    placeholder="Enter Budget"
                    className="p-2 border"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    placeholder="Enter Amount"
                    className="p-2 border"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <Button
                  disabled={!name.trim() || !amount.trim()}
                  className="bg-[#f4b3b0] text-black py-2 px-4 rounded-md hover:bg-[#f4b3b0]"
                  onClick={() => handlebudget()}
                >
                  Create
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
