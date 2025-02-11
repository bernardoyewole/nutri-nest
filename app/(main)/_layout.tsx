import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import { Calendar, ShoppingCart, BookOpen, User, Plus } from "lucide-react-native";
import MealPlanner from "@/app/(main)/meal-planner";
import ShoppingList from "@/app/(main)/shopping-list";
import Cookbook from "@/app/(main)/cookbook";
import Profile from "@/app/(main)/profile";

const Tab = createBottomTabNavigator();

export default function Layout() {
    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        borderTopColor: 'transparent',
                        borderTopWidth: 0,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 84,
                        paddingBottom: 24,
                        paddingTop: 12,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        elevation: 0,
                        shadowColor: 'transparent',
                    },
                    tabBarActiveTintColor: '#48B1BF',
                    tabBarInactiveTintColor: '#666666',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Inter_400Regular',
                        marginTop: 4,
                    },
                }}
            >
                {/* Meal Planner */}
                <Tab.Screen
                    name="MealPlanner"
                    component={MealPlanner}
                    options={{
                        tabBarIcon: ({ color, size }) =>
                            // <Calendar size={size} color={color} />,
                        <Image source={require("@/assets/images/calendar.png")} className='w-[30px] h-[30px]' />
                    }}
                />

                {/* Shopping List */}
                <Tab.Screen
                    name="ShoppingList"
                    component={ShoppingList}
                    options={{
                        tabBarIcon: ({ color, size }) =>
                            // <ShoppingCart size={size} color={color} />,
                            <Image source={require("@/assets/images/shopping-list.png")} className='w-[30px] h-[30px]' />

                    }}
                />

                {/*/!* Floating Button (FAB) *!/*/}
                {/*<Tab.Screen*/}
                {/*    name="AddMeal"*/}
                {/*    component={MealPlanner} // Placeholder; can be any screen*/}
                {/*    options={{*/}
                {/*        tabBarButton: (props) => (*/}
                {/*            <TouchableOpacity*/}
                {/*                {...props}*/}
                {/*                className="bg-green-800 w-16 h-16 rounded-full items-center justify-center absolute -top-6 shadow-lg"*/}
                {/*            >*/}
                {/*                <Plus size={28} color="white" />*/}
                {/*            </TouchableOpacity>*/}
                {/*        ),*/}
                {/*    }}*/}
                {/*/>*/}

                {/* Cookbook */}
                <Tab.Screen
                    name="Cookbook"
                    component={Cookbook}
                    options={{
                        tabBarIcon: ({ color, size }) =>
                            // <BookOpen size={size} color={color} />,
                            <Image source={require("@/assets/images/book.png")} className='w-[30px] h-[30px]' />

                    }}
                />

                {/* Profile */}
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) =>
                            // <User size={size} color={color} />,
                            <Image source={require("@/assets/images/user-account.png")} className='w-[30px] h-[30px]' />
                    }}
                />
            </Tab.Navigator>
    );
}
