const circularBlur = ({ theme, transitionAllStyles }) => ({
  content: '""',
  pointerEvents: 'none',
  position: 'absolute',
  left: '50%',
  top: '-119px',
  zIndex: '-1',
  height: '9.5rem',
  minHeight: '9.5rem',
  width: '9.5rem',
  minWidth: '9.5rem',
  transform: 'translate(-50%, 0)',
  borderRadius: '100%',
  opacity: '0.8',
  filter: 'blur(36px)',
  ...transitionAllStyles(theme),
})

module.exports = ({
  theme,
  transitionAllStyles,
  transitionColorsStyles,
  textContentStyles,
}) => ({
  '.button-base': {
    position: 'relative',
    display: 'inline-flex',
    minHeight: '2.25rem',
    flex: 'none',
    alignItems: 'center',
    gap: '0.5rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textWrap: 'nowrap',
    borderRadius: '0.75rem',
    padding: '0.25rem 1rem',
    boxShadow: theme('boxShadow.soft-xs'),
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...transitionColorsStyles(theme),
    ...textContentStyles(theme),
    '&:focus-visible': {
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
      outlineOffset: '0px',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    '&:hover::before, &:active::before': {
      opacity: '0',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '& svg, & .mui-icon': {
      fontSize: '1.25rem',
    },
    '&.icon-only': {
      padding: '0.5rem',
    },
    '&.loading': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      color: 'transparent',
      '&::before': {
        opacity: '0',
      },
      '& svg, & .mui-icon': {
        opacity: '0',
      },
    },
    '& .spinner-container': {
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '2',
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
  /* Button brand */
  '.button-brand': {
    zIndex: '1',
    border: `1px solid ${theme('borderColor.brand-bold')}`,
    backgroundColor: theme('backgroundColor.brand-intense'),
    color: theme('textColor.onIntense'),
    backgroundBlendMode: 'lighten',
    boxShadow: theme('boxShadow.reflection'),
    '&::before': {
      ...circularBlur({ theme, transitionAllStyles }),
      backgroundColor: theme('colors.blurEffect.bg-brand'),
    },
    '&:disabled': {
      border: 'none',
      backgroundColor: theme('backgroundColor.interactive.brand-disabled'),
      color: theme('textColor.interactive.onIntense-disabled'),
      boxShadow: 'none',
    },
    '&:disabled:before': {
      opacity: '0',
    },
    '& svg, & .mui-icon': {
      color: theme('textColor.icon.onIntense'),
    },
    '&:disabled svg, &:disabled .mui-icon': {
      color: theme('textColor.icon.onIntense-disabled'),
    },
  },
  /* Button neutral */
  '.button-neutral': {
    border: `1px solid ${theme('borderColor.bold')}`,
    backgroundColor: theme('backgroundColor.default'),
    color: theme('textColor.subtle'),
    '&:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:active': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:disabled': {
      borderColor: theme('borderColor.interactive.disabled'),
      backgroundColor: theme('backgroundColor.default'),
      color: theme('textColor.interactive.disabled'),
    },
    '& svg, & .mui-icon': {
      color: theme('textColor.icon.subtle'),
    },
    '&:disabled svg, &:disabled .mui-icon': {
      color: theme('textColor.icon.disabled'),
    },
  },
  /* Button ghost */
  '.button-ghost': {
    backgroundColor: 'transparent',
    color: theme('textColor.subtle'),
    boxShadow: 'none',
    '&:hover:not(:disabled), &:active:not(:disabled)': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
    },
    '&:disabled': {
      color: theme('textColor.interactive.disabled'),
    },
    '& svg, & .mui-icon': {
      color: theme('textColor.icon.subtle'),
    },
    '&:disabled svg, &:disabled .mui-icon': {
      color: theme('textColor.icon.disabled'),
    },
  },
  /* Button destructive */
  '.button-destructive': {
    zIndex: '1',
    border: `1px solid ${theme('borderColor.negative-bold')}`,
    backgroundColor: theme('backgroundColor.negative-intense'),
    color: theme('textColor.onIntense'),
    backgroundBlendMode: 'lighten',
    boxShadow: theme('boxShadow.reflection'),
    '&::before': {
      ...circularBlur({ theme, transitionAllStyles }),
      backgroundColor: theme('colors.blurEffect.bg-error'),
    },
    '&:disabled': {
      border: 'none',
      backgroundColor: theme('backgroundColor.interactive.negative-disabled'),
      color: theme('textColor.interactive.onIntense-disabled'),
      boxShadow: 'none',
    },
    '&:disabled:before': {
      opacity: '0',
    },
    '& svg, & .mui-icon': {
      color: theme('textColor.icon.onIntense'),
    },
    '&:disabled svg, &:disabled .mui-icon': {
      color: theme('textColor.icon.onIntense-disabled'),
    },
  },
})
