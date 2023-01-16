import Button from '@ds-365fitpro/react/src/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Ds-365fitpro/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
