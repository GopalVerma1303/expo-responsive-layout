import React from 'react';
import { View, Text } from 'react-native';

import Divider from '~/components/Divider';

const Notes: React.FC = () => {
  return (
    <View className="flex-1 h-screen mt-10 mx-4 ">
      <Text className="text-white text-4xl font-bold mb-2">Notes</Text>
      <Divider />
    </View>
  );
};

export default Notes;
