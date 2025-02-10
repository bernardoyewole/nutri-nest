import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '@/redux/slices/onboardingSlice';
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";
import "../global.css";
import Animated, {runOnJS, useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

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
    const router = useRouter();
    const scrollX = useSharedValue(0);
    const scrollRef = useRef(null);

    const nextStep = () => {
        if (step < onboardingSteps.length - 1) {
            const newStep = step + 1;
            setStep(newStep);
            scrollRef.current?.scrollTo({ x: newStep * width, animated: true });
        } else {
            dispatch(completeOnboarding());
            router.replace("/(auth)/signup");
        }
    };

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            let newStep = Math.round(event.contentOffset.x / width); // 🔹 Determine current step

            if (newStep !== step) {
                runOnJS(setStep)(newStep);
            }

            scrollX.value = event.contentOffset.x;
        },
    });


    return (
        <Animated.ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            className='flex-1'
        >
            {onboardingSteps.map((stepData, index) => (
                <View key={index} style={{ width }}>
                    {/* Background Image */}
                    <Image
                        source={stepData.image}
                        style={{ position: "absolute", width, height }}
                        resizeMode="cover"
                    />

                    {/* Gradient Overlay */}
                    <LinearGradient
                        style={{ position: "absolute", width, height }}
                        colors={['transparent', "#dcfce7"]}
                    />

                    {/* Wrapper for Onboarding Content */}
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <View className="bg-green-50 p-6 rounded-t-3xl shadow-lg w-full">
                            <Text className="text-3xl font-bold text-gray-800 text-center">
                                {stepData.title}
                            </Text>
                            <Text className="text-center text-gray-600 my-10 text-lg">
                                {stepData.description}
                            </Text>

                            <View className="flex-row justify-center">
                                {onboardingSteps.map((_, indexTwo) => (
                                    <View
                                        key={indexTwo}
                                        className={`w-8 h-2 mx-1 rounded-full ${index === indexTwo ? 'bg-green-700' : 'bg-yellow-300'}`}
                                    />
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
                                    {index === onboardingSteps.length - 1 ? "GET STARTED" : "NEXT"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </Animated.ScrollView>
    );
}
