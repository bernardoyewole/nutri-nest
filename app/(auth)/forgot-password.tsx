import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, Animated,
    KeyboardAvoidingView, Platform
} from "react-native";
import { useRouter } from "expo-router";
import ScrollView = Animated.ScrollView;
import { Mail } from 'lucide-react-native';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-green-100"
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
                keyboardDismissMode="on-drag"
                className="p-6"
            >
                <View className="w-full max-w-md">
                    <View className="mb-8">
                        <Text className="text-4xl text-green-800 font-bold text-center mb-4">NutriNest</Text>
                        <Text className="text-2xl font-bold text-center">Reset Password</Text>
                        <Text className="text-center text-gray-600 text-xl mt-2">
                            Enter your email to receive a password reset link
                        </Text>
                    </View>

                    {/* Email Input */}
                    <View className="flex-row items-center bg-white border-gray-600 border-[0.5px] rounded-lg mb-8 p-4 h-14">
                        <View className="mr-3">
                            <Mail size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            className="flex-1 text-gray-900"
                            placeholder="Email address"
                            placeholderTextColor="#9CA3AF"
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    {/* Reset Password Button */}
                    <TouchableOpacity
                        className="bg-red-500 p-4 rounded-lg"
                        onPress={() => console.log("Password reset requested for", email)}
                    >
                        <Text className="text-white text-lg text-center">Send Reset Link</Text>
                    </TouchableOpacity>

                    {/* Back to Login */}
                    <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                        <Text className="text-red-500 text-center mt-6">Back to Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
