import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function StackNavigator() {
    const onboardingCompleted = useSelector((state: RootState) => state.onboarding.completed);

    return (
        // <NavigationContainer>
        // <Stack.Navigator screenOptions={{ headerShown: false }}>
        //     {!onboardingCompleted ? (
        //         <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        //     ) : (
        //         <Stack.Screen name="Home" component={HomeScreen} />
        //     )}
        // </Stack.Navigator>
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        // </NavigationContainer>
    );
}
