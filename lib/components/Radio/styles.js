module.exports = ({ theme, transitionColorsStyles }) => ({
  '.radio-group-item': {
    display: 'flex',
    height: '1.25rem',
    minHeight: '1.25rem',
    width: '1.25rem',
    minWidth: '1.25rem',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: '100%',
    padding: '0.125rem',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:focus-visible': {
      outlineOffset: '0px',
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
    '&[data-state="checked"] .radio-group-item-indicator': {
      borderStyle: 'none',
      backgroundColor: theme('backgroundColor.brand-intense'),
    },
    '&[data-state="unchecked"] .radio-group-item-indicator': {
      backgroundColor: theme('colors.white'),
    },
    '&[data-disabled]': {
      pointerEvents: 'none',
      cursor: 'not-allowed',
    },
    '&[data-disabled] .radio-group-item-indicator': {
      borderColor: theme('borderColor.interactive.disabled'),
      backgroundColor: theme('backgroundColor.interactive.disabled'),
    },
    '&[data-disabled][data-state="unchecked"] .radio-group-item-icon': {
      backgroundColor: theme('backgroundColor.interactive.disabled'),
    },
    '&[data-disabled][data-state="checked"] .radio-group-item-indicator': {
      borderStyle: 'none',
      backgroundColor: theme('backgroundColor.interactive.disabled'),
    },
  },
  '.radio-group-item-icon': {
    height: '0.375rem',
    minHeight: '0.375rem',
    width: '0.375rem',
    minWidth: '0.375rem',
    borderRadius: '100%',
    backgroundColor: theme('colors.white'),
  },
  '.radio-group-item-indicator': {
    position: 'relative',
    display: 'flex',
    flex: '1 1 0%',
    height: '1rem',
    minHeight: '1rem',
    width: '1rem',
    minWidth: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    backgroundColor: theme('backgroundColor.default'),
    border: `1px solid ${theme('borderColor.default')}`,
    ...transitionColorsStyles(theme),
  },
  '.radio-group': {
    '&:invalid .radio-group-item-indicator, &[aria-invalid="true"] .radio-group-item-indicator':
      {
        borderColor: theme('borderColor.negative-bold'),
      },
    '&:invalid .radio-group-item[data-state="checked"] .radio-group-item-indicator, &[aria-invalid="true"] .radio-group-item[data-state="checked"] .radio-group-item-indicator':
      {
        backgroundColor: theme('backgroundColor.negative-intense'),
      },
  },
})
