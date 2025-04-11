import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Result from './Result';

// componente principal do formulário de cálculo de IMC
const FormIMC = () => {
    // estados para armazenar peso, altura, IMC, classificação e peso ideal
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');
    const [pesoIdeal, setPesoIdeal] = useState('');

    // função para calcular o IMC com base no peso e altura fornecidos
    const CalcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura); // converte altura para número
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); // calcula o IMC
            setImc(parseFloat(imcCalculado)); // armazena o IMC no estado
        }
    };

    // efeito que atualiza a classificação e o peso ideal sempre que o IMC muda
    useEffect(() => {
        if (imc !== null) {
            AtualizarClassificacao(); // atualiza a classificação do IMC
            AtualizarPesoIdeal(); // calcula o peso ideal
        }
    }, [imc]);

    // função para determinar a classificação do IMC com base nos valores calculados
    const AtualizarClassificacao = () => {
        if (imc < 18.5) {
            setClassificacao('\nAbaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            setClassificacao('\nPeso normal');
        } else if (imc >= 25 && imc < 29.9) {
            setClassificacao('\nSobrepeso');
        } else if (imc >= 30 && imc < 34.9) {
            setClassificacao('\nObesidade grau 1');
        } else if (imc >= 35 && imc < 39.9) {
            setClassificacao('\nObesidade grau 2');
        } else {
            setClassificacao('\nObesidade grau 3');
        }
    };

    // função para calcular o intervalo de peso ideal com base na altura
    const AtualizarPesoIdeal = () => {
        const alturaMetros = parseFloat(altura); // converte altura para número
        const pesoMinimo = (18.5 * alturaMetros ** 2).toFixed(2); // calcula o peso mínimo ideal
        const pesoMaximo = (24.9 * alturaMetros ** 2).toFixed(2); // calcula o peso máximo ideal
        setPesoIdeal(`\nPeso mínimo ideal: ${pesoMinimo} kg\nPeso máximo ideal: ${pesoMaximo} kg`); // armazena o intervalo no estado
    };

    // renderização do formulário e dos resultados
    return (
        <View style={styles.formContainer}>
            {/* input para o peso */}
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            {/* input para a altura */}
            <TextInput
                style={styles.input}
                placeholder="Altura (metros)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            {/* botão para calcular o IMC */}
            <Button title="Calcular IMC" onPress={CalcularIMC} />
            {/* exibição do resultado do IMC */}
            {imc && <Result imc={imc} />}
            {/* exibição da classificação do IMC */}
            {imc && (
                <Text style={styles.result}>
                    <Text style={styles.resultLabel}>Classificação: </Text>
                    {classificacao}
                </Text>
            )}
            {/* exibição do peso ideal */}
            {imc && (
                <Text style={styles.result}>
                    <Text style={styles.resultLabel}>-- Peso Ideal --</Text>
                    {pesoIdeal}
                </Text>
            )}
        </View>
    );
};

// estilos para os componentes do formulário
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#dbdbd',
        padding: 30,
        borderRadius: 10,
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
    result: {
        fontSize: 18,
        color: '#333',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#e0f7fa',
        color: '#00796b',
        marginBottom: 10,
    },
    resultLabel: {
        fontWeight: 'bold',
        color: '#004d40',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default FormIMC;