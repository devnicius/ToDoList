import { colors } from "@/theme";
import { generalIcons } from "@/utils/icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";




export function ButtonRemoveTask({onPress}: TouchableOpacityProps) {
    const Icon = generalIcons['trash'];

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon color={colors.red.light} size={24}/>
            </View>
        </TouchableOpacity>
    )
}