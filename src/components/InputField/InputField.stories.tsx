import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'e.g. tushar',
    helperText: 'Username must be unique.',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your account password',
    helperText: 'Must contain at least 8 characters.',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    defaultValue: 'invalid-email@',
    placeholder: 'yourname@example.com',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'API Key',
    disabled: true,
    value: 'sk_live_51Nz849Bnx83Jsd83...',
    helperText: 'Contact administrator to request modifications.',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search Workspace',
    placeholder: 'Search documentation...',
    leftIcon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
};
