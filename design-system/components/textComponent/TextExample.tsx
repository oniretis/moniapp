import React from 'react';
import { View } from 'react-native';
import { TextComponent } from './index';

export const TextExample: React.FC = () => {
  return (
    <View className="flex-1 p-4 space-y-6">
      {/* Display Text Examples */}
      <View className="space-y-2">
        <TextComponent
          variant="display"
          scale="display1"
          className="text-primary-600"
        >
          Display 1 - 48px Black
        </TextComponent>
        <TextComponent
          variant="display"
          scale="display2"
          className="text-primary-600"
        >
          Display 2 - 56px Black
        </TextComponent>
        <TextComponent
          variant="display"
          scale="display3"
          className="text-primary-600"
        >
          Display 3 - 48px Black
        </TextComponent>
      </View>

      {/* Heading Text Examples */}
      <View className="space-y-2">
        <TextComponent
          variant="heading"
          scale="heading1"
          className="text-neutral-800"
        >
          Heading 1 - 40px Bold
        </TextComponent>
        <TextComponent
          variant="heading"
          scale="heading2"
          className="text-neutral-700"
        >
          Heading 2 - 32px Bold
        </TextComponent>
        <TextComponent
          variant="heading"
          scale="heading3"
          className="text-neutral-600"
        >
          Heading 3 - 28px Bold
        </TextComponent>
        <TextComponent
          variant="heading"
          scale="heading4"
          className="text-neutral-600"
        >
          Heading 4 - 24px Bold
        </TextComponent>
      </View>

      {/* Subheading Text Examples */}
      <View className="space-y-2">
        <TextComponent
          variant="subheading"
          scale="subheading1"
          className="text-neutral-600"
        >
          Subheading 1 - 20px Bold
        </TextComponent>
        <TextComponent
          variant="subheading"
          scale="subheading2"
          className="text-neutral-600"
        >
          Subheading 2 - 18px Bold
        </TextComponent>
      </View>

      {/* Paragraph Text Examples */}
      <View className="space-y-2">
        <TextComponent
          variant="paragraph"
          scale="paragraph1"
          className="text-neutral-700"
        >
          Paragraph 1 - 16px Regular. This is the standard body text for longer content.
        </TextComponent>
        <TextComponent
          variant="paragraph"
          scale="paragraph2"
          className="text-neutral-600"
        >
          Paragraph 2 - 14px Regular. Smaller text for secondary information.
        </TextComponent>
      </View>

      {/* Label Text Examples */}
      <View className="space-y-2">
        <TextComponent
          variant="label"
          scale="label1"
          className="text-neutral-600"
        >
          Label 1 - 12px Regular
        </TextComponent>
        <TextComponent
          variant="label"
          scale="label2"
          className="text-neutral-500"
        >
          Label 2 - 10px Regular
        </TextComponent>
      </View>

      {/* Custom Styling Examples */}
      <View className="space-y-4">
        <TextComponent
          variant="heading"
          scale="heading1"
          fontSize={32}
          fontWeight={500}
          lineHeight={1.625}
          letterSpacing={0.025}
          textAlign="center"
          color="#6366f1"
          italic
          className="underline"
        >
          Custom styled text with medium weight, relaxed line height, wide letter spacing, center alignment, italic, and underline
        </TextComponent>

        <TextComponent
          fontSize="paragraph1"
          fontWeight={700}
          lineHeight={1.8}
          letterSpacing={0.05}
          textAlign="justify"
          color="#ef4444"
          uppercase
        >
          Custom paragraph with bold weight, custom line height, custom letter spacing, justify alignment, red color, and uppercase
        </TextComponent>

        <TextComponent
          fontFamily="SF Mono"
          fontSize={14}
          fontWeight={400}
          lineHeight={1.25}
          letterSpacing={0}
          textAlign="left"
          color="#059669"
        >
          Monospace text with tight line height and green color
        </TextComponent>
      </View>
    </View>
  );
};
