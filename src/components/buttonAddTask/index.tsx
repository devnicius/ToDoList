import { colors } from "@/theme";
import { generalIcons } from "@/utils/icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";


function ButtonAddTask() {
    const IconPlus = generalIcons["plus"];
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => router.push("/(dashboard)/addTask")}>
                <View style={styles.iconView}>
                <IconPlus size={56} color={colors.gray[200]}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export { ButtonAddTask };

