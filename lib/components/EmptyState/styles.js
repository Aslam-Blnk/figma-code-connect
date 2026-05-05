module.exports = ({ theme, textContentStyles, textContentLightStyles }) => ({
  '.empty-state-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1.5rem 1rem',
    width: '100%',
    height: '100%',
  },
  '.empty-state-content-container': {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  '.empty-state-image': {
    height: '4rem',
    minHeight: '4rem',
    width: '6rem',
    minWidth: '6rem',
  },
  '.empty-state-actions': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '0.5rem',
  },
  '.empty-state-content': {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '& p:first-of-type': {
      textAlign: 'center',
      color: theme('textColor.subtle'),
      ...textContentStyles(theme),
    },
    '& p:last-of-type': {
      textAlign: 'center',
      color: theme('textColor.subtler'),
      ...textContentLightStyles(theme),
    },
  },
})
