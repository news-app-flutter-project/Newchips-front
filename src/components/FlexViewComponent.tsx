import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IFlexView} from '@util/interface';
function FlexViewComponent(props: IFlexView): JSX.Element {
  return <View style={flexViewStyle(props).flexView}>{props.children}</View>;
}

const flexViewStyle = (props: IFlexView) =>
  StyleSheet.create({
    flexView: {
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      position: props.position,
      top: props.t,
      right: props.r,
      width: props.w,
      height: props.h,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginLeft: props.ml,
      marginRight: props.mr,
      gap: props.gap,
    },
  });

export default FlexViewComponent;
