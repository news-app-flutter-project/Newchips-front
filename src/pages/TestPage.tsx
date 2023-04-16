import React from 'react';
import {View} from 'react-native';
import TouchableIcon from '@components/TouchableIcon';
import TouchableText from '@components/TouchableText';
import ImageComponent from '@components/ImageComponent';
import ScrollViewComponent from '@components/ScrollViewComponent';

function TestPage(): JSX.Element {
  return (
    <View>
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
