import {FlexAlignType, ViewStyle, TextStyle, ImageStyle} from 'react-native';

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
  bgColor?: string;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  radius?: number;
  onPress?: () => void;
}

export interface IIcon {
  name: string;
  type: string;
  color?: string;
  size?: number;
  onPress?: () => void;
}

export interface IImage {
  path: object;
  w: number;
  h: number;
  flexBasis?: number | 'auto';
  resizeMode?: string;
  onPress?: () => void;
  radius?: number;
}
interface IscrollData {
  url: string;
  title: string;
  category: string;
  time: string;
}
export interface IScrollView {
  scrollData: Array<IscrollData>;
  gapHorizental?: number;
  gapVertical?: number;
}
export interface ICategory {
  gapHorizental?: number;
  gapVertical?: number;
}

export interface IHeaderView {
  title?: string;
}

export interface IFlexView {
  children?: React.ReactNode;
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  position?: 'absolute' | 'relative' | undefined;
  t?: number;
  r?: number;
  w?: string | number;
  h?: string | number;
  ml?: number | undefined;
  mt?: number | undefined;
  mr?: number | undefined;
  mb?: number | undefined;
  gap?: number | undefined;
}

interface ICardData {
  url: string | '';
  title: string;
  source: string;
}
export interface ICardView {
  cardData: Array<ICardData>;
  color?: string;
  size?: number;
  onPress?: () => void;
}
export interface IHeaderTitle {
  title: string;
  color?: string;
  size?: number;
  onPress?: () => void;
}
