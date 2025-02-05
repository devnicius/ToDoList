import { colors } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[300],
        gap: 8
    },
    title: {
        color: colors.green.soft,
        
    },
    form: {
        height: '60%',
        marginHorizontal: 24,
        marginTop: 24,
        gap: 40
    },
    optionForm: {
        width: '100%',
        alignItems: 'flex-start',
        gap: 32
    },
    titleForm: {
        color: colors.green.light
    },
    inputForm: {
        width: '100%',
        height: 56,
        marginTop: -16,
        borderStyle: 'solid',
        borderColor: colors.gray[50],
        borderBottomWidth: 2,
        color: colors.green.light
    },
    pickerView: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray[50]
    },
    pickerForm: {
        width: '100%',
        height: 56,
        color: colors.green.light,
        borderStyle: 'dotted',
        borderBottomWidth: 2,
        borderColor: colors.gray[50]
    },

    divider: {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        marginVertical: 16,
        marginBottom: '10%',
        backgroundColor: colors.green.light
    },
    buttonSave: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: colors.green.soft,
        marginBottom: '16%',
        marginTop: '4%',
        borderRadius: 8
    }
})

export default styles;