import React from 'react';
import { View, Text } from 'react-native';

import TabBarItem from './TabBarItem';
import CalendarIcon from '../assets/icons/calendar.svg';
import NotesIcon from '../assets/icons/notes.svg';
import TodoIcon from '../assets/icons/todos.svg';
import XIcon from '../assets/icons/x.svg';

const LINKS = [
  {
    id: 1,
    label: 'TODOs',
    route: '/todos',
    Icon: TodoIcon,
  },
  {
    id: 2,
    label: 'Notes',
    route: '/notes',
    Icon: NotesIcon,
  },
  {
    id: 3,
    label: 'Calendar',
    route: '/calendar',
    Icon: CalendarIcon,
  },
];

const BottomTabBar = () => {
  return (
    <View className="md:hidden h-16">
      <View className="fixed bottom-0 left-0 right-0 flex flex-1 flex-row border-t border-t-[#30363d] bg-black justify-around items-stretch h-16 px-4">
        {LINKS.map((tab) => (
          <TabBarItem label={tab.label} route={tab.route} Icon={tab.Icon} id={tab.id} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabBar;
