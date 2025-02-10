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
                <Stack.Screen
                    name="signup"
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="otp"
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="login"
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="forgot-password"
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="verified"
                    options={{
                        gestureEnabled: false,
                    }}
                />
            </Stack>
    );
}