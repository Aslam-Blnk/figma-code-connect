import type { Meta, StoryObj } from '@storybook/react-vite'

import PaymentTerminals from './PaymentTerminals'

const meta = {
  title: 'Pages/Payment Terminals',
  component: PaymentTerminals,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PaymentTerminals>

export default meta
type Story = StoryObj<typeof PaymentTerminals>

export const List: Story = {}
