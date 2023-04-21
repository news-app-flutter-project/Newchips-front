import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import {ICardView} from '@util/interface';
import ImageComponent from '@components/ImageComponent';
import FlexViewComponent from '@components/FlexViewComponent';

function CardViewComponent(props: ICardView): JSX.Element {
  return (
    <Pressable
      style={{
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
      }}
      onPress={props.onPress}>
      <FlexViewComponent flexDirection="row">
        <ImageComponent
          radius={15}
          w={71}
          h={71}
          path={{
            uri: `${props.url}`,
          }}
        />
        <View style={{flex: 1, marginLeft: 16}}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={buttonText(props).titleText}>
            {props.title}
          </Text>
          <Text style={buttonText(props).sourceText}>
            {'\n'}
            출처:{props.source}
          </Text>
        </View>
      </FlexViewComponent>
    </Pressable>
  );
}

const buttonText = (props: ICardView) =>
  StyleSheet.create({
    titleText: {
      fontSize: props.size ? props.size : 14,
      fontWeight: '500',
      color: props.color ? props.color : 'black',
      textAlign: 'left',
      backgroundColor: 'red',
    },
    sourceText: {
      fontSize: props.size ? props.size : 12,
      fontWeight: '400',
      color: props.color ? props.color : '#7B7B7B',
      textAlign: 'right',
    },
  });
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
export default CardViewComponent;
