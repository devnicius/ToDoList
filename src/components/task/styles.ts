import { colors } from "@/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 16,
        paddingHorizontal: 24
    },
    touchable: {
        width: "90%",
        height: 56,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
        flexDirection: "row",
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        color: colors.green.light,
        fontWeight: '500',
        flexWrap: 'nowrap',
        flexShrink: 1
    },
    titleChecked: {
        fontSize: 22,
        color: colors.gray[100],
        fontWeight: '500',
        textDecorationLine: "line-through",
        flexWrap: 'nowrap',
        flexShrink: 1
    },
    titleContainer: {
        width: '80%'
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 30
    }
})

export default styles;