import { getLocalData } from "@/store/storage";
import { colors } from "@/theme";
import { categoryIcons } from "@/utils/icons";
import { showToast } from "@/utils/toast";
import { Data } from "@/utils/types";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Checkbox from 'expo-checkbox';
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { ButtonRemoveTask } from "../buttonRemoveTask";
import styles from "./styles";


function Task({id, title, completed, category}: Data) {
    const [checked, setChecked] = useState(completed);
    const { setItem } = useAsyncStorage("@ToDoList:Data");

    const Icon = categoryIcons[category || 'pessoal'];
    
    function removeTask() {
        Alert.alert("Remover tarefa", `Você deseja remover a tarefa ${title}?`, [
            {
                text: 'Sim',
                onPress: async () => {
                    // Remove a task a partir do filter (cria uma nova colecao com todas as tasks com id diferentes do selecionado)
                    const currentData = await getCurrentData();
                    const data = currentData.filter((item: Data) => item.id !== id);
                    await setItem(JSON.stringify(data));
                    showToast("success", "Tarefa removida!");
                    router.replace("/(dashboard)/toDoList");
                },
                style: 'default'
            },
            {
                text: 'Não',
                onPress: () => {},
                style: 'cancel',
            },
        ], {cancelable: true});     
    }

    async function markChecked() {
        setChecked(!checked);
        
        // Remove a task sempre que alterar o chackbox para logo adicionar a mesma task, mas com o status completed atual
        const previousData = await getCurrentData();
        const taskToRemove = previousData.filter((item: Data) => item.id !== id);
        await setItem(JSON.stringify(taskToRemove));
        
        // Obtem a colecao de tasks sem a task
        const currentData = await getCurrentData();

        // Monta a task com o status completed atual
        const taskIsChecked: Data = { 
                    "id": id,
                    "title": title,
                    "category": category,
                    "completed": !checked
              };

        // Monta e salva a colecao de tasks, garantindo que o estado completed da task estara sempre de acordo com o valor selecionad pelo user
        const data = [...currentData, taskIsChecked];
        await setItem(JSON.stringify(data));
    }

    async function getCurrentData() {
        const response = await getLocalData();
        const data = response ? response : [];
        return data;
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={markChecked}>
            <View>
                <Checkbox value={checked} style={styles.checkbox} onValueChange={markChecked}/>
            </View>
            <View>
                <Icon size={24} color={checked? colors.green.dark: colors.green.soft}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={ checked ? [styles.titleChecked] : styles.title} numberOfLines={2}>{title}</Text>
            </View>
        </TouchableOpacity>
            <View>
                <ButtonRemoveTask onPress={() => removeTask()}/>
            </View>
        </View>
    )
}

export { Task };

