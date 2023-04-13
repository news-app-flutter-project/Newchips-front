import React from 'react';
import {StyleSheet, Pressable, Text, GestureResponderEvent} from 'react-native';
import {ITextBtn} from '@util/interface';
import TextComponent from '@components/TextComponent';
function TouchableText(Props: ITextBtn): JSX.Element {
  return (
    <Pressable onPress={Props.onPress}>
      <Text style={buttonText(Props).buttonText}>{Props.text}</Text>
    </Pressable>
  );
}

const buttonText = (props: ITextBtn) =>
  StyleSheet.create({
    buttonText: {
      fontSize: props.size ? props.size : 14,
      fontWeight: props.weight ? props.weight : '500',
      color: props.color ? props.color : 'black',
    },
  });

export default TouchableText;
