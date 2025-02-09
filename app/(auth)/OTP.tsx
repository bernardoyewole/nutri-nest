import React, { useState } from "react";
import {
    View, Text, Keyboard, TextInput, TouchableOpacity,
    Platform, KeyboardAvoidingView, Image, TouchableWithoutFeedback
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Header from "@/components/ui/Header";
import { OtpInput } from "react-native-otp-entry";

export default function OTPScreen() {
    const router = useRouter();
    const { phone } = useLocalSearchParams();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
                <Header color="#166534" title="Verification" showBackButton />
                <View className="flex-1 p-6 justify-center">
                    {/* Logo */}
                    <View className="flex items-center mb-8">
                        <Image source={require("@/assets/images/salad.png")} style={{ height: 50, width: 50 }} />
                        <Text className="text-4xl font-bold font-sans">nutrinest</Text>
                    </View>

                    {/* OTP Instructions */}
                    <Text className="text-2xl font-bold text-center">Verify your identity</Text>
                    <Text className="text-center mt-2 mb-4">
                        We sent a 4 digit PIN to your phone. Please, check and enter your PIN.
                    </Text>

                    {/* OTP Input Fields */}
                    <OtpInput
                        numberOfDigits={4}
                        hideStick={true}
                        theme={{
                            containerStyle: styles.otpContainer,
                            pinCodeContainerStyle: styles.pinCodeContainer
                        }}
                    />

                    {/* Verify Button */}
                    <TouchableOpacity className="bg-red-500 p-4 rounded-lg mt-6" onPress={() => router.push("/(main)/index")}>
                        <Text className="text-white text-lg text-center">Verify</Text>
                    </TouchableOpacity>

                    {/* Resend OTP */}
                    <TouchableOpacity>
                        <Text className="text-red-500 text-center mt-4">Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = {
    otpContainer: {
        justifyContent: "center",
        gap: 20
    },
    pinCodeContainer: {
        height: 80,
        width: 70,
    }
};
