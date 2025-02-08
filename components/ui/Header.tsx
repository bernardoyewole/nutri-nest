import { View, Text, TouchableOpacity, Platform, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

interface HeaderProps {
    color?: string;
    title: string;
    showBackButton?: boolean;
}

export default function Header({ color = "#fff", title, showBackButton = false }: HeaderProps) {
    const router = useRouter();

    return (
        <View
            style={{
                position: "absolute", // Keeps it fixed at the top
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000, // Ensures it stays above other content
                backgroundColor: color,
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
                paddingBottom: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
            }}
        >
            {showBackButton ? (
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 10 }}>
                    <ChevronLeft size={24} color="white" />
                </TouchableOpacity>
            ) : (
                <View style={{ width: 40 }} />
            )}

            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flex: 1, color: '#fff' }}>{title}</Text>

            <View style={{ width: 40 }} />
        </View>
    );
}
