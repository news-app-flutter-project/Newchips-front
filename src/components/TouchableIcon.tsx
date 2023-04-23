import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IIcon} from '@util/interface';

function TouchableIcon(Props: IIcon): JSX.Element {
  {
    if (Props.type == 'MaterialIcons') {
      return (
        <Pressable onPress={Props.onPress}>
          <MaterialIcons
            name={Props.name}
            style={buttonText(Props).buttonText}
          />
        </Pressable>
      );
    } else if (Props.type == 'AntDesign') {
      return (
        <Pressable onPress={Props.onPress}>
          <AntDesign name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    } else if (Props.type == 'Entypo') {
      return (
        <Pressable onPress={Props.onPress}>
          <Entypo name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    } else if (Props.type == 'Octicons') {
      return (
        <Pressable onPress={Props.onPress}>
          <Octicons name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    } else if (Props.type == 'Fontisto') {
      return (
        <Pressable onPress={Props.onPress}>
          <Fontisto name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    } else if (Props.type == 'Ionicons') {
      return (
        <Pressable onPress={Props.onPress}>
          <Ionicons name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    } else if (Props.type == 'FontAwesome') {
      return (
        <Pressable onPress={Props.onPress}>
          <FontAwesome name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    } else {
      return (
        <Pressable onPress={Props.onPress}>
          <FontAwesome name={Props.name} style={buttonText(Props).buttonText} />
        </Pressable>
      );
    }
  }
}

const buttonText = (props: IIcon) =>
  StyleSheet.create({
    buttonText: {
      color: props.color ? props.color : 'black',
      fontSize: props.size ? props.size : 26,
    },
  });

export default TouchableIcon;
