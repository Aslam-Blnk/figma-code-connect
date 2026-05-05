module.exports = ({ theme, transitionTransformStyles }) => ({
  '.progress-bar-root': {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '99999px',
    height: '0.5rem',
    minHeight: '0.5rem',
    '&.progress-neutral': {
      backgroundColor: theme('backgroundColor.accent.gray-intense'),
    },
    '&.progress-highlight': {
      backgroundColor: theme('backgroundColor.interactive.brand-highlighted'),
    },
    '&.progress-temperature': {
      background:
        'linear-gradient(90deg, #16a34a 0%, #84cc16 20%, #eab308 40%, #f59e0b 60%, #ea580c 80%, #dc2626 100%)',
    },
    transform: 'translateZ(0)',
  },
  '.progress-bar-indicator': {
    height: '100%',
    width: '100%',
    backgroundColor: theme('backgroundColor.accent.gray-intense'),
    mixBlendMode: 'screen',
    ...transitionTransformStyles(theme),
  },
})
