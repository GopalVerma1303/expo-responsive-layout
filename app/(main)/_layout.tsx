import { Slot } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import BottomTabBar from '../../components/BottomTabBar';
import Sidebar from '../../components/Sidebar';

import './../../global.css';
import AppHeader from '~/components/AppHeader';

const RootLayout = () => {
  return (
    <View className="flex-1 flex flex-col md:flex-row bg-[#121212] text-white">
      <View className="hidden md:flex">
        <Sidebar />
      </View>
      <AppHeader />
      <Slot />
      <BottomTabBar />
    </View>
  );
};

export default RootLayout;
