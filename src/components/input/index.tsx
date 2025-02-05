import { TextInput, TextInputProps } from "react-native";



export function Input({style, inputMode, placeholder, placeholderTextColor, multiline, maxLength, numberOfLines, ...rest}: TextInputProps) {
    return (
        <TextInput style={style} inputMode={inputMode}
                    placeholder={placeholder} placeholderTextColor={placeholderTextColor}
                    multiline={multiline} maxLength={maxLength} numberOfLines={numberOfLines}
                    {...rest}
        />
    )
}