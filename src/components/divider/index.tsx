import { View, ViewProps } from "react-native";


export function Divider({style, children, ...rest}: ViewProps) {

    return (
        <View style={style}> 
            {children}
        </View>
    )
}