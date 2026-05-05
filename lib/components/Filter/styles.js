module.exports = ({ theme, transitionColorsStyles, textContentStyles }) => ({
  '.filter-root': {
    display: 'flex',
    height: '2.25rem',
    minHeight: '2.25rem',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.75rem',
    border: `1px dashed ${theme('borderColor.default')}`,
    backgroundColor: theme('backgroundColor.default'),
    padding: '0 0.625rem',
    color: theme('textColor.subtler'),
    outline: '2px solid transparent',
    outlineOffset: '2px',
    maxWidth: '100%',
    ...transitionColorsStyles(theme),
    ...textContentStyles(theme),
    '& svg, & .mui-icon': {
      color: theme('colors.icon.subtle'),
      fontSize: theme('fontSize.base'),
      height: '1rem',
      width: '1rem',
      minHeight: '1rem',
      minWidth: '1rem',
    },
    '&.is-filled': {
      borderStyle: 'solid',
      paddingRight: '0.25rem',
    },
    '&:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:focus': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:focus-visible': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
      outlineOffset: '0px',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
      color: theme('textColor.interactive.disabled'),
      backgroundColor: theme('backgroundColor.default'),
      borderColor: theme('borderColor.interactive.disabled'),
    },
    '&:disabled svg, &:disabled .mui-icon': {
      color: theme('textColor.icon.disabled'),
    },
  },
})
