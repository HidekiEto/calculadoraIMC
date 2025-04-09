import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({ imc }) => {
  return (
    <Text style={styles.result}>
      Seu IMC é: {imc} 
    </Text>
  );
};

const styles = StyleSheet.create({
    result: {
        fontSize: 24,
        color: "#333",
        marginTop: 20,
        textAlign: "center",
    },
    });

export default Result;