import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {IImage} from '@util/interface';
import FastImage from 'react-native-fast-image';

function ImageComponent(props: IImage): JSX.Element {
  // const source = props.path as ImageSourcePropType; // 캐스팅
  return (
    <Pressable onPress={props.onPress}>
      <FastImage style={imageBtn(props).imageBtn} source={props.path} />
    </Pressable>
  );
}

const imageBtn = (props: IImage) =>
  StyleSheet.create({
    imageBtn: {
      width: props.w,
      height: props.h,
    },
  });

export default ImageComponent;
