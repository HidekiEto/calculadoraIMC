import React from "react";
import { Text, StyleSheet } from "react-native";

// componente para exibir o resultado do IMC
const Result = ({ imc }) => {
  return (
    // exibe o texto com o valor do IMC calculado
    <Text style={styles.result}>
      Seu IMC é: {imc}
    </Text>
  );
};

// estilos para o componente de resultado
const styles = StyleSheet.create({
    result: {
        fontSize: 24, // tamanho da fonte do texto
        color: "#333", // cor do texto
        marginTop: 20, // margem para a parte superior
        textAlign: "center", // alinha o texto no centro
    },
});

export default Result;