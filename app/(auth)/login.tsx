import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });

    return (
        <View className="flex-1 bg-green-100 p-6 justify-center">
            <Text className="text-2xl font-bold text-center mb-6">Login</Text>

            <TextInput className="bg-white p-4 rounded-lg mb-4" placeholder="Email" keyboardType="email-address" onChangeText={(text) => setForm({ ...form, email: text })} />
            <TextInput className="bg-white p-4 rounded-lg mb-4" placeholder="Password" secureTextEntry onChangeText={(text) => setForm({ ...form, password: text })} />

            <TouchableOpacity className="bg-red-500 p-4 rounded-lg" onPress={() => router.push("/(main)/index")}>
                <Text className="text-white text-lg text-center">Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                <Text className="text-red-500 text-center mt-4">Create an Account</Text>
            </TouchableOpacity>
        </View>
    );
}
