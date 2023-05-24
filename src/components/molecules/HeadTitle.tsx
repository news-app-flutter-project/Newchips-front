import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { IHeaderTitle } from '@util/interface';
import FlexViewComponent from '@components/atoms/FlexViewComponent';
import TouchableIcon from '@components/atoms/TouchableIcon';

function HeadTitle(props: IHeaderTitle): JSX.Element {
    return (
        <FlexViewComponent flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text style={buttonText(props).titleText}>{props.title}</Text>
            <Pressable onPress={props.onPress}>
                <FlexViewComponent flexDirection="row" alignItems="center" h={28}>
                    <Text style={buttonText(props).buttonText}>더보기</Text>
                    <TouchableIcon
                        color="#E25C28"
                        size={props.size ? props.size : 24}
                        type="Entypo"
                        name="chevron-right"
                        onPress={props.onPress}
                    />
                </FlexViewComponent>
            </Pressable>
        </FlexViewComponent>
    );
}

const buttonText = (props: IHeaderTitle) =>
    StyleSheet.create({
        titleText: {
            fontSize: props.size ? props.size : 16,
            fontWeight: '500',
            color: props.color ? props.color : 'black',
        },
        buttonText: {
            fontSize: props.size ? props.size : 14,
            fontWeight: '400',
            color: '#E25C28',
            marginRight: 10,
        },
    });

export default HeadTitle;
