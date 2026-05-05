module.exports = ({ theme, animateIn, animateOut }) => ({
  '.ds-tooltip': {
    zIndex: '1080',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '0.25rem',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    backgroundColor: theme('colors.gray.800'),
    padding: '0.375rem 0.5rem',
    boxShadow: theme('boxShadow.hard-sm'),
  },
  '.ds-tooltip-animation': {
    ...animateIn(theme),
    '--tw-enter-opacity': '0',
    '--tw-enter-scale': '.95',
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
  '[data-force-mount="true"].ds-tooltip-animation': {
    visibility: 'visible',
    opacity: '1',
    '&[data-state="closed"]': {
      opacity: '0',
      visibility: 'hidden',
    },
  },
})
