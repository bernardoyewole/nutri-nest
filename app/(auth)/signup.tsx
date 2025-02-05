import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router";

export default function SignUpScreen() {
    const router = useRouter();
    const [form, setForm] = useState({ fullName: "", email: "", phone: "", password: "" });

    return (
        <View className="flex-1 bg-green-100 p-6 justify-center">
            <Text className="text-2xl font-bold text-center mb-6">Create an Account</Text>

            <TextInput className="bg-white p-4 rounded-lg mb-4" placeholder="Full Name" onChangeText={(text) => setForm({ ...form, fullName: text })} />
            <TextInput className="bg-white p-4 rounded-lg mb-4" placeholder="Email" keyboardType="email-address" onChangeText={(text) => setForm({ ...form, email: text })} />
            <TextInput className="bg-white p-4 rounded-lg mb-4" placeholder="Phone Number" keyboardType="phone-pad" onChangeText={(text) => setForm({ ...form, phone: text })} />
            <TextInput className="bg-white p-4 rounded-lg mb-4" placeholder="Password" secureTextEntry onChangeText={(text) => setForm({ ...form, password: text })} />

            <TouchableOpacity
                className="bg-red-500 p-4 rounded-lg"
                onPress={() => router.push({ pathname: "/(auth)/OTP", params: { phone: form.phone } })}
            >
                <Text className="text-white text-lg text-center">Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text className="text-red-500 text-center mt-4">Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
}
