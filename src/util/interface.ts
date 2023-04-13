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
  path: any;
  w: number;
  h: number;
  onPress?: () => void;
}
