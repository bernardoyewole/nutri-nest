import { Stack } from 'expo-router';

export default function MainLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                // gestureEnabled: false,
            }}
        >
            <Stack.Screen
                name="testing"
                // options={{
                //     gestureEnabled: false,
                // }}
            />
        </Stack>
    );
}