import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '~/components/screens/HomeScreen';
import TestScreen from '~/components/screens/TestScreen';
import {
    SelectedHome,
    SelectedMyNews,
    SelectedProfile,
    SelectedSearch,
    UnselectedHome,
    UnselectedMyNews,
    UnselectedProfile,
    UnselectedSearch,
} from '~/assets/svg';

const BottomTab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <BottomTab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarActiveTintColor: '#F5842E',
                tabBarInactiveTintColor: '#7B7B7B',
            })}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ focused }) =>
                        focused ? <SelectedHome width={32} height={32} /> : <UnselectedHome width={32} height={32} />,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TestScreen}
                options={{
                    tabBarLabel: '검색',
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SelectedSearch width={32} height={32} />
                        ) : (
                            <UnselectedSearch width={32} height={32} />
                        ),
                }}
            />
            <BottomTab.Screen
                name="MyNews"
                component={TestScreen}
                options={{
                    tabBarLabel: '마이 뉴스',
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SelectedMyNews width={32} height={32} />
                        ) : (
                            <UnselectedMyNews width={32} height={32} />
                        ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    tabBarLabel: '프로필',
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <SelectedProfile width={32} height={32} />
                        ) : (
                            <UnselectedProfile width={32} height={32} />
                        ),
                }}
            />
        </BottomTab.Navigator>
    );
};
