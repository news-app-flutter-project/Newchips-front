import {GestureResponderEvent} from 'react-native';

export interface ITextBtn {
  text: string;
  weight?:
    | '500'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface IIcon {
  name: string;
  type: string;
  color?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
}
