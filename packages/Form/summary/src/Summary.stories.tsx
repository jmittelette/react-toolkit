import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Summary from './Summary';
import readme from '../README.md';

export default {
  title: 'Form elements/Summary',
  component: Summary,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    classModifier: {
      control: {
        type: 'select',
        options: ['success', 'info', 'danger', 'error'],
      },
      defaultValue: 'error',
    },
  },
} as Meta;

const messages = ['Field Author is required', 'Field PlaceName is required'];

type SummaryProps = ComponentProps<typeof Summary>;
const Template: Story<SummaryProps> = (args) => <Summary {...args} />;

export const SummaryStory: Story<SummaryProps> = Template.bind({});
SummaryStory.storyName = 'Summary';
SummaryStory.args = {
  messages,
  isVisible: true,
  title: 'Le formulaire invalide',
  className: 'af-alert',
};
