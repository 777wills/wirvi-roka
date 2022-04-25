import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../wirvi-styles.scss';
import { Button } from '@components/index';
import { Icon } from '@stories/icon';

export default {
  title: 'Wirvi-roka/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'Hello Word!',
}

export const TextChildren: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Label Children</Button>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Icon />,
  text: 'Hello Word!'
}

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: <Icon />
}

export const FullScreen = Template.bind({});
FullScreen.args = {
  isFullwidth: true,
  text: 'Full Screen'
}

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  text: 'Disabled'
}

export const WithChildren: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span style={{ marginRight: '10px' }}>Label Children</span>
    <Icon />
  </Button>
);

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
  text: 'Hello Word!'
}