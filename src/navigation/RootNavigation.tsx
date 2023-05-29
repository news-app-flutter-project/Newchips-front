import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '~/components/screens/LoginScreen';
import { TabNavigation } from './TabNavigation';

const Stack = createNativeStackNavigator();

export const RootStackNavigation = () => {
    /**
     * 로그인 체크
     * TODO: 로그인 체크하는 boolean
     */
    const isLoggedIn = true;

    return !isLoggedIn ? (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    ) : (
        <Stack.Navigator>
            <Stack.Screen name="MainTab" component={TabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
