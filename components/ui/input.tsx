import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { LucideIcon, Eye, EyeOff } from "lucide-react-native";

interface InputProps extends TextInputProps {
    icon: LucideIcon; // Icon component (e.g., Mail, Lock, Phone)
    isPassword?: boolean; // If true, enables show/hide toggle
}

const Input: React.FC<InputProps> = ({ icon: Icon, isPassword = false, ...props }) => {
    const [secure, setSecure] = useState(isPassword);

    return (
        <View className="flex-row items-center bg-white border-gray-600 border-[0.5px] rounded-lg mb-4 p-4 h-14">
            {/* Left Icon */}
            <View className="mr-3">
                <Icon size={20} color="#9CA3AF" />
            </View>

            {/* Input Field */}
            <TextInput
                className="flex-1 text-gray-900"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={secure}
                {...props} // Spread other TextInput props (placeholder, keyboardType, etc.)
            />

            {isPassword && (
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                    {secure ? <EyeOff size={20} color="#9CA3AF" /> : <Eye size={20} color="#9CA3AF" />}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Input;
