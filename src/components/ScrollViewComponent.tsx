import React from 'react';
import {View, ScrollView} from 'react-native';
import {IScrollView} from '@util/interface';

function SliderComponent(props: IScrollView): JSX.Element {
  const childCount = React.Children.count(props.children);
  {
    if (childCount > 1) {
      return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {Object.values(props.children || {})?.map((item, idx) => (
            <View
              key={idx}
              style={{
                marginTop: (props.gapVertical || 0) / 2,
                marginBottom: (props.gapVertical || 0) / 2,
                marginRight: (props.gapHorizental || 0) / 2,
                marginLeft: (props.gapHorizental || 0) / 2,
              }}>
              {item}
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View
            style={{
              marginTop: (props.gapVertical || 0) / 2,
              marginBottom: (props.gapVertical || 0) / 2,
              marginRight: (props.gapHorizental || 0) / 2,
              marginLeft: (props.gapHorizental || 0) / 2,
            }}>
            {props.children}
          </View>
        </ScrollView>
      );
    }
  }
}

export default SliderComponent;
