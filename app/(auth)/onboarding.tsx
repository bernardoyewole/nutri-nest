import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '@/redux/slices/onboardingSlice';
import { useNavigation } from '@react-navigation/native';
import "../global.css";

const onboardingSteps = [
    {
        image: 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_1280.jpg',
        title: "Discover Healthier Meals",
        description: "Spend quality time with your family while enjoying delicious and nutritious meals.",
    },
    {
        image: 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_1280.jpg',
        // image: require('https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_1280.jpg'),
        title: "Explore Powerful Features",
        description: "NutriNest offers a range of tools to make healthy eating a breeze.",
    },
    {
        image: 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_1280.jpg',
        title: "Let's Get Started!",
        description: "NutriNest simplifies meal planning for your family's health. Let's start cooking healthier together!",
    },
];

export default function OnboardingScreen() {
    const [step, setStep] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const nextStep = () => {
        if (step < onboardingSteps.length - 1) {
            setStep(step + 1);
        } else {
            dispatch(completeOnboarding());
            // navigation.navigate("Home");
        }
    };

    return (
        <View className="flex-1 bg-green-100 items-center justify-center p-4">
            <Image src={onboardingSteps[step].image} className="w-64 h-64 mb-6" />
            <Text className="text-xl font-bold text-gray-800">{onboardingSteps[step].title}</Text>
            <Text className="text-center text-gray-600 my-2">{onboardingSteps[step].description}</Text>

            <View className="flex-row mt-4">
                {onboardingSteps.map((_, index) => (
                    <View
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${step === index ? 'bg-red-500' : 'bg-gray-400'}`}
                    />
                ))}
            </View>

            <TouchableOpacity onPress={nextStep} className="mt-6 bg-red-500 py-2 px-6 rounded-full">
                <Text className="text-white font-semibold">
                    {step === onboardingSteps.length - 1 ? "GET STARTED" : "NEXT"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
