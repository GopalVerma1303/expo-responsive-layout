import classNames from 'classnames';
import { Link } from 'expo-router';
import React from 'react';

import { Icon } from './Icon';
import { makeIcon, TabBarIcon } from './TabBarIcon';
import { TabbedNavigator } from './TabSlots';

function HeaderLogo() {
  return (
    <Link className="group focus:outline-none" href="/">
      <div className="flex pt-5 pb-8 items-start h-[96px] max-h-[96px]">
        <div className="flex items-center p-3 my-1 rounded transition-colors group-hover:bg-white/10 group-focus:bg-white/10 group-focus:outline-none">
          <Text className="hidden xl:block text-white font-bold text-3xl">Squadbook</Text>
          <Text className="block xl:hidden w-10 text-white text-3xl font-bold">SB</Text>
        </div>
      </div>
    </Link>
  );
}

function SideBar() {
  return (
    <div className="w-20 xl:w-[244px]">
      <div className="xl:w-[244px] fixed h-full items-stretch flex border-r bg-black border-r-[#30363d] min-w-20 pt-2 px-3 pb-5 xl:items-start">
        <div className="z-[3] flex flex-1 flex-col h-full justify-between items-center xl:items-stretch">
          <HeaderLogo />

          <div className="gap-3 flex flex-1 flex-col">
            <SideBarTabItem name="todos" icon={makeIcon('checkbox')} popup="Home">
              Home
            </SideBarTabItem>
            <SideBarTabItem name="notes" icon={makeIcon('notes')} popup="Blog">
              Blog
            </SideBarTabItem>
            <SideBarTabItem name="settings" icon={makeIcon('settings')} popup="Games">
              Games
            </SideBarTabItem>
          </div>

          <div>
            <SideBarTabItem name="https://x.com/baconbrix" icon={makeIcon('twitter')}>
              Follow
            </SideBarTabItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBarTabItem({
  children,
  icon,
  name,
  popup,
}: {
  children: string;
  icon: (props: { focused?: boolean; color: string }) => JSX.Element;
  name: string;
  popup?: string;
}) {
  return (
    <TabBarItem
      name={name}
      id={name}
      accessibilityHasPopup="menu"
      className="group w-full py-1 focus:outline-none"
      popup={popup}>
      {({ focused }) => (
        <div className="flex p-3 flex-row items-center rounded-full transition-colors group-hover:bg-white/10 group-focus:bg-white/10 group-focus:outline-none">
          <div
            className="flex transition-transform duration-150 group-hover:scale-110 group-focus:scale-110"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.17, 0.17, 0, 1)',
            }}>
            {icon({
              focused,
              width: 30,
              height: 30,
              color: '#fff',
            })}
          </div>

          <span
            className={classNames(
              'text-white text-lg mx-4 hidden xl:flex',
              focused ? 'font-bold' : 'font-medium'
            )}>
            {children}
          </span>
        </div>
      )}
    </TabBarItem>
  );
}
