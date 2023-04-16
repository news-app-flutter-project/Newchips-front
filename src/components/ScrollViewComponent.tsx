import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {IScrollView} from '@util/interface';

function SliderComponent(props: IScrollView): JSX.Element {
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
}

export default SliderComponent;
