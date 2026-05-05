module.exports = ({ theme, textContentCaptionStrongStyles }) => ({
  '.label': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    color: theme('textColor.subtle'),
    ...textContentCaptionStrongStyles(theme),
  },
})
