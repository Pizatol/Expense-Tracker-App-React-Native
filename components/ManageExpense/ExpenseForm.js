import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";

export default function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
    const [inputValues, setInputValues] = useState({
        amount: "",
        date: "",
        description: "",
    });

    const inputChangeHandler = (inputIdentifier, enteredValue) => {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue,
            };
        });
    };

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "number-pad",
                        onChangeText: inputChangeHandler.bind(this, "amount"),
                        value: inputValues.amount,
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, "date"),
                        value: inputValues.date,
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    // autocorrect : false,
                    // autoCapitalize : "none"
                    onChangeText: inputChangeHandler.bind(this, "description"),
                    value: inputValues.description,
                }}
            />

            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={onSubmit}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 24,
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});
