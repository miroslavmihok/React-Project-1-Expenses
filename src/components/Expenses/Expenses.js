import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const yearFilterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return(
        <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseFilter selected={filteredYear} onYearChange={yearFilterHandler}/>
        <ExpensesList items={filteredExpenses}/>
        </Card >
    );
};

export default Expenses;