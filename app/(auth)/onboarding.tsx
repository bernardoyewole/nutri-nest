import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '@/redux/slices/onboardingSlice';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";
import "../global.css";

const onboardingSteps = [
    {
        image: require('@/assets/images/onboarding-one.jpg'),
        title: "Discover Healthier Meals",
        description: "Spend quality time with your family while enjoying delicious and nutritious meals.",
    },
    {
        image: require('@/assets/images/onboarding-two.jpg'),
        title: "Explore Powerful Features",
        description: "NutriNest offers a range of tools to make healthy eating a breeze.",
    },
    {
        image: require('@/assets/images/onboarding-three.jpg'),
        title: "Let's Get Started!",
        description: "NutriNest simplifies meal planning for your family's health. Let's start cooking healthier together!",
    },
];

export default function OnboardingScreen() {
    const [step, setStep] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const router = useRouter();
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    const nextStep = () => {
        if (step < onboardingSteps.length - 1) {
            setStep(step + 1);
        } else {
            dispatch(completeOnboarding());
            router.replace("/(auth)/signup");
        }
    };

    return (
        <View className="flex-1">
            {/* Background Image */}
            <Image
                source={onboardingSteps[step].image}
                style={{ position: "absolute", width: width, height: height }}
                resizeMode="cover"
            />

            {/* Gradient Overlay */}
            <LinearGradient
                style={{ position: "absolute", width: width, height: height }}
                colors={['transparent', "#dcfce7"]}
            />

            {/* Wrapper for Onboarding Content */}
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View className="bg-green-100 p-6 rounded-t-3xl shadow-lg w-full">
                    <Text className="text-3xl font-bold text-gray-800 text-center">{onboardingSteps[step].title}</Text>
                    <Text className="text-center text-gray-600 my-10 text-lg">{onboardingSteps[step].description}</Text>
                    <View className="flex-row justify-center">
                        {onboardingSteps.map((_, index) => (
                            <TouchableOpacity key={index} onPress={() => setStep(index)}>
                                <View
                                    className={`w-8 h-2 mx-1 rounded-full ${step === index ? 'bg-green-700' : 'bg-yellow-300'}`}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity
                        onPress={() => router.replace("/(auth)/signup")}
                        style={{ alignSelf: "flex-end", paddingVertical: 24 }}
                    >
                        <Text style={{ color: "green", textDecorationLine: "underline", fontWeight: "bold", fontSize: 18 }}>
                            SKIP
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={nextStep} className="bg-red-500 py-4 mb-6 rounded-lg">
                        <Text className="text-white font-semibold text-center text-lg">
                            {step === onboardingSteps.length - 1 ? "GET STARTED" : "NEXT"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}
