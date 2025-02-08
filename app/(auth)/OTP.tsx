import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Image} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import Header from "@/components/ui/Header";

export default function OTPScreen() {
    const router = useRouter();
    const { phone } = useLocalSearchParams();
    const [otp, setOtp] = useState("");

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1 ">
            <Header color="#166534" title="Verification" showBackButton />
        <View className="flex-1 p-6 justify-center">
            <View className='flex items-center mb-8'>
                <Image source={require("@/assets/images/salad.png")} style={{ height: 50, width: 50 }} />
                <Text className="text-4xl font-bold font-sans">
                    nutrinest
                </Text>
            </View>
            <Text className="text-2xl font-bold text-center">Verify your identity</Text>
            <Text className="text-center mt-2 mb-4">We sent a 4 digit PIN to your phone. Please, check and enter your PIN</Text>

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
        </KeyboardAvoidingView>
    );
}
