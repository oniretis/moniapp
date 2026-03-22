import { TextStyle } from 'react-native';
import {
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
  LetterSpacing,
  fontSizes,
  lineHeights,
  letterSpacings,
  typographyScale
} from '../../typography/fonts';
import { TypographyVariant, TypographyScale } from './types';

// Memoization cache for computed values
const styleCache = new Map<string, TextStyle>();

// Font family mapping for Satoshi fonts
const SANS_FAMILY_MAP: Record<string, Record<string, string>> = {
  'Satoshi': {
    '300': 'Satoshi-Light',
    '400': 'Satoshi-Regular',
    '500': 'Satoshi-Medium',
    '700': 'Satoshi-Bold',
    '900': 'Satoshi-Black'
  }
};

// Helper to convert CSS rem to pixels
export const remToPx = (remValue: string): number => {
  const match = remValue.match(/(\d*\.?\d+)rem/);
  return match ? parseFloat(match[1]) * 16 : parseFloat(remValue) || 16;
};

// Helper to convert CSS em to number (relative to font size)
export const emToNumber = (emValue: string): number => {
  const match = emValue.match(/(-?\d*\.?\d+)em/);
  return match ? parseFloat(match[1]) : parseFloat(emValue) || 0;
};

// Resolve font size with fallback
export const resolveFontSize = (
  fontSize?: FontSize | number,
  typographyStyles?: any
): number => {
  if (typeof fontSize === 'number') {
    return fontSize > 0 ? fontSize : 16;
  }

  const fontSizeKey = fontSize || typographyStyles?.fontSize;
  if (fontSizeKey && fontSizes[fontSizeKey as FontSize]) {
    return remToPx(fontSizes[fontSizeKey as FontSize]);
  }

  return 16;
};

// Resolve line height with proper ratio handling
export const resolveLineHeight = (
  lineHeight?: LineHeight | number,
  fontSize: number = 16,
  typographyStyles?: any
): number => {
  if (typeof lineHeight === 'number') {
    return lineHeight <= 3 ? lineHeight * fontSize : lineHeight;
  }

  const lineHeightKey = lineHeight || typographyStyles?.lineHeight;
  if (lineHeightKey && lineHeights[lineHeightKey as LineHeight]) {
    const ratio = parseFloat(lineHeights[lineHeightKey as LineHeight]);
    return ratio * fontSize;
  }

  return 1.5 * fontSize;
};

// Resolve letter spacing
export const resolveLetterSpacing = (
  letterSpacing?: LetterSpacing | number,
  typographyStyles?: any
): number => {
  if (typeof letterSpacing === 'number') {
    return letterSpacing;
  }

  const letterSpacingKey = letterSpacing || typographyStyles?.letterSpacing;
  if (letterSpacingKey && letterSpacings[letterSpacingKey as LetterSpacing]) {
    return emToNumber(letterSpacings[letterSpacingKey as LetterSpacing]);
  }

  return 0.025;
};

// Get typography styles for variant/scale combination
export const getTypographyStyles = (
  variant?: TypographyVariant,
  scale?: TypographyScale
): any => {
  if (!variant || !scale) return null;

  const variantScale = typographyScale[variant as keyof typeof typographyScale];
  return variantScale?.[scale as keyof typeof variantScale] || null;
};

// Resolve font family with proper italic handling
export const resolveFontFamily = (
  fontFamily?: FontFamily,
  fontWeight?: FontWeight,
  italic?: boolean,
  typographyStyles?: any
): string => {
  const family = fontFamily || 'Satoshi';
  const weight = (fontWeight || typographyStyles?.fontWeight || 400) as string;

  if (family === 'Satoshi') {
    const baseFont = SANS_FAMILY_MAP.Satoshi[weight] || 'Satoshi-Regular';
    return italic && weight === '400' ? 'Satoshi-RegularItalic' :
      italic && weight === '500' ? 'Satoshi-MediumItalic' :
        italic && weight === '700' ? 'Satoshi-BoldItalic' :
          italic && weight === '900' ? 'Satoshi-BlackItalic' :
            baseFont;
  }

  return family;
};

// Generate cache key for style memoization
export const generateStyleCacheKey = (
  variant?: TypographyVariant,
  scale?: TypographyScale,
  fontFamily?: FontFamily,
  fontWeight?: FontWeight,
  fontSize?: FontSize | number,
  lineHeight?: LineHeight | number,
  letterSpacing?: LetterSpacing | number,
  textAlign?: string,
  color?: string,
  italic?: boolean,
  underline?: boolean,
  uppercase?: boolean
): string => {
  return JSON.stringify({
    variant, scale, fontFamily, fontWeight, fontSize,
    lineHeight, letterSpacing, textAlign, color, italic, underline, uppercase
  });
};

// Clear style cache (useful for testing or theme changes)
export const clearStyleCache = (): void => {
  styleCache.clear();
};

// Export the style cache for advanced usage
export { styleCache };
