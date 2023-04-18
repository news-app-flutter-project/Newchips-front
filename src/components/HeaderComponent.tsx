import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IHeaderView} from '@util/interface';
import ImageComponent from '@components/ImageComponent';
import TouchableIcon from '@components/TouchableIcon';
import TouchableText from '@components/TouchableText';
import FlexViewComponent from '@components/FlexViewComponent';

function HeaderComponent(props: IHeaderView): JSX.Element {
  /* <TextComponent text={props.title} /> */
  if (props.title) {
    return (
      <View>
        <FlexViewComponent
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          h={60}>
          <FlexViewComponent flexDirection="row" ml={20}>
            <TouchableIcon type="AntDesign" name="arrowleft" />
            <TouchableText text={props.title} size={16} pl={10} />
          </FlexViewComponent>

          <FlexViewComponent flexDirection="row" mr={20} gap={20}>
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
          </FlexViewComponent>
        </FlexViewComponent>
      </View>
    );
  } else {
    return (
      <View>
        <FlexViewComponent
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          h={60}>
          <View>
            <ImageComponent
              w={120}
              h={24}
              resizeMode="contain"
              path={require('@assets/image/NewChipsLogo.png')}
            />
          </View>
        </FlexViewComponent>
        <FlexViewComponent position="absolute" t={18} r={19}>
          <ImageComponent
            w={24}
            h={24}
            path={require('@assets/image/IconAlarm.png')}
          />
        </FlexViewComponent>
      </View>
    );
  }
}

const headerStyle = (props: IHeaderView) =>
  StyleSheet.create({
    header: {},
  });

export default HeaderComponent;
