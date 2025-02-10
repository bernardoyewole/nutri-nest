import React, { useState } from "react";
import {
    View, Text, TouchableOpacity, Image,
    KeyboardAvoidingView, Platform
} from "react-native";
import Slider from '@react-native-community/slider';
import { useRouter } from "expo-router";
import {CircleCheck} from 'lucide-react-native'
import Header from "@/components/ui/header";

export default function BasicInfoScreen() {
    const router = useRouter();
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
            <Header color="#166534" title="Basic Information" />
            <View className="flex-1 p-6 bg-[#f3faf5] justify-between pt-40">
                {/* Gender Selection */}
                <Text className="text-lg font-bold mb-2">What is your Gender?</Text>
                <View className="flex flex-row justify-center space-x-4 gap-6 mb-6">
                    <TouchableOpacity
                        className={`p-6 border-2 rounded-lg ${gender === 'male' ? 'border-green-600 relative' : 'border-gray-400'}`}
                        onPress={() => setGender("male")}
                    >
                        <Image source={require("@/assets/images/male.png")} style={{ height: 80, width: 80 }} />
                        <Text className="text-center mt-2">Male</Text>
                        {gender === 'male' && <CircleCheck color='#fff' fill='#16a34a' size={26} style={{position: 'absolute', top: 6, right: 6}}/>}
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`p-6 border-2 rounded-lg ${gender === 'female' ? 'border-green-600 relative' : 'border-gray-400'}`}
                        onPress={() => setGender("female")}
                    >
                        <Image source={require("@/assets/images/female.png")} style={{ height: 80, width: 80 }} />
                        <Text className="text-center mt-2">Female</Text>
                        {gender === 'female' && <CircleCheck color='#fff' fill='#16a34a' size={26} style={{position: 'absolute', top: 6, right: 6}}/>}
                    </TouchableOpacity>
                </View>

                {/* Age Slider */}
                <Text className="text-lg font-bold">How old are you</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={age}
                    onValueChange={setAge}
                    minimumTrackTintColor="#166534"
                    maximumTrackTintColor="#D1D5DB"
                />
                <Text className="text-center font-bold mb-4">{age}</Text>

                {/* Weight Slider */}
                <Text className="text-lg font-bold">What is your weight (in kg)</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={200}
                    step={1}
                    value={weight}
                    onValueChange={setWeight}
                    minimumTrackTintColor="#166534"
                    maximumTrackTintColor="#D1D5DB"
                />
                <Text className="text-center font-bold mb-4">{weight} kg</Text>

                {/* Height Slider */}
                <Text className="text-lg font-bold">What is your height (in cm)</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={200}
                    step={1}
                    value={height}
                    onValueChange={setHeight}
                    minimumTrackTintColor="#166534"
                    maximumTrackTintColor="#D1D5DB"
                />
                <Text className="text-center font-bold mb-4">{height} cm</Text>

                {/* Buttons */}
                <View className="flex flex-row justify-between mt-6">
                    <TouchableOpacity className="p-4" onPress={() => router.push("/(user-info)/diet-info")}>
                        <Text className="text-red-500">Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-red-500 p-4 rounded-lg" onPress={() => router.push("/(user-info)/diet-info")}>
                        <Text className="text-white">Next →</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
