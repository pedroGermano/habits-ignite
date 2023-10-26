import { View } from "react-native";
import Logo from '../assets/logo.svg';

export function Header(){
  return (
    <View className="flex-row items-center justify-between w-full">
      <Logo />
      
    </View>
  )
}