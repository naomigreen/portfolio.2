import store from 'store';
import { darkIcon, lightIcon, coolIcon } from '../../assets/images';

export type ThemeType = typeof dark;

// TODO chart palette
// add href color
export const dark = {
  primary: '#0d344fd6',
  secondary: '#08263a',
  buttons: '#8ec6e5',
  hover: '#133B5C',
  underline: '#329cb8',
  companyLogo: '#1E5F74',
  text: '#8ec6e5;',
  hoverText: '#0d344fd6',
  input: '#133B5C',
  placeholder: '#849bab',
  border: '#2a6591',
  error: '#be4545',
  link: '#00e7ef',
};

export const light = {
  primary: '#d6e6f2e3',
  secondary: '#D6E6F2',
  buttons: '#B9D7EA',
  hover: '#769FCD',
  underline: '#0F4C75',
  companyLogo: '#1E5F74',
  text: '#0F4C75',
  hoverText: '#000',
  input: '#fff',
  placeholder: '#849bab',
  border: '#2a6591',
  error: '#ad2525',
  link: '#0052c5',
};

// TODO fix transparency 0_o
export const cool = {
  primary: '#1380b099',
  secondary: '#0e5d82',
  buttons: '#58f8fd',
  hover: '#58f8fd',
  underline: '#2daee4',
  companyLogo: '#1E5F74',
  text: '#58f8fd',
  hoverText: '#000',
  input: '#15506f',
  placeholder: '#769FCD',
  border: '#2a6591',
  error: '#f99292',
  link: '#27b1ff',
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
