import { colors } from '@/theme';
import { generalIcons } from '@/utils/icons';
import { router } from 'expo-router';
import {
    Text,
    TextProps,
    TouchableOpacity,
    View,
    ViewProps,
} from "react-native";
import styles from "./styles";

type HeaderProps = ViewProps & { isBackActive: boolean };

function Header({ children, style, isBackActive, ...rest }: HeaderProps) {
    const Icon = generalIcons['left'];
    return(
        <View style={[styles.container, style]}>
            { isBackActive 
                ? <TouchableOpacity onPress={() => router.push('/(dashboard)/toDoList')} style={{height: 30, width: 30, margin: 16, backgroundColor:"#00000"}}>
                     <Icon size={32} strokeWidth={3} color={colors.green.soft}/>
                  </TouchableOpacity >
                  
                : null
            }
            {
                children
            }
        </View>
    )
}


function Title({children, style}: TextProps) {
    return <Text style={[styles.title, style]}> {children} </Text>
}

// function Back({children, style}: )


Header.Title = Title;

export { Header };

