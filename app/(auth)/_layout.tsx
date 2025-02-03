import { Stack } from 'expo-router';
// import { SignupProvider } from '@/contexts/signup-context';

export default function AuthLayout() {
    return (
            <Stack
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen
                    name="onboarding"
                    options={{
                        gestureEnabled: false,
                    }}
                />
            </Stack>
    );
}