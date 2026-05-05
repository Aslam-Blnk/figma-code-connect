import type { Meta, StoryObj } from '@storybook/react-vite'

import { TooltipProvider } from '@/components/Tooltip'

import { chargerResourceTag } from './charger'
import { driverResourceTag } from './driver'
import { driverGroupResourceTag } from './driver-group'
import { fleetGroupResourceTag } from './fleet'
import { fleetVehicleResourceTag } from './fleet-vehicle'
import { siteResourceTag } from './site'
import { siteHostResourceTag } from './site-host'

const meta = {
  title: 'Design System/Patterns/HoverResourceCard',
  component: TooltipProvider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    delayDuration: 500,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipProvider>

export default meta
type Story = StoryObj<typeof TooltipProvider>

export const DriverHoverResourceCard: Story = {
  args: {
    children: driverResourceTag(),
  },
}

export const SiteHoverResourceCard: Story = {
  args: {
    children: siteResourceTag(),
  },
}

export const ChargerHoverResourceCard: Story = {
  args: {
    children: chargerResourceTag(),
  },
}

export const DriverGroupHoverResourceCard: Story = {
  args: {
    children: driverGroupResourceTag(),
  },
}

export const FleetHoverResourceCard: Story = {
  args: {
    children: fleetGroupResourceTag(),
  },
}

export const SiteHostHoverResourceCard: Story = {
  args: {
    children: siteHostResourceTag(),
  },
}

export const FleetVehicleHoverResourceCard: Story = {
  args: {
    children: fleetVehicleResourceTag('VIN3A5G51DNN66103'),
  },
}
