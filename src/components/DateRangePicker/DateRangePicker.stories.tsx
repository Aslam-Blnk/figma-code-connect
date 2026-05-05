import type { Meta, StoryObj } from '@storybook/react-vite'
import moment from 'moment'
import { fn } from 'storybook/test'

import { DateRangePicker } from '@/components/DateRangePicker'

const meta = {
  title: 'Design System/Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      description: 'The id of the input element',
    },
    rangeStartDate: {
      control: {
        disable: true,
      },
      description: 'The moment object of the start date',
    },
    rangeEndDate: {
      control: {
        disable: true,
      },
      description: 'The moment object of the end date',
    },
    onChange: {
      control: {
        disable: true,
      },
      description:
        'The function that will be called when the date range changes',
    },
    ranges: {
      control: {
        disable: true,
      },
      description: 'Custom date ranges to be displayed in the picker',
    },
    maxSpan: {
      control: {
        disable: true,
      },
      description:
        'The maximum span between the start and end dates that can be selected',
    },
    minDate: {
      control: {
        disable: true,
      },
      description: 'The minimum date that can be selected.',
    },
  },
  args: {
    onChange: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof DateRangePicker>

export const DefaultDateRangePicker: Story = {
  args: {
    id: 'default-date-range-picker',
  },
}

export const DateRangePickerWithCustomInitialRange: Story = {
  args: {
    id: 'date-range-picker-with-custom-initial-range',
    rangeStartDate: moment().startOf('month').startOf('day'),
    rangeEndDate: moment().endOf('day'),
  },
}

export const DateRangePickerWithCustomRanges: Story = {
  args: {
    id: 'date-range-picker-with-custom-ranges',
    ranges: {
      'Last 3 Days': [
        moment().subtract(2, 'days').startOf('day'),
        moment().endOf('day'),
      ],
      'Last 2 Weeks': [
        moment().subtract(13, 'days').startOf('day'),
        moment().endOf('day'),
      ],
      'Current Quarter': [
        moment().startOf('quarter').startOf('day'),
        moment().endOf('day'),
      ],
      'Last Quarter': [
        moment().subtract(1, 'quarter').startOf('quarter').startOf('day'),
        moment().subtract(1, 'quarter').endOf('quarter').endOf('day'),
      ],
      'Current Year': [
        moment().startOf('year').startOf('day'),
        moment().endOf('day'),
      ],
    },
    rangeStartDate: moment().subtract(2, 'days').startOf('day'),
    rangeEndDate: moment().endOf('day'),
  },
}

export const DateRangePickerWithMaxSpan: Story = {
  args: {
    id: 'date-range-picker-with-custom-initial-range',
    ranges: {
      'Last 1 Hour': [
        moment().subtract(1, 'hours').startOf('hour'),
        moment().endOf('hour'),
      ],
      'Last 6 Hours': [
        moment().subtract(6, 'hours').startOf('hour'),
        moment().endOf('hour'),
      ],
      'Last 12 Hours': [
        moment().subtract(12, 'hours').startOf('hour'),
        moment().endOf('hour'),
      ],
      'Last 24 Hours': [
        moment().subtract(24, 'hours').startOf('hour'),
        moment().endOf('hour'),
      ],
    },
    rangeStartDate: moment().subtract(1, 'hours').startOf('hour'),
    rangeEndDate: moment().endOf('hour'),
    maxSpan: {
      days: 7,
    },
  },
}
