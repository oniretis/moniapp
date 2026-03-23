import React, { useMemo } from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import {
  TextComponentProps,
  resolveColor
} from './types';
import {
  getTypographyStyles,
  resolveFontSize,
  resolveLineHeight,
  resolveLetterSpacing,
  resolveFontFamily,
  generateStyleCacheKey,
  styleCache
} from './utils';

export const TextComponent: React.FC<TextComponentProps> = ({
  variant,
  scale,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  textAlign,
  color,
  italic,
  underline,
  uppercase,
  className = '',
  style,
  children,
  ...props
}) => {
  const typographyStyles = useMemo(() =>
    getTypographyStyles(variant, scale),
    [variant, scale]
  );

  const combinedStyle = useMemo((): TextStyle => {
    const cacheKey = generateStyleCacheKey(
      variant, scale, fontFamily, fontWeight, fontSize,
      lineHeight, letterSpacing, textAlign, color, italic, underline, uppercase
    );

    // Check cache first
    if (styleCache.has(cacheKey)) {
      return { ...styleCache.get(cacheKey), ...style };
    }

    const fontSizeValue = resolveFontSize(fontSize, typographyStyles);

    const computedStyle: TextStyle = {
      fontFamily: resolveFontFamily(fontFamily, fontWeight, italic, typographyStyles),
      fontWeight: fontWeight || typographyStyles?.fontWeight || '400',
      fontSize: fontSizeValue,
      lineHeight: resolveLineHeight(lineHeight, fontSizeValue, typographyStyles),
      letterSpacing: resolveLetterSpacing(letterSpacing, fontSizeValue, typographyStyles),
      textAlign: textAlign || 'auto',
      color: resolveColor(color),
      fontStyle: italic ? 'italic' : 'normal',
      textDecorationLine: underline ? 'underline' : 'none',
      textTransform: uppercase ? 'uppercase' : 'none',
    };

    // Cache the computed style (without user-provided style)
    styleCache.set(cacheKey, computedStyle);

    return { ...computedStyle, ...style };
  }, [
    variant, scale, fontFamily, fontWeight, fontSize, lineHeight, letterSpacing,
    textAlign, color, italic, underline, uppercase, style, typographyStyles
  ]);

  const tailwindClasses = useMemo(() => {
    const classes = [];

    if (variant && scale) {
      classes.push(`text-${scale}`);
    }

    if (typographyStyles?.fontWeight) {
      const fontWeightMap: Record<number, string> = {
        300: 'light',
        400: 'normal',
        500: 'medium',
        700: 'bold',
        900: 'black'
      };
      const mappedToken = fontWeightMap[typographyStyles.fontWeight] || 'normal';
      classes.push(`font-${mappedToken}`);
    }

    if (typographyStyles?.lineHeight) {
      classes.push(`leading-${typographyStyles.lineHeight}`);
    }

    if (typographyStyles?.letterSpacing) {
      classes.push(`tracking-${typographyStyles.letterSpacing}`);
    }

    if (italic) classes.push('italic');
    if (underline) classes.push('underline');
    if (uppercase) classes.push('uppercase');
    if (textAlign) classes.push(`text-${textAlign}`);

    return classes.join(' ');
  }, [variant, scale, typographyStyles, italic, underline, uppercase, textAlign]);

  return (
    <RNText
      className={`${tailwindClasses} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </RNText>
  );
};

