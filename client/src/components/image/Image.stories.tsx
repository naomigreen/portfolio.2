import { ComponentStory, ComponentMeta } from '@storybook/react';
import { logo } from '../../assets/images';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({});

Default.args = {
  link: 'https://www.naomipgreen.com/',
  image: logo,
  width: '500px'
}
