import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, useColorScheme, LogBox, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestScreen from '@components/screens/TestScreen';
import LoginScreen from '@components/screens/LoginScreen';
import HomeScreen from '@components/screens/HomeScreen';
import rootReducer from './RTK/slices';
import NavigateComponent from '@components/molecules/NavigateComponent';

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
    LogBox.ignoreLogs(['Remote debugger']);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
    };

    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <SafeAreaView style={[backgroundStyle, styles.container]}>
                    <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                    <NavigationContainer>
                        <Tab.Navigator
                            tabBar={props => <NavigateComponent {...props} />}
                            screenOptions={{ headerShown: false }}>
                            <Tab.Screen name="Home" component={HomeScreen} />
                            <Tab.Screen name="Search" component={LoginScreen} />
                            <Tab.Screen name="MyNews" component={TestScreen} />
                            <Tab.Screen name="Profile" component={HomeScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
