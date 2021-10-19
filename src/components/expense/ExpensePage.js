import React from "react"
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpensePage = () => (
    <div>
        <h1>Expense Page</h1>
        <ExpenseForm />
        <ExpenseFilter />
        <ExpenseList />
    </div>
);

export default ExpensePage;

