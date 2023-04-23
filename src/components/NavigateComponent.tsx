import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TouchableIcon from './TouchableIcon';
import FlexViewComponent from './FlexViewComponent';
import TouchableText from './TouchableText';

function NavigateComponent(props: any): JSX.Element {
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
      <FlexViewComponent alignItems="center">
        <TouchableIcon type="Fontisto" name="home" color="#FFED00" />
        <TouchableText text="홈" size={10} color="#E25C28" />
      </FlexViewComponent>
      <FlexViewComponent alignItems="center">
        <TouchableIcon type="Fontisto" name="search" color="#7B7B7B" />
        <TouchableText text="검색" size={10} color="#7B7B7B" />
      </FlexViewComponent>
      <FlexViewComponent alignItems="center">
        <TouchableIcon type="Ionicons" name="bookmark" color="#7B7B7B" />
        <TouchableText text="마이뉴스" size={10} color="#7B7B7B" />
      </FlexViewComponent>
      <FlexViewComponent alignItems="center">
        <TouchableIcon type="FontAwesome" name="user" color="#7B7B7B" />
        <TouchableText text="프로필" size={10} color="#7B7B7B" />
      </FlexViewComponent>
    </View>
  );
}

const buttonText = (props: any) =>
  StyleSheet.create({
    titleText: {
      fontSize: props.size ? props.size : 16,
      fontWeight: '500',
      color: props.color ? props.color : 'black',
    },
    buttonText: {
      fontSize: props.size ? props.size : 14,
      fontWeight: '400',
      color: '#E25C28',
    },
  });

export default NavigateComponent;
