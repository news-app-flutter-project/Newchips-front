import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IHeaderView} from '@util/interface';
import ImageComponent from '@components/ImageComponent';
import TouchableIcon from '@components/TouchableIcon';
import TouchableText from '@components/TouchableText';

function HeaderComponent(props: IHeaderView): JSX.Element {
  /* <TextComponent text={props.title} /> */
  if (props.title) {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 60,
          }}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <TouchableIcon type="AntDesign" name="arrowleft" />
            <TouchableText text={props.title} size={16} pl={10} />
          </View>

          <View style={{flexDirection: 'row', gap: 20, marginRight: 18}}>
            <TouchableIcon
              name="text-fields"
              type="MaterialIcons"
              onPress={() => {
                console.log('assasasaas');
              }}
            />
            <TouchableIcon
              name="bookmark-outline"
              type="MaterialIcons"
              onPress={() => {
                console.log('assasasaas');
              }}
            />
            <TouchableIcon
              name="sticky-note-2"
              type="MaterialIcons"
              onPress={() => {
                console.log('assasasaas');
              }}
            />
            <TouchableIcon
              name="share"
              type="Octicons"
              onPress={() => {
                console.log('assasasaas');
              }}
            />
          </View>
        </View>
      </View>
    );
  } else {
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
}

const headerStyle = (props: IHeaderView) =>
  StyleSheet.create({
    header: {},
  });

export default HeaderComponent;
