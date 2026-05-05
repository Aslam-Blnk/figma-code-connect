module.exports = ({
  theme,
  animateIn,
  animateOut,
  h2Styles,
  textContentParagraphStyles,
  transitionAllStyles,
}) => ({
  '.sheet-overlay': {
    position: 'fixed',
    inset: '0px',
    zIndex: '1040',
    backgroundColor: theme('colors.black-a10'),
    '&[data-force-mount="false"][data-state="open"]': {
      ...animateIn(theme),
      '--tw-enter-opacity': '0',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      ...animateOut(theme),
      '--tw-exit-opacity': '0',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      ...transitionAllStyles(theme),
      visibility: 'visible',
      opacity: '1',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      ...transitionAllStyles(theme),
      visibility: 'hidden',
      opacity: '0',
    },
  },
  '.sheet-content': {
    position: 'fixed',
    zIndex: '1045',
    display: 'flex',
    height: '100svh',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    backgroundColor: theme('backgroundColor.default'),
    boxShadow: theme('boxShadow.hard-sm'),
    // transition
    transitionProperty: theme('transitionProperty.DEFAULT'),
    transitionTimingFunction: theme('transitionTimingFunction.in-out'),
    animationTimingFunction: theme('transitionTimingFunction.in-out'),
    transitionDuration: theme('transitionDuration.DEFAULT'),
    '&[data-force-mount="false"][data-state="open"]': {
      ...animateIn(theme),
      transitionDuration: '500ms',
      animationDuration: '500ms',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      ...animateOut(theme),
      transitionDuration: '300ms',
      animationDuration: '300ms',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      transitionProperty: theme('transitionProperty.all'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      transitionDuration: '500ms',
      animationDuration: '500ms',
      visibility: 'visible',
      opacity: '1',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      transitionProperty: theme('transitionProperty.all'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      transitionDuration: '300ms',
      animationDuration: '300ms',
      pointerEvents: 'none',
      visibility: 'hidden',
      opacity: '0',
    },
  },
  '.sheet-small': {
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxWidth: theme('maxWidth.md'),
    },
  },
  '.sheet-medium': {
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxWidth: theme('maxWidth.3xl'),
    },
  },
  '.sheet-large': {
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxWidth: theme('maxWidth.5xl'),
    },
  },
  '.sheet-close': {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
  },
  '.sheet-header': {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem 1.75rem 1rem 1rem',
    [`@media (min-width: ${theme('screens.sm')})`]: {
      paddingLeft: '1.25rem',
      paddingRight: '2rem',
    },
  },
  '.sheet-footer': {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '1rem',
    alignSelf: 'stretch',
    padding: '1rem',
    [`@media (min-width: ${theme('screens.sm')})`]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
    },
  },
  '.sheet-title': {
    ...h2Styles(theme),
    color: theme('textColor.default'),
  },
  '.sheet-description': {
    color: theme('textColor.subtler'),
    ...textContentParagraphStyles(theme),
  },
  '.sheet-top': {
    left: '0px',
    right: '0px',
    top: '0px',
    '&[data-force-mount="false"][data-state="open"]': {
      '--tw-enter-translate-y': '-100%',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      '--tw-exit-translate-y': '-100%',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      transform: 'translateY(0)',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      transform: 'translateY(-100%)',
    },
  },
  '.sheet-bottom': {
    left: '0px',
    right: '0px',
    bottom: '0px',
    '&[data-force-mount="false"][data-state="open"]': {
      '--tw-enter-translate-y': '100%',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      '--tw-exit-translate-y': '100%',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      transform: 'translateY(0)',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      transform: 'translateY(100%)',
    },
  },
  '.sheet-left': {
    top: '0px',
    bottom: '0px',
    left: '0px',
    '&[data-force-mount="false"][data-state="open"]': {
      '--tw-enter-translate-x': '-100%',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      '--tw-exit-translate-x': '-100%',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      transform: 'translateX(0)',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      transform: 'translateX(-100%)',
    },
  },
  '.sheet-right': {
    top: '0px',
    bottom: '0px',
    right: '0px',
    '&[data-force-mount="false"][data-state="open"]': {
      '--tw-enter-translate-x': '100%',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      '--tw-exit-translate-x': '100%',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      transform: 'translateX(0)',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      transform: 'translateX(100%)',
    },
  },
})
