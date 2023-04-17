import React from 'react';
import {View} from 'react-native';
import TouchableIcon from '@components/TouchableIcon';
import TouchableText from '@components/TouchableText';
import ImageComponent from '@components/ImageComponent';
import ScrollViewComponent from '@components/ScrollViewComponent';
import HeaderComponent from '~/components/HeaderComponent';

function TestPage(): JSX.Element {
  return (
    <View>
      <HeaderComponent title="Test Page" />
      <ScrollViewComponent gapVertical={16} gapHorizental={10}>
        <TouchableText
          text="전체"
          bgColor="#FFED00"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
        <TouchableText
          text="정치"
          bgColor="#D9D9D9"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
        <TouchableText
          text="경제"
          bgColor="#D9D9D9"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
        <TouchableText
          text="사회"
          bgColor="#D9D9D9"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
        <TouchableText
          text="생활"
          bgColor="#D9D9D9"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
        <TouchableText
          text="IT/과학"
          bgColor="#D9D9D9"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
        <TouchableText
          text="랭킹"
          bgColor="#D9D9D9"
          pt={10}
          pb={10}
          pl={16}
          pr={16}
          radius={20}
          onPress={() => {
            console.log('assasasaas');
          }}
        />
      </ScrollViewComponent>

      <ScrollViewComponent gapVertical={16} gapHorizental={10}>
        <ImageComponent
          w={100}
          h={100}
          path={require('@assets/image/login.jpg')}
        />
        <ImageComponent
          w={100}
          h={100}
          path={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <ImageComponent
          w={100}
          h={100}
          path={require('@assets/image/login.jpg')}
        />
        <ImageComponent
          w={100}
          h={100}
          path={{
            uri: 'https://res.cloudinary.com/djehfg3yk/image/upload/v1681392528/file-upload/tmp-5-1681392527696_fv624n.jpg',
          }}
        />
        <ImageComponent
          w={100}
          h={100}
          path={require('@assets/image/login.jpg')}
        />
        <ImageComponent
          w={100}
          h={100}
          path={{
            uri: 'https://res.cloudinary.com/djehfg3yk/image/upload/v1681392528/file-upload/tmp-5-1681392527696_fv624n.jpg',
          }}
        />
      </ScrollViewComponent>
      <ImageComponent
        w={100}
        h={100}
        path={require('@assets/image/login.jpg')}
      />
      <ImageComponent
        w={100}
        h={100}
        path={{
          uri: 'https://res.cloudinary.com/djehfg3yk/image/upload/v1681392528/file-upload/tmp-5-1681392527696_fv624n.jpg',
        }}
      />
      <TouchableText
        text="assss"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon name="message" type="Entypo" />
      <TouchableIcon name="thumb-up" type="MaterialIcons" />
      <TouchableIcon name="thumb-down" type="MaterialIcons" />
      <TouchableIcon
        name="arrowleft"
        type="AntDesign"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="text-fields"
        type="MaterialIcons"
        onPress={() => {
          console.log('assasasaas');
        }}
      />
      <TouchableIcon
        name="bookmark"
        type="MaterialIcons"
        color="#FFED00"
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
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//     lineHeight: 32,
//     fontWeight: '400',
//     textAlign: 'left',
//   },
//   input: {
//     color: 'white',
//     paddingVertical: 0,
//     outline: 'none',
//     borderBottomWidth: 2,
//     marginLeft: 5,
//     borderColor: 'white',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 24,
//     elevation: 3,
//     backgroundColor: 'white',
//     padding: 15,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 12,
//   },
//   textBtn: {
//     color: 'white',
//     fontSize: 12,
//   },
// });

export default TestPage;
