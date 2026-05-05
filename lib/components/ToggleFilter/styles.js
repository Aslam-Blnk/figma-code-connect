module.exports = ({ theme, transitionColorsStyles, textContentStyles }) => ({
  '.toggle-filter-root': {
    display: 'flex',
    height: '2.25rem',
    minHeight: '2.25rem',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.75rem',
    backgroundColor: theme('backgroundColor.default'),
    border: `1px solid ${theme('borderColor.default')}`,
    padding: '0 0.625rem',
    color: theme('textColor.subtler'),
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...transitionColorsStyles(theme),
    ...textContentStyles(theme),
    '& svg, & .mui-icon': {
      color: theme('colors.icon.subtle'),
      fontSize: theme('fontSize.base'),
      height: '1rem',
      minHeight: '1rem',
      width: '1rem',
      minWidth: '1rem',
    },
    '&.is-filled': {
      color: theme('textColor.interactive.activated'),
      backgroundColor: theme('backgroundColor.interactive.activated'),
      borderColor: 'transparent',
    },
    '&.is-filled svg, &.is-filled .mui-icon': {
      color: theme('colors.icon.activated'),
    },
    '&:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:active': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:focus-visible': {
      outlineOffset: '0px',
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
  },
})
