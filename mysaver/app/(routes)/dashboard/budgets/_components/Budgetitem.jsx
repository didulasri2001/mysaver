import Link from "next/link";
import React from "react";

function Budgetitem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc.toFixed(2);
  };
  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div className="p-5 border rounded-lg gap-2 shadow-sm cursor-pointer hover:border-2 hover:border-[#2e81b4] h-[170px]">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <div>
              <h2 className="font-bold">{budget?.name}</h2>
              <h2 className="text-sm text-gray-500">
                {budget?.totalItem} Item
              </h2>
            </div>
          </div>
          <h2 className="font-bold text-[#2e81b4] text-2xl">
            Rs.{budget?.amount}
          </h2>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-s text-slate-400">
              Rs.{budget?.totalSpend ? budget?.totalSpend : 0} Spend
            </h2>
            <h2 className="text-s text-slate-400">
              Rs.{budget?.amount - budget?.totalSpend} Remaining
            </h2>
          </div>
          <div className="w-full bg-slate-300 h-2 rounded-full">
            <div
              className=" bg-[#2e81b4] h-2 rounded-full"
              style={{ width: `${calculateProgressPerc()}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Budgetitem;
