module.exports = ({
  theme,
  textContentStyles,
  textContentLightStyles,
  animateIn,
  animateOut,
  buttonStyles,
}) => ({
  '.toast-container': {
    position: 'fixed',
    zIndex: '1090',
    bottom: '2rem',
    right: '2rem',
    width: '22.25rem',
    minWidth: '22.25rem',
  },
  '.toast-base': {
    outline: '2px solid transparent',
    outlineOffset: '2px',
    display: 'flex',
    width: '22.25rem',
    minWidth: '22.25rem',
    gap: '0.5rem',
    backgroundColor: theme('backgroundColor.default'),
    backgroundImage:
      'linear-gradient(90deg,rgba(244,244,245,0.80) 0%,rgba(255,255,255,0.80) 16%)',
    borderRadius: '1rem',
    alignItems: 'flex-start',
    padding: '1rem',
    boxShadow: theme('boxShadow.hard-md'),
    overflow: 'hidden',
    '&[data-remove="false"]': {
      ...animateIn(theme),
      '--tw-enter-opacity': '0',
      '--tw-enter-translate-y': '48%',
      transitionDuration: '400ms',
      animationDuration: '400ms',
    },
    '&[data-remove="true"]': {
      ...animateOut(theme),
      '--tw-exit-opacity': '0',
      '--tw-exit-translate-y': '48%',
      transitionDuration: '400ms',
      animationDuration: '400ms',
    },
    '& [data-title]': {
      ...textContentStyles(theme),
      color: theme('textColor.default'),
    },
    '& [data-description]': {
      ...textContentLightStyles(theme),
      color: theme('textColor.subtler'),
    },
    '& [data-content]': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '0.25rem',
    },
    '& [data-icon]': {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      margin: '0rem',
      marginTop: '0.125rem',
    },
    '& [data-icon] svg, & [data-icon] .mui-icon': {
      width: '1rem',
      minWidth: '1rem',
      height: '1rem',
      minHeight: '1rem',
      fontSize: theme('fontSize.base'),
      color: theme('colors.icon.subtle'),
    },
    '&[data-type="success"] [data-icon] svg, &[data-type="success"] [data-icon] .mui-icon':
      {
        color: theme('colors.icon.positive'),
      },
    '&[data-type="info"] [data-icon] svg, &[data-type="info"] [data-icon] .mui-icon':
      {
        color: theme('colors.icon.subtle'),
      },
    '&[data-type="warning"] [data-icon] svg, &[data-type="warning"] [data-icon] .mui-icon':
      {
        color: theme('colors.icon.notice'),
      },
    '&[data-type="error"] [data-icon] svg, &[data-type="error"] [data-icon] .mui-icon':
      {
        color: theme('colors.icon.negative'),
      },
    '& [data-action]': {
      ...buttonStyles['.button-base'],
      ...buttonStyles['.button-neutral'],
    },
    '& [data-action]:first-of-type': {
      marginLeft: '0.5rem',
    },
  },
})
