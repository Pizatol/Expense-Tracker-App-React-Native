
import axios from 'axios';

const BACKEND_URL = "https://reactnativecoursexpense-default-rtdb.europe-west1.firebasedatabase.app"

export function storeExpense(expenseData){
	axios.post(BACKEND_URL + "/expenses.json",
	expenseData
	)
}

export async function fetchExpenses() {
 const response = await	axios.get(BACKEND_URL + "/expenses.json",

	)
}