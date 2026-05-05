module.exports = (theme) => ({
  '.spinner': {
    display: 'flex',
    height: '1.25rem',
    minHeight: '1.25rem',
    width: '1.25rem',
    minWidth: '1.25rem',
    '@keyframes spin': theme('keyframes.spin'),
    animation: theme('animation.spin'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    padding: '0.125rem',
    backgroundBlendMode: 'luminosity',
    '&::after': {
      content: '""',
      height: '1rem',
      minHeight: '1rem',
      width: '1rem',
      minWidth: '1rem',
      borderRadius: '100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      backgroundBlendMode: 'luminosity',
    },
  },
  '.spinner-intense': {
    '&::after': {
      borderColor: theme('colors.spinner.base-onIntense'),
      borderTopColor: theme('colors.spinner.front-onIntense'),
    },
  },
  '.spinner-light': {
    '&::after': {
      borderColor: theme('colors.spinner.base-onLight'),
      borderTopColor: theme('colors.spinner.front-onLight'),
    },
  },
})
