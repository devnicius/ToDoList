import { ButtonAddTask } from "@/components/buttonAddTask";
import { Header } from "@/components/header";
import { Task } from "@/components/task";
import { clearData, combineData } from "@/store/storage";
import { showToast } from "@/utils/toast";
import { Data } from "@/utils/types";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Pressable, Text, View } from "react-native";
import Animated, { BounceIn } from 'react-native-reanimated';
import Toast from "react-native-toast-message";
import styles from "./styles";

export default function toDoList() {
    const [tasks, setTasks] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);

    // Hook executado quando a tela atual recebe foco (quando navegada pelo user)
    useFocusEffect(useCallback(() => {
            const loadData = async () => {
            const combinedData = await combineData();
            setTasks(combinedData);
            setLoading(false);  
            };

            loadData();
    }, []));

    function clear() {
        Alert.alert("Resetar lista", `Você deseja resetar a lista?`, [
                    {
                        text: 'Sim',
                        onPress: async () => {
                            // Remove toda a colecao de tarefas
                            clearData();                            
                            setTimeout(() => {
                                showToast("info", "Todas as tarefas foram removidas!");
                            }, 1500);
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

    if (loading) {
        return <ActivityIndicator size="large" />;
      }
    return (
        <Animated.View style={styles.container} entering={BounceIn}>
            <Header style={styles.header} isBackActive={false}>
                <Header.Title style={styles.title}>Lista de tarefas</Header.Title>
                <View style={styles.clearView}>
                <Pressable onPress={clear}>
                    <Text style={styles.clearText}>Resetar lista</Text>
                </Pressable>
                </View>
            </Header>
             <FlatList style={styles.taskContainer} showsHorizontalScrollIndicator={false}
                        data={tasks}
                        renderItem={({item}) => 
                         ( <Task id={item.id} title={item.title} completed={item.completed} category={item.category}/> ) }
            /> 
            <ButtonAddTask/>
            <Toast position="top" topOffset={56} autoHide/>
        </Animated.View>
    )
}