import React from 'react';
import {View, ScrollView} from 'react-native';
import {IScrollView} from '@util/interface';
import ImageComponent from '@components/atoms/ImageComponent';
import TouchableText from '@components/atoms/TouchableText';

function ScrollViewComponent(props: IScrollView): JSX.Element {
  {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {Object.values(props.scrollData).map((item, idx) => (
          <View
            key={idx}
            style={{
              marginTop: (props.gapVertical || 0) / 2,
              marginBottom: (props.gapVertical || 0) / 2,
              marginRight: (props.gapHorizental || 0) / 2,
              marginLeft: (props.gapHorizental || 0) / 2,
              width: 240,
            }}>
            <View style={{marginBottom: 8}}>
              <ImageComponent
                w={240}
                h={128}
                radius={10}
                path={{
                  uri: item.url,
                }}
              />
            </View>
            <TouchableText pb={8} text={item.title} size={14} weight="500" />

            <TouchableText
              text={`${item.category}   ●  ${item.time}`}
              size={12}
              weight="400"
              color="#7B7B7B"
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default ScrollViewComponent;
