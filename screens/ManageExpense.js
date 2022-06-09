import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import {
    NavigationContainer,
    NavigationHelpersContext,
} from "@react-navigation/native";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

import { GlobalStyles } from "../constants/styles";

import { ExpensesContext } from "../store/expenses-context";
import { storeExpense, updateExpense, deleteExpense } from "../util/https";

export default function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

     const  deleteExpenseHandler = async () => {
         expensesCtx.deleteExpense(editedExpenseId);
         await  deleteExpense(editedExpenseId)
        navigation.goBack();
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    async function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, expenseData);
           await  updateExpense(editedExpenseId ,expenseData);
        } else {
           const id = await storeExpense(expenseData);
            expensesCtx.addExpense({...expenseData, id : id});
        }

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? "Update" : " Add"}
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                defaultValues = {selectedExpense}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },

    deleteContainer: {
        margin: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
});
