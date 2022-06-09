import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/https";

export default function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);



    useEffect(() => {
        async function getExpenses() {
          const expenses =  await fetchExpenses();
          expensesCtx.setExpense(expenses)
        }
        getExpenses();
    }, []);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();

        const date7daysAgo = getDateMinusDays(today, 7);

        return expense.date > date7daysAgo && expense.date <= today;
    });

    return (
        <ExpensesOutput
            fallbackText="No expenses registered for the last 7 days."
            expenses={recentExpenses}
            expensesPeriod="Last 7 days"
        />
    );
}

const styles = StyleSheet.create({});
