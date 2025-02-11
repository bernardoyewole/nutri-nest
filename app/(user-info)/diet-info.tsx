import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, Switch, ScrollView, Platform,
    KeyboardAvoidingView
} from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/ui/header";
import {CheckCircle, Circle, XCircle, MinusCircle, PlusCircle} from "lucide-react-native";

export default function DietInfoScreen() {
    const router = useRouter();
    const [preferences, setPreferences] = useState([]);
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const [mealPlanDuration, setMealPlanDuration] = useState();
    const [familySize, setFamilySize] = useState<number>(0);
    const [ingredients, setIngredients] = useState([]);
    const [budgetFriendly, setBudgetFriendly] = useState(false);

    const increaseSize = () => setFamilySize((prev) => Math.min(prev + 1, 10));
    const decreaseSize = () => setFamilySize((prev) => Math.max(prev - 1, 1));

    const togglePreference = (option) => {
        setPreferences((prev) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    };

    const toggleRestriction = (option) => {
        setDietaryRestrictions((prev) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    };

    const removeIngredient = (ingredient) => {
        setIngredients(ingredients.filter((item) => item !== ingredient));
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
        >
            <Header color="#166534" title="Dietary Preferences" showBackButton />
            <ScrollView className="p-6 pt-40 bg-[#f3faf5]">
                {/* Alert Box */}
                <View className="flex-row items-start bg-red-100 p-3 rounded-lg mb-4">
                    <Text className="text-red-500 flex-1">
                        ⚠️ Give some information for personalized and automatic meal plan & shopping list creation.
                    </Text>
                </View>

                {/* Dietary Preferences */}
                <Text className="text-xl font-bold mb-2">Dietary Preferences and Health Goals:</Text>
                {["Vegetarian", "Gluten-Free", "Low-Carb", "Non-Vegetarian"].map((item) => (
                    <TouchableOpacity key={item} onPress={() => togglePreference(item)} className="flex-row items-center mb-2">
                        {preferences.includes(item) ? (
                            <CheckCircle size={20} color="green" />
                        ) : (
                            <Circle size={20} color="gray" />
                        )}
                        <Text className="ml-2 text-lg">{item}</Text>
                    </TouchableOpacity>
                ))}

                {/* OR Options */}
                <Text className="my-4 text-gray-600 text-lg ml-2">Or</Text>
                <View className="flex-row gap-6">
                    {["Vegan", "Paleo"].map((item) => (
                        <TouchableOpacity key={item} onPress={() => setPreferences([item])} className="flex-row items-center">
                            <Circle size={20} color={preferences.includes(item) ? "green" : "gray"} />
                            <Text className="ml-2 text-lg">{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Dietary Restrictions */}
                <Text className="text-xl font-bold mt-6 mb-2">Dietary Restrictions:</Text>
                {["Diabetic-Friendly", "Allergy-Conscious"].map((item) => (
                    <TouchableOpacity key={item} onPress={() => toggleRestriction(item)} className="flex-row items-center mb-2">
                        {dietaryRestrictions.includes(item) ? (
                            <CheckCircle size={20} color="green" />
                        ) : (
                            <Circle size={20} color="gray" />
                        )}
                        <Text className="ml-2 text-lg">{item}</Text>
                    </TouchableOpacity>
                ))}

                {/* Meal Plan Duration */}
                <Text className="text-xl font-bold mt-4 mb-2">Meal Plan Duration:</Text>
                {["Weekly", "Monthly"].map((item) => (
                    <TouchableOpacity key={item} onPress={() => setMealPlanDuration(item)} className="flex-row items-center mb-2">
                        <Circle size={20} color={mealPlanDuration === item ? "green" : "gray"} />
                        <Text className="ml-2 text-lg">{item}</Text>
                    </TouchableOpacity>
                ))}

                {/* Family Size */}
                <Text className="text-xl font-bold mt-4 mb-2">Family Size:</Text>
                <View className="flex-row gap-10 items-center">
                    <TextInput
                        className="border-[1px] flex leading-[20px] w-[150px] h-[40px] text-xl font-semibold text-center border-gray-400 rounded-lg"
                        value={familySize.toString()}
                        onChangeText={(text) => {
                            const num = parseInt(text);
                            if (!isNaN(num) && num >= 1 && num <= 10) {
                                setFamilySize(num);
                            }
                        }}
                        keyboardType="numeric"
                        editable={false}
                    />
                    <View className="flex-row gap-6">
                        {/* Decrease Button */}
                        <TouchableOpacity onPress={decreaseSize} disabled={familySize <= 1}>
                            <MinusCircle size={32} color={familySize > 1 ? "#008080" : "#ccc"} />
                        </TouchableOpacity>
                        <Text className='text-3xl text-gray-500'>|</Text>
                        {/* Increase Button */}
                        <TouchableOpacity onPress={increaseSize} disabled={familySize >= 10}>
                            <PlusCircle size={32} color={familySize < 10 ? "#008080" : "#ccc"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Ingredients to Avoid */}
                <Text className="text-xl font-bold mt-4 mb-2">Ingredients to Avoid:</Text>
                <View className="flex-row flex-wrap gap-2 mb-2">
                    {ingredients.map((ingredient, index) => (
                        <View key={index} className="flex-row gap-3 items-center bg-white p-2 rounded-lg">
                            <Text className='text-lg'>{ingredient}</Text>
                            <TouchableOpacity onPress={() => removeIngredient(ingredient)}>
                                <XCircle size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <TextInput
                    className="border-[1px] border-gray-400 rounded-lg p-4"
                    placeholder="Add new ingredient..."
                    onSubmitEditing={(e) => {
                        let ingredient = e.nativeEvent.text.trim().toString()
                        if (ingredient.length > 0 && !ingredients.includes(ingredient)) {
                            setIngredients([...ingredients, ingredient]);
                        }
                        e.nativeEvent.text = "";
                    }}
                />

                {/* Budget-Friendly Toggle */}
                <View className="flex-row justify-between items-center mt-6">
                    <Text className="text-lg font-bold">Budget-Friendly:</Text>
                    <Switch
                        value={budgetFriendly}
                        onValueChange={setBudgetFriendly}
                        trackColor={{ false: "#ccc", true: "#166534" }}
                        thumbColor={budgetFriendly ? "#fff" : "#f4f3f4"}
                    />
                </View>
                <Text className="text-sm text-gray-500">(Meal plan with only seasonal vegetables and fruits)</Text>

                {/* Skip & Next Buttons */}
                <View className="flex flex-row justify-between mt-6 pb-10">
                    <TouchableOpacity className="p-4" onPress={() => router.push("/(main)/meal-planner")}>
                        <Text className="text-red-500">Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-red-500 p-4 rounded-lg" onPress={() => router.push("/(main)/meal-planner")}>
                        <Text className="text-white">Next →</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
