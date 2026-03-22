import { TextStyle, TextProps as RNTextProps } from 'react-native';
import {
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
  LetterSpacing
} from '../../typography/fonts';
import { colors } from '../../colors/theme';

export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

export type TypographyVariant = 'display' | 'heading' | 'subheading' | 'paragraph' | 'label';

export type DisplayScale = 'display1' | 'display2' | 'display3';
export type HeadingScale = 'heading1' | 'heading2' | 'heading3' | 'heading4';
export type SubheadingScale = 'subheading1' | 'subheading2';
export type ParagraphScale = 'paragraph1' | 'paragraph2';
export type LabelScale = 'label1' | 'label2';

export type TypographyScale =
  | DisplayScale
  | HeadingScale
  | SubheadingScale
  | ParagraphScale
  | LabelScale;

export type ColorKey = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;

export type ColorValue = `${ColorKey}-${ColorShade}` | 'inherit' | 'transparent' | 'current' | 'black' | 'white';

// Helper function to resolve color values
export const resolveColor = (colorValue?: ColorValue | string): string | undefined => {
  if (!colorValue) return undefined;

  // Handle CSS color keywords
  if (colorValue === 'inherit' || colorValue === 'transparent' ||
    colorValue === 'current' || colorValue === 'black' || colorValue === 'white') {
    return colorValue;
  }

  // Handle design system colors (e.g., "primary-500")
  if (typeof colorValue === 'string') {
    const [colorKey, shade] = colorValue.split('-');
    const colorGroup = colors[colorKey as ColorKey];
    if (colorGroup && shade) {
      return (colorGroup as any)[shade];
    }
  }

  // Fallback for any other string
  return colorValue;
};

export interface TypographyProps {
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fontSize?: FontSize | number;
  lineHeight?: LineHeight | number;
  letterSpacing?: LetterSpacing | number;
  textAlign?: TextAlign;
  color?: ColorValue | string;
  italic?: boolean;
  underline?: boolean;
  uppercase?: boolean;
}

export interface TextComponentProps extends RNTextProps, TypographyProps {
  variant?: TypographyVariant;
  scale?: TypographyScale;
  className?: string;
  style?: TextStyle;
}
