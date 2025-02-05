import { colors } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        display: 'flex',
        alignSelf: "center",
        marginBottom: 24
    },
    btn: {
        width: 80,
        height: 80,
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.green.soft,
        borderRadius: 64,
        
    },
    iconView: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',   
    }
})

export default styles;