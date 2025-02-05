import { ButtonSaveTask } from "@/components/buttonSaveTask";
import { Divider } from "@/components/divider";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { PickerForm } from "@/components/pickerForm";
import { Title } from "@/components/title";
import { getLocalData } from "@/store/storage";
import { colors } from "@/theme";
import { showToast } from "@/utils/toast";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Animated, { FadeIn } from 'react-native-reanimated';
import Toast from "react-native-toast-message";
import uuid from "react-native-uuid";
import styles from "./styles";



export default function addTask(){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState<any>();
    const { setItem } = useAsyncStorage("@ToDoList:Data")
    async function handleSubmit() {
        try {
            if (title.trim() && category !== null) {
                const id = uuid.v4();

                const response = await getLocalData();
                const previousData = response ? response : [];
                const newData = { 
                    "id": id,
                    "title": title,
                    "category": category,
                    "completed": false
                };

                const data = [...previousData, newData];
                await setItem(JSON.stringify(data));
                showToast("success", "Tarefa criada!");
                setTimeout(() => {
                    router.push("/(dashboard)/toDoList");
                }, 1500);
                
            } else {
                showToast("error", "Preencha os campos");
            }
        } catch(error) {
            console.error("Component error: Não foi possível criar a tarefa.", error);
        }
    }


    return (
        <Animated.View entering={FadeIn} style={styles.container}>
            <Header isBackActive={true}>
                <Header.Title style={styles.title}>Nova tarefa</Header.Title>
            </Header>

            <ScrollView>
            <View style={styles.form}>
            
                <View style={styles.optionForm}>
                    <Title text="Título" style={styles.titleForm}/> 
                    <Input style={styles.inputForm} inputMode="text"
                         placeholder="Escreva o título da tarefa"
                         placeholderTextColor={colors.gray[50]}
                         multiline editable
                         maxLength={32} numberOfLines={2}
                         value={title}
                         onChangeText={setTitle}/>
                </View>
                <View style={styles.optionForm}>
                    <Title text="Categoria" style={styles.titleForm} />
               
                    <View style={styles.pickerView}>
                        <PickerForm style={styles.pickerForm}
                                    dropdownIconColor={colors.green.light}
                                    selectedValue={category}
                                    onValueChange={(value) => setCategory(value)}/>
                    </View>
                </View> 
           </View>
           </ScrollView>
           <Divider style={styles.divider}>
           </Divider>
           <ButtonSaveTask style={styles.buttonSave}  onPress={() => handleSubmit()} >
                <ButtonSaveTask.Title style={{color: "#fff"}}>Criar</ButtonSaveTask.Title>
           </ButtonSaveTask>
           <Toast position="top" topOffset={56} autoHide/>
        </Animated.View>
        
    )
}