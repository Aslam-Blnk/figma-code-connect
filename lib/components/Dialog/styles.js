module.exports = ({
  theme,
  animateIn,
  animateOut,
  h2Styles,
  textContentParagraphStyles,
  transitionAllStyles,
}) => ({
  '.dialog-overlay': {
    position: 'fixed',
    inset: '0px',
    zIndex: 1050,
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
  '.dialog-content': {
    position: 'fixed',
    left: '50%',
    top: '50%',
    zIndex: 1055,
    display: 'flex',
    maxHeight: 'calc(100vh - 6rem)',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    borderRadius: '1rem 1rem 0 0',
    backgroundColor: theme('backgroundColor.default'),
    boxShadow: theme('boxShadow.hard-sm'),
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxHeight: '80vh',
      borderRadius: '1rem',
    },
    '&[data-force-mount="false"][data-state="open"]': {
      ...animateIn(theme),
      '--tw-enter-opacity': '0',
      '--tw-enter-scale': '.95',
      '--tw-enter-translate-x': '-50%',
      '--tw-enter-translate-y': '-48%',
    },
    '&[data-force-mount="false"][data-state="closed"]': {
      ...animateOut(theme),
      '--tw-exit-opacity': '0',
      '--tw-exit-scale': '.95',
      '--tw-exit-translate-x': '-50%',
      '--tw-exit-translate-y': '-48%',
    },
    '&[data-force-mount="true"][data-state="open"]': {
      ...transitionAllStyles(theme),
      visibility: 'visible',
      opacity: '1',
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '&[data-force-mount="true"][data-state="closed"]': {
      ...transitionAllStyles(theme),
      pointerEvents: 'none',
      visibility: 'hidden',
      opacity: '0',
      transform: 'translate(-50%, -48%) scale(.95)',
    },
  },
  '.dialog-small': {
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxWidth: theme('maxWidth.md'),
    },
  },
  '.dialog-medium': {
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxWidth: theme('maxWidth.3xl'),
    },
  },
  '.dialog-large': {
    [`@media (min-width: ${theme('screens.sm')})`]: {
      maxWidth: theme('maxWidth.5xl'),
    },
  },
  '.dialog-close': {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
  },
  '.dialog-header': {
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
  '.dialog-footer': {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '1rem',
    alignSelf: 'stretch',
    padding: '1rem',
    paddingBottom: '1.25rem',
    [`@media (min-width: ${theme('screens.sm')})`]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.25rem',
      paddingTop: '1rem',
    },
  },
  '.dialog-title': {
    ...h2Styles(theme),
    color: theme('textColor.default'),
  },
  '.dialog-description': {
    ...textContentParagraphStyles(theme),
    color: theme('textColor.subtler'),
  },
})
