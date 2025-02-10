import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView, Platform, Image} from "react-native";
import {useRouter} from "expo-router";
import ScrollView = Animated.ScrollView;
import {CircleUserRound, User, Mail, Lock, Phone, EyeOff, Eye} from 'lucide-react-native'
import Input from '@/components/ui/input'
import Header from "@/components/ui/header";

export default function SignUpScreen() {
    const router = useRouter();
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "" });

    return (
         <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
            >
             <Header color='#166534' title="Create an Account" />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
                    keyboardDismissMode="on-drag"
                    className="p-6 bg-[#f3faf5]"
                >
                    <View className="w-full max-w-md">
                        <View className="flex items-center mb-8">
                            <View className='flex items-center'>
                                <Image source={require("@/assets/images/salad.png")} style={{ height: 50, width: 50 }} />
                                <Text className="text-4xl font-bold font-sans">
                                    nutrinest
                                </Text>
                            </View>
                            <Text className="text-gray-600 text-xl mt-6">Please provide your details</Text>
                        </View>

                        <Input icon={CircleUserRound} placeholder="First Name" onChangeText={(text) => setForm({ ...form, firstName: text })} />
                        <Input icon={User} placeholder="Last Name" onChangeText={(text) => setForm({ ...form, lastName: text })} />
                        <Input icon={Mail} placeholder="Email address" keyboardType="email-address" onChangeText={(text) => setForm({ ...form, email: text })} />
                        <Input icon={Phone} placeholder="Phone number" keyboardType="phone-pad" onChangeText={(text) => setForm({ ...form, phone: text })} />
                        <Input icon={Lock} placeholder="Password" isPassword onChangeText={(text) => setForm({ ...form, password: text })} />

                        <TouchableOpacity
                            className="bg-red-500 p-4 rounded-lg"
                            onPress={() =>
                                router.push({ pathname: "/(auth)/otp", params: { phone: form.phone } })}
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
