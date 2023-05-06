import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ITextBtn} from '@util/interface';

function TextComponent(Props: ITextBtn): JSX.Element {
  return <Text style={textStyle(Props).textStyle}>{Props.text}</Text>;
}

const textStyle = (props: ITextBtn) =>
  StyleSheet.create({
    textStyle: {
      fontSize: props.size ? props.size : 12,
      fontWeight: props.weight ? props.weight : '500',
      color: props.color ? props.color : 'black',
    },
  });

export default TextComponent;
