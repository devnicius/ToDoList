import { colors } from "@/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[300],
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextBtn: {
        width: "80%",
        height: 96,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    textBtn: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;