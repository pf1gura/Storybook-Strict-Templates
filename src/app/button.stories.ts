import { Story, Meta } from '@storybook/angular';
import Button from './button.component';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
