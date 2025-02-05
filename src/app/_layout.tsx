import { colors } from "@/theme";
import { Stack, useFocusEffect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <>
            <StatusBar style={'light'} />
            <Layout />
        </>
    )
}

function Layout() {
    const router = useRouter();

    useFocusEffect(() => {
        router.replace("/(dashboard)/toDoList");
    });

    return (
        <Stack  screenOptions={{
            headerShown: true,
            contentStyle: { backgroundColor: colors.gray[300] }
        }} >
        <Stack.Screen name="index" options={{
            headerShown: false,
            statusBarBackgroundColor: colors.green.soft,
        }}/>
        <Stack.Screen name="(dashboard)/toDoList/index" options={{
            headerShown: false,
            statusBarBackgroundColor: colors.green.soft,
            animation: 'fade_from_bottom'
            }}/>
        <Stack.Screen name="(dashboard)/addTask/index" options={{
            headerShown: false,
            animation: 'slide_from_bottom'
        }}/>
        </Stack>
    )
}