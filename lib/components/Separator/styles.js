module.exports = (theme) => ({
  '.separator': {
    display: 'flex',
    backgroundColor: theme('backgroundColor.separator'),
    mixBlendMode: 'multiply',
  },
  '.separator-vertical': {
    width: '1px',
    minWidth: '1px',
  },
  '.separator-horizontal': {
    height: '1px',
    minHeight: '1px',
  },
})
