import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Animated, Image } from "react-native";
import { useRouter } from "expo-router";
import { Mail, Lock } from 'lucide-react-native';
import Checkbox from "expo-checkbox"; // Install with: npm install expo-checkbox
import Input from "@/components/ui/input";
import Header from "@/components/ui/header";

const LoginScreen = () => {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1 ">
            <Header color="#166534" title="Login" />

            <Animated.ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
                className="p-6 bg-[#f3faf5]"
                keyboardDismissMode="on-drag"
            >
                <View className="w-full max-w-md">
                    <View className="mb-8">
                        <View className='flex items-center'>
                            <Image source={require("@/assets/images/salad.png")} style={{ height: 50, width: 50 }} />
                            <Text className="text-4xl font-bold font-sans">
                                nutrinest
                            </Text>
                        </View>
                        <Text className="text-2xl font-bold text-center my-4">Welcome Back</Text>
                        <Text className="text-center text-gray-600 text-xl">Log in to continue</Text>
                    </View>

                    <Input icon={Mail} placeholder="Email address" keyboardType="email-address" onChangeText={(text) => setForm({ ...form, email: text })} />
                    <Input icon={Lock} placeholder="Password" isPassword onChangeText={(text) => setForm({ ...form, password: text })} />

                    <View className="flex-row justify-between items-center mb-8 w-full">
                        <View className="flex-row items-center">
                            <Checkbox value={rememberMe} onValueChange={setRememberMe} color={rememberMe ? "#10B981" : undefined} />
                            <Text className="ml-2 text-gray-700">Remember me</Text>
                        </View>
                        <TouchableOpacity onPress={() => router.replace("/(auth)/forgot-password")}>
                            <Text className="text-red-500">Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="bg-red-500 p-4 rounded-lg" onPress={() => router.replace('/(user-info)/basic-info')}>
                        <Text className="text-white text-lg text-center">Login</Text>
                    </TouchableOpacity>

                    <View className="my-6">
                        <Text className="text-lg text-center">OR CONTINUE WITH</Text>
                    </View>

                    <View className="flex-row justify-center space-x-4">
                        <TouchableOpacity className="flex-row items-center bg-white border-red-500 border px-6 py-3 rounded-full">
                            <Image source={require("@/assets/images/google.png")} style={{ height: 20, width: 20, marginRight: 8 }} />
                            <Text className="text-gray-700">Google</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                        <Text className="text-red-500 text-center mt-6">Don't have an account? Sign up</Text>
                    </TouchableOpacity>

                    <View>
                        <Text className="text-center text-gray-600 text-sm mt-4">
                            By clicking Continue, you agree to our Terms of Service and Privacy Policy
                        </Text>
                    </View>
                </View>
            </Animated.ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
