import { View, Text, TextProps } from "react-native";
import { styles } from "./styles";

type Props = TextProps & {
    text: string,
}

export function Title({text, style, ...rest}: Props) {
   return ( 
        <View>
            <Text style={[styles.font, style]}>
                {text}
            </Text> 
        </View>
   )
}