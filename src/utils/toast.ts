import Toast from "react-native-toast-message";

export function showToast(type: string, text: string) {
    return Toast.show({
        type: type,
        text1: text,
        visibilityTime: 3000,
        onPress() {
            Toast.hide();
        },
    })
}