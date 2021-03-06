import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

export default function Input( {label, style, textInputConfig, invalid} ) {


	const inputStyles = [styles.input];

	if(textInputConfig && textInputConfig.multiline){
		inputStyles.push(styles.inputMultiline)
	}

	if(invalid) {
		inputStyles.push(styles.invalidInput)
	}

  return (
	 <View style={[styles.inputContainer, style]}>
		<Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
		<TextInput style={inputStyles}
		{...textInputConfig}
		/>
	 </View>
  )
}

const styles = StyleSheet.create({
	inputContainer  :{
		marginHorizontal : 4,
		marginVertical : 14,
		
	},
	label : {
		color : GlobalStyles.colors.primary100,
		fontSize : 12,
		marginBottom : 2,
	},
	input : {
		backgroundColor : GlobalStyles.colors.primary100,
		color : GlobalStyles.colors.primary700,
		padding : 3,
		borderRadius : 6,
		fontSize : 18
	},
	inputMultiline : {
		minHeight : 100,
		textAlignVertical : "top",
	},
	invalidLabel : {
		color : GlobalStyles.colors.error500
	},
	invalidInput : {
		backgroundColor : GlobalStyles.colors.error50
	}
})