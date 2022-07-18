import { ComponentStory, ComponentMeta } from '@storybook/react';
import Content from './Content';

export default {
  title: 'Components/Content',
  component: Content,
} as ComponentMeta<typeof Content>;

const childComponent = () => <h1>Context component</h1>

const Template: ComponentStory<typeof Content> = (args) => (<Content {...args}><h1>Context component</h1></Content>)

export const Default = Template.bind({});
Default.args = {
  children: childComponent
};
