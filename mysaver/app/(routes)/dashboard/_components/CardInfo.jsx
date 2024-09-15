import { PiggyBank, Receipt, ReceiptText, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    CalculatecardInfo();
  }, [budgetList]);
  const CalculatecardInfo = () => {
    console.log(budgetList);
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    budgetList.forEach((element) => {
      totalBudget_ = totalBudget_ + Number(element.amount);
      totalSpend_ = totalSpend_ + element.totalSpend;
    });
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
    console.log(totalBudget_, totalSpend_);
  };
  return (
    <div>
      {budgetList?.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-7 border rounded-lg flex items-center justify-between shadow-sm">
            <div>
              <h2 className="text-sm mb-2">Total Budget</h2>
              <h2 className="font-bold text-2xl">Rs.{totalBudget}</h2>
            </div>
            <PiggyBank className="bg-[#2e81b4] p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between shadow-sm">
            <div>
              <h2 className="text-sm mb-2">Total Spend</h2>
              <h2 className="font-bold text-2xl">Rs.{totalSpend}</h2>
            </div>
            <ReceiptText className="bg-[#2e81b4] p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between shadow-sm">
            <div>
              <h2 className="text-sm mb-2">N0.of Budget</h2>
              <h2 className="font-bold text-2xl">{budgetList?.length}</h2>
            </div>
            <Wallet className="bg-[#2e81b4] p-3 h-12 w-12 rounded-full text-white" />
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
