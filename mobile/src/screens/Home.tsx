import { View } from "react-native";
import { Header } from "../components/Header";

export function Home() {
  return (
    <View className="flex-1 px-8 pt-16 bg-background">
      <Header />
    </View>
  )
}