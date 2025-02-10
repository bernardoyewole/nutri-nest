import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, Animated,
    KeyboardAvoidingView, Platform, Image
} from "react-native";
import { useRouter } from "expo-router";
import ScrollView = Animated.ScrollView;
import { Mail } from 'lucide-react-native';
import Header from "@/components/ui/header";

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
        >
            <Header color='#166534' title="Reset Password" />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
                keyboardDismissMode="on-drag"
                className="p-6 bg-[#f3faf5]"
            >
                <View className="w-full max-w-md">
                    <View className="mb-8">
                        <View className='flex items-center'>
                            <Image source={require("@/assets/images/salad.png")} style={{ height: 50, width: 50 }} />
                            <Text className="text-4xl font-bold font-sans">
                                nutrinest
                            </Text>
                        </View>
                        <Text className="text-center text-gray-600 text-xl mt-6">
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
