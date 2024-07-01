import { Link } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Screen as RouterScreen } from 'expo-router/build/views/Screen'

const Navlink = ({label, icon, path}: any) => {
  return (
    <Link key={path} href={path} className="m-3 block w-full py-2 px-4 bg-gray-800 text-white rounded-md border border-transparent hover:border-white hover:bg-gray-700 transition duration-300 ease-in-out">
      <Text className="text-white">{path}</Text>
    </Link>
  );
};

export default Navlink;