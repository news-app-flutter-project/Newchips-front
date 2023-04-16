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
  onPress?: () => void;
}

export interface IScrollView {
  children: React.ReactNode;

  gapHorizental?: number;
  gapVertical?: number;
}
