module.exports = ({
  theme,
  textContentStyles,
  textNumberSMStyles,
  textContentLabelLightStyles,
}) => ({
  '.daterangepicker': {
    position: 'absolute',
    color: 'inherit',
    backgroundColor: theme('backgroundColor.default'),
    borderRadius: '1rem',
    width: '278px',
    maxWidth: 'none',
    padding: '0',
    marginTop: '0.625rem',
    zIndex: 3001,
    display: 'none',
    boxShadow: theme('boxShadow.hard-sm'),
  },
  '.daterangepicker.drop-up': {
    marginTop: '-0.625rem',
  },
  '.daterangepicker.single .daterangepicker .ranges, .daterangepicker.single .drp-calendar':
    {
      float: 'none',
    },
  '.daterangepicker.single .drp-selected': {
    display: 'none',
  },
  '.daterangepicker.show-calendar .drp-calendar': {
    display: 'block',
  },
  '.daterangepicker.show-calendar .drp-buttons': {
    display: 'block',
  },
  '.daterangepicker.auto-apply .drp-buttons': {
    display: 'none',
  },
  '.daterangepicker .drp-calendar': {
    display: 'none',
    maxWidth: '270px',
  },
  '.daterangepicker .drp-calendar.left': {
    padding: '0.5rem 0 0.5rem 0.5rem',
  },
  '.daterangepicker .drp-calendar.right': {
    padding: '0.5rem',
  },
  '.daterangepicker .calendar-table .next span, .daterangepicker .calendar-table .prev span':
    {
      color: theme('textColor.onIntense'),
      border: `solid ${theme('colors.icon.subtle')}`,
      borderWidth: '0 2px 2px 0',
      borderRadius: '0',
      display: 'inline-block',
      padding: '3px',
    },
  '.daterangepicker .calendar-table .next span': {
    transform: 'rotate(-45deg)',
    '-webkit-transform': 'rotate(-45deg)',
  },
  '.daterangepicker .calendar-table .prev span': {
    transform: 'rotate(135deg)',
    '-webkit-transform': 'rotate(135deg)',
  },
  '.daterangepicker .calendar-table thead tr': {
    border: 'none',
  },
  '.daterangepicker .calendar-table th, .daterangepicker .calendar-table td': {
    whiteSpace: 'nowrap',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    padding: '0',
  },
  '.daterangepicker .calendar-table td': {
    borderRadius: '0.25rem',
    border: '2px solid transparent',
    ...textNumberSMStyles(theme),
    height: '2rem',
    width: '2rem',
  },
  '.daterangepicker .calendar-table th': {
    height: '2rem',
    ...textContentLabelLightStyles(theme),
    color: theme('textColor.subtler'),
  },
  '.daterangepicker .calendar-table': {
    border: 'none',
    backgroundColor: theme('backgroundColor.default'),
  },
  '.daterangepicker .calendar-table table': {
    width: '100%',
    margin: '0',
    borderSpacing: '0',
    borderCollapse: 'collapse',
  },
  '.daterangepicker td.available, .daterangepicker th.available': {
    '&:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
      borderColor: 'transparent',
      color: 'inherit',
    },
    '&:focus-visible': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
      outlineOffset: '0px',
    },
  },
  '.daterangepicker td.week, .daterangepicker th.week': {
    fontSize: '80%',
    color: '#ccc',
  },
  '.daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date':
    {
      backgroundColor: theme('backgroundColor.default'),
      borderColor: 'transparent',
      color: theme('textColor.interactive.disabled'),
    },
  '.daterangepicker td.in-range': {
    backgroundColor: theme('backgroundColor.brand.DEFAULT'),
    borderColor: 'transparent',
    color: theme('textColor.subtle'),
    borderRadius: '0',
  },
  '.daterangepicker td.start-date': {
    borderRadius: '0.25rem 0 0 0.25rem',
  },
  '.daterangepicker td.end-date': {
    borderRadius: '0 0.25rem 0.25rem 0',
  },
  '.daterangepicker td.start-date.end-date': {
    borderRadius: '0.25rem',
  },
  '.daterangepicker td.active, .daterangepicker td.active:hover': {
    backgroundColor: theme('backgroundColor.interactive.brand-highlighted'),
    borderColor: 'transparent',
    color: theme('textColor.onIntense'),
  },
  '.daterangepicker th.month': {
    width: 'auto',
  },
  '.daterangepicker td.disabled, .daterangepicker option.disabled': {
    color: theme('textColor.interactive.disabled'),
    cursor: 'not-allowed',
    textDecoration: 'line-through',
  },
  '.daterangepicker select.monthselect, .daterangepicker select.yearselect': {
    fontSize: '12px',
    padding: '1px',
    height: 'auto',
    margin: '0',
    cursor: 'default',
  },
  '.daterangepicker select.monthselect': {
    marginRight: '2%',
    width: '56%',
  },
  '.daterangepicker select.yearselect': {
    width: '40%',
  },
  '.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect':
    {
      width: '50px',
      margin: '0 auto',
      background: theme('backgroundColor.default'),
      border: `1px solid ${theme('borderColor.default')}`,
      padding: '0.25rem 0.5rem 0.25rem 0.25rem',
      outline: '0',
      borderRadius: '0.5rem',
      color: theme('textColor.subtle'),
      ...textNumberSMStyles(theme),
      '&:focus-visible': {
        outline: `2px solid ${theme('outlineColor.focus-ring')}`,
        outlineOffset: '0px',
      },
    },
  '.daterangepicker .calendar-time': {
    textAlign: 'center',
    margin: '0.25rem auto 0 auto',
    position: 'relative',
  },
  '.daterangepicker .calendar-time select.disabled': {
    color: theme('textColor.interactive.disabled'),
    cursor: 'not-allowed',
  },
  '.daterangepicker .drp-buttons': {
    clear: 'both',
    textAlign: 'right',
    padding: '0.625rem',
    borderTop: `1px solid ${theme('borderColor.default')}`,
    display: 'none',
    verticalAlign: 'middle',
  },
  '.daterangepicker .drp-buttons .btn': {
    marginLeft: '1rem',
  },
  '.daterangepicker .drp-selected': {
    display: 'inline-block',
    ...textContentStyles(theme),
  },
  '.daterangepicker.show-ranges.single.rtl .drp-calendar.left': {
    borderRight: `1px solid ${theme('borderColor.default')}`,
  },
  '.daterangepicker.show-ranges.single.ltr .drp-calendar.left': {
    borderLeft: `1px solid ${theme('borderColor.default')}`,
  },
  '.daterangepicker.show-ranges.rtl .drp-calendar.right': {
    borderRight: `1px solid ${theme('borderColor.default')}`,
  },
  '.daterangepicker.show-ranges.ltr .drp-calendar.left': {
    borderLeft: `1px solid ${theme('borderColor.default')}`,
  },
  '.daterangepicker .ranges': {
    float: 'none',
    textAlign: 'left',
    margin: '0',
    padding: '0.375rem 0',
  },
  '.daterangepicker.show-calendar .ranges': {
    padding: '0.5rem 0',
    marginRight: '-1px',
    borderRight: `1px solid ${theme('borderColor.default')}`,
  },
  '.daterangepicker .ranges ul': {
    listStyle: 'none',
    margin: '0 auto',
    padding: '0',
    width: '100%',
    maxWidth: '12.5rem',
  },
  '.daterangepicker .ranges li': {
    ...textContentStyles(theme),
    color: theme('textColor.subtle'),
    fontSize: '12px',
    padding: '0.5rem',
    margin: '0.125rem 0.5rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
  },
  '.daterangepicker .ranges li[data-range-key]': {
    '&:focus-visible': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
      outlineOffset: '0px',
    },
  },
  '.daterangepicker .ranges li:hover': {
    backgroundColor: theme('backgroundColor.interactive.activated'),
  },
  '.daterangepicker .ranges li.active': {
    backgroundColor: theme('backgroundColor.interactive.activated'),
  },
  [`@media (min-width: 564px)`]: {
    '.daterangepicker': {
      width: 'auto',
      direction: 'ltr',
      textAlign: 'left',
    },
    '.daterangepicker .ranges ul': {
      width: '140px',
    },
    '.daterangepicker.single .ranges ul': {
      width: '100%',
    },
    '.daterangepicker.single .drp-calendar.left': {
      clear: 'none',
    },
    '.daterangepicker.single .ranges, .daterangepicker.single .drp-calendar': {
      float: 'left',
    },
    '.daterangepicker .drp-calendar.left': {
      clear: 'left',
      marginRight: '0',
    },
    '.daterangepicker .drp-calendar.left .calendar-table': {
      borderRight: 'none',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      paddingRight: '8px',
    },
    '.daterangepicker .drp-calendar.right': {
      marginLeft: '0',
    },
    '.daterangepicker .drp-calendar.right .calendar-table': {
      borderLeft: 'none',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    '.daterangepicker .ranges, .daterangepicker .drp-calendar': {
      float: 'left',
    },
  },
  [`@media (min-width: 730px)`]: {
    '.daterangepicker .ranges': {
      width: 'auto',
      float: 'left',
    },
    '.daterangepicker.rtl .ranges': {
      float: 'right',
    },
    '.daterangepicker .drp-calendar.left': {
      clear: 'none !important',
    },
  },
})
