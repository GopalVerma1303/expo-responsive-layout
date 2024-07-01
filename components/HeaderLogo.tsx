import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function HeaderLogo() {
  return (
    <Link href="/" className="group focus:outline-none">
      <View className="flex pt-5 pb-8 items-start h-[96px] max-h-[96px]">
        <View className="flex items-center p-3 my-1 rounded transition-colors group-hover:bg-white/10 group-focus:bg-white/10 group-focus:outline-none">
          <Text className="block xl:hidden w-10 text-white text-3xl font-bold">SB</Text>
          <Text className="hidden xl:block text-white font-bold text-3xl">Squadbook</Text>
        </View>
      </View>
    </Link>
  );
}
