import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";

export default function OTPScreen() {
    const router = useRouter();
    const { phone } = useLocalSearchParams();
    const [otp, setOtp] = useState("");

    return (
        <View className="flex-1 bg-green-100 p-6 justify-center">
            <Text className="text-2xl font-bold text-center">Verification PIN</Text>
            <Text className="text-center mt-2 mb-4">Enter the 4-digit OTP sent to {phone}</Text>

            <View className="flex flex-row justify-center space-x-4">
                {[...Array(4)].map((_, index) => (
                    <TextInput key={index} className="bg-white text-center text-2xl p-3 w-12 h-12 rounded-lg" maxLength={4} keyboardType="number-pad" />
                ))}
            </View>

            <TouchableOpacity className="bg-red-500 p-4 rounded-lg mt-6" onPress={() => router.push("/(main)/index")}>
                <Text className="text-white text-lg text-center">Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text className="text-red-500 text-center mt-4">Resend OTP</Text>
            </TouchableOpacity>
        </View>
    );
}
