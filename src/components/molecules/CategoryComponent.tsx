import React from 'react';
import {View, ScrollView} from 'react-native';
import {ICategory} from '@util/interface';
import TouchableText from '@components/atoms/TouchableText';

function CategoryComponent(props: ICategory): JSX.Element {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
      <View
        style={{
          marginTop: 16 / 2,
          marginBottom: 16 / 2,
          marginRight: 10 / 2,
          marginLeft: 10 / 2,
        }}>
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
      </View>
    </ScrollView>
  );
}

export default CategoryComponent;
