"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CardInfo from "./_components/CardInfo";
import { db } from "@/Utils/dbConfig";
import { Budgets, Expenses } from "@/Utils/schema";
import { eq, getTableColumns, sql } from "drizzle-orm";
import BarchartDashboard from "./_components/BarchartDashboard";

function Dashboard() {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);

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
    // .orderBy(desc(Budgets.id));

    setBudgetList(result);
    console.log(budgetList);
  };

  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl text-gray-500">
        Hi, {user?.fullName} 👋
      </h2>
      <p className="text-gray-500 mt-2">
        Here's what happenning with your money, Let's manage your expense.
      </p>
      <CardInfo budgetList={budgetList} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
        <div className="md:col-span-2">
          <BarchartDashboard budgetList={budgetList} />
        </div>
        <div>Other Content</div>
      </div>
    </div>
  );
}

export default Dashboard;
