import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/ui/header";

export default function VerificationSuccessScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#f3faf5] p-6 justify-center items-center">
            <Header color="#166534" title="Verification" />

            {/* Success Icon */}
            <Image source={require("@/assets/images/successful.png")} style={{ height: 200, width: 200 }} />

            {/* Success Message */}
            <Text className="text-2xl font-bold text-center mt-4 text-green-800">You are Verified</Text>
            <Text className="text-center mt-2 mb-6 text-gray-700 px-4">
                Congratulations to you. You are now Verified! Kindly proceed.
            </Text>

            {/* Continue Button */}
            <TouchableOpacity
                className="bg-red-500 p-4 rounded-lg w-full max-w-sm"
                onPress={() => router.replace("/(user-info)/basic-info")}
            >
                <Text className="text-white text-lg text-center">Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
