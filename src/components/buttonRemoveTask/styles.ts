import { colors } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        backgroundColor: colors.red.base,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 8
    }
});

export default styles;