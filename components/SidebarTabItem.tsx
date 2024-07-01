import classNames from 'classnames';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import SidebarItemIcon from '../assets/icons/checkbox-filled.svg';

const SidebarTabItem = ({ id, label, route, Icon }) => {
  return (
    <Link href={route} key={id}>
      <View className="flex p-3 flex-row items-center rounded-full transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none">
        <View
          className="flex transition-transform duration-150 group-hover:scale-110 group-focus:scale-110"
          style={{
            transitionTimingFunction: 'cubic-bezier(0.17, 0.17, 0, 1)',
          }}
        />
        <Icon
          width={24}
          height={24}
          className="flex transition-transform hover:scale-110 active:scale-90 active:opacity-80"
        />
        <Text className="text-white text-lg mx-4 hidden xl:flex font-bold">{label}</Text>
      </View>
    </Link>
  );
};

export default SidebarTabItem;
