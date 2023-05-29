import React from 'react';
import { StyleSheet, useColorScheme, LogBox, StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import rootReducer from './RTK/slices';
import { RootStackNavigation } from '~/navigation/RootNavigation';

const queryClient = new QueryClient();

const App = () => {
    LogBox.ignoreLogs(['Remote debugger']);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
    };

    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <SafeAreaView style={[backgroundStyle, styles.container]}>
                        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
                        <NavigationContainer>
                            <RootStackNavigation />
                        </NavigationContainer>
                    </SafeAreaView>
                </SafeAreaProvider>
            </QueryClientProvider>
        </Provider>
    );
};

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
