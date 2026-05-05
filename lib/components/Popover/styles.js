module.exports = ({ theme, animateIn, animateOut }) => ({
  '.popover-content': {
    zIndex: 1070,
    minWidth: '16rem',
    borderRadius: '1rem',
    padding: '0px',
    boxShadow: theme('boxShadow.hard-sm'),
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&[data-state="open"]': {
      ...animateIn(theme),
      '--tw-enter-opacity': '0',
      ' --tw-enter-scale': '.95',
    },
    '&[data-state="closed"]': {
      ...animateOut(theme),
      '--tw-exit-opacity': '0',
      '--tw-exit-scale': '.95',
    },
    '&[data-side="bottom"]': {
      '--tw-enter-translate-y': '-0.5rem',
    },
    '&[data-side="left"]': {
      '--tw-enter-translate-x': '0.5rem',
    },
    '&[data-side="right"]': {
      '--tw-enter-translate-x': '-0.5rem',
    },
    '&[data-side="top"]': {
      '--tw-enter-translate-y': '0.5rem',
    },
  },
})
