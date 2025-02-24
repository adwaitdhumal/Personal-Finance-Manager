import React from "react";
import "./dashboard.css"; // Import CSS

const transactions = [
  { id: 1, description: "Groceries", amount: -50 },
  { id: 2, description: "Salary", amount: 1000 },
  { id: 3, description: "Electricity Bill", amount: -100 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount > 0 ? "income" : "expense"}>
            {t.description}: ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
