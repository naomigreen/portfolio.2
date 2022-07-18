import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { themes } from '../src/utils/theme/theme';

const { dark, light, cool } = themes;
const themingDecorator = withThemes(ThemeProvider, [dark, light, cool]);

addDecorator(themingDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
