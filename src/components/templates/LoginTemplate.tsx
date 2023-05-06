import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';

const image = require('@assets/image/login.jpg');
function LoginTemplate(): JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{opacity: 0.6, backgroundColor: '#000000'}}>
        <Text style={styles.text}>해외 뉴스의 모든 것</Text>
        <Text style={styles.text}>뉴칩스로 나의 성장을 기대해보세요.</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="이메일"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="비밀번호"
          placeholderTextColor="white"
        />
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => {}}>
            <Text style={styles.textBtn}>이메일 찾기</Text>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Text style={styles.textBtn}>비밀번호 찾기</Text>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Text style={styles.textBtn}>회원가입</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    textAlign: 'left',
  },
  input: {
    color: 'white',
    paddingVertical: 0,
    outline: 'none',
    borderBottomWidth: 2,
    marginLeft: 5,
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: 'white',
    padding: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  textBtn: {
    color: 'white',
    fontSize: 12,
  },
});

export default LoginTemplate;
