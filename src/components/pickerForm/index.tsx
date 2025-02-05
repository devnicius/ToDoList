import { Picker, PickerProps } from '@react-native-picker/picker';


export function PickerForm({style, dropdownIconColor, selectedValue, onValueChange, ...rest}: PickerProps) {
   
    return (
        <Picker style={style}
        mode='dropdown'
        // selectedValue={selectedValue}
        onValueChange={onValueChange}
       
        dropdownIconColor={dropdownIconColor}
        
        >
        <Picker.Item label="Pessoal" value="pessoal" />
        <Picker.Item label="Casa" value="casa" />
        <Picker.Item label="Estudo" value="estudo" />
        <Picker.Item label="Trabalho" value="trabalho" />
        </Picker>
)
}