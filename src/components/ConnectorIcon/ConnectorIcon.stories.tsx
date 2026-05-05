import type { Meta, StoryObj } from '@storybook/react-vite'

import { ConnectorIcon } from '@/components/ConnectorIcon'

const meta = {
  title: 'Design System/Components/ConnectorIcon',
  component: ConnectorIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    connectorType: {
      control: {
        type: 'select',
      },
      options: [
        'CHADEMO',
        'CHAOJI',
        'DOMESTIC_A',
        'DOMESTIC_B',
        'DOMESTIC_C',
        'DOMESTIC_D',
        'DOMESTIC_E',
        'DOMESTIC_F',
        'DOMESTIC_G',
        'DOMESTIC_H',
        'DOMESTIC_I',
        'DOMESTIC_J',
        'DOMESTIC_K',
        'DOMESTIC_L',
        'DOMESTIC_M',
        'DOMESTIC_N',
        'DOMESTIC_O',
        'GBT_AC',
        'GBT_DC',
        'IEC_60309_2_single_16',
        'IEC_60309_2_three_16',
        'IEC_60309_2_three_32',
        'IEC_60309_2_three_64',
        'IEC_62196_T1',
        'IEC_62196_T1_COMBO',
        'IEC_62196_T2',
        'IEC_62196_T2_COMBO',
        'IEC_62196_T3A',
        'IEC_62196_T3C',
        'NEMA_5_20',
        'NEMA_6_30',
        'NEMA_6_50',
        'NEMA_10_30',
        'NEMA_10_50',
        'NEMA_14_30',
        'NEMA_14_50',
        'PANTOGRAPH_BOTTOM_UP',
        'PANTOGRAPH_TOP_DOWN',
        'TESLA_R',
        'TESLA_S',
      ],
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'Additional class name for the component',
    },
  },
  args: {
    className: 'w-12 h-12',
  },
} satisfies Meta<typeof ConnectorIcon>

export default meta
type Story = StoryObj<typeof ConnectorIcon>

export const CHADEMO: Story = {
  args: {
    connectorType: 'CHADEMO',
  },
}

export const CHAOJI: Story = {
  args: {
    connectorType: 'CHAOJI',
  },
}

export const DOMESTIC_A: Story = {
  args: {
    connectorType: 'DOMESTIC_A',
  },
}

export const DOMESTIC_B: Story = {
  args: {
    connectorType: 'DOMESTIC_B',
  },
}

export const DOMESTIC_C: Story = {
  args: {
    connectorType: 'DOMESTIC_C',
  },
}

export const DOMESTIC_D: Story = {
  args: {
    connectorType: 'DOMESTIC_D',
  },
}

export const DOMESTIC_E: Story = {
  args: {
    connectorType: 'DOMESTIC_E',
  },
}

export const DOMESTIC_F: Story = {
  args: {
    connectorType: 'DOMESTIC_F',
  },
}

export const DOMESTIC_G: Story = {
  args: {
    connectorType: 'DOMESTIC_G',
  },
}

export const DOMESTIC_H: Story = {
  args: {
    connectorType: 'DOMESTIC_H',
  },
}

export const DOMESTIC_I: Story = {
  args: {
    connectorType: 'DOMESTIC_I',
  },
}

export const DOMESTIC_J: Story = {
  args: {
    connectorType: 'DOMESTIC_J',
  },
}

export const DOMESTIC_K: Story = {
  args: {
    connectorType: 'DOMESTIC_K',
  },
}

export const DOMESTIC_L: Story = {
  args: {
    connectorType: 'DOMESTIC_L',
  },
}

export const DOMESTIC_M: Story = {
  args: {
    connectorType: 'DOMESTIC_M',
  },
}

export const DOMESTIC_N: Story = {
  args: {
    connectorType: 'DOMESTIC_N',
  },
}

export const DOMESTIC_O: Story = {
  args: {
    connectorType: 'DOMESTIC_O',
  },
}

export const GBT_AC: Story = {
  args: {
    connectorType: 'GBT_AC',
  },
}

export const GBT_DC: Story = {
  args: {
    connectorType: 'GBT_DC',
  },
}

export const IEC_60309_2_single_16: Story = {
  args: {
    connectorType: 'IEC_60309_2_single_16',
  },
}

export const IEC_60309_2_three_16: Story = {
  args: {
    connectorType: 'IEC_60309_2_three_16',
  },
}

export const IEC_60309_2_three_32: Story = {
  args: {
    connectorType: 'IEC_60309_2_three_32',
  },
}

export const IEC_60309_2_three_64: Story = {
  args: {
    connectorType: 'IEC_60309_2_three_64',
  },
}

export const IEC_62196_T1: Story = {
  args: {
    connectorType: 'IEC_62196_T1',
  },
}

export const IEC_62196_T1_COMBO: Story = {
  args: {
    connectorType: 'IEC_62196_T1_COMBO',
  },
}

export const IEC_62196_T2: Story = {
  args: {
    connectorType: 'IEC_62196_T2',
  },
}

export const IEC_62196_T2_COMBO: Story = {
  args: {
    connectorType: 'IEC_62196_T2_COMBO',
  },
}

export const IEC_62196_T3A: Story = {
  args: {
    connectorType: 'IEC_62196_T3A',
  },
}

export const IEC_62196_T3C: Story = {
  args: {
    connectorType: 'IEC_62196_T3C',
  },
}

export const NEMA_5_20: Story = {
  args: {
    connectorType: 'NEMA_5_20',
  },
}

export const NEMA_6_30: Story = {
  args: {
    connectorType: 'NEMA_6_30',
  },
}

export const NEMA_6_50: Story = {
  args: {
    connectorType: 'NEMA_6_50',
  },
}

export const NEMA_10_30: Story = {
  args: {
    connectorType: 'NEMA_10_30',
  },
}

export const NEMA_10_50: Story = {
  args: {
    connectorType: 'NEMA_10_50',
  },
}

export const NEMA_14_30: Story = {
  args: {
    connectorType: 'NEMA_14_30',
  },
}

export const NEMA_14_50: Story = {
  args: {
    connectorType: 'NEMA_14_50',
  },
}

export const PANTOGRAPH_BOTTOM_UP: Story = {
  args: {
    connectorType: 'PANTOGRAPH_BOTTOM_UP',
  },
}

export const PANTOGRAPH_TOP_DOWN: Story = {
  args: {
    connectorType: 'PANTOGRAPH_TOP_DOWN',
  },
}

export const TESLA_R: Story = {
  args: {
    connectorType: 'TESLA_R',
  },
}

export const TESLA_S: Story = {
  args: {
    connectorType: 'TESLA_S',
  },
}
