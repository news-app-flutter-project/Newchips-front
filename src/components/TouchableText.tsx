import React from 'react';
import {StyleSheet, Pressable, Text, GestureResponderEvent} from 'react-native';
import {ITextBtn} from '@util/interface';
function TouchableText(props: ITextBtn): JSX.Element {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={buttonText(props).buttonText}>{props.text}</Text>
    </Pressable>
  );
}

const buttonText = (props: ITextBtn) =>
  StyleSheet.create({
    buttonText: {
      fontSize: props.size ? props.size : 14,
      fontWeight: props.weight ? props.weight : '500',
      color: props.color ? props.color : 'black',
      backgroundColor: props.bgColor ? props.bgColor : 'transparent',
      paddingTop: props.pt ? props.pt : 0,
      paddingBottom: props.pb ? props.pb : 0,
      paddingLeft: props.pl ? props.pl : 0,
      paddingRight: props.pr ? props.pr : 0,
      borderRadius: props.radius ? props.radius : 0,
    },
  });

export default TouchableText;
