"use client";
import React, { useEffect, useState } from "react";
import CreateBudget from "./CreateBudget";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "@/Utils/schema";
import { useUser } from "@clerk/nextjs";
import Budget from "../page";
import Budgetitem from "./Budgetitem";
import { db } from "@/Utils/dbConfig";

function BudgetList() {
  const [budgetList, setBudgetList] = useState([]);

  const { user } = useUser();
  useEffect(() => {
    user && getBudgetList();
  }, [user]);
  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id);

    setBudgetList(result);
  };
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget />
        {budgetList.map((budget, index) => (
          <Budgetitem budget={budget} />
        ))}
      </div>
    </div>
  );
}

export default BudgetList;
