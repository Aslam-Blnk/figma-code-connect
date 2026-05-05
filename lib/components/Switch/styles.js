module.exports = ({
  theme,
  transitionColorsStyles,
  transitionTransformStyles,
}) => ({
  '.switch-root': {
    margin: '0.125rem',
    display: 'inline-flex',
    height: '1.25rem',
    minHeight: '1.25rem',
    width: '2.25rem',
    minWidth: '2.25rem',
    cursor: 'pointer',
    alignItems: 'center',
    borderRadius: '99999px',
    padding: '0.125rem',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...transitionColorsStyles(theme),
    '&:focus-visible': {
      outlineOffset: '2px',
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
    '&[data-state="unchecked"]': {
      backgroundColor: theme('backgroundColor.accent.gray-intense'),
    },
    '&[data-state="checked"]': {
      backgroundColor: theme('backgroundColor.brand-intense'),
    },
    '&[data-disabled]': {
      cursor: 'not-allowed',
    },
    '&[data-disabled][data-state="unchecked"]': {
      backgroundColor: theme('backgroundColor.interactive.disabled'),
    },
    '&[data-disabled][data-state="checked"]': {
      backgroundColor: theme('backgroundColor.interactive.brand-disabled'),
    },
    '&[data-state="checked"] .switch-thumb': {
      transform: 'translate(1rem, 0)',
    },
    '&[data-state="unchecked"] .switch-thumb': {
      transform: 'translate(0, 0)',
    },
    '&[data-disabled] .switch-thumb': {
      backgroundColor: theme('backgroundColor.faded'),
    },
  },
  '.switch-thumb': {
    pointerEvents: 'none',
    display: 'block',
    height: '1rem',
    minHeight: '1rem',
    width: '1rem',
    minWidth: '1rem',
    borderRadius: '100%',
    backgroundColor: theme('backgroundColor.default'),
    boxShadow: theme('boxShadow.soft-xs'),
    ...transitionTransformStyles(theme),
  },
})
