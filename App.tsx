/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {SafeAreaView, StyleSheet, useColorScheme, LogBox} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestScreen from '@components/screens/TestScreen';
import LoginScreen from '@components/screens/LoginScreen';
import HomeScreen from '@components/screens/HomeScreen';
import rootReducer from './RTK/slices';
import TouchableIcon from '@components/atoms/TouchableIcon';
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
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <NavigateComponent {...props} />}
            screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={LoginScreen} />
            <Tab.Screen name="MyNews" component={TestScreen} />
            <Tab.Screen name="Profile" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
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
