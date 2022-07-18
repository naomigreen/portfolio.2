import store from 'store';
import { darkIcon, lightIcon, coolIcon } from '../../assets/images';

export type ThemeType = typeof dark;

// TODO chart palette
// add href color
export const dark = {
  primary: '#0d344fd6',
  secondary: '#08263a',
  navColor: '#08263a',
  buttons: '#8ec6e5',
  hover: '#133B5C',
  underline: '#8ec6e5',
  companyLogo: '#1E5F74',
  text: '#8ec6e5',
  navText: '#8ec6e5',
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
  navColor: '#D6E6F2',
  buttons: '#B9D7EA',
  hover: '#769FCD',
  underline: '#0F4C75',
  companyLogo: '#1E5F74',
  text: '#0F4C75',
  navText: '#0F4C75',
  hoverText: '#000',
  input: '#fff',
  placeholder: '#849bab',
  border: '#2a6591',
  error: '#ad2525',
  link: '#0052c5',
};

export const cool = {
  primary: '#0000',
  secondary:
    'linear-gradient(0deg,rgb(17 120 117 / 78%) 0%,rgba(43,106,152,0.8239670868347339) 35%,rgba(101,17,75,0.8436029411764706) 100%)',
  navColor: 'linear-gradient(0deg, rgba(101,17,75,1) 0%, rgba(33,11,57,0.9136029411764706) 100%)',
  buttons: '#1cc6c1',
  hover: '#dfddfc8a23b0',
  underline: '#1cc6c1',
  companyLogo: '#1E5F74',
  text: '#f5faff',
  navText: '#1cc6c1',
  hoverText: '#000',
  input: '#2d7488',
  placeholder: '#1cc6c1',
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
