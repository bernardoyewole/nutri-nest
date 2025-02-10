import { Stack } from 'expo-router';

export default function UserInfoLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                // gestureEnabled: false,
            }}
        >
            <Stack.Screen
                name="basic-info"
            />
            <Stack.Screen
                name="diet-info"
            />
        </Stack>
    );
}