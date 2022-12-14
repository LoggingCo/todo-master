import Button from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'primary-text'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['default', 'round'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  variant: 'primary',
  children: 'Button Test',
};

export const PrimaryRound = Template.bind({});
PrimaryRound.args = {
  disabled: false,
  variant: 'primary',
  shape: 'round',
  children: 'Button Test',
};

export const Small = Template.bind({});
Small.args = {
  disabled: false,
  size: 'small',
  children: 'Button Test',
};

export const Medium = Template.bind({});
Medium.args = {
  disabled: false,
  size: 'medium',
  children: 'Button Test',
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  size: 'large',
  children: 'Button Test',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  disabled: false,
  size: 'full',
  children: 'Button Test',
};
