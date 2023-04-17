import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {IImage} from '@util/interface';
import FastImage from 'react-native-fast-image';

function findResizeMode(resizeMode: string) {
  switch (resizeMode) {
    case 'contain': //뷰 크기와 같거나 작도록함
      return FastImage.resizeMode.contain;
    case 'cover': //뷰 크기와 같거나 크도록함
      return FastImage.resizeMode.cover;
    case 'stretch': //너비와 높이를 독립적으로 조정합니다
      return FastImage.resizeMode.stretch;
    case 'center ': //중앙
      return FastImage.resizeMode.center;
    default:
      return FastImage.resizeMode.cover;
  }
}
function ImageComponent(props: IImage): JSX.Element {
  // const source = props.path as ImageSourcePropType; // 캐스팅
  const _resizeMode = findResizeMode(props.resizeMode || '');

  return (
    <Pressable onPress={props.onPress}>
      <FastImage
        resizeMode={_resizeMode}
        style={imageBtn(props).imageBtn}
        source={props.path}
      />
    </Pressable>
  );
}

const imageBtn = (props: IImage) =>
  StyleSheet.create({
    imageBtn: {
      width: props.w,
      height: props.h,
      flexBasis: props.flexBasis,
    },
  });

export default ImageComponent;
