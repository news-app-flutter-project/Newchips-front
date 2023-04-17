import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IHeaderView} from '@util/interface';
import TextComponent from '@components/TextComponent';
import ImageComponent from '@components/ImageComponent';

function HeaderComponent(props: IHeaderView): JSX.Element {
  {
    /* <TextComponent text={props.title} /> */
  }
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 60,
        }}>
        <View>
          <ImageComponent
            w={120}
            h={24}
            resizeMode="contain"
            path={require('@assets/image/NewChipsLogo.png')}
          />
        </View>
      </View>
      <View style={{position: 'absolute', top: 18, right: 19}}>
        <ImageComponent
          w={24}
          h={24}
          path={require('@assets/image/IconAlarm.png')}
        />
      </View>
    </View>
  );
}

const headerStyle = (props: IHeaderView) =>
  StyleSheet.create({
    header: {},
  });

export default HeaderComponent;
