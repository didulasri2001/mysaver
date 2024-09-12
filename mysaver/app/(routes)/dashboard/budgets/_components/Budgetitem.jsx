import React from "react";

function Budgetitem({ budget }) {
  return (
    <div className="p-5 border rounded-lg gap-2">
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-centet">
          <div>
            <h2>{budget.name}</h2>
            <h2>{budget.totalItem}</h2>
          </div>
          <h2>{budget.amount}</h2>
        </div>
      </div>
    </div>
  );
}

export default Budgetitem;
