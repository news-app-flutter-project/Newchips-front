import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import {IImage} from '@util/interface';

function TouchableText(props: IImage): JSX.Element {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={imageBtn(props).imageBtn} source={props.path} />
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

export default TouchableText;
