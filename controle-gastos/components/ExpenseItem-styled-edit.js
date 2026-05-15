// ImportaReact e o hook useState para controle de estado

import React, {useState} from 'react';

// Importa os componentes nativos para a construção de interface

import{
    View, // Container de Layout
    TextInput, //Campo de entrada de texto
    Text, //Exibição de Texto
    TouchableOpacity, // Botão personalizável
    FlatList, // Lista de rolagem eficiente
    StyleSheet, // Estilização
    Alert //Exibiçãode alertas
} from 'react-native';

// Componente Principal da aplicação

export default HomeScreen(){
    //Estado para os campos de formulário
    const[descricao, setDescricao] = useState (''); // Descrição do gasto
    const[valor, setValor] = useState (''); // Valor do gasto
    const[gastos, setGastos] = useState ([]); // Lista de gastos
    const[editandoId, setEditantoId] = useState(null); // Id do item sendo editado

    // Função  para adicionar um novo gasto ou atualizar um existente
    const adicionarOuAtualizarGasto = () => {
        // validação campos não podem estar vazios
        if(!descricao || !valor){
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }
        
    }
}