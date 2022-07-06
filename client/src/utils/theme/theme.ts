import store from 'store';
import { darkIcon, lightIcon, coolIcon } from '../../assets/images';

export type ThemeType = typeof dark;

// TODO chart palette
// add href color
export const dark = {
  primary: '#0d344fd6',
  secondary: '#08263a',
  buttons: '#1E5F74',
  hover: '#133B5C',
  underline: '#329cb8',
  companyLogo: '#1E5F74',
  text: '#8ec6e5;',
};

export const light = {
  primary: '#d6e6f2e3',
  secondary: '#D6E6F2',
  buttons: '#B9D7EA',
  hover: '#769FCD',
  underline: '#0F4C75',
  companyLogo: '#1E5F74',
  text: '#0F4C75',
};

// TODO fix transparency 0_o
export const cool = {
  primary: '#1380b099',
  secondary: '#0e5d82db',
  buttons: '#B25068',
  hover: '#774360',
  underline: '#e6d5ba',
  companyLogo: '#1E5F74',
  text: '#e6d5ba',
};

export const themes = {
  dark,
  light,
  cool,
};

export type themeDataType = {
  icon: string;
  name: keyof typeof themes;
};

export const themeData: themeDataType[] = [
  { icon: darkIcon, name: 'dark' },
  { icon: lightIcon, name: 'light' },
  { icon: coolIcon, name: 'cool' },
];

export const OSTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const savedTheme: keyof typeof themes = store.get('theme')?.value;
