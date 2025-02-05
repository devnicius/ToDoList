import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";


export default function App() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nextBtn} onPress={() => router.replace("/(dashboard)/toDoList")}>
                <Text style={styles.textBtn}>Começar</Text>
            </TouchableOpacity>
            
        </View>
    )
}