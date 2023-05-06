import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import {ICardView} from '@util/interface';
import ImageComponent from '@components/atoms/ImageComponent';
import FlexViewComponent from '@components/atoms/FlexViewComponent';

function CardViewComponent(props: ICardView): JSX.Element {
  return (
    <View>
      {Object.values(props.cardData).map((item, idx) => {
        if (item.url) {
          return (
            <Pressable
              key={idx}
              style={{
                padding: 16,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginTop: 16 / 2,
                marginBottom: 16 / 2,
                marginRight: 10 / 2,
                marginLeft: 10 / 2,
              }}
              onPress={() => {}}>
              <FlexViewComponent flexDirection="row">
                <ImageComponent
                  radius={15}
                  w={71}
                  h={71}
                  path={{
                    uri: `${item.url}`,
                  }}
                />
                <View style={{flex: 1, marginLeft: 16}}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={buttonText(props).titleText}>
                    {item.title}
                  </Text>
                  <Text style={buttonText(props).sourceText}>
                    {'\n'}
                    출처:{item.source}
                  </Text>
                </View>
              </FlexViewComponent>
            </Pressable>
          );
        } else {
          return (
            <Pressable
              key={idx}
              style={{
                padding: 16,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginTop: 16 / 2,
                marginBottom: 16 / 2,
                marginRight: 10 / 2,
                marginLeft: 10 / 2,
              }}
              onPress={() => {}}>
              <FlexViewComponent flexDirection="row">
                <View style={{flex: 1}}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={buttonText(props).titleText}>
                    {item.title}
                  </Text>
                  <Text style={buttonText(props).sourceText}>
                    {'\n'}
                    출처:{item.source}
                  </Text>
                </View>
              </FlexViewComponent>
            </Pressable>
          );
        }
      })}
    </View>
  );
}

const buttonText = (props: ICardView) =>
  StyleSheet.create({
    titleText: {
      fontSize: props.size ? props.size : 14,
      fontWeight: '500',
      color: props.color ? props.color : 'black',
      textAlign: 'left',
      // backgroundColor: 'red',
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
