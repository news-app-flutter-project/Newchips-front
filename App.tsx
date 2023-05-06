/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import TestPage from '@pages/TestPage';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './RTK/slices';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  LogBox,
} from 'react-native';
import NavigateComponent from '@components/NavigateComponent';
import HeaderComponent from './src/components/HeaderComponent';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();
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
        <HeaderComponent />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={MainPage} />
            <Stack.Screen name="Search" component={LoginPage} />
            <Stack.Screen name="MyNews" component={TestPage} />
            <Stack.Screen name="Profile" component={MainPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
{
  /* <StatusBar
barStyle={isDarkMode ? 'light-content' : 'dark-content'}
backgroundColor={backgroundStyle.backgroundColor}
/>
<HeaderComponent />

<LoginPage /> 
<TestPage />
<MainPage />
<NavigateComponent /> */
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
