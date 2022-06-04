import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
    return <ExpenseItem {...itemData.item} />;
};

export default function ExpensesList({ expenses }) {
    return (
        <View styles={styles.container}>
            <FlatList
                data={expenses}
                renderItem={renderExpenseItem}
                keyExtractor={(item) => item.id}
					 style={styles.flatlistContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
	container : {
		
	},
	flatlistContainer: {
		paddingTop : 30,
	},
	item : {		
		textAlign : "center",
		paddingVertical : 5, 
		color : GlobalStyles.colors.primary50
	}
});
