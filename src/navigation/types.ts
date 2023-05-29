import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    MainTab: BottomTabScreenProps<MainTabParamList>;
    Login: undefined;
};

export type MainTabParamList = {
    Home: undefined;
    Search: undefined;
    MyNews: undefined;
    Profile: undefined;
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    RouteName
>;

export type MainTabScreenProps<RouteName extends keyof MainTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
