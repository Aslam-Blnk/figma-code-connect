module.exports = ({ theme, transitionColorsStyles, textContentStyles }) => ({
  '.link-base': {
    position: 'relative',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.5rem',
    ...transitionColorsStyles(theme),
    ...textContentStyles(theme),
    textDecoration: 'underline',
    '& svg, & .mui-icon': {
      height: '1.25rem',
      minHeight: '1.25rem',
      width: '1.25rem',
      minWidth: '1.25rem',
      fontSize: theme('fontSize.xl'),
      overflow: 'hidden',
    },
    '&.loading': {
      pointerEvents: 'none',
      color: 'transparent',
    },
    '&.disabled': {
      pointerEvents: 'none',
      cursor: 'not-allowed',
      color: theme('textColor.interactive.disabled'),
    },
    '&:not(.disabled):focus-visible': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
    '&:not(.disabled):hover': {
      textDecoration: 'none',
    },
    '& .spinner-container': {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 2,
      margin: 'auto',
      display: 'none',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.75rem',
      backgroundColor: 'inherit',
    },
    '&.loading .spinner-container': {
      display: 'flex',
    },
  },
  /* Link neutral */
  '.link-neutral': {
    '&:not(.loading):not(.disabled)': {
      textDecorationColor: theme('textColor.subtler'),
    },
    color: theme('textColor.subtle'),
    '&:hover:not(.disabled)': {
      color: theme('textColor.subtler'),
    },
  },
  /* Link brand */
  '.link-brand': {
    color: theme('textColor.brand.DEFAULT'),
    '&:hover:not(.disabled)': {
      color: theme('textColor.interactive.brand-hover'),
    },
  },
  /* Link destructive */
  '.link-destructive': {
    color: theme('textColor.negative'),
    '&:hover:not(.disabled)': {
      color: theme('textColor.interactive.negative-hover'),
    },
  },
})
