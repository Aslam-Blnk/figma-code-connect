module.exports = ({ theme, textContentStyles }) => ({
  '.tag-root': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
    borderRadius: '0.5rem',
    backgroundColor: theme('backgroundColor.accent.gray'),
    padding: '0.25rem 0.25rem 0.25rem 0.5rem',
    color: theme('textColor.subtle'),
    mixBlendMode: 'multiply',
    ...textContentStyles(theme),
    '&:disabled, &[aria-disabled="true"]': {
      cursor: 'not-allowed',
      backgroundColor: theme('backgroundColor.default'),
      color: theme('textColor.interactive.disabled'),
    },
    maxWidth: '100%',
    overflow: 'hidden',
  },
})
