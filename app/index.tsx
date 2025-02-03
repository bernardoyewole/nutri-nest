import {useEffect, useRef} from 'react';
import { useRouter } from 'expo-router';
import {Animated, Text } from 'react-native';

export default function Index() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity = 1
    const scaleAnim = useRef(new Animated.Value(1.1)).current;

    useEffect(() => {
        Animated.parallel([
            // Text fade in and scale
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.delay(1500),
                // Text fade out
                Animated.timing(fadeAnim, {
                    toValue: 0.5,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ])
            .start(() => {
                router.replace('/(auth)/onboarding');
            });
    }, []);

    return (
        <Animated.View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E0F7D4',
            opacity: fadeAnim, // Apply fading animation
        }}>
            {/*<Image source={require('../../assets/nutrinest_logo.png')} style={{ width: 150, height: 150, marginBottom: 20 }} />*/}
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#333'}}>Welcome to NutriNest!</Text>
            <Text style={{fontSize: 16, color: '#666', marginTop: 5}}>Simplify Healthy Family Meals</Text>
        </Animated.View>
    );
}