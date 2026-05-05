module.exports = ({ theme, transitionAllStyles, textContentStyles }) => ({
  '.resource-tag': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: theme('backgroundColor.default'),
    padding: '0.125rem 0.5rem 0.125rem 0.125rem',
    color: theme('textColor.subtle'),
    mixBlendMode: 'multiply',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    ...transitionAllStyles(theme),
    ...textContentStyles(theme),
  },
  '.resource-tag-interactive': {
    '&:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
      color: theme('textColor.interactive.hover'),
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outlineOffset: '0px',
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
  },
  '.resource-tag-link': {
    textDecoration: 'underline',
    textDecorationColor: theme('textColor.subtler'),
    '&:hover': {
      backgroundColor: theme('backgroundColor.interactive.hover'),
      color: theme('textColor.interactive.hover'),
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outlineOffset: '0px',
      outline: `2px solid ${theme('outlineColor.focus-ring')}`,
    },
  },
})
