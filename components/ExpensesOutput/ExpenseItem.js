import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ExpenseItem() {
    return (
        <Pressable>
            <View>
                <View>
                    <Text>DESCRIPTION</Text>
                    <Text>AMOUNT</Text>
                </View>
                
                <View>
                    <Text>DATE</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({});
