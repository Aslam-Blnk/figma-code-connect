const checkedStyles = (theme) => ({
  borderStyle: 'none',
  backgroundColor: theme('backgroundColor.brand-intense'),
})

const invalidCheckedStyles = (theme) => ({
  borderStyle: 'none',
  backgroundColor: theme('backgroundColor.negative-intense'),
})

module.exports = (theme) => ({
  '.checkbox': {
    display: 'flex',
    height: '1.25rem',
    minHeight: '1.25rem',
    width: '1.25rem',
    minWidth: '1.25rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.25rem',
    padding: '0.125rem',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:focus-visible': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
      outlineOffset: '0px',
    },
    '&[data-state="checked"] .checkbox-indicator, &[data-state="indeterminate"] .checkbox-indicator':
      checkedStyles(theme),
    '&:invalid[data-state="checked"] .checkbox-indicator':
      invalidCheckedStyles(theme),
    '&[aria-invalid="true"][data-state="checked"] .checkbox-indicator':
      invalidCheckedStyles(theme),
    '&:invalid[data-state="indeterminate"] .checkbox-indicator':
      invalidCheckedStyles(theme),
    '&[aria-invalid="true"][data-state="indeterminate"] .checkbox-indicator':
      invalidCheckedStyles(theme),
    '&[data-state="unchecked"] .checkbox-indicator': {
      borderColor: theme('borderColor.bold'),
      backgroundColor: theme('backgroundColor.default'),
    },
    '&[data-state="unchecked"] .checkbox-indicator svg, &[data-state="unchecked"] .checkbox-indicator .mui-icon':
      {
        display: 'none',
      },
    '&:invalid .checkbox-indicator, &[aria-invalid="true"] .checkbox-indicator':
      {
        borderColor: theme('borderColor.negative-bold'),
      },
    '&[data-disabled]': {
      cursor: 'not-allowed',
    },
    '&[data-disabled] .checkbox-indicator': {
      borderColor: theme('borderColor.interactive.disabled'),
      backgroundColor: theme('backgroundColor.interactive.disabled'),
    },
    '&[data-disabled][data-state="checked"] .checkbox-indicator, &[data-disabled][data-state="indeterminate"] .checkbox-indicator':
      {
        backgroundColor: theme('backgroundColor.interactive.brand-disabled'),
      },
  },
  '.checkbox-indicator': {
    display: 'flex',
    height: '1rem',
    minHeight: '1rem',
    width: '1rem',
    minWidth: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.25rem',
    border: `1px solid ${theme('borderColor.bold')}`,
    backgroundColor: theme('backgroundColor.default'),
    '& svg, & .mui-icon': {
      height: '0.75rem',
      minHeight: '0.75rem',
      width: '0.75rem',
      minWidth: '0.75rem',
      fontSize: '0.75rem',
      color: theme('colors.white'),
    },
  },
})
