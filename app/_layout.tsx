import {Provider} from 'react-redux';
import {store} from '@/redux/store';
import {Stack} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="(intro)" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    </Stack>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </Provider>
    );
}
