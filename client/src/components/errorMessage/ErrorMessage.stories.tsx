import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />

export const Default = Template.bind({});

export const CustomError = Template.bind({});
CustomError.args = {
  errorMessage: 'Custom error message'
}
