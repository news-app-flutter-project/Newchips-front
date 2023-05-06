import React from 'react';
import {View} from 'react-native';
import TouchableIcon from '@components/atoms/TouchableIcon';
import FlexViewComponent from '@components/atoms/FlexViewComponent';
import TouchableText from '@components/atoms/TouchableText';

function NavigateComponent({navigation}: any): JSX.Element {
  const gotoHome = () => {
    console.log('home');

    navigation.navigate('Home');
  };
  const gotoSearch = () => {
    console.log('Search');
    navigation.navigate('Search');
  };
  const gotoMyNews = () => {
    console.log('MyNews');
    navigation.navigate('MyNews');
  };
  const gotoProfile = () => {
    console.log('Profile');
    navigation.navigate('Profile');
  };
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: '#E9E9E9',
        height: 64,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <FlexViewComponent onPress={gotoHome} alignItems="center">
        <TouchableIcon
          onPress={gotoHome}
          type="Fontisto"
          name="home"
          color="#FFED00"
        />
        <TouchableText onPress={gotoHome} text="홈" size={10} color="#E25C28" />
      </FlexViewComponent>
      <FlexViewComponent onPress={gotoSearch} alignItems="center">
        <TouchableIcon
          onPress={gotoSearch}
          type="Fontisto"
          name="search"
          color="#7B7B7B"
        />
        <TouchableText
          onPress={gotoSearch}
          text="검색"
          size={10}
          color="#7B7B7B"
        />
      </FlexViewComponent>
      <FlexViewComponent onPress={gotoMyNews} alignItems="center">
        <TouchableIcon
          onPress={gotoMyNews}
          type="Ionicons"
          name="bookmark"
          color="#7B7B7B"
        />
        <TouchableText
          onPress={gotoMyNews}
          text="마이뉴스"
          size={10}
          color="#7B7B7B"
        />
      </FlexViewComponent>
      <FlexViewComponent onPress={gotoProfile} alignItems="center">
        <TouchableIcon
          onPress={gotoProfile}
          type="FontAwesome"
          name="user"
          color="#7B7B7B"
        />
        <TouchableText
          onPress={gotoProfile}
          text="프로필"
          size={10}
          color="#7B7B7B"
        />
      </FlexViewComponent>
    </View>
  );
}

export default NavigateComponent;
