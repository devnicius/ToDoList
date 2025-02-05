import { colors } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[300]
    },
    header: {
        backgroundColor: colors.green.soft
    },
    title: {
        color: colors.gray[200]
    },
    taskContainer: {
       marginBottom: 24
    },
    clearView: {
        width: '50%',
        alignItems: 'flex-end',
        marginTop: 4,
        paddingHorizontal: 16
    },
    clearText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.red.base
    }
});

export default styles;