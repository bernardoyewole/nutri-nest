import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView, Platform} from "react-native";
import {useRouter} from "expo-router";
import ScrollView = Animated.ScrollView;
import {CircleUserRound, User, Mail, Lock, Phone, EyeOff, Eye} from 'lucide-react-native'
import Input from '@/components/ui/Input'

export default function SignUpScreen() {
    const router = useRouter();
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "" });

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
                            <Text className="text-2xl font-bold text-center">Create an Account</Text>
                            <Text className="text-center text-gray-600 text-xl mt-2">Securely login to your account</Text>
                        </View>

                        <Input icon={CircleUserRound} placeholder="First Name" onChangeText={(text) => setForm({ ...form, firstName: text })} />
                        <Input icon={User} placeholder="Last Name" onChangeText={(text) => setForm({ ...form, lastName: text })} />
                        <Input icon={Mail} placeholder="Email address" keyboardType="email-address" onChangeText={(text) => setForm({ ...form, email: text })} />
                        <Input icon={Phone} placeholder="Phone number" keyboardType="phone-pad" onChangeText={(text) => setForm({ ...form, phone: text })} />
                        <Input icon={Lock} placeholder="Password" isPassword onChangeText={(text) => setForm({ ...form, password: text })} />

                        <TouchableOpacity
                            className="bg-red-500 p-4 rounded-lg"
                            onPress={() =>
                                router.push({ pathname: "/(auth)/OTP", params: { phone: form.phone } })}
                        >
                            <Text className="text-white text-lg text-center">Create Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                            <Text className="text-red-500 text-center mt-6">Already have an account? Log in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
