module.exports = (theme) => ({
  '.card-root': {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1rem',
  },
  '.card-default': {
    backgroundColor: theme('backgroundColor.default'),
  },
  '.card-decorative': {
    backgroundImage: 'linear-gradient(90deg,#FFF 0%,#FAFAFA 100%)',
  },
  '.card-flat': {
    border: `1px solid ${theme('borderColor.default')}`,
  },
  '.card-raised': {
    boxShadow: theme('boxShadow.hard-sm'),
  },
  '.card-floating': {
    border: `1px solid ${theme('borderColor.default')}`,
    boxShadow: theme('boxShadow.soft-xs'),
  },
})
