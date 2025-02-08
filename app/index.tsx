import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function Index() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current; // Controls fade-in effect

    useEffect(() => {
        // Start fade-in animation when component mounts
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View className="flex-1 relative" style={{ opacity: fadeAnim }}>
            <Image
                source={require("@/assets/images/splash.jpg")}
                style={{ position: "absolute", width, height }}
                resizeMode="cover"
            />

            <LinearGradient
                colors={["transparent", "rgba(0, 56, 6, 0.5)"]}
                style={{ position: "absolute", width, height }}
            />

            <View className="absolute top-20 left-0 right-0 items-center">
                <Image source={require("@/assets/images/salad.png")} style={{ height: 50, width: 50 }} />
                <Animated.Text style={{ opacity: fadeAnim }} className="text-4xl font-bold mt-2 font-sans">
                    nutrinest
                </Animated.Text>
            </View>

            <View className="absolute bottom-12 left-0 right-0 px-6">
                <Animated.Text style={{ opacity: fadeAnim }} className="text-white text-4xl font-bold mb-2">
                    Welcome!
                </Animated.Text>
                <Animated.Text style={{ opacity: fadeAnim }} className="text-white text-lg opacity-80 leading-6">
                    Sum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.
                </Animated.Text>

                <TouchableOpacity className="bg-red-500 p-4 rounded-lg mt-6" onPress={() => router.push("/(auth)/onboarding")}>
                    <Text className="text-white text-lg text-center font-semibold">Continue</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}
