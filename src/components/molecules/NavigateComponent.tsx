import {View, Text, TouchableOpacity} from 'react-native';
import TouchableIcon from '@components/atoms/TouchableIcon';

function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const type =
          label == 'Home' || label == 'Search'
            ? 'Fontisto'
            : label == 'myNews'
            ? 'Ionicons'
            : 'FontAwesome';
        const name =
          label == 'Home'
            ? 'home'
            : label == 'Search'
            ? 'search'
            : label == 'myNews'
            ? 'bookmark'
            : 'user';
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}
            key={index}>
            <TouchableIcon
              onPress={onPress}
              type={type}
              name={name}
              color={isFocused ? '#FFED00' : '#7B7B7B'}
            />
            <Text style={{color: isFocused ? '#E25C28' : '#7B7B7B'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyTabBar;
