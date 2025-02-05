import {
    Text, TextProps,
    TouchableOpacity, TouchableOpacityProps,
    View, ViewProps,
} from "react-native";


type ButtonSaveTaskProps = TouchableOpacityProps & ViewProps;

function ButtonSaveTask({onPress, style, children, ...rest}: ButtonSaveTaskProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View {...rest} style={[{justifyContent: 'center', alignItems: 'center',}, style]}>
                {
                    children
                }
            </View>
        </TouchableOpacity>
    )
}

function Title({children, style}: TextProps) {
    return <Text style={[{fontSize: 20, fontWeight: '600'}, style]}> { children } </Text>
}

ButtonSaveTask.Title = Title;

export { ButtonSaveTask };
