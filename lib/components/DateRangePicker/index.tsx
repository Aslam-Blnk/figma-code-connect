import { useEffect, useRef, useState } from 'react'
import moment from 'moment'

import { cn } from '../../utils'
import { InputRoot } from '../Input'

type DateRangePickerProps = {
  id: string
  rangeStartDate?: moment.Moment
  rangeEndDate?: moment.Moment
  onChange?: (picker: daterangepicker.DateRangePicker) => void
  ranges?: Record<string, [moment.Moment, moment.Moment]>
  maxSpan?: daterangepicker.Options['maxSpan']
  minDate?: daterangepicker.DateOrString
}

function DateRangePicker({ id, onChange, ...props }: DateRangePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [label, setLabel] = useState<string | undefined>('')

  useEffect(() => {
    if (inputRef.current) {
      const { rangeLabelText } = initializeDateRangePicker({
        id: inputRef.current.id,
        ...props,
      })
      setLabel(rangeLabelText)
      $(`#${inputRef.current.id}`).on(
        'apply.daterangepicker',
        function (_, picker) {
          const chosenLabel = picker.chosenLabel
          if (chosenLabel === 'Custom Range') {
            setLabel(
              picker.startDate.format('Do MMM YYYY HH:mm') +
                ' - ' +
                picker.endDate.format('Do MMM YYYY HH:mm')
            )
          } else {
            setLabel(chosenLabel)
          }
          if (onChange) {
            onChange(picker)
          }
        }
      )
    }
  }, [onChange, props])

  return (
    <InputRoot>
      <div className={cn('input-container')}>
        <label className="input-wrapper" htmlFor={id}>
          <span className="text-subtle text-content">{label}</span>
          <input
            ref={inputRef}
            id={id}
            value={label}
            readOnly
            className="!absolute !inset-0 opacity-0"
          />
        </label>
      </div>
    </InputRoot>
  )
}

type UseDateRangePickerProps = {
  id: string
  rangeStartDate?: moment.Moment
  rangeEndDate?: moment.Moment
  ranges?: Record<string, [moment.Moment, moment.Moment]>
  maxSpan?: daterangepicker.Options['maxSpan']
  minDate?: daterangepicker.DateOrString
}

const getDefaultRanges = (): Record<string, [moment.Moment, moment.Moment]> => {
  return {
    Today: [moment().startOf('day'), moment().endOf('day')],
    Yesterday: [
      moment().subtract(1, 'days').startOf('day'),
      moment().subtract(1, 'days').endOf('day'),
    ],
    'Last 7 Days': [
      moment().subtract(6, 'days').startOf('day'),
      moment().endOf('day'),
    ],
    'Last 30 Days': [
      moment().subtract(29, 'days').startOf('day'),
      moment().endOf('day'),
    ],
    'This Month': [
      moment().startOf('month').startOf('day'),
      moment().endOf('day'),
    ],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month').startOf('day'),
      moment().subtract(1, 'month').endOf('month').endOf('day'),
    ],
  }
}

const initializeDateRangePicker = ({
  id,
  rangeStartDate,
  rangeEndDate,
  ranges,
  maxSpan,
  minDate,
}: UseDateRangePickerProps) => {
  const dateRanges: Record<string, [moment.Moment, moment.Moment]> =
    ranges || getDefaultRanges()

  let rangeLabelText = 'Custom Range'

  if (rangeStartDate && rangeEndDate) {
    for (const [rangeLabel, [rangeStart, rangeEnd]] of Object.entries(
      dateRanges
    )) {
      if (rangeStart.isSame(rangeStartDate) && rangeEnd.isSame(rangeEndDate)) {
        rangeLabelText = rangeLabel
        break
      }
    }
  } else {
    // Default Last 7 Days
    rangeStartDate = moment().subtract(6, 'days').startOf('day')
    rangeEndDate = moment().endOf('day')
    rangeLabelText = 'Last 7 Days'
  }
  if (rangeLabelText === 'Custom Range') {
    rangeLabelText =
      rangeStartDate.format('MMM Do YYYY HH:mm') +
      ' - ' +
      rangeEndDate.format('MMM Do YYYY HH:mm')
  }

  const input = $(`#${id}`)

  input.daterangepicker({
    timePicker: true,
    timePicker24Hour: false,
    cancelButtonClasses: 'button-base button-neutral',
    applyButtonClasses: 'button-base button-brand',
    startDate: rangeStartDate,
    endDate: rangeEndDate,
    maxDate: moment().endOf('day'),
    locale: {
      format: 'MM/DD/YYYY HH:mm',
    },
    ranges: dateRanges,
    maxSpan: maxSpan,
    minDate: minDate,
  })
  input.closest('button').on('click', () => {
    input.trigger('click')
  })
  return { rangeStartDate, rangeEndDate, rangeLabelText }
}

// eslint-disable-next-line react-refresh/only-export-components
export { initializeDateRangePicker, DateRangePicker, getDefaultRanges }
