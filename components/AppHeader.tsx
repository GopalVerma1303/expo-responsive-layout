import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import TabBarItem from './TabBarItem';
import SettingsIcon from '../assets/icons/settings.svg';
import XIcon from '../assets/icons/x.svg';

const AppHeader = () => {
  return (
    <View className="md:hidden h-16">
      {/* <View className="h-16" /> */}
      <View className="flex flex-1 z-10 bg-black fixed top-0 left-0 right-0 px-6 flex-row items-stretch justify-between border-b border-b-[#30363d] h-16">
        <View className='flex items-center p-3 my-1 rounded transition-colors group-hover:bg-white/10 group-focus:bg-white/10 group-focus:outline-none"'>
          {/* <Text className="text-white text-2xl font-bold">Squadbook</Text> */}
          <Text className="text-white text-4xl font-bold">SB</Text>
        </View>
        <TabBarItem id={0} Icon={SettingsIcon} label="Setttings" route="/settings" />
      </View>
    </View>
  );
};

export default AppHeader;
