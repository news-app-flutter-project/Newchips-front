import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import TouchableIcon from '../atoms/TouchableIcon';
import ImageComponent from '@components/atoms/ImageComponent';

const image = require('@assets/image/login.jpg');
function LoginTemplate(): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{opacity: 0.6, backgroundColor: '#000000'}}>
        <View style={styles.container1}>
          <View>
            <Text style={styles.text}>뉴스를 간편하게</Text>
            <Text style={styles.text1}>뉴칩스로 나의 성장을 기대해보세요.</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log('hi');
            }}>
            <ImageComponent
              w={24}
              h={24}
              path={require('@assets/image/kakaoLogo.png')}
            />
            <Text style={styles.buttonText}>카카오 로그인</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 40,
  },
  text1: {
    color: 'white',
    fontSize: 16,
    lineHeight: 32,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: '#FFED00',
    padding: 15,
    marginBottom: 90,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    marginLeft: 16,
  },
});

export default LoginTemplate;
