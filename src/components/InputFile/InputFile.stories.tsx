import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputFileComponent } from './InputFile'

const meta = {
  title: 'Design System/Components/InputFile',
  component: InputFileComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxFileSize: {
      control: {
        type: 'number',
      },
      description: 'Maximum file size in bytes',
    },
    multiple: {
      control: {
        type: 'boolean',
      },
      description: 'Allow multiple files',
    },
    inputProps: {
      control: {
        type: 'object',
      },
      description: 'Additional props to pass to the input element',
    },
  },
} satisfies Meta<typeof InputFileComponent>

export default meta
type Story = StoryObj<typeof InputFileComponent>

export const DropzoneWithNoInitialFiles: Story = {}

export const DropzoneWithOnlyOneFileAllowed: Story = {}

export const DropzoneWithMultipleFilesAllowed: Story = {
  args: {
    multiple: true,
  },
}

export const DropzoneWithOnlyImagesAllowed: Story = {
  args: {
    inputProps: {
      accept: 'image/*',
    },
  },
}

export const DropzoneWithMaxFileSize: Story = {
  args: {
    maxFileSize: 1024 * 1024,
    inputProps: {
      accept: 'image/*',
    },
  },
}
