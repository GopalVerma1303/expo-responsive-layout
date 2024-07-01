import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const TabBarItem = ({ id, label, route, Icon }) => {
  return (
    <Link
      href={route}
      key={id}
      className="group mt-4 items-center justify-center focus:outline-none">
      <Icon
        width={32}
        height={32}
        className="flex-1 transition-transform hover:scale-110 active:scale-90 active:opacity-80"
      />
    </Link>
  );
};

export default TabBarItem;
